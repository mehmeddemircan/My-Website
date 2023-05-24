
import './App.css';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import FeaturesPage from './pages/FeaturesPage';

import ProfilePage from './pages/ProfilePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import GiveJobFormPage from './pages/GiveJobFormPage';
import JoinToTeamFormPage from './pages/JoinToTeamFormPage';
import AuthPage from './pages/AuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './redux/actions/AuthActions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
 
 // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
   <Router>
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/features' element={<FeaturesPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path="/projects/:projectId/details" element={<ProjectDetailsPage />} />
      <Route path='/bloglar' element={<BlogsPage />} />
      <Route path='/blog-details' element={<BlogDetailsPage />} />
      <Route path='/join-to-team' element={<JoinToTeamFormPage />} />
      <Route path='/give-job' element={<GiveJobFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Router>
  );
  
}

export default App;
