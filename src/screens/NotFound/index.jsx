import React, {useContext} from 'react';
import styles from "./styles.module.css"
import Button from "../../components/UI/Button";
import {UserContext} from "../../context/AppContext";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <div className={styles.root}>
            <h1>404</h1>
            <div className={styles["button-wrapper"]}>
                <Button
                    onClick={() => !!user ? navigate("/") : navigate("/login", {replace: true})}>Go {!!user ? "Home" : "Login"}</Button>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </div>
        </div>
    );
};

export default Index;