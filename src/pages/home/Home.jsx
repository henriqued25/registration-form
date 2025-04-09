import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home-page">
            <h1>Boas Vindas ao nosso programa Trilhas de aprendizado.</h1>
            <img
                src="/ilustration.png"
                alt="Ilustration"
                className="home-ilustration"
            />
            <section>
                <img src="/logo-trilhas-inova.png" alt="logo-trilhas-inova" />
                <div className="loginAndSignUp">
                    <Link to="/login">Login</Link>
                    <Link to="/registration-form">Inscreva-se</Link>
                </div>
            </section>
        </div>
    );
};
