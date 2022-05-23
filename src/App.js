import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Wall from './pages/Wall';
import Login from './pages/Login';
import Signin from './pages/Signin';
import CreatePost from './pages/CreatePost';
import Error from './pages/Error';

export default function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="wall" element={ <Wall /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="signin" element={ <Signin /> } />
          <Route path="wall/createpost" element={ <CreatePost /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </div>
    )
  }