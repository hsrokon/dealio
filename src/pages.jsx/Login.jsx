import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.pass.value;
        loginUser(email, password)
        .then(credential =>{
            const user = credential.user;
            setUser(user)
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    const [ showPass, setShowPass ] = useState(false)

    return (
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl font-semibold">Log in</h2>
            <div className="card bg-primary w-full max-w-sm shrink-0 rounded-2xl shadow-2xl shadow-primary text-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">

                    <label className="text-sm">Email</label>
                    <input 
                    type="email" 
                    required
                    name="email"
                    className="input rounded-2xl text-base-content" 
                    placeholder="Email" />

                    <label className="text-sm">Password</label>
                    <div className="relative">
                        <input 
                        type={`${showPass ? 'text' : 'password'}`} 
                        name="pass"
                        required
                        className="input rounded-2xl text-base-content" 
                        placeholder="Password" />
                        <button 
                        onClick={()=> setShowPass(!showPass)}
                        className="absolute right-10 top-1/2 -translate-y-1/2 text-base-content text-lg z-20">
                            {
                                showPass ? <FaEyeSlash /> : <FaEye/>
                            }</button>
                    </div>
                    
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary text-white border-base-100 rounded-2xl mt-2">Log in</button>
                    </fieldset>
                    <p className="text-center text-sm">Don't have an account? 
                        <Link to={'/auth/signup'} className="underline font-semibold">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;