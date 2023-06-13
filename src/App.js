import logo from './logo.svg';
import './App.css';
import Navbar from './MultiUse/Navbar/Navbar';
import Home from './MultiUse/Home/Home';
import FooterPart from './MultiUse/FooterPart/FooterPart';
import { Routes, Route, Link } from "react-router-dom";
import About from './MultiUse/About/About';
import AllPostJob from './AllPostJob/AllPostJob';
import Jobs from './Jobs/Jobs';
import TeacherRegistration from './TeacherRegistration/TeacherRegistration';
import Teachers from './Teachers/Teachers';
import OurMission from './OurMission/OurMission';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Blogs from './Blogs/Blogs';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import PrivateRoute from './Login/PrivateRouter';
import AllReviews from './AllReviews/AllReviews';
import StudentLogin from './Login/StudentLogin';
import TeacherLogin from './Login/TeacherLogin';
import StudentSignUp from './SignUp/StudentSignUp';
import TeacherSignUp from './SignUp/TeacherSignUp';
import CreateReview from './CreateReview/CreateReview';
import SReviews from './SReviews/SReviews';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<OurMission></OurMission>} />
        <Route path="/services" element={
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        } />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/reviews" element={<SReviews></SReviews>} />
        <Route path="/create-review" element={<CreateReview></CreateReview>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/post-job" element={<AllPostJob></AllPostJob>} />
        <Route path="/jobs" element={<Jobs></Jobs>} />
        <Route path="/teachers" element={<Teachers></Teachers>} />
        <Route path="/teacher-registration" element={<TeacherRegistration></TeacherRegistration>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/student-login" element={<StudentLogin></StudentLogin>} />
        <Route path="/teacher-login" element={<TeacherLogin></TeacherLogin>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/student-signup" element={<StudentSignUp></StudentSignUp>} />
        <Route path="/teacher-signup" element={<TeacherSignUp></TeacherSignUp>} />
      </Routes>
      <FooterPart></FooterPart>
    </div>
  );
}

export default App;
