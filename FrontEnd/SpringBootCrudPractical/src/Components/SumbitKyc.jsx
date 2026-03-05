import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function SumbitKyc() {

    let [data,setData]=useState(
        {
            cusName:"",
            accountNumber:"",
            address:"",
            aadharNumber:"",
            panNumber:""
        }
    )
     const navigate=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
 let handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
        let resp=await axios.post("http://localhost:8080/Kyc",data)
        if(resp.data=="true")
        {
            alert("Kyc Details Submitted")
             navigate("/Kyc/KycHandler")
        }
        }
        catch(err)
        {
            alert("Failed to Submit Kyc")
        }

    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center mt-5" ><h4>Update Your Details</h4></div>
        <div className="d-flex justify-content-center align-items-center vh-100">  
                
                <form onSubmit={handleSubmit} >
                <div class="mb-3">
                    <label class="form-label">Enter Customer Name</label>
                    <input type="text" name="cusName" onChange={handleChange} class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter Account Number</label>
                    <input type="text" name="accountNumber" class="form-control" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter Addresss</label>
                    <input type="text" name="address" class="form-control" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter Aadhar Number</label>
                    <input type="text" name="aadharNumber" class="form-control" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter Pan Number</label>
                    <input type="text" name="panNmber" class="form-control" onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit Kyc Details</button>
            </form>
            </div>

        </>
    )
}