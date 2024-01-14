import React, { useState } from 'react';
import DepartmentMenu from "./departmentmenu";

export const Menu: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 999,
    }

    const rectangleStyle: React.CSSProperties = {
        position: 'fixed',
        top: '45%',
        left: '50%',
        width: '20%',
        height: '40%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
        textAlign: 'center',
        zIndex: 1000,
    }

    const buttonStyle: React.CSSProperties = {
        position: 'absolute',
        backgroundColor: 'rgba(192, 192, 192, 1)',
        margin: 'auto',
        width: '75%',
        left: '12.5%',
        color: 'black',
        border: '1px solid rgba(0, 0, 0, 1)',
        textAlign: 'center',
        zIndex: 1005,
    }

    const playButtonStyle: React.CSSProperties = {
        position: 'relative',
        backgroundColor: 'rgba(0, 255, 0, 1)',
        margin: 'auto',
        width: '75%',
        color: 'black',
        border: '1px solid rgba(0, 0, 0, 1)',
        top: '50%',
        textAlign: 'center',
    }

    const departmentList = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ];

    const handleOptionSelect = (selectedOption: string) => {
    
    };

    return (
        <div>
            {isVisible &&
                <div style={overlayStyle}> 
                    <div style={rectangleStyle}>
                        <p>Welcome to Professordle!</p>
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
            }
        </div>
    );
};
