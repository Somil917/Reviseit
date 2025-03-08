import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./components/layout/UserSignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<UserSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
