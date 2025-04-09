import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
    const [loginCpf, setLoginCpf] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginError("");

        const storedUserData = localStorage.getItem("locaUserInformation");
        console.log(storedUserData);
        console.log(loginCpf, loginPassword);

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            if (
                userData &&
                userData.cpf === loginCpf.toString() &&
                userData.userPassword === loginPassword.toString()
            ) {
                navigate("/completed-form");
            } else {
                setLoginError("CPF ou senha incorretos.");
            }
        } else {
            setLoginError("Nenhum usuário cadastrado encontrado.");
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="loginCpf">CPF:</label>
                <input
                    type="text"
                    id="loginCpf"
                    name="loginCpf"
                    value={loginCpf}
                    onChange={(e) => setLoginCpf(e.target.value)}
                    required
                />

                <label htmlFor="loginPassword">Senha:</label>
                <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                />
                {loginError && <p className="error-message">{loginError}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};
