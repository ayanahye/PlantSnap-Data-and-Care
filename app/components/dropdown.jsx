import React from 'react';
import styles from "./component.module.css";

export default function Dropdown(props) {

    const handleCheckboxChange = (event) => {
        const id = event.target.id;
        const option = event.target.name;
        const isChecked = event.target.checked;
        props.onOptionChange(id, option, isChecked);
    };


    return (
        <div className={styles.dropdown}>
            <button id="full-width" className="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                {props.name}
            </button>
            <button id="full-width2" type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden"></span>
            </button>
            <ul className="dropdown-menu">
                {props.data.map((item, index) => (
                    <li key={index}>
                        <div className={styles.dropdownItemCustom}>
                            <input
                                type="checkbox"
                                id={`checkbox-${props.id}-${item}`}
                                name={item}
                                value={item}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor={`checkbox-${props.id}-${item}`}>{item}</label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// checkbox-option1-1