import { Routes, Route, useNavigate } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";

export default function Students({ students }) {
  const { name } = useParams();
  const capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);

  const student = students.filter((s) => s.name === name)[0];

  const navigate = useNavigate();

  console.log(student);

  const index = students.findIndex((s) => s.name === name);
  const previousIndex = index - 1;
  const nextIndex = index + 1;
  const previousStudent = students[previousIndex];
  const nextStudent = students[nextIndex];

  let image;
  try {
    image = require(`./Images/${student.name}.jpg`);
  } catch (error) {
    image = null;
  }

  return (
    <div className="Students">
      <h1 className="text">{name}</h1>
      {image ? <img src={image} width="300px" /> : <></>}

      {student.formerJob && (
        <>
          <h2 className="text">Former Job:</h2>
          <p className="text">{student.formerJob}</p>
        </>
      )}
      {student.goal && (
        <>
          <h2 className="text">My goal after the bootcamp:</h2>
          <p className="text">{student.goal}</p>
        </>
      )}
      {student.learning && (
        <>
          <h2 className="text">The favourite thing I've learned:</h2>
          <p className="text">{student.learning}</p>
        </>
      )}
      {student.struggle && (
        <>
          <h2 className="text">What I struggled with the most:</h2>
          <p className="text">{student.struggle}</p>
        </>
      )}
      {student.moment && (
        <>
          <h2 className="text">My favourite moment in the bootcamp:</h2>
          <p className="text">{student.moment}</p>
        </>
      )}
      {student.whyReaganIsCool && (
        <>
          <h2 className="text">What I like most about Reagan:</h2>
          <p className="text">{student.whyReaganIsCool}</p>
        </>
      )}
      {student.message && (
        <>
          <h2 className="text">What I always wanted to tell Reagan:</h2>
          <p className="text">{student.message}</p>
        </>
      )}
      <div className="oneStudentButtons">
        {previousStudent && (
          <button
            className="studentsButton"
            onClick={() => navigate(`/${previousStudent.name}`)}
          >
            Previous
          </button>
        )}
        <button className="studentsButton" onClick={() => navigate(`/`)}>
          Back
        </button>
        {nextStudent && (
          <button
            className="studentsButton"
            onClick={() => navigate(`/${nextStudent.name}`)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
