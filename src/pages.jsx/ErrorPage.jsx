import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const { data, status, statusText } = useRouteError();
    const navigate = useNavigate();

    const handleNavigate = ()=> {
        navigate(-1);
    }
    
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-2">
            <p  className="text-xl text-neutral">{data}</p>
            <h1 className="text-4xl text-base-content font-bold">- {status} -</h1>
            <h2 className="text-3xl text-base-content font-semibold">{statusText}_</h2>
            <button className="bg-primary flex items-center p-1 rounded-lg cursor-pointer" onClick={handleNavigate}><img className="h-10" src={'https://i.ibb.co/RpXWtHks/logo.png'}/></button>
        </div>
    );
};

export default ErrorPage;