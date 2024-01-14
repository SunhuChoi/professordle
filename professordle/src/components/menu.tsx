import React, { useState } from "react";
import DepartmentMenu from "./departmentmenu";

interface MenuProps {
  onInputChange: (newValueTwo: string) => void;
}

export const Menu: React.FC<MenuProps> = ({ onInputChange }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const rectangleStyle: React.CSSProperties = {
    position: "fixed",
    top: "55%",
    left: "50%",
    width: "40%",
    height: "55%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "30px",
    color: "black",
    // fontFamily: "Lucida Console, Monospace",
    textAlign: "center",
    zIndex: 1000,
  };

  const buttonStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "rgba(192, 192, 192, 1)",
    margin: "auto",
    width: "75%",
    left: "12.5%",
    color: "black",
    border: "1px solid rgba(0, 0, 0, 1)",
    // fontFamily: "Copperplate, Fantasy",
    textAlign: "center",
    zIndex: 1005,
  };

  const playButtonStyle: React.CSSProperties = {
    position: "relative",
    backgroundColor: "rgba(34, 171, 59, 1)",
    margin: "auto",
    width: "75%",
    height: "50px",
    color: "black",
    border: "3px solid rgba(0, 0, 0, 1)",
    borderRadius: "20px",
    top: "50%",
    textAlign: "center",
  };

  const departmentList = ["1", "2", "3", "4", "5", "6"];

  const handleOptionSelect = (selectedOption: string) => {
    onInputChange(selectedOption);
  };

  return (
    <div>
      {isVisible && (
        <div style={overlayStyle}>
          <div style={rectangleStyle}>
            <p>Welcome to Professordle!</p>
          </div>
          <div style={rectangleStyle}>
            <p>Choose a department to guess a professor from:</p>
            <div style={buttonStyle}>
              <DepartmentMenu
                options={departmentList}
                onSelect={handleOptionSelect}
              ></DepartmentMenu>
            </div>
            <button onClick={toggleVisibility} style={playButtonStyle}>
              Play!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
