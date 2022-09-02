import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const regiterHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", { ...form })
            message(data.message)
        } catch (error) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", { ...form })
            auth.login(data.token, data.userId)
        } catch (error) { }
    }

    return (
        <>
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Auth</span>
                            <p>Welcome</p>
                            <div className="row">
                                <div className="input-field">
                                    <input
                                        placeholder="Email"
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={form.email}
                                        className="validate"
                                        onChange={changeHandler}
                                    />
                                    <label className="active" htmlFor="email">
                                        Email
                                    </label>
                                </div>
                                <div className="input-field">
                                    <input
                                        placeholder="Password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        className="validate"
                                        onChange={changeHandler}
                                    />
                                    <label className="active" htmlFor="password">
                                        Password
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn yellow darken-4"
                                disabled={loading}
                                onClick={loginHandler}
                            >
                                Sing in
                            </button>
                            <button
                                className="btn grey lighten-1"
                                onClick={regiterHandler}
                                disabled={loading}
                            >
                                Sing up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
