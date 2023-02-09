import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Reagan from "./Images/Reagan.jpg";
import { FaGithub } from "react-icons/fa";

export default function Home({ students, onCssChange }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(!mode);
  };

  const [css, setCss] = useState("");

  const handleCssChange = (newCss) => {
    setCss(newCss);
  };

  const newCss =
    mode === "light" ? require("../Light.css") : require("../Dark.css");

  return (
    <div className="Home">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <h2>A present for Reagan</h2>
      <h1>WD#033</h1>

      <img src={Reagan} />
      <p>
        Yellow, Reagan! We, the students of your very first own web development
        batch, have decided to create this little full-stack application as a
        gift for you, to make sure that you never ever ever forget us. And also
        to show off the amazing skills you have taught us in the past 15 weeks.
        Thank you for everything you have done for us, for your neverending (ok,
        almost neverending) patience and your amazing teaching skills as well as
        for being an awesome person and a great friend!
      </p>
      <p>First of all, click here to switch on your beloved dark mode:</p>
      <button className="darkButton" onClick={toggleMode}>
        Dark mode
      </button>
      <p>No, you can't switch it back off and that's a feature, not a bug.</p>
      <p>Alrighty, let's see what everyone has to say:</p>
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
          <a href="https://github.com/oh-ve/a-present-frontend" target="blank">
            Frontend
          </a>
        </div>
        <div id="backend">
          <FaGithub />
          <a href="https://github.com/oh-ve/a-present-backend" target="blank">
            Backend
          </a>
        </div>
      </div>
    </div>
  );
}
