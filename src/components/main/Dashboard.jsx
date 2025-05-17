import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";


const Dashboard = () => {
    const { user, setUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault()

        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;

        updateUserProfile(displayName, photoURL)
        // .then(()=> {
        //     return auth.currentUser.reload();
        // })
        .then(()=> {
            setUser({...auth.currentUser})
        })
        .catch(error => {
            console.log('Profile update error from dashboard', error);
        })
        e.target.reset();
    }

    return (
        <div className="min-h-screen w-10/12 mx-auto grid grid-cols-10 my-10">
            <div className="col-span-6">
                <h1 className="text-3xl">Hey, <span className="text-primary">{user?.displayName}</span> hope you're doing great!</h1>
                <p className="mt-4">&#10095; Email: <span className="font-semibold text-primary">{user?.email}</span></p>
                <div className="w-96 h-80 mt-4">
                    <img className="w-full h-full object-cover" src={user?.photoURL} alt="" />
                </div>
                <div className="mt-10">
                    <Link to={'/saved'} className="text-xl font-semibold hover:text-primary hover:underline">&#10095; View your saved coupons</Link>
                </div>
                <div className="mt-10">
                    <Link to={'/coupons'} className="text-xl font-semibold hover:text-primary hover:underline">&#10095; View coupons</Link>
                </div>
                <div className="mt-10">
                    <Link to={'/'} className="text-xl font-semibold hover:text-primary hover:underline">&#10095; Go home</Link>
                </div>
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
                    className="input rounded-2xl text-base-content border-2 border-primary w-full" 
                    placeholder="Name" />

                    <label className="text-sm">Photo URL</label>
                    <input 
                    type="text" 
                    name="photo"
                    className="input rounded-2xl text-base-content border-2 border-primary w-full" 
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