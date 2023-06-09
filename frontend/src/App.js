import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import FeaturesPage from "./pages/FeaturesPage";

import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import GiveJobFormPage from "./pages/GiveJobFormPage";
import JoinToTeamFormPage from "./pages/JoinToTeamFormPage";
import AuthPage from "./pages/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthIsUserLoggedIn, isUserLoggedIn } from "./redux/actions/AuthActions";
import { useEffect } from "react";
import MoviesPage from "./pages/MoviesPage";
import BooksPage from "./pages/BooksPage";
import CVPage from "./pages/CVPage";
import ProfilePage from "./pages/ProfilePage";
import TemplatesPage from "./pages/TemplatesPage";
import PaymentPage from "./pages/PaymentPage";
import ProjectIdeaFormPage from "./pages/ProjectIdeaFormPage";
import PrivateRoute from "./routes/PrivateRoute";
import MyCommentsPage from "./pages/MyCommentsPage";
import MyFormsPage from "./pages/MyFormsPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      if (!auth.googleAuth) {
        dispatch(isUserLoggedIn());
      }
      if (auth.googleAuth) {
        dispatch(GoogleAuthIsUserLoggedIn());
      }
  
    }
 
 
  }, [dispatch,auth.authenticate,auth.googleAuth]);

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/my-cv" element={<CVPage />} />
        <Route
          path="/projects/:projectId/details"
          element={<ProjectDetailsPage />}
        />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/join-to-team" element={<JoinToTeamFormPage />} />
        <Route path="/my-profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/my-comments" element={<PrivateRoute><MyCommentsPage /></PrivateRoute>} />
        <Route path="/my-forms" element={<PrivateRoute><MyFormsPage /></PrivateRoute>} />
        <Route path="/give-job" element={<GiveJobFormPage />} />
        <Route path="/give-project-idea" element={<ProjectIdeaFormPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
