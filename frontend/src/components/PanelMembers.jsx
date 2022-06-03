import React, { useState,useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { addMember, modifyMember, deleteMember, alreadyMember, searchPhrase } from './context/ContextProvider';

const PanelMembers = () => {

    const [getAllMembers, setAllMembers] = useState([]);
    // console.log(getAllMembers);

    const {newMember,setPanelMember} = useContext(addMember);
    const {modifiedMember,setModifiedMember} = useContext(modifyMember);
    const {deletedMember,setDeletedMember} = useContext(deleteMember);
    const {existingMember,setExistingMember} = useContext(alreadyMember);
    const {searchTerm,setSearchTerm} = useContext(searchPhrase);

    const getAll = async(e)=> {

        const res = await fetch("http://localhost:8070/getpm", {
            method:"GET",
            headers: {
                "Content-Type":"application/json"
            }
        });

        const deleteMember = '';
        const modifyMember = '';
        const searchPhrase = '';
        const errorMsg = '';

        const data = await res.json();
        // console.log(data);

        if(res.status === 422 || !data){
            console.log("error");
        } else{
            setAllMembers(data);
            // console.log("Get data");            
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
            setDeletedMember(deleteMember)
            getAll();
        }
    }

    

  return (

<section id="content" className='py-5'>
    <div className="container">
    {
        newMember ?
        <>
            <div className="col mb-2">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> A New Panel Member {newMember.firstName} Has Been Created
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </>: ""
        }
        {
        modifiedMember ?
        <>
            <div className="col mb-2">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Panel Member {modifiedMember.firstName} Has Been Modified
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </>: ""
        }
        {
        deletedMember ?
        <>
            <div className="col mb-2">
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Panel Member {deletedMember.firstName} Has Been Deleted
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </>: ""
        }
    </div>
    <div className="container">
        <div className="col py-4">
            <h1>Admin dashboard</h1>
        </div>
    </div>
    <div className="container">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Panel Members</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Supervisors</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Students</button>
  </li>  
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">        

        {/* panel members content */}
        
        <div className="row d-flex justify-content-around align-items-end py-5">        
            <div className="col">
                <label htmlFor="search" className='mb-2'>Search Panel Members</label>
                <input type="text" name="search" id='search' placeholder='Name, Email, NIC or Educational Qualifications' className='form-control' onChange={(event) => {setSearchTerm(event.target.value)}}/>
            </div>   
            <div className="col"></div>         
            <div className="col text-end">
                <NavLink to="/registerpm" className="btn btn-primary">Add member</NavLink>
            </div>
        </div>

        <div className="col table-responsive">
        <table className="table table-striped align-middle">
        <thead>
        <tr className='table-dark'>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">NIC</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Edu. Qualification</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>

    {
        getAllMembers.filter((element) => {
            if(searchTerm == '') {
                return element
            }
            else if(element.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
            else if(element.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
            else if(element.email.toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
            else if(element.nic.toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
            else if(element.edu.toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
        }).map((element, id) =>{
            return(
                <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.email}</td>
                <td>{element.nic}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
                <td>{element.edu}</td>
                <td>
                    <NavLink to={`/profile/${element._id}`} className="btn btn-success mx-1"><i className="fa-solid fa-eye"></i></NavLink>
                </td>
                <td>
                    <NavLink to={`/editpm/${element._id}`} className="btn btn-warning mx-1"><i className="fa-solid fa-pen-to-square"></i></NavLink>                    
                </td>
                <td>
                    <button onClick={()=>deletePanelMember(element._id)} className="btn btn-danger mx-1"><i className="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
            )
        })
    }                       
        </tbody>
        </table>
        </div>

        {/* panel members content */}



  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">...</div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">...</div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">...</div>
</div>
    </div>

</section>
  )
}

export default PanelMembers;