import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Students from "./components/Students";
import Home from "./components/Home";

export default function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("light");

  const [css, setCss] = useState(require("./Light.css"));

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    setCss(mode === "light" ? require("./Dark.css") : require("./Light.css"));
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:8080/students");
        const data = await res.json();
        setStudents(data?.students);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudents();
  }, [mode]);

  console.log("STUDENTS: ", students);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleMode={toggleMode} students={students} css={css} />
          }
        />
        <Route path="/:name" element={<Students students={students} />} />
      </Routes>
    </div>
  );
}
