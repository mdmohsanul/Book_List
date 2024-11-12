import React, { useState, useEffect } from "react";
import { url } from "./constants";

const BookLists = () => {
  const [bookList, setBookList] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  // const { data } = useFetch(url);
  useEffect(() => {
    fetchList();
  }, [bookList]);
  async function fetchList() {
    const res = await fetch(url);
    const data = await res.json();
    setBookList(data);
  }
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw "Failed to delete movie";
      }
      const data = await res.json();
      if (data) {
        setSuccessMsg("Book deleted successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h2>Book Lists</h2>
        {bookList.map((item) => (
          <li key={item._id}>
            {item.title}
            <button onClick={() => deleteHandler(item._id)}>Delete</button>
          </li>
        ))}
        <p>{successMsg}</p>
      </div>
    </>
  );
};

export default BookLists;
