import React from "react";
import { useState } from "react";
import { url } from "./constants";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw "Failed to add Book";
      }
      const data = await response.json();
      console.log("Book added successfully ", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Book Form</h1>
      <form className="container" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="publishedYear">Published Year</label>
        <br />
        <input
          type="text"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="genre">Genre</label>
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="language">Language</label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="summary">Summary</label>
        <br />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="coverImageUrl">Cover Image Url</label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddBookForm;
