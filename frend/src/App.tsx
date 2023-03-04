import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import Items from './pages/Items';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>} />
        <Route path="sign-in" element={<SignIn/>} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="items" element={<Items/>} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
