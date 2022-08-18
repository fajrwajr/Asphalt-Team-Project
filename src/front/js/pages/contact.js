import React from "react";
import "../../styles/index.css";
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName(""), setEmail(""), setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Form</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Name</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};
export default Contact;
// import React, { useContext, useState } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/index.css";
// export const Contact = () => {
//   const { store, actions } = useContext(Context);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   return (
//     <>
//       <div className="container">
//         <div className="text-center mt-5">
//           <h1>Nashville Asphalt Contact Form</h1>
//         </div>
//         <div class="container">
//           <div class="row">
//             <div class="col-md-8 col-md-offset-2 m-auto">
//               <div class="contact-form">
//                 <h1>Get in Touch</h1>
//                 <form method="POST">
//                   <div class="row">
//                     <div class="col-sm-6">
//                       <div class="form-group">
//                         <label for="inputName">Name</label>
//                         <input
//                           type="text"
//                           class="form-control"
//                           id="inputName"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div class="col-sm-6">
//                       <div class="form-group">
//                         <label for="inputEmail">Email</label>
//                         <input
//                           type="email"
//                           class="form-control"
//                           id="inputEmail"
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="form-group">
//                     <label for="inputSubject">Subject</label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="inputSubject"
//                       required
//                     />
//                   </div>
//                   <div class="form-group">
//                     <label for="inputMessage">Message</label>
//                     <textarea
//                       class="form-control"
//                       id="inputMessage"
//                       rows="5"
//                       required
//                     ></textarea>
//                   </div>
//                   <div class="text-center">
//                     <button type="submit" class="btn btn-primary">
//                       <i class="fa fa-paper-plane"></i> Send
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
