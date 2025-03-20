import "./userAddress.css";

export const UserAddress = (dataUserAddress) => {
    const {
        zipCode,
        street,
        houseNumber,
        city,
        state,
        proofOfResidency,
        setZipCode,
        setStreet,
        setHouseNumber,
        setCity,
        setState,
        setProofOfResidency,
        errors,
    } = dataUserAddress;

    const removeFile = () => {
        setProofOfResidency({
            proofOfResidency: null,
        });
    };

    const showProofOfResidency = () => {
        return proofOfResidency && proofOfResidency.name ? (
            <div className="file-selected">
                <p>Arquivo selecionado: {proofOfResidency.name}</p>
                <button onClick={removeFile}></button>
            </div>
        ) : (
            <p>{""}</p>
        );
    };

    return (
        <div className="user-address-form">
            <section>
                <h2>Endereço residencial</h2>

                <label htmlFor="zipCode">CEP:</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="Insira seu CEP"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                {errors.zipCode && (
                    <p className="error-message">{errors.zipCode}</p>
                )}

                <section className="user-address-section">
                    <div>
                        <label htmlFor="street">Rua:</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            placeholder="Insira sua rua"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                        {errors.street && (
                            <p className="error-message">{errors.street}</p>
                        )}

                        <label htmlFor="city">Cidade:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Insira sua cidade"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        {errors.city && (
                            <p className="error-message">{errors.city}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="houseNumber">Número:</label>
                        <input
                            type="text"
                            id="houseNumber"
                            name="houseNumber"
                            placeholder="Insira o número da casa"
                            value={houseNumber}
                            onChange={(e) => setHouseNumber(e.target.value)}
                        />
                        {errors.houseNumber && (
                            <p className="error-message">
                                {errors.houseNumber}
                            </p>
                        )}

                        <label htmlFor="state">Estado:</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="Insira seu estado"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        {errors.state && (
                            <p className="error-message">{errors.state}</p>
                        )}
                    </div>
                </section>

                <label htmlFor="proofOfResidency">
                    Comprovante de residência (somente PDF):
                    <div className="upload-proof-Document">
                        <img src="cloud-upload.png" />
                        <p>Clique aqui para selecionar o arquivo</p>
                    </div>
                </label>
                <input
                    className="hideInput"
                    type="file"
                    id="proofOfResidency"
                    name="dproofOfResidencye"
                    accept=".pdf"
                    onChange={(e) => setProofOfResidency(e.target.files[0])}
                />
                {errors.proofOfResidency && (
                    <p className="error-message">{errors.proofOfResidency}</p>
                )}
                {showProofOfResidency()}
            </section>
        </div>
    );
};
