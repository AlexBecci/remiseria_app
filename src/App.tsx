import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Drivers } from './pages/Drivers';
import { Trips } from './pages/Trips';
import { Vehicles } from './pages/Vehicles';
import { Clients } from './pages/Clients';
import { View } from './components/logic/LogicView';
import { Footer } from './components/mobile/Footer';
import { Payments } from './pages/Payments';


function App() {
  return (
    <div className='font-gotham-medium flex flex-col min-h-screen'>
      <Router>
        <View />
        <div className='flex-1'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/trips' element={<Trips />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/payments' element={<Payments />} />
          </Routes>
        </div>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;