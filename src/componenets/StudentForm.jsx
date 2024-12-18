/* eslint-disable react/prop-types */

function StudentForm(props) {
  const {
    editMode,
    setStudent,
    students,
    editStudent,
    setEditMode,
    inputText,
    setInputText,
  } = props;

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      return alert("khali >:");
    }
    editMode ? updateHandler() : createHandler();
    setInputText("");
  };
  const createHandler = () => {
    const createStudent = {
      id: Date.now() + "",
      name: inputText,
      ispresent: undefined,
    };
    setStudent([...students, createStudent]);
  };
  const updateHandler = () => {
    const updateStudent = students.map((item) => {
      if (item.id === editStudent.id) {
        return {
          ...item,
          name: inputText,
          ispresent: undefined,
        };
      }
      return item;
    });
    setStudent(updateStudent);
    setEditMode(false);
    setInputText("");
  };

  return (
    <div>
      <form action="" onSubmit={SubmitHandler}>
        <input
          type="text"
          value={inputText}
          placeholder="Add Student"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button>{editMode ? "Update Student" : "Add Student"}</button>
      </form>
    </div>
  );
}

export default StudentForm;
