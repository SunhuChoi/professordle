// components/DropdownMenu.tsx
import React, { useState } from "react";

interface DropdownMenuProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DepartmentMenu: React.FC<DropdownMenuProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select"}
      </button>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentMenu;
