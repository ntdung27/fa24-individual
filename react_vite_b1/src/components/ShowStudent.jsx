function ShowStudent({ student }) {
  return (
    <>
      <h2>Call Component</h2>
      <p>Full Name: {student.fullname}</p>
      <p>Age: {student.age}</p>
      <p>Address: {student.address}</p>
    </>
  );
}

export default ShowStudent;
