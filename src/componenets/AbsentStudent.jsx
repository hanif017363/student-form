/* eslint-disable react/prop-types */
export default function AbsentStudent(props) {
  const { students, toggleList } = props;
  return (
    <div>
      <h2>Absent Students</h2>

      <ul className="change-ul">
        {students
          .filter((item) => item.ispresent === false)
          .map((student) => (
            <li key={student.id} className="second-list">
              <span>{student.name}</span>
              <button
                className="present-btn"
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
