import { Link } from "react-router-dom";

export function KycHandler()
{
    return(
        <>
        <div className="d-flex mt-5 justify-content-center gap-5" >
            <h4>
                Welcome to Kyc Handler
            </h4>
            <h4>
                Choose your Request
            </h4>
            </div>
            <div className="d-flex justify-content-evenly mt-5 align-content-center vh-100" >        <Link to={"/Kyc/SubmitKyc"} >Sumbit Kyc Details</Link>
        <Link to={"/Kyc/ViewKyc"} >View Kyc Details</Link>
 </div>
   
        </>
    )
}