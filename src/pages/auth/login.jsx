import React, { useState } from "react";
import "./login.css";
import { CustomButton } from "../../components";
import * as AuthService from "../../service/auth";
export const Login = () => {
    const [login, setLogin] = useState({
        userName: "",
        password: "",
    });

    const handleLogin = () => {
        AuthService.login(login).then((res) => {
            console.log(res);
            if (res.code === 200) {
                window.location = "/";
            }
        });
    };

    const handleOnChange = (key, e) => {
        setLogin({
            ...login,
            [key]: e.target.value,
        });
    };
    return (
        <div className="container">
            <div className="form-wraper">
                <div className="title">Đăng Nhập</div>
                <div className="input-login">
                    <input type="text" placeholder="Tài khoản người dùng" value={login.userName} onChange={(e) => handleOnChange("userName", e)} />
                </div>
                <div className="input-login">
                    <input type="password" placeholder="Mật khẩu" value={login.password} onChange={(e) => handleOnChange("password", e)} />
                </div>
                <div>
                    <CustomButton title="Đăng nhập" onClick={handleLogin} />
                </div>
            </div>
        </div>
    );
};
