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

  return (
    <div className="Students">
      <h1>{name}</h1>
      <img src={require(`./Images/${student.name}.jpg`)} width="300px" />

      {student.formerJob && (
        <>
          <h2>Former Job:</h2>
          <p>{student.formerJob}</p>
        </>
      )}
      {student.goal && (
        <>
          <h2>My goal after the bootcamp:</h2>
          <p>{student.goal}</p>
        </>
      )}
      {student.learning && (
        <>
          <h2>The favourite thing I've learned:</h2>
          <p>{student.learning}</p>
        </>
      )}
      {student.struggle && (
        <>
          <h2>What I struggled with the most:</h2>
          <p>{student.struggle}</p>
        </>
      )}
      {student.moment && (
        <>
          <h2>My favourite moment in the bootcamp:</h2>
          <p>{student.moment}</p>
        </>
      )}
      {student.whyReaganIsCool && (
        <>
          <h2>What I like most about Reagan:</h2>
          <p>{student.whyReaganIsCool}</p>
        </>
      )}
      {student.message && (
        <>
          <h2>What I always wanted to tell Reagan:</h2>
          <p>{student.message}</p>
        </>
      )}
      <div className="oneStudentButtons">
        {previousStudent && (
          <button onClick={() => navigate(`/${previousStudent.name}`)}>
            Previous
          </button>
        )}
        <button onClick={() => navigate(`/`)}>Back</button>
        {nextStudent && (
          <button onClick={() => navigate(`/${nextStudent.name}`)}>Next</button>
        )}
      </div>
    </div>
  );
}
