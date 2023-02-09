import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Reagan from "./Images/Reagan.jpg";
import { FaGithub } from "react-icons/fa";
import "../Dark.css";
import Students from "./Students";

export default function Home({ students, onCssChange }) {
  const navigate = useNavigate();
  // const [mode, setMode] = useState();

  const toggleMode = () => {
    const body = document.querySelector("body");
    const home = document.querySelector(".Home");
    const text = document.querySelectorAll(".text");
    const git = document.querySelectorAll(".gitLinks");
    const studButton = document.querySelectorAll(".studentsButton");
    const stud = document.querySelector(".Students");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      home.classList.remove("dark");
      text.forEach((t) => t.classList.remove("dark"));
      git.forEach((g) => g.classList.remove("dark"));
      studButton.forEach((button) => button.classList.remove("dark"));
      stud.classList.remove("dark");
    } else {
      body.classList.add("dark");
      home.classList.add("dark");
      text.forEach((t) => t.classList.add("dark"));
      git.forEach((g) => g.classList.add("dark"));
      studButton.forEach((button) => button.classList.add("dark"));
      stud.classList.add("dark");
    }
    // setMode(!mode);
  };

  return (
    <div className="Home">
      <h2 className="text">A present for Reagan</h2>
      <h1 className="text">WD#033</h1>

      <img src={Reagan} />
      <p className="text">
        Yellow, Reagan! We, the students of your very first own web development
        batch, have decided to create this little full-stack application as a
        gift for you, to make sure that you never ever ever forget us. And also
        to show off the amazing skills you have taught us in the past 15 weeks.
        Thank you for everything you have done for us, for your neverending (ok,
        almost neverending) patience and your amazing teaching skills as well as
        for being an awesome person and a great friend!
      </p>
      <p className="text">
        First of all, click here to switch on your beloved dark mode:
      </p>
      <button className="darkButton" onClick={toggleMode}>
        Dark mode
      </button>
      <p>
        Sometimes it works, sometimes it doesn't. It's a feature, not a bug!
      </p>
      <p className="text">Alrighty, let's see what everyone has to say:</p>
      <div id="studentButtons">
        {students
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((student) => {
            return (
              <button
                className="studentsButton"
                onClick={() => navigate(`/${student.name}`)}
              >
                {student.name}
              </button>
            );
          })}
      </div>
      <div className="github">
        <div id="frontend">
          <FaGithub />
          <a
            className="gitLinks"
            href="https://github.com/oh-ve/a-present-frontend"
            target="blank"
          >
            Frontend
          </a>
        </div>
        <div id="backend">
          <FaGithub />
          <a
            className="gitLinks"
            href="https://github.com/oh-ve/a-present-backend"
            target="blank"
          >
            Backend
          </a>
        </div>
      </div>
    </div>
  );
}
