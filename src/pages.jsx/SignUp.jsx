

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <div className="card bg-primary w-full max-w-sm shrink-0 rounded-2xl shadow-2xl shadow-primary text-base-100">
                <form className="card-body">
                    <fieldset className="fieldset">

                    <label className="text-sm">Name</label>
                    <input 
                    type="text" 
                    name="name"
                    className="input rounded-2xl text-base-content" 
                    placeholder="Email" />

                    <label className="text-sm">Photo URL</label>
                    <input 
                    type="text" 
                    name="photo"
                    className="input rounded-2xl text-base-content" 
                    placeholder="Email" />

                    <label className="text-sm">Email</label>
                    <input 
                    type="email" 
                    required
                    name="email"
                    className="input rounded-2xl text-base-content" 
                    placeholder="Email" />

                    <label className="text-sm">Password</label>
                    <input 
                    type="password" 
                    name="pass"
                    required
                    className="input rounded-2xl text-base-content" 
                    placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary text-white border-base-100 rounded-2xl mt-4">Sign Up</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;