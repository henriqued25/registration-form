import "./userTrail.css";
import { Trail } from "../trail/Trail";

export const UserTrail = (dataUserTrail) => {
    const { agreed, setAgreed, selectedOption, setSelectedOption } =
        dataUserTrail;

    const options = [
        {
            id: 1,
            value: "frontend",
            text: "Programação Front-end",
            image: "/icon-front.png",
        },
        {
            id: 2,
            value: "backend",
            text: "Programação Back-end",
            image: "/icon-back.png",
        },
        {
            id: 3,
            value: "games",
            text: "Programação de Jogos",
            image: "/icon-games.png",
        },
        {
            id: 4,
            value: "design",
            text: "Design e Experiência",
            image: "/icon-ux.png",
        },
        {
            id: 5,
            value: "data",
            text: "Ciência de Dados",
            image: "/icon-data.png",
        },
    ];

    return (
        <div className="user-trail-form">
            <h2>Trilhas de apredizagem</h2>

            <section>
                <label htmlFor="trail">Selecione apenas uma trilha</label>
                <Trail
                    options={options}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />

                <label id="accept-terms" htmlFor="terms">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    Declaro que li e concordo com os{" "}
                    <strong>Termos e Condições</strong> e com a{" "}
                    <strong>Política de Privacidade</strong>.
                </label>
            </section>
        </div>
    );
};
