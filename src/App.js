import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Diaries from './diary/Diaries';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { useSelector } from 'react-redux';
import AddDiary from './diary/AddDiary';
import DiaryUpdate from './diary/DiaryUpdate';
import Profile from './profile/Profile';
import MyDiaries from './mydiaries/MyDiaries';
import UserHome from './userhome/UserHome';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Router>
    <header>
      <Navbar/>
    </header>  

    <div className="content">
          <Routes>
           { !isLoggedIn &&  <>
            <Route path="/" element={ <Home/> } />
            <Route path="/diaries" element={ <Diaries/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/signup" element={ <Register/> } />
            </> }
            {isLoggedIn && <>
            <Route path="/user" element={ <UserHome/> } />
            <Route path="/user/AddDiary" element={ <AddDiary/> } />
            <Route path="/user/Diaries" element={ <Diaries/> } />
            <Route path="/user/MyDiaries" element={ <MyDiaries/> } />
            <Route path="/user/UpdateDiary/:id" element={ <DiaryUpdate/> } />
            <Route path="/user/profile" element={ <Profile/> } />
            </>}
           
          </Routes>
          
        </div>

    </Router>
    
  );
}

export default App;
