import {useState} from 'react';
import {students as studentsData} from '../../data/data';
import './StudentList.css'
import {RouterPage} from '../../router';
import {Link} from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState('');
  const [changeStudent, setChangeStudent] = useState({name: '', id: 0});
  const [changeableStudent, setChangeableStudent] = useState('')

  const addStudent = () => {
    studentsData[studentsData.length + 1] = {id: studentsData.length + 1, name: newStudent};
    setStudents(studentsData)
    setNewStudent('');
  };

  const updateStudent = () => {
    let {id} = changeStudent;
    studentsData.forEach(student => {
      if (student.id === id) {
        return student.name = changeableStudent;
      }
    });
    setStudents([...studentsData]);
    setChangeableStudent('')
  };

  const change = (name: string, id: number) => {
    setChangeStudent({name, id})
    setChangeableStudent(name)
  }

  return (
    <div className={'student-list'}>
      <Link
        to={RouterPage.WELCOME}
      >
       <button className={'bg-purple-500'}> Main page </button>
      </Link>

      <h2 className={'head2'}>Student List</h2>
      <ul className={'flex flex-col gap-5'}>
        {students.map(student => (
          <li key={student.id}>
            <div className={'student flex'}>
              <p style={{margin: 0}}>{student.name}</p>
              <button onClick={() => change(student.name, student.id)}>Change</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={'flex items-center gap-5'}>
        <p>Add or change student : </p>
        <input
          type="text"
          value={newStudent || changeableStudent}
          onChange={(e) => {
            if (!changeableStudent) {
              setNewStudent(e.target.value);
            } else if (changeableStudent) {
              setChangeableStudent(e.target.value);
            }
          }}
          placeholder="Student name"
        />
        <button className={`min-w-16 ${!(newStudent || changeableStudent) ? 'hidden' : ''}`} onClick={() => {
          if (newStudent) {
            addStudent();
          } else if (changeableStudent) {
            updateStudent();
          }
        }}>{newStudent && 'Add Student' || changeableStudent && 'Change student'}</button>
      </div>
    </div>
  );
}

export default StudentList;
