import React, { useEffect, useState } from "react";
import axios from "axios";

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    console.log("showing comment");
    try {
      const response = await axios.get(
        `http://localhost:3001/posts/${postId}/comments`
      );
      const fetchedComments = response.data;
      setComments(fetchedComments);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  return (
    <div>
      <p style={{fontSize:'20px'}}>Comment Section</p>
      {comments.map((comment) => (
        <div>
          <p style={{color:'black',fontSize:'15px'}}>{comment.text}</p>
          {/* <p>Posted by: {comment.postedBy}</p> key={comment._id} */}
        </div>
      ))}
    </div>
  );
};

export default PostComments;
