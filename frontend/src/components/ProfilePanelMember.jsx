import React, {useState, useEffect, useContext} from 'react'
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { deleteMember } from './context/ContextProvider';

const ProfilePanelMember = () => {
   
    const history = useHistory();

    const {deletedMember,setDeletedMember} = useContext(deleteMember);

    const [getAllMembers, setAllMembers] = useState([]);
    console.log(getAllMembers);

    const {id} = useParams("");
    console.log(id);

    const getAll = async () => {

        const res = await fetch(`http://localhost:8070/profile/${id}`, {
            method:"GET",
            headers: {
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            console.log("error");
        } else{
            setAllMembers(data);
            console.log("Get data");            
        }
    }

    useEffect(() => {
        getAll();
    },[]);

    const deletePanelMember = async (id) => {
        const res2 = await fetch(`http://localhost:8070/deletepm/${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const deletemember = await res2.json();
        console.log(deletemember);

        if (res2.status === 422 || !deletemember){
            console.log("error");
        } else{
            console.log("Panel member deleted");            
            setDeletedMember(deleteMember);
            history.push("/paneladmin");
        }
    }

  return (
    <section id="content" className='mt-3 p-5'>
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h2>Panel Member Profile</h2>
                </div>
            </div>
        </div>
    <div className="container">
        <div className="row d-flex justify-content-center">
        <div className="col-8 form-wrap mt-5 p-4">
            <div className="row align-items-start">
                <div className="thumbnail col-3 p-2">
                    <img src="https://res.cloudinary.com/dhdg4uhps/image/upload/v1631278945/thumbnail/ismrlgfarlubqctkhass.jpg" alt="" className="img-fluid" />
                </div>
                <div className="info col-6 p-2">
                    <h4>{getAllMembers.firstName} {getAllMembers.lastName}</h4>
                    <ul className="details mt-3 mb-0">
                        <li><strong>Email:</strong> {getAllMembers.email}</li>
                        <li><strong>NIC:</strong> {getAllMembers.nic}</li>
                        <li><strong>Address:</strong> {getAllMembers.address}</li>
                        <li><strong>Phone:</strong> {getAllMembers.phone}</li>
                        <li><strong>Education Qualification:</strong> {getAllMembers.edu}</li>
                    </ul>
                </div>
                <div className="controls col-3 d-grid p-3">
                    <NavLink to={`/editpm/${getAllMembers._id}`} className='btn btn-warning mb-2'>Edit</NavLink>
                    <button onClick={()=>deletePanelMember(getAllMembers._id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>



    </div>
        </div>
    </div>
    </section>
  )
}

export default ProfilePanelMember