import Button from "../../components/UI/Button";
import {useForm} from "react-hook-form"
import {axios} from "../../api/axios";
import styles from "../Register/styles.module.css";
import Input from "../../components/UI/Input";
import React, {useContext, useState} from "react";
import {UserContext} from "../../context/AppContext";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '../../Notification/Notification';

const Index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {handleUser} = useContext(UserContext)
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        defaultValues: {
            full_name: undefined,
            username: undefined,
            password: undefined,
        }
    })


    const onSubmit = (data) => {
        setIsLoading(true)
        axios.post("auth/signup", data)
            .then(response => {
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
               
                if (response.status === 201) {
                    Notification( {text: response?.data?.message, type: "success"})
                    setTimeout(() => {
                        navigate("/", {replace: true})
                    }, 2500)
                }
            })
            .catch(errors => {
                Notification( {text: errors.response?.data?.message[0], type: "error"})
                
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className={styles.root}>
         <ToastContainer />
            <h1>Register</h1>
            <div className="min-w-[30rem] flex flex-col gap-6">
                <div>
                    <Input
                        id="fullname"
                        label="Full name"
                        placeholder="Enter Full name"
                        {...register("full_name", {
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
                    {!!errors?.full_name ?
                        <span className="text-red-600 mt-6">{errors?.full_name?.message}</span> : null}
                </div>
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
            <Button onClick={handleSubmit(onSubmit)} className="min-w-[30rem]" disabled={isLoading}>Register</Button>
            <Button className="min-w-[30rem]" onClick={() => navigate("/login")}>Login</Button>
        </div>
    );
};

export default Index;