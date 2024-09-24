import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/V2/Home.V2';
import { Drivers } from './pages/V1/Drivers.V1';
import { Trips } from './pages/V1/Trips.V1';
import { Vehicles } from './pages/V1/Vehicles.V1';
import { Clients } from './pages/V1/Clients.V1';
import { View } from './components/logic/LogicView';
import { Footer } from './components/mobile/Footer';
import { Payments } from './pages/V1/Payments.V1';


function App() {
  return (
    <div className='font-gotham-medium container'>
      <Router>
        <View />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/vehicles' element={<Vehicles />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/payments' element={<Payments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;