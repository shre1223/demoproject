import logo from './logo.svg';
import './style/App.css';
import './style/style.css';
import './style/card.css';
import Loginform from './Components/user_login';
import AccountForm from './Components/user_register';
import  GetAllUsers from './Components/get_all_users';
import Home from './Components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import EditForm from './Components/edit_form';
import Profile from './Components/profile';



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AccountForm />}/>
        <Route path="/login" element={<Loginform />}/>
        <Route path="/users" element={<GetAllUsers />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/profile/:email" element={<Profile />}/>
     

      </Routes>
    </Router>
  </div>
  );
}

export default App;
