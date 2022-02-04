import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Pagination from "../../component/Pagination";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate();
  const pageLimit = 10;

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

  const getPaginatedData =(data)=>{
    const filteredData = data.filter((item, i)=>{
        const startIndex = pageLimit * currentPage - pageLimit;
        const endIndex = startIndex + pageLimit;
        return i < endIndex && i >= startIndex
    })
     return filteredData
}

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
          {getPaginatedData(data)?.map((item) => {
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
      <div style = {{padding:16, textAlign:"center"}}>
        <Pagination data= {data} currentPage= {currentPage} handlePageChange={(nextPage)=>{setCurrentPage(nextPage)}} pageLimit={pageLimit} />

      </div>
    </div>
  );
};

export default Dashboard;
