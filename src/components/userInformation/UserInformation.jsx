import "./userInformation.css";

export const UserInformation = (dataUserInformation) => {
    const {
        userName,
        dateOfBirth,
        cpf,
        gender,
        email,
        phone,
        identityDocument,
        setUserName,
        setDateOfBirth,
        setCpf,
        setGender,
        setEmail,
        setPhone,
        setIdentityDocument,
        errors,
    } = dataUserInformation;

    const removeFile = () => {
        setIdentityDocument({
            identityDocument: null,
        });
    };

    const showIdentityDocument = () => {
        return identityDocument && identityDocument.name ? (
            <div className="file-selected">
                <p>Arquivo selecionado: {identityDocument.name}</p>
                <button onClick={removeFile}></button>
            </div>
        ) : (
            <p>{""}</p>
        );
    };

    return (
        <div className="user-information-form">
            <h2>Informações do participante</h2>

            <section>
                <label htmlFor="userName">Nome completo</label>
                <input
                    type="text"
                    placeholder="Insira seu Nome"
                    name="userName"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                {errors.userName && (
                    <p className="error-message">{errors.userName}</p>
                )}

                <label htmlFor="dateOfBirth">Data de nascimento</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                {errors.dateOfBirth && (
                    <p className="error-message">{errors.dateOfBirth}</p>
                )}

                <label htmlFor="cpf">CPF (somente números)</label>
                <input
                    type="text"
                    placeholder="Insira seu CPF"
                    name="cpf"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                {errors.cpf && <p className="error-message">{errors.cpf}</p>}

                <label htmlFor="gender">Gênero</label>
                <select
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Selecione</option>
                    <option value="masculine">Masculino</option>
                    <option value="feminine">Feminino</option>
                    <option value="other">Outro</option>
                    <option value="declineToAnswer">
                        Prefiro não informar
                    </option>
                </select>
                {errors.gender && (
                    <p className="error-message">{errors.gender}</p>
                )}

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    placeholder="Insira seu E-mail"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                    <p className="error-message">{errors.email}</p>
                )}

                <label htmlFor="phone">Telefone</label>
                <input
                    type="tel"
                    placeholder="Insira seu Telefone"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                    <p className="error-message">{errors.phone}</p>
                )}

                <label htmlFor="identityDocument">
                    Documento de Identidade (somente PDF)
                    <div className="upload-identity-Document">
                        <img src="cloud-upload.png" />
                        <p>Clique aqui para selecionar o arquivo</p>
                    </div>
                </label>
                <input
                    className="hideInput"
                    type="file"
                    name="identityDocument"
                    id="identityDocument"
                    accept=".pdf"
                    onChange={(e) => setIdentityDocument(e.target.files[0])}
                />
                {errors.identityDocument && (
                    <p className="error-message">{errors.identityDocument}</p>
                )}
                {showIdentityDocument()}
            </section>
        </div>
    );
};
