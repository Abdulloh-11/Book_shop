import React from 'react';
import styles from "./styles.module.css"

const Index = ({
                   onClick = () => {
                   },
                   children,
                   disabled = false,
                   className = "",
                   ...others
               }) => {
    return (
        <button onClick={onClick}
                className={`${styles.root} ${className} ${disabled ? "pointer-events-none" : ""}`}
                style={disabled ? {backgroundColor: "silver"} : {}} {...others}>
            {children}
        </button>
    );
};

export default Index;