import { useState } from "react";
import { UserInformation } from "../../components/userInformation/UserInformation";
import { UserAddress } from "../../components/userAddress/UserAddress";
import { UserTrail } from "../../components/ userTrail/UserTrail";
import { Link } from "react-router-dom";
import "./registrationForm.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

export const RegistrationForm = () => {
    // user information data:
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [dateOfBirth, setDateOfBirt] = useState("");
    const [cpf, setCpf] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [identityDocument, setIdentityDocument] = useState(null);

    // user address data:
    const [zipCode, setZipCode] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [proofOfResidency, setProofOfResidency] = useState(null);

    // user trail data:
    const [agreed, setAgreed] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    // form stage
    const stages = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    const [errors, setErrors] = useState({
        userName: "",
        userPassword: "",
        dateOfBirth: "",
        cpf: "",
        gender: "",
        email: "",
        phone: "",
        identityDocument: "",
        zipCode: "",
        street: "",
        houseNumber: "",
        city: "",
        state: "",
        proofOfResidency: "",
    });

    // validações UserInformation:
    const validateName = () => {
        if (!userName) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                userName: "Nome completo é obrigatório.",
            }));
            return false;
        } else if (userName.length < 3) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                userName: "Nome deve ter pelo menos 3 caracteres.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                userName: "",
            }));
            return true;
        }
    };

    const validateUserPassword = () => {
        if (!userPassword) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                userPassword: "Crie uma senha para prosseguir.",
            }));
            return false;
        } else if (userPassword.length < 8) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                userPassword: "Sua senha deve ter pelo menos 8 caracteres.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                userPassword: "",
            }));
            return true;
        }
    };

    const validateDateOfBirth = () => {
        if (!dateOfBirth) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dateOfBirth: "Data de nascimento é obrigatória.",
            }));
            return false;
        } else if (new Date(dateOfBirth) > new Date()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dateOfBirth: "Data de nascimento não pode ser futura.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dateOfBirth: "",
            }));
            return true;
        }
    };

    const validateCpf = () => {
        if (!cpf) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                cpf: "CPF é obrigatório.",
            }));
            return false;
        } else if (!/^[0-9]+$/.test(cpf)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                cpf: "CPF deve conter apenas números.",
            }));
            return false;
        } else if (cpf.length !== 11) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                cpf: "CPF deve ter 11 dígitos.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, cpf: "" }));
            return true;
        }
    };

    const validateGender = () => {
        if (!gender) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                gender: "Gênero é obrigatório.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, gender: "" }));
            return true;
        }
    };

    const validateEmail = () => {
        if (!email) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email é obrigatório.",
            }));
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Insira um Email válido.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
            return true;
        }
    };

    const validatePhone = () => {
        if (!phone) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Telefone é obrigatório.",
            }));
            return false;
        } else if (!/^[0-9]+$/.test(phone)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Telefone deve conter apenas números.",
            }));
            return false;
        } else if (phone.length !== 11) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Telefone deve conter 11 dígitos, incluindo DDD.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
            return true;
        }
    };

    const validateIdentityDocument = () => {
        if (!identityDocument) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                identityDocument: "Documento de identidade é obrigatório.",
            }));
            return false;
        } else if (
            identityDocument instanceof File &&
            identityDocument.type !== "application/pdf"
        ) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                identityDocument: "Documento deve ser um PDF.",
            }));
            return false;
        } else if (!(identityDocument instanceof File)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                identityDocument: "Documento inválido.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                identityDocument: "",
            }));
            return true;
        }
    };

    // validações UserAddress:
    const validateZipCode = () => {
        if (!zipCode) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                zipCode: "CEP é obrigatório.",
            }));
            return false;
        } else if (!/^\d{5}-\d{3}$/.test(zipCode)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                zipCode: "CEP inválido. Use o formato XXXXX-XXX.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, zipCode: "" }));
            return true;
        }
    };

    const validateStreet = () => {
        if (!street) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                street: "Rua é obrigatória.",
            }));
            return false;
        } else if (street.length < 3) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                street: "Rua deve ter pelo menos 3 caracteres.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, street: "" }));
            return true;
        }
    };

    const validateHouseNumber = () => {
        if (!houseNumber) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                houseNumber: "Número é obrigatório.",
            }));
            return false;
        } else if (!/^[0-9]+$/.test(houseNumber)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                houseNumber: "Número deve conter apenas dígitos.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, houseNumber: "" }));
            return true;
        }
    };

    const validateCity = () => {
        if (!city) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                city: "Cidade é obrigatória.",
            }));
            return false;
        } else if (city.length < 3) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                city: "Cidade deve ter pelo menos 3 caracteres.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
            return true;
        }
    };

    const validateState = () => {
        if (!state) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                state: "Estado é obrigatório.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, state: "" }));
            return true;
        }
    };

    const validateProofOfResidency = () => {
        if (!proofOfResidency) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                proofOfResidency: "Comprovante de residência é obrigatório.",
            }));
            return false;
        } else if (
            proofOfResidency instanceof File &&
            proofOfResidency.type !== "application/pdf"
        ) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                proofOfResidency: "Documento deve ser um PDF.",
            }));
            return false;
        } else if (!(proofOfResidency instanceof File)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                proofOfResidency: "Documento inválido.",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                proofOfResidency: "",
            }));
            return true;
        }
    };

    const [currentStage, setCurrentStage] = useState(1);

    const nextStage = () => {
        switch (currentStage) {
            case 1: // UserInformation
                const nameValid = validateName();
                const passwordValid = validateUserPassword();
                const dateOfBirthValid = validateDateOfBirth();
                const cpfValid = validateCpf();
                const genderValid = validateGender();
                const emailValid = validateEmail();
                const phoneValid = validatePhone();
                const identityDocumentValid = validateIdentityDocument();

                if (
                    nameValid &&
                    passwordValid &&
                    dateOfBirthValid &&
                    cpfValid &&
                    genderValid &&
                    emailValid &&
                    phoneValid &&
                    identityDocumentValid
                ) {
                    setCurrentStage(currentStage + 1);
                } else {
                    toast.warn("Preencha todos campos corretamente!");
                }
                break;

            case 2: // UserAddress
                const zipCodeValid = validateZipCode();
                const streetValid = validateStreet();
                const houseNumberValid = validateHouseNumber();
                const cityValid = validateCity();
                const stateValid = validateState();

                const proofOfResidencyValid = validateProofOfResidency();

                if (
                    zipCodeValid &&
                    streetValid &&
                    houseNumberValid &&
                    cityValid &&
                    stateValid &&
                    proofOfResidencyValid
                ) {
                    setCurrentStage(currentStage + 1);
                } else {
                    toast.warn(
                        "Preencha todos os campos corretamente em UserAddress!"
                    );
                }
                break;
        }
    };

    const previousStage = () => {
        setCurrentStage(currentStage - 1);
    };

    const navigate = useNavigate();

    const handleEnd = () => {
        navigate("/completed-form");
    };

    const renderStage = () => {
        switch (currentStage) {
            case 1:
                return (
                    <UserInformation
                        userName={userName}
                        userPassword={userPassword}
                        dateOfBirth={dateOfBirth}
                        cpf={cpf}
                        gender={gender}
                        email={email}
                        phone={phone}
                        identityDocument={identityDocument}
                        setUserName={setUserName}
                        setUserPassword={setUserPassword}
                        setDateOfBirth={setDateOfBirt}
                        setCpf={setCpf}
                        setGender={setGender}
                        setEmail={setEmail}
                        setPhone={setphone}
                        setIdentityDocument={setIdentityDocument}
                        errors={errors}
                    />
                );
            case 2:
                return (
                    <UserAddress
                        zipCode={zipCode}
                        street={street}
                        houseNumber={houseNumber}
                        city={city}
                        state={state}
                        proofOfResidency={proofOfResidency}
                        setZipCode={setZipCode}
                        setStreet={setStreet}
                        setHouseNumber={setHouseNumber}
                        setCity={setCity}
                        setState={setState}
                        setProofOfResidency={setProofOfResidency}
                        errors={errors}
                    />
                );
            case 3:
                return (
                    <UserTrail
                        agreed={agreed}
                        selectedOption={selectedOption}
                        setAgreed={setAgreed}
                        setSelectedOption={setSelectedOption}
                    />
                );
            default:
                return null;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(
            "Dados do formulário: Informações de Usuário",
            {
                userName,
                dateOfBirth,
                cpf,
                gender,
                email,
                phone,
                identityDocument,
            },

            "Dados do formulário: Endenreço de Usuário",
            {
                zipCode,
                street,
                houseNumber,
                city,
                state,
                proofOfResidency,
            },

            "Dados do formulário: Trilha do Usuário",
            {
                selectedOption,
            }
        );
    };

    const renderFormActions = () => {
        return (
            <div className="form-actions">
                {currentStage > 1 && (
                    <button type="button" onClick={previousStage}>
                        voltar
                    </button>
                )}
                {currentStage < 3 ? (
                    <button type="button" onClick={nextStage}>
                        Próximo
                    </button>
                ) : (
                    <button
                        type="submit"
                        onClick={handleEnd}
                        disabled={!agreed || !selectedOption}
                        title={
                            !agreed || !selectedOption
                                ? "Escolha sua trilha e aceite os Termos e Condições para prosseguir."
                                : undefined
                        }
                    >
                        Confirmar
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="registration-form">
            <Link to="/">
                <img src="/arrow-left.png" alt="arrow-left" />
                Home
            </Link>
            <h1>Formulário de Inscrição</h1>
            <p>
                Preencha os dados abaixo para fazer sua inscrição no Programa
                Trilhas.
            </p>
            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStage}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={stages}
                        transition={{ duration: 0.3 }}
                    >
                        {renderStage()}
                    </motion.div>
                </AnimatePresence>
                {renderFormActions()}
            </form>
        </div>
    );
};
