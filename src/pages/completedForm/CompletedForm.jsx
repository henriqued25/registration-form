import { Link } from "react-router-dom";
import "./completedForm.css";
import { motion } from "framer-motion";

export const CompletedForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="completed-form-page"
        >
            <section className="completed-form-container">
                <h1>Inscrição Realizada com Sucesso!</h1>
                <p>
                    Parabéns! Sua inscrição no Programa Trilhas foi realizada
                    com sucesso.
                </p>
                <p>
                    Em breve, você receberá um e-mail com mais informações sobre
                    o programa.
                </p>
                <Link to="/">Voltar para a Página Inicial</Link>
            </section>
        </motion.div>
    );
};
