import React, {forwardRef} from 'react';
import styles from "./styles.module.css"

const Index = forwardRef(({id, label, type = "text", placeholder, ...others}, ref) => {
        return (
            <div className={styles.root}>
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
                <input
                    id={id}
                    autoComplete="off"
                    type={type}
                    className={styles.input}
                    placeholder={placeholder}
                    ref={ref}
                    {...others}
                />
            </div>
        );
    }
)

export default Index;