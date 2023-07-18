import Layout from "./components/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Schedule from "./pages/Schedule";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
