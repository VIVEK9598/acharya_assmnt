import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res?.data);
    });
  }, []);
  const handleView = (id) => {
    navigate(`/viewUser/${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/EditUser/${id}`);
  };
  const styles = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div className="dashboard-container">
      <table id="customers">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td style={styles}>
                  <button onClick={() => handleView(item.id)}>View</button>
                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
