import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'
import Pieces from './pages/Pieces'
import Cart from './pages/Cart'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Pieces />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
