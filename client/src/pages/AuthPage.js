import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
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
            const data = await request('/api/auth/register', 'POST', {
                ...form
            })
            message(data.message)
        } catch (error) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (error) {}
    }

    return (
        <>
            <div className="page">
                <div className="row">
                    <div className="offset-s3">
                        <div className="card white">
                            <div className="card-content dark-text">
                                <span className="card-title center">Welcome</span>
                                <br />
                                <div className="row">
                                    <div className="input-field">
                                        <i className="material-icons prefix">
                                            email
                                        </i>
                                        <input
                                            placeholder="Email"
                                            id="email"
                                            type="text"
                                            name="email"
                                            value={form.email}
                                            className="validate"
                                            onChange={changeHandler}
                                        />
                                        <br />
                                    </div>

                                    <div className="input-field">
                                        <i className="material-icons prefix">
                                            lock
                                        </i>
                                        <input
                                            placeholder="Password"
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={form.password}
                                            className="validate"
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-action row s12">
                                <button
                                    className="btn yellow darken-4 left"
                                    disabled={loading}
                                    onClick={loginHandler}
                                >
                                    Sing in
                                </button>
                                <button
                                    className="btn grey lighten-1 right"
                                    onClick={regiterHandler}
                                    disabled={loading}
                                >
                                    Sing up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
