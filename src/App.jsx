import "./App.css";
import StudetSection from "./componenets/StudetSection";
import StudentForm from "./componenets/StudentForm";
import { useState } from "react";

const datas = [
  {
    id: 1,
    name: "MD Hanif",
    ispresent: undefined,
  },

  {
    id: 2,
    name: "D4C",
    ispresent: false,
  },

  {
    id: 3,
    name: "King Kaguzaka",
    ispresent: true,
  },
];
function App() {
  const [students, setStudent] = useState(datas);
  const [editMode, setEditMode] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div className="App">
        <StudentForm
          inputText={inputText}
          setInputText={setInputText}
          editMode={editMode}
          setEditMode={setEditMode}
          editStudent={editStudent}
          students={students}
          setStudent={setStudent}
        />
        <StudetSection
          inputTextut={inputText}
          setInputText={setInputText}
          editMode={editMode}
          setEditMode={setEditMode}
          editStudent={editStudent}
          setEditStudent={setEditStudent}
          students={students}
          setStudent={setStudent}
        />
      </div>
    </>
  );
}

export default App;
