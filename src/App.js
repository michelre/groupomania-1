import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wall from './pages/Wall';
import Login from './pages/Login';
import Signin from './pages/Signin';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Error from './pages/Error';
import User from './pages/User';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wall" element={<Wall />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="user" element={<User />} />
        <Route path="wall/posts" element={<CreatePost />} />
        <Route path="wall/posts/:id" element={<UpdatePost />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
