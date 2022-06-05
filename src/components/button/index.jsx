import React from "react";
import "./button.css";
export const CustomButton = ({ title, onClick }) => {
    return (
        <div className="btn-form">
            <button onClick={onClick}>{title}</button>
        </div>
    );
};
