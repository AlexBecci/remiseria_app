import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/V2/Home.V2';
import { Drivers } from './pages/V2/Drivers.V2';
import { Trips } from './pages/V1/Trips.V1';
import { Clients } from './pages/V2/Clients.V2';
import { View } from './components/logic/LogicView';
import { Payments } from './pages/V1/Payments.V1';
import { Login } from './pages/V2/Login.V2';
import { Register } from './pages/V2/Register.V2';
import { Vehicles } from './pages/V2/Vehicles.V2';


function App() {
  return (
    <div className='font-gotham-medium container'>
      <Router>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<View />}>
            <Route path='/home' element={<Home />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/trips' element={<Trips />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/payments' element={<Payments />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;