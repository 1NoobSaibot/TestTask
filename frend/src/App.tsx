import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignUp from './pages/user/SignUp';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
