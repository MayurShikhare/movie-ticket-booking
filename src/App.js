import './App.css';
import Home from './Components/Home/Home';
import Detatils from './Components/Details/Details'
import Nomatch from './Components/NoMatch/NoMatch';
import Booking from './Components/Booking/Booking';
import Ticket from './Components/Ticket/Ticket';
import Navbar from './Components/NabBar/NavBar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Latest from './Components/Latest/Latest';
import Upcoming from './Components/Upcoming/Upcoming';
import Nearby from './Components/Nearby/Nearby';
import Auth from './Components/Auth/Auth';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detatils />}/>
        <Route path="/latestmovies" element={<Latest />}/>
        <Route path="/upcomingmovies" element={<Upcoming />}/>
        <Route path="/nearbyevents" element={<Nearby />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/ticket" element={<Ticket />}/>
        <Route path="/auth" element={<Auth />}/>

        <Route path="*" element={<Nomatch/>} />
      </Routes>

      <Footer />
    

    </BrowserRouter>
  );
}

export default App;
