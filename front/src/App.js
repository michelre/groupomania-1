import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wall from './pages/Wall';
import Login from './pages/Login';
import Signin from './pages/Signin';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import UpdateUser from './pages/UpdateUser';
import Error from './pages/Error';
import Account from './pages/Account';
import Logout from './pages/Logout';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wall" element={<Wall />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="wall/account/" element={<Account />} />
        <Route path="wall/posts" element={<CreatePost />} />
        <Route path="wall/posts/:id" element={<UpdatePost />} />
        <Route path="wall/account/update/:id" element={<UpdateUser />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
