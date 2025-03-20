import "./trail.css";

export const Trail = ({ options, selectedOption, setSelectedOption }) => {
    const detailsOptions = options.map((option) => (
        <li key={option.id} tabIndex="0">
            <label htmlFor={option.id}>
                <input
                    id={option.id}
                    name="trailOptions"
                    value={option.value}
                    type="radio"
                    checked={selectedOption === option.value}
                    onChange={(e) => setSelectedOption(e.target.value)}
                />
                <img src={option.image} alt={option.text} />
                <p>{option.text}</p>
            </label>
        </li>
    ));

    return (
        <div >
            <ul className="trail-container">{detailsOptions}</ul>
        </div>
    );
};
