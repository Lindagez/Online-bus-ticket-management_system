import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";

const HomeContainer = lazy(() =>
  import("./pages/home_container/HomeContainer")
);
const Bus = lazy(() => import("./pages/bus/Bus"));
const Detail = lazy(() => import("./pages/bus/Detail"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/footer/Contact"));
const Privacy = lazy(() => import("./pages/footer/Privacy"));
const Tac = lazy(() => import("./pages/footer/Tac"));
const Faq = lazy(() => import("./pages/footer/Question"));
const Services = lazy(() => import("./services/Services"));
const UserLogin = lazy(() => import("./pages/auth/UserLogin"));
const Payment = lazy(() => import("./pages/payment/Payment"));
const Register = lazy(() => import("./pages/auth/Register"));
const AdminDashboard = lazy(() => import("./pages/dashboard/AdminDashboard"));
const PassengerDashboard = lazy(() =>
  import("./pages/dashboard/PassengerDashboard")
);
const BusCompanyDashboard = lazy(() =>
  import("./pages/dashboard/BusCompanyDashboard")
);
const Success = lazy(() => import("./pages/payment/Success"));
const Logout = lazy(() => import("./pages/auth/Logout"));

function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const email = localStorage.getItem("user");
    if (storedToken) {
      setToken(storedToken);
      setUser(email);
      setIsLoggedIn(true);
    }
    setIsAppLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ children, allowedRoles }) => {
    const location = useLocation();
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token || !allowedRoles.includes(userRole)) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
  };

  if (isAppLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />

        {/* Scroll to Top on Route Change */}
        <ScrollToTop />

        {/* Main Content with Suspense */}
        <Suspense fallback={<Preloader />}>
          <Routes>
            {/* Logout route */}
            {isLoggedIn && (
              <Route
                path="/logout"
                element={<Logout onLogout={handleLogout} />}
              />
            )}
            <Route path="/" element={<HomeContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tac" element={<Tac />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/bus" element={<Bus />} />
            <Route
              path="/success"
              element={
                <ProtectedRoute allowedRoles={["passenger"]}>
                  <Success />
                </ProtectedRoute>
              }
            />
            <Route path="/bus/bus-details/:id" element={<Detail />} />
            <Route
              path="/bus/bus-details/payment"
              element={
                <ProtectedRoute allowedRoles={["passenger"]}>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/passenger"
              element={
                <ProtectedRoute allowedRoles={["passenger"]}>
                  <PassengerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bus-company"
              element={
                <ProtectedRoute allowedRoles={["busCompany"]}>
                  <BusCompanyDashboard />
                </ProtectedRoute>
              }
            />
            {/* Redirect unmatched routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
