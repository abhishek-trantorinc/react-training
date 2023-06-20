import { useState } from "react";
import doSum from "../utils/myfunctions";
import LoginForm from "./LoginForm";

function LoginScreen() {
    let a = 6;
    let b = 7;
    let [value, updateValue] = useState("Login Name");
    value = "10";
    return (
        <div>
            <LoginForm  sum={value} />
        </div>
    )
}
export default LoginScreen