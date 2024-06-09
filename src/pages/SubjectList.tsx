import React, { useState } from 'react';
import { subjects as subjectsData } from '../data/data';
import {RouterPage} from '../router';
import {Link} from 'react-router-dom';

function SubjectList() {
  const [subjects, setSubjects] = useState(subjectsData);
  const [newSubject, setNewSubject] = useState('');

  const addSubject = () => {
    setSubjects([...subjects, { id: subjects.length + 1, name: newSubject }]);
    setNewSubject('');
  };

  const updateSubject = (id, name) => {
    const updatedSubjects = subjects.map(subject =>
      subject.id === id ? { ...subject, name } : subject
    );
    setSubjects(updatedSubjects);
  };

  return (
    <div>
        <Link
          to={RouterPage.WELCOME}
        >
          <button className={'bg-purple-500 mt-5'}> Main page </button>
        </Link>
      <h2 className={'m-3'}>Subject List</h2>
      <ul className={'flex flex-col gap-5'}>
        {subjects.map(subject => (
          <li key={subject.id}>
            <input
              className={'text-orange-500 border-2'}
              type="text"
              value={subject.name}
              onChange={(e) => updateSubject(subject.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <input
        className={'mt-5'}
        type="text"
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
        placeholder="New subject name"
      />
      <button className={'ml-4'} onClick={addSubject}>Add Subject</button>
    </div>
  );
}

export default SubjectList;
