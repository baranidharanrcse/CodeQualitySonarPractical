import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Login() {

    const[userdata,setUserData]=useState(
        {
            userName:"",
            password:""
        }
    )
    const navigate=useNavigate();
     const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        try{
        let resp=await axios.post("http://localhost:8080/Kyc/Login",userdata);
        if(resp.data==true)
        {
            alert("Login Successfull")
            navigate("/Kyc/KycHandler");
        }
        else{
            alert("Login Failed");
        }
    }
    catch(err)
    {
        alert("Error Occurred while Login");
    }

    }
    return (
        <>
           <div className="d-flex align-items-center justify-content-center vh-100" >
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        value={userdata.userName}
                        onChange={handleChange}
                    />
                    <div className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={userdata.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" id="exampleCheck1" />
                    <label className="form-check-label">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            </div>
        </>
    )
}