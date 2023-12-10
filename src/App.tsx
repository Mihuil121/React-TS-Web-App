import { Route, Routes } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage';
import AbautPage from './Pages/AbautPage';
import Navigition from './component/Navigition'


function App() {
  return (
    <>
    <Navigition/>
      <Routes>
        <Route path='/' element={<ProductsPage />}></Route>
        <Route path='/about' element={<AbautPage />}></Route>
      </Routes>
    </>
  )
}

export default App;
