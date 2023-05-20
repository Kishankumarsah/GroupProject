import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import CommentForm from "./commentSection";
import PostComments from "./showComments";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
// import axios from "axios";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  clipPath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [commentss, setCommentss] = useState([]);
  const [data, setData] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const filePath = `http://localhost:3001/assets/${picturePath}`; // Replace with your actual file path

  const extension = filePath
    .substring(filePath.lastIndexOf(".") + 1)
    .toLowerCase();

  function handleCommentSubmit(event) {
    event.preventDefault();
    console.log("Comment seciton");
    <CommentForm postId={postId} />;
  }

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {extension !== "mp4" && picturePath && (
        <img
          width="750px"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}

      {extension === "mp4" && (
        <video width="750" height="500" controls alt="No Video Found">
          <source
            src={`http://localhost:3001/assets/${picturePath}`}
            type="video/mp4"
          />
        </video>
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {isComments && <CommentForm postId={postId} />}
      {isComments && <PostComments postId={postId} />}
      {/* {isComments && (
        <Box mt="0.5rem">
          <h3>Comment Section</h3>
          <form
            style={{ color: "red", width: "30px" }}
            onSubmit={handleCommentSubmit}
          >
            <input
              type="text"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              placeholder="Add a comment"
              style={{
                color: "black",
                width: "30vw",
                minHeight: "40px",
                height: "auto",
                borderRadius: "20px",
                backgroundColor: "#F5F5F5",
                cursor: "pointer",
                autoFocus: "true",
              }}
            />
            <button
              style={{
                color: "white",
                backgroundColor: "purple",
                borderRadius: "27px",
                marginTop: "5px",
                width: "100px",
                height: "30px",
              }}
              type="submit"
            >
              Comment
            </button>
          </form>
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )} */}
    </WidgetWrapper>
  );
};

export default PostWidget;

// //for comments
// /*
//  const makeComment = (text,postsId)=>{
//           fetch(`http://localhost:3001/posts/${postId}/comment`, {
//             method: "put",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               postsId,
//               text,
//             }),
//           })
//             .then((res) => res.json())
//             .then((result) => {
//               //  console.log(result);
//               const newData = data.map((item) => {
//                 if (item._id === result._id) {
//                   return result;
//                 } else {
//                   return item;
//                 }
//               });
//               setData(newData);
//             })
//             .catch((err) => {
//               console.log("There is some error" + err);
//             });
//     }
// */
// const addComment = async (postId, commentText) => {
//   try {
//     // Send a POST request to the server with the post ID and comment text
//     const response = await fetch(`http:/localhost:3001/posts/${postId}/comments`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: commentText }),
//     });

//     // Parse the JSON response
//     const data = await response.json();

//     // Return the updated post object
//     return data;
//   } catch (err) {
//     // Log the error and return null
//     console.error(err);
//     return null;
//   }
// };
