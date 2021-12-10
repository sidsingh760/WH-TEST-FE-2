import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings/Settings';
import CompanySetting from './pages/CompanySetting/CompanySetting';
import ProjectSetting from './pages/ProjectSetting/ProjectSetting';
import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/company_setting" element={<CompanySetting />} />
          <Route path="/project_setting" element={<ProjectSetting />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
