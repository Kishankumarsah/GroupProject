// CommentForm.js

import React, { useState } from "react";
import axios from "axios";
import { setPost } from "state";
import { useDispatch, useSelector } from "react-redux";



const CommentForm = ({ postId }) => {
    console.log(postId);
  const [text, setText] = useState("");
   const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
  




  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("doing comment");
    try {
      await axios.post(`http://localhost:3001/posts/${postId}/comments`, {
        text,
      });
      
      // Reset the form after successful comment submission
      setText("");
    } catch (error) {
        console.log("There is an error");
      console.error(error);
      // Handle the error or display an error message to the user
    }
  };

  return (
 
      <form onSubmit={handleSubmit} >
        <textarea value={text} onChange={handleTextChange} style={{
             width: '70%',
        height: '80px',
        padding: '12px 20px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
        fontSize: '16px',
        resize: 'none',
        }}/>
        <button type="submit" style={{
            width:'35%',
            marginTop:'5px',
            height:'40px',
            borderRadius:'30px',
            color:'white',
            backgroundColor:'purple',
            
        }}>Comment</button>
      </form>
     
  );
};

export default CommentForm;
