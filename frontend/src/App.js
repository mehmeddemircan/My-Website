
import './App.css';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
   <Router>
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/features' element={<FeaturesPage />} />
      <Route path="/contact-me" element={<ContactPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path="/projects/:projectId/details" element={<ProjectDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Router>
  );
  
}

export default App;
