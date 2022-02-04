import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./form.css";
const UserForm = () => {
  const [userInput, setUserInput] = useState({ title: "", body: "" });
  const [isSubmitting, setSubmitting] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const { title, body } = res?.data;
        setUserInput({ ...userInput, title: title, body: body });
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        body: {
          title: userInput?.title,
          body: userInput?.body,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          window.alert("Successfully updated");
        }
        setSubmitting(false);
        console.log(res?.data, " response");
      })
      .catch((err) => console.log(err));
  };
  const styles = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <div style={styles} className="formContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={userInput?.title}
            onChange={handleChange}
          />

          <label htmlFor="body">body</label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Body"
            value={userInput?.body}
            onChange={handleChange}
          />
          <div style={styles}>
            <button className="button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
