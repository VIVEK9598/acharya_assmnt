import React, { useEffect, useState } from 'react';

const Pagination = (props) => {
    const [pages, setPages] = useState([])
    const { data, currentPage, handlePageChange, pageLimit } = props;

    useEffect(() => {
        if (data && data.length !== 0) {
            const pages = Math.ceil(data.length / pageLimit)
            setPages([...Array(pages).keys()])
        }
    }, [data, pageLimit])

    return (
        <div>
            {pages.map((item, index) => {
                return (<button key={item} style={{
                    padding: 8,
                    borderRadius: 5,
                    margin: 8, backgroundColor: item + 1 === currentPage ? "blue" : "white", color: item + 1 === currentPage ? "white" : "black" }} onClick={() => handlePageChange(item + 1)} href="#"> {item + 1} </button>)
                
            })}
        </div>
    )
}

export default Pagination;