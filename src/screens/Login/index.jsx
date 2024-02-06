import React, {useContext, useState} from 'react';
import styles from "./styles.module.css"
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import {useForm} from "react-hook-form"
import {axios} from "../../api/axios";
import {UserContext} from "../../context/AppContext";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {handleUser} = useContext(UserContext)
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        defaultValues: {
            username: undefined,
            password: undefined,
        }
    })


    const onSubmit = (data) => {
        setIsLoading(true)
        axios.post("auth/signin", data)
            .then(response => {
                navigate("/", {replace: true})
                handleUser({
                    fullName: response.data?.admin?.full_name,
                    username: response.data?.admin?.username,
                    accessToken: response.data?.tokens?.access_token
                })
                localStorage.setItem("user", JSON.stringify({
                    fullName: response.data?.admin?.full_name,
                    username: response.data?.admin?.username,
                    accessToken: response.data?.tokens?.access_token
                }))
            })
            .catch(errors => {
                alert(errors?.response?.data?.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className={styles.root}>
            <h1>Login</h1>
            <div className="min-w-[30rem] flex flex-col gap-6">
                <div>
                    <Input
                        id="login"
                        label="Login"
                        placeholder="Enter login"
                        {...register("username", {
                            "validate": {
                                "minLength": (value) => {
                                    if (value?.trim().length <= 3) {
                                        return "Kamida 3 tadan ko'p bo'lsin"
                                    }
                                }
                            }
                        })
                        }
                    />
                    {!!errors?.username ? <span className="text-red-600 mt-6">{errors?.username?.message}</span> : null}
                </div>
                <div>
                    <Input
                        id="password"
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        {...register("password", {
                            "validate": {
                                "minLength": (value) => {
                                    if (value?.trim().length <= 6) {
                                        return "Kamida 6 tadan ko'p bo'lsin"
                                    }
                                }
                            }
                        })}
                    />
                    {!!errors?.password ? <span className="text-red-600 mt-6">{errors?.password?.message}</span> : null}
                </div>
            </div>
            <Button onClick={handleSubmit(onSubmit)} className="min-w-[30rem]" disabled={isLoading}>Login</Button>
            <Button className="min-w-[30rem]" onClick={() => navigate("/register")}>Register</Button>
        </div>
    );
};

export default Index;