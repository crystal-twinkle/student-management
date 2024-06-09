import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from './App';
import WelcomePage from './pages/WelcomePage';
import StudentList from './pages/StudentList/StudentList';
import SubjectList from './pages/SubjectList';
import NotFoundPage from './pages/Not-found-page';
import Grades from './pages/Grades';

export enum RouterPage {
  WELCOME = '/',
  STUDENT_LIST = '/student-list',
  SUBJECT_LIST= '/subject-list',
  GRADES = '/grades',
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: RouterPage.WELCOME,
        element: <WelcomePage />,
      },
      {
        path: RouterPage.STUDENT_LIST,
        element: <StudentList />,
      },
      {
        path: RouterPage.SUBJECT_LIST,
        element: <SubjectList />
      },
      {
        path: RouterPage.GRADES,
        element: <Grades />
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
