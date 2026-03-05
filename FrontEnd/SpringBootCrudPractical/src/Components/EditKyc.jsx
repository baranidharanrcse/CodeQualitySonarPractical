import { useNavigate } from "react-router-dom";

export function EditKyc() {

    let [formData, setformData] = useState(
        {
            custName: "",
            accountNumber: "",
            address: "",
            aadharNumber: "",
            panNumber: ""
        }
    )
    const { id } = useParams();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let resp = await axios.put(`http://localhost:8080/Kyc/${id}`, formData)
            if (resp.data == "true") {
                alert("Data Updated")
                navigate("/Kyc/ViewKyc")
            }
        }
        catch (err) {
            alert("Failed to uPdate Kyc")
        }


    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5" ><h4>Fill Your Details</h4></div>
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