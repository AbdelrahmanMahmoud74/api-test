import { Routes,Route } from "react-router-dom"
import Home from './Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
function App() {
  

  return (
   
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/create" element={<Create />}></Route>
    <Route path="/update/:id" element={<Update />}></Route>
    <Route path="/read/:id" element={<Read />}></Route>
   </Routes>
   
      
  )
}

export default App
