import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddBookForm from "./AddBookForm";
import BookLists from "./BookLists";

function App() {
  return (
    <>
      <AddBookForm />
      <BookLists />
    </>
  );
}

export default App;
