import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import HomePage from './components/HomePage';
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
