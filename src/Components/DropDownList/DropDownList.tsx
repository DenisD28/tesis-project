import { useState } from "react";
import { opciones } from "../types.d";

export const DropDownList: React.FC<{ options: opciones[] }> = ({ options }) => {

    const [selectedOption, setSelectedOption] = useState<opciones | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option: opciones) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (<>
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption ? selectedOption.label : 'Select an option'}
            </button>
            {isDropdownOpen && (
                <ul className="dropdown-options">
                    {options.map(option => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionSelect(option)}
                            className={`option ${selectedOption?.value === option.value ? 'selected' : ''}`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </>)
}