import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


// Import the Post model
//const Post = require('../models/post');

// Define an asynchronous function to add a comment to a post
export const addComment = async (req, res) => {
    try {
      const { postId } = req.params;
      const { text } = req.body;

      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ error: "Post not founds" });
      }

      post.comments.push({ text });
      await post.save();

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add comment" });
    }
};
// // Define an asynchronous function to add a comment to a post
// export const addComment = async (req, res) => {
//   try {
//     // Get the post ID from the request parameters
//     const { id } = req.params;
//     const { userId } = req.body;
//     const post = await Post.findById(id);
//     // Get the comment text from the request body
//     //const { text } = req.body;
//     const text= await Post.findById(id);
//     const isText=post.comments.get(userId);
//     // Find the post by ID and update its comments array
//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { $push: { comments: text } },
//       { new: true }
//     );

//     // Send the updated post as a response
//     res.status(200).json(updatedPost);
//   } catch (err) {
//     // Send an error response if something goes wrong
//     res.status(500).json({ message: err.message });
//   }
// };


//Search Posts based on FirstName

export const searchPostByName= async (req,res)=>{
  const queryName = new RegExp(req.params?.title, "i");

  if(queryName!==''){
    try{
        const search_result=await Post.find({firstName:queryName});
        res.status(200).json(search_result);
    }
    catch(error){
        console.log(error);
        res.status(404).json({message: 'No Matched Blog Found'});
    }
  }
  else{
     res.status(404).json({ message: "No postName exist" });
  }
}







/**
 * router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
 */

