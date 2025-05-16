import { useContext, useState } from "react";
import useInputState from "../utils/controlledFormHook";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const SignUp = () => {
    const { createNewUser } = useContext(AuthContext);
    const passState = useInputState();

    const handleSubmit = e => {
        e.preventDefault();

        //Object.values() give the values of an object you just need to point out which object in this '()' | 
        // Object.values(passState.validation) --in console=> [false, true, false, false, false]
        const isPasswordValid = Object.values(passState.validation).every(Boolean)
        //.every(...) is a JavaScript array method that checks:"Does every item in the array meet this condition?" If any item fails the test, it returns false.
        
        if (!isPasswordValid) {
            alert('Please meet all password requirements before submitting.');
            return;
        }

        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = passState.value;

        createNewUser(email, password)
        .then(credential =>{
            const user = credential.user;
            console.log(user);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        
    }

    const [ showPass, setShowPass ] = useState(false)

    return (
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <div className="card bg-primary w-full max-w-sm shrink-0 rounded-2xl shadow-2xl shadow-primary text-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">

                    <label className="text-sm">Name</label>
                    <input 
                    type="text" 
                    name="name"
                    className="input rounded-2xl text-base-content" 
                    placeholder="Name" />

                    <label className="text-sm">Photo URL</label>
                    <input 
                    type="text" 
                    name="photo"
                    className="input rounded-2xl text-base-content" 
                    placeholder="Profile photo URL" />

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
                        {...passState}//...passState is using the JavaScript spread operator to pass multiple props from an object all at once.
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
                    
                    {passState.value.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2 text-xs">
                        <span className={passState.validation.hasUpper ? 
                            "text-green-200" : "text-rose-100"}>
                            Uppercase {passState.validation.hasUpper ? "✔" : "✘"}
                        </span>
                        <span className={passState.validation.hasLower ? 
                            "text-green-200" : "text-rose-100"}>
                            Lowercase {passState.validation.hasLower ? "✔" : "✘"}
                        </span>
                        <span className={passState.validation.hasNum ? 
                            "text-green-200" : "text-rose-100"}>
                            Number {passState.validation.hasNum ? "✔" : "✘"}
                        </span>
                        <span className={passState.validation.hasSpecial ? 
                            "text-green-200" : "text-rose-100"}>
                            Special {passState.validation.hasSpecial ? "✔" : "✘"}
                        </span>
                        <span className={passState.validation.hasMinLen ? 
                            "text-green-200" : "text-rose-100"}>
                            6+ chars {passState.validation.hasMinLen ? "✔" : "✘"}
                        </span>
                    </div>
                    )}
                    <button className="btn btn-primary text-white border-base-100 rounded-2xl mt-4">Sign Up</button>
                    </fieldset>
                    <p className="text-center text-sm">Already have an account? 
                        <Link to={'/auth/login'} className="underline font-semibold">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;