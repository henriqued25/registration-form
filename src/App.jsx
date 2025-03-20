import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { RegistrationForm } from "./pages/registrationForm/RegistrationForm";
import { CompletedForm } from "./pages/completedForm/CompletedForm";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration-form" element={<RegistrationForm />}/>
                <Route path="/completed-form" element={<CompletedForm />} />
            </Routes>
            <ToastContainer />
        </Router>
        
    );
};

export default App;
