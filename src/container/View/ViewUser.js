import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./viewUser.css";

const ViewUser = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
      className="viewContainer"
    >
      <div class="card">
        <div class="container">
          <h5>Title:</h5>
          <p>{userData?.title}</p>
        </div>
        <div class="container">
          <h5>Body:</h5> <p>{userData?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
