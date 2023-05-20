import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography } from "@mui/material";

import './contact.css';


const Contact = () => {
  const form = useRef();
   const input1 = document.getElementById("myInput1");
   const input2 = document.getElementById("myInput2");
   const input3= document.getElementById("myInput3");
  const sendEmail = (e) => {
    console.log("button clicked");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9snjdft",
        "template_yodkyof",
        form.current,
        "v9Ge1vEpUtxfuCpQk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      input1.value = "";
      input2.value = "";
      input3.value = "";
  };

  return (
    <Box>
      <Typography
        sx={{
          textDecoration: "underline",
          color: "#c83cde",
          fontSize: "60px",
          fontWeight: "bold",
          marginLeft: "150px",
        }}
      >
        Contact Us
      </Typography>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <label className="labelContact" sx={{ color: "red" }}>
          Name
        </label>
        <input
          id="myInput1"
          className="contactInput"
          type="text"
          name="user_name"
        />
        <label className="labelContact">Email</label>
        <input
          id="myInput2"
          className="contactInput"
          type="email"
          name="user_email"
        />
        <label className="labelContact">Message</label>
        <textarea id="myInput3" name="message" className="textareaContact" />
        <input className="contactInputs" type="submit" value="Send" />
      </form>
    </Box>
  );
};

export default Contact;




//   <form
//     ref={form}
//     sx={{
//       display: "flex",
//       alignItems: "flex-start",
//       flexDirection: "column",
//       width: "100%",
//       fontSize: "16px",
//     }}
//     onSubmit={sendEmail}
//   >
//     <label sx={{ color: "red" }}>Name</label>
//     <input
//       sx={{
//         width: "100%",
//         height: "35px",
//         padding: "7px",
//         outline: "none",
//         borderRadius: "5px",
//         color: "red",
//         border: "1px solid red",
//       }}
//       type="text"
//       name="user_name"
//     />
//     <label>Email</label>
//     <input
//       sx={{
//         width: "100%",
//         height: "35px",
//         padding: "7px",
//         outline: "none",
//         borderRadius: "5px",
//         border: "1px solid red",
//       }}
//       type="email"
//       name="user_email"
//     />
//     <label>Message</label>
//     <textarea name="message" />
//     <input
//       sx={{
//         width: "100%",
//         height: "35px",
//         padding: "7px",
//         outline: "none",
//         borderRadius: "5px",
//         border: "1px solid red",
//       }}
//       type="submit"
//       value="Send"
//     />
//   </form>;

// import { Box, Typography } from "@mui/material";
// import React from "react";

// const Contact =()=>{

//     return (
//       <Box>
//         <Typography
//           sx={{
//             textDecoration: "underline",
//             color: "#c83cde",
//             fontSize: "60px",
//             fontWeight: "bold",
//             marginLeft: "150px",
//           }}
//         >
//           Contact Us
//         </Typography>
//       </Box>
//     );
// }

// export default Contact;






// // Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;