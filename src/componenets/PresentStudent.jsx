/* eslint-disable react/prop-types */
function PresentStudent(props) {
  const { students, toggleList } = props;
  return (
    <div>
      <h2>Present Students</h2>
      <ul className="change-ul">
        {students
          .filter((item) => item.ispresent === true)
          .map((student) => (
            <li key={student.id} className="second-list">
              <span>{student.name}</span>
              <button
                className="absent-btn "
                onClick={() => toggleList(student)}
              >
                Change
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PresentStudent;
