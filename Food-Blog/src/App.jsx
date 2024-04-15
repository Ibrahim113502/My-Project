import './App.css'
import Food1 from './pages/Blogs/Food1/index'
import Food2 from './pages/Blogs/Food2';
import  HomePage from './pages/home/componats/index'
import  Row1 from './pages/Items/row1/index'
import ReduxExample from './pages/Items/row1/componant/ReduxExample/index.jsx'
import ExampleApi from './pages/Items/row1/componant/APIExample/index.tsx'
import AdminHomePage from './pages/AdminPage/index.tsx'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ContactUs from './pages/ContactPage/index.tsx';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={< HomePage/>} />
        <Route path="/foodItems" element={< Row1/>}/>
        <Route path='/AdminLogin' element={<AdminHomePage/>} />
        {/* <Route path='ApiExample' element={<ExampleApi/>}/> */}
        <Route path='/reduxExp' element={<ReduxExample/>}/>
        <Route path="/food1" element={<Food1/> } />
        <Route path='/food2' element={<Food2/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>

     

     
    
  )
}

export default App
