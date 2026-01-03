
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentTable from './crud/StudentTable';
import Create from './crud/Create';
import Edit from './crud/Edit';
import View from './crud/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentTable/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/edit/:studentid" element={<Edit/>} />
      <Route path="/view/:studentid" element={<View/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
