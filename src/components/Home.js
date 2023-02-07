import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

export default function Home({ students }) {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>WD#033</h1>
      <h2>A present for Reagan</h2>
      <p>
        Yellow, Reagan! We, the students of your very first own web development
        batch, have decided to create this little gift for you to make sure that
        you never ever ever forget us. And also to show off the amazing skills
        you have taught us in the past 15 weeks. Thank you for everything you
        have done for us, for your neverending (ok, almost neverending) patience
        and your amazing teaching skills as well as for being an awesome person
        and a great friend!
      </p>
      <p>But first, click here for dark mode:</p>
      <button>Dark mode</button>
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
    </div>
  );
}
