import React, {useState} from 'react';
import {grades as gradesData, students, subjects} from '../data/data';
import {RouterPage} from '../router';
import {Link} from 'react-router-dom';

function Grades() {
  const [grades, setGrades] = useState(gradesData);
  const [newGrade, setNewGrade] = useState({
    studentId: 0,
    subjectId: 0,
    date: '',
    grade: ''
  });

  const addGrade = () => {
    setGrades([...grades, {...newGrade}]);
    setNewGrade({studentId: 0, subjectId: 0, date: '', grade: ''});
  };

  const updateGrade = (index, key, value) => {
    const updatedGrades = grades.map((grade, i) =>
      i === index ? {...grade, [key]: value} : grade
    );
    setGrades(updatedGrades);
  };

  return (
    <div className={'grades flex flex-col items-center gap-5'}>
      <Link
        to={RouterPage.WELCOME}
      >
        <button className={'bg-purple-500 mt-5'}> Main page</button>
      </Link>
      <h2>Grades</h2>
      <table className={'grades__table border-2'}>
        <thead>
        <tr>
          <th>Student</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Grade</th>
        </tr>
        </thead>
        <tbody>
        {grades.map((grade, index) => (
          <tr key={index}>
            <td>{students.find(s => s.id === grade.studentId)?.name}</td>
            <td>{subjects.find(s => s.id === grade.subjectId)?.name}</td>
            <td>
              <input
                type="date"
                value={grade.date}
                onChange={(e) => updateGrade(index, 'date', e.target.value)}
              />
            </td>
            <td>
              <input
                className={'max-w-8'}
                type="text"
                value={grade.grade}
                onChange={(e) => updateGrade(index, 'grade', e.target.value)}
              />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className={'add-grade pb-20'}>
        <h3 className={'mt-5'}>Add New Grade</h3>
        <div className={'flex gap-5 pt-10'}>
          <select value={newGrade.studentId} onChange={(e) => setNewGrade({...newGrade, studentId: e.target.value as number})}>
            <option value="">Select Student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </select>
          <select value={newGrade.subjectId} onChange={(e) => setNewGrade({...newGrade, subjectId: e.target.value as number})}>
            <option value="">Select Subject</option>
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>
          <input
            type="date"
            value={newGrade.date}
            onChange={(e) => setNewGrade({...newGrade, date: e.target.value})}
          />
          <input
            type="text"
            value={newGrade.grade}
            onChange={(e) => setNewGrade({...newGrade, grade: e.target.value})}
            placeholder="Grade"
          />
          <button onClick={addGrade}>Add Grade</button>
        </div>
      </div>
    </div>
  );
}

export default Grades;
