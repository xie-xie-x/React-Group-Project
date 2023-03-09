import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Rockets from './layout/Rockets';
import MyProfile from './layout/MyProfile';
import Missions from './layout/Missions';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
