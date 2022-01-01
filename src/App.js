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
import Packages from './Pages/Packages/Packages';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
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
            <Route path="/packages" element={<Packages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
