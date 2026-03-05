import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ViewKyc()
{
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const resp = await axios.get("http://localhost:8080/Kyc");
        console.log(resp.data)
        setData(resp.data);
      } catch (err) {
        alert("Error fetching courses");
      }
    };

    fetchCourses();
  }, []);
  const navigate=useNavigate();
   let handleEdit=(id)=>
  {
    navigate(`/Kyc/EditKyc/${id}`)
  }
  let handleDelete=async (id)=>
  {
    let resp=await axios.delete(`http://localhost:8080/Kyc/${id}`)
    alert(resp.data);

  }

    return(
        <>
        <div className="d-flex table-striped table-bordered justify-content-center align-content-center mt-5" > 
      <table border="1"  >
        <thead>
          <tr>
            <th>Kyc Id</th>
            <th>Name</th>
            <th>Account number</th>
            <th>Address </th>
            <th>Aadhar Number</th>
            <th>Pan Number</th>
            <th>Edit</th>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
            <td>
                1
            </td>
            <td>Barani</td>
            <td>123</td>
            <td>Chennai</td>
            <td>456</td>
            <td>Pan123</td>
            <td><button className="btn btn-info" >EDIT</button></td>
            <td><button className="btn btn-danger" >Delete</button></td>
        </tbody>
      </table>
      </div>
        </>
    )
}