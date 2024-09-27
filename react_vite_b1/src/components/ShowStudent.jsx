function ShowStudent({ student }) {
  return (
    <>
      <h1>Call Component</h1>
      <h3>Student Information</h3>
      <p>Full Name: {student.fullname}</p>
      <p>Age: {student.age}</p>
      <p>Address: {student.address}</p>
    </>
  );
}

export default ShowStudent;
