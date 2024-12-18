/* eslint-disable react/prop-types */
function AllStudentList(props) {
  const { setInputText, setEditMode, setEditStudent, setStudent, students } =
    props;

  const editHandler = (student) => {
    setEditMode(true);
    setEditStudent(student);
    setInputText(student.name);
  };
  const DeleteHandler = (taskid) => {
    setStudent(students.filter((student) => student.id !== taskid));
  };
  const makePresentHandler = (student) => {
    if (student.ispresent !== undefined) {
      return alert(
        `this student is already in the ${
          student.ispresent ? "present" : "absent"
        } list`
      );
    }
    const updateStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          ispresent: true,
        };
      }
      return item;
    });
    setStudent(updateStudentList);
  };

  const makeAbsentHandler = (student) => {
    if (student.ispresent !== undefined) {
      return alert(
        `this student is already in the ${
          student.ispresent ? "present" : "absent"
        } list`
      );
    }
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          ispresent: false,
        };
      }
      return item;
    });
    setStudent(updatedStudentList);
  };
  return (
    <div>
      <h2>all student</h2>
      <ul className="change-ul">
        {students.map((student) => (
          <li className="init-list" key={student.id}>
            <span className="name">{student.name}</span>
            <div className="button">
              <button className="edit-btn" onClick={() => editHandler(student)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => DeleteHandler(student.id)}
              >
                Delete
              </button>
              <button
                onClick={() => makePresentHandler(student)}
                className="present-btn"
              >
                Present
              </button>
              <button
                onClick={() => makeAbsentHandler(student)}
                className="absent-btn"
              >
                Absent
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudentList;
