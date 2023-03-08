import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Rockets from './layout/Rockets';
import MyProfile from './layout/MyProfile';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<h1>missions</h1>} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
