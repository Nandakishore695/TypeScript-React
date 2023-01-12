import React, { useState } from 'react'

interface Istate {
    user: {
        userName: string;
        password: string | number;
    }
}

function LoginComponent() {
    const [userDetails, setUserDetails] = useState<Istate>({ user: { userName: "", password: "" } });
    const handlerChange = (e: any) => {
        setUserDetails({ user: { ...userDetails.user, [e.target.name]: e.target.value } });
    }

    const handlerSubmitLoginDetail = () => {
        console.log(userDetails.user);
    }
    return (
        <>
            <br />
            <p>------------------------------------------------------</p>
            <h1>Login Form Example</h1>
            <div>
                <form>
                    <label>
                        UserName:<input type="text" name="userName" value={userDetails.user.userName} onChange={(e) => handlerChange(e)} />
                    </label>
                    <br />
                    <label>
                        Password:<input type="text" name="password" value={userDetails.user.password} onChange={(e) => handlerChange(e)} />
                    </label>
                </form>
            </div>
            <button onClick={handlerSubmitLoginDetail}>Save</button>
        </>
    )
}
export default LoginComponent;