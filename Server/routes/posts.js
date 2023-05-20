import express from "express";
import {
  addComment,
  getFeedPosts,
  getUserPosts,
  likePost,
  searchPostByName,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

router.get("/search/:title", searchPostByName);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
// router.patch("/:id/comments", verifyToken, addComment);



















//adding coment sections
// router.put("/:id/comment", verifyToken, (req, res) => {
//   const comment = {
//     text: req.body.text,
//     postedBy: req.user._id,
//   };
//   Post.findByIdAndUpdate(
//     req.body.postId,
//     {
//       $push: { comments: comment },
//     },
//     {
//       new: true,
//     }
//   )
//     .populate("comments.postedBy", "_id name")
//     .populate("postedBy", "_id name")
//     .exec((err, result) => {
//       if (err) {
//         return res.status(422).json({ error: err });
//       } else {
//         res.json(result);
//       }
//     });
// });


export default router;
