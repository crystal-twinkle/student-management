import React from 'react';
import {RouterPage} from '../router';
import {Link} from 'react-router-dom';

function WelcomePage() {
  return (
    <div className={'welcome-page flex flex-col'}>
      <h2 className={'head2 p-7'}>Select the page you are interested in : </h2>
      <div className={'flex flex-col gap-5'}>
        <Link
          to={RouterPage.STUDENT_LIST}
          className="text-2xl"
        >
          Student list
        </Link>
        <Link
          to={RouterPage.SUBJECT_LIST}
          className="text-2xl"
        >
          Subject List
        </Link>
        <Link
          to={RouterPage.GRADES}
          className="text-2xl"
        >
          Grades
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
