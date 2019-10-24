import React from "react";
import TitleComponent from "./components/TitleComponent";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className='App'>
      <TitleComponent />
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
