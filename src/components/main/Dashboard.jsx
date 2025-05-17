import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen w-10/12 mx-auto grid grid-cols-10 my-10">
            <div className="col-span-6">
                <h1 className="text-3xl">Hey, <span className="text-primary">{user?.displayName}</span> hope you're doing great!</h1>
                <p className="mt-4">&#10095; Email: <span className="font-semibold text-primary">{user?.email}</span></p>
            </div>
            <div className="col-span-4">
                <h2 className="text-2xl">&#10095; Update your profile</h2>
                <div className="mt-4">
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
                    
        
                    <button className="btn btn-primary text-white border-base-100 rounded-2xl mt-4">Update profile</button>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;