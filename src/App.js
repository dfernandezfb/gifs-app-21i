import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';

function App (){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App