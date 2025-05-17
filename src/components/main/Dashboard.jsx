import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl my-4">Hey , {user?.displayName
} hope you're doing great!</h1>
        </div>
    );
};

export default Dashboard;