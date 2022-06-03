import React, {useState, createContext, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { addMember, modifyMember, deleteMember, alreadyMember, showError } from './context/ContextProvider';

const RegisterPanelMember = () => {

    const {newMember,setPanelMember} = useContext(addMember);
    const {modifiedMember,setModifiedMember} = useContext(modifyMember);
    const {deletedMember,setDeletedMember} = useContext(deleteMember);
    const {existingMember,setExistingMember} = useContext(alreadyMember);

    const {errorMsg,setErrorMsg} = useContext(showError);

    const history = useHistory();

    const [inputValue,setInputValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        nic: '',
        address: '',
        phone: '',
        edu: '',
        err:'',
        success:'',
    })

    const emptyMsg = "Please fill in all the required fields!";
    const emailError = "Email address is not valid!";
    
    const phoneError = "Phone number is not valid!";

    const setdata = (e) => {
        console.log(e.target.value);
        const {name,value} = e.target;
        setInputValue((preVal) => {
            return {
                ...preVal,
                [name]:value,                
            }
        })
    }

        const addPanelMember = async(e) => {
        e.preventDefault();

        const {firstName, lastName, email, nic, address, phone, edu, err, success} = inputValue;        

        if(!firstName || !lastName || !email || !nic) {            
            setErrorMsg(emptyMsg);            
        }
        
        else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) )   {            
            setErrorMsg(emailError);            
        }

        else if(!/^\d{10}$/.test(phone) && !/^\+?([0-9]{2})\)?[-. ]?([0-9]{9})$/.test(phone))   {            
            setErrorMsg(phoneError);            
        }

        else{
            const res = await fetch("http://localhost:8070/registerpm", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    firstName, lastName, email, nic, address, phone, edu
                })
            });

            const data = await res.json();
            console.log(data);

            if(res.status === 422){
                setExistingMember(data);
        }      
        else{
            setPanelMember(data);
            setModifiedMember('');
            setDeletedMember('');
            setErrorMsg('');
            history.push("/paneladmin");
        }
        }
    }


  return (
    <section id="content" className="mt-3 p-5">
        <div className="container">
            {
                existingMember ?
                <>
                <div className="container">
                <div className="col mb-2">
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Panel member already exists in the database.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                </div>
                </>: ""
            }
        </div>
        <div className="container">
            <div className="row d-flex justify-content-center">
            <div className="col-7">
                <h2 className='text-center'>Register New Panel Member</h2>

                <div className="form-wrap mt-5 p-4">
                    {
                        errorMsg === emptyMsg ?
                        <>
                        <span className='errorMsg'>{emptyMsg}</span>
                        </>:""
                    }
                    {
                        errorMsg === emailError ?
                        <>
                            <span className='errorMsg'>{emailError}</span>
                        </>:""
                    }
                    {
                        errorMsg === phoneError ?
                        <>
                            <span className='errorMsg'>{phoneError}</span>
                        </>:""
                    }
                    <form action="" className='mt-4'>
                        <div className="row d-flex mb-3">
                            <div className="col">
                                <label htmlFor="firstName" className='mb-1'>First Name *</label>
                                <input type="text" value={inputValue.firstName} onChange={setdata} className="form-control" name='firstName' id='firstName' placeholder='First Name'/>
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className='mb-1'>Last Name *</label>
                                <input type="text" onChange={setdata} value={inputValue.lastName} className="form-control" id='lastName' name='lastName' placeholder='Last Name'/>
                            </div>
                        </div>
                        <div className="row d-flex mb-3">
                            <div className="col-7">
                                <label htmlFor="email" className='mb-1'>Email *</label>
                                <input type="email" value={inputValue.email} onChange={setdata} className="form-control" name='email' id='email' placeholder='Email' required/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="nic" className='mb-1'>NIC *</label>
                                <input type="text" value={inputValue.nic} onChange={setdata} className="form-control" id='nic' name='nic' placeholder='NIC'/>
                            </div>                        
                        </div>                        
                        <div className="row d-flex mb-3">
                            <div className="col">
                                <label htmlFor="address" className='mb-1'>Address</label>
                                <input type="text" value={inputValue.address} onChange={setdata} className="form-control" id='address' name='address' placeholder='Address'/>
                            </div>
                            <div className="col">
                                <label htmlFor="phone" className='mb-1'>Phone</label>
                                <input type="tel" value={inputValue.phone} onChange={setdata}  className="form-control" id='phone' name='phone' placeholder='Phone'/>                                
                            </div>                        
                        </div>
                        <div className="row d-flex mb-3">
                            <div className="col">
                                <label htmlFor="edu" className='mb-1'>Highest Education Qualification</label>
                                <select name="edu" value={inputValue.edu} onChange={setdata} id="edu" className='form-control'>
                                    <option value="">Please select</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Bachelors Degree">Bachelors Degree</option>
                                    <option value="Masters Degree">Masters Degree</option>
                                    <option value="PhD">PhD</option>
                                </select>
                            </div>                        
                        </div>
                        <div className="row d-flex">
                            <div className="col">
                                <button className="btn btn-lg btn-primary" onClick={addPanelMember}>Submit</button>
                            </div>                        
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterPanelMember