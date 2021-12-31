import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Rider from './Pages/Register/Rider/Rider';
import Learner from './Pages/Register/Learner/Learner';
import AuthProvider from './context/AuthProvider/AuthProvider';
import RiderProfile from './Pages/RiderProfile/RiderProfile';
function App() {
  return (
    <div className="overflow-hidden">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rider" element={<Rider />} />
            <Route path="/learner" element={<Learner />} />
            <Route path="/riderProfile" element={<RiderProfile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
