/* eslint-disable react/prop-types */
import AbsentStudent from "./AbsentStudent";
import AllStudentList from "./AllStudentList";
import PresentStudent from "./PresentStudent";

function StudetSection(props) {
  const { students, setStudent, setInputText, setEditMode, setEditStudent } =
    props;
  const toggleList = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          ispresent: !item.ispresent,
        };
      }
      return item;
    });
    setStudent(updatedStudentList);
  };
  return (
    <div>
      <div className="all-list">
        <div className="list student-list">
          <AllStudentList
            students={students}
            setStudent={setStudent}
            setEditMode={setEditMode}
            setEditStudent={setEditStudent}
            setInputText={setInputText}
          />
        </div>
        <div className="list cl-list">
          <PresentStudent toggleList={toggleList} students={students} />
        </div>
        <div className="list cl-list">
          <AbsentStudent toggleList={toggleList} students={students} />
        </div>
      </div>
    </div>
  );
}

export default StudetSection;
