import {React, useEffect , useState} from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';
import Header from "../shared/Header";
import { updateEmployees } from "../../services/util/employee";

export default function UpdateEmployee({data , cl}){
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [nic, setNIC] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [gender, setGender] = useState("");
	const [joiningDate, setJoiningDate] = useState("");
	const [designation, setDesignation] = useState("");

    // const today = new Date().toISOString();
    
    useEffect(() => {
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setAddress(data.address)
        setNIC(data.nic)
        setDateOfBirth(data.dateOfBirth)
        setPhoneNumber(data.phoneNumber)
        setEmailAddress(data.emailAddress)
        setGender(data.gender)
        setJoiningDate(data.joiningDate)
        setDesignation(data.designation)
    },[data]) //[] <- pass only one array at a time

    async function sendData(e){
        e.preventDefault();

        const updateEmployee = {
            firstName,
            lastName,
            address,
            nic,
            dateOfBirth,
            phoneNumber,
            emailAddress,
            gender,
            joiningDate,
            designation,
        }

        try {
			const response = await updateEmployees(updateEmployee); // Call your backend function
			// Handle success response here
			Swal.fire({
			  title: "Success!",
			  text: "Employee Details Updated Successfully",
			  icon: "success",
			  showConfirmButton: false,
			  timer: 2000,
			}).then(() => {
			//   window.location.replace("/all-employee-list");
			});
		  } catch (error) {
			// Handle error response here
			const msgerr = error.response.data.msg || "An error occurred";
			Swal.fire({
			  icon: "warning",
			  title: "Oops...",
			  text: `${msgerr}`,
			  confirmButtonColor: "#1fc191",
			});
		  }

        // axios.put(`http://localhost:8070/employee/updateEmp/${data._id}`, updateEmployee).then(()=>{
        //         Swal.fire({
        //             title:'Success!',
        //             text:'Employee Details Updated Succesfully',
        //             icon:'success',
        //             showConfirmButton: false,
        //             timer:2000
        //         }).then(()=>{
        //             window.location.reload(true);
        //         })
        //     }).catch((err)=>{
        //         const msgerr = err.response.data.status
        //         Swal.fire({
        //             icon: 'warning',
        //             title: 'Oops...',
        //             text: `${msgerr}`,
        //             confirmButtonColor: '#1fc191',

        //         })
        //     })
    };

    return(
        <div>
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee: {data.firstName} {data.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form id="contact-form" class="form" role="form" onSubmit={sendData}>
                                <div class="form-group">
                                <div className="row">
									<div class="form-group col-md-6">
                                    <label class="form-label" for="Name">First Name : </label>
                                    <input 
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Name" 
                                        name="First Name" 
                                        tabindex="1" 
                                        required
                                        onChange={(e) => {
                                            setFirstName(e.target.value); // assign value
                                        }}
                                        value = {firstName}
                                    />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label class="form-label" for="Name">Last Name : </label>
                                    <input 
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Name" 
                                        name="Last Name" 
                                        tabindex="1" 
                                        required
                                        onChange={(e) => {
                                            setLastName(e.target.value); // assign value
                                        }}
                                        value = {lastName}
                                    />
                                    </div>

</div>                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="Address">Address : </label>
                                    <input 
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Address" 
                                        name="Address"
                                        tabindex="2" 
                                        required
                                        onChange={(e)=>{
                                            setAddress(e.target.value);// assign value
                                        }}
                                        value = {address}
                                    />
                                </div>

                                <div className="row">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="NIC">NIC : </label>
                                        <input 
                                            type="text" 
                                            class="form-control formInput" 
                                            id="NIC" 
                                            name="NIC"
                                            tabindex="3"
                                            required
                                            onChange={(e)=>{
                                                setNIC(e.target.value);//assign value
                                            }}
                                            value = {nic}
                                        />
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="DOB">Date of Birth : </label>
                                        <input 
                                            type="date" 
                                            class="form-control formInput" 
                                            id="DOB" 
                                            tabindex="4"
                                            required
                                            onChange={(e)=>{
                                                setDateOfBirth(e.target.value);
                                            }}
                                            value = {dateOfBirth}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="Phone">Phone Number : </label>
                                        <input 
                                            type="text" 
                                            class="form-control formInput" 
                                            id="Phone" 
                                            tabindex="5"
                                            required
                                            onChange={(e)=>{
                                                setPhoneNumber(e.target.value);
                                            }}
                                            value = {phoneNumber}
                                        />
                                    </div>


                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="Email">Email Address : </label>
                                        <input 
                                            type="email" 
                                            class="form-control formInput" 
                                            id="Email" 
                                            tabindex="6"
                                            required
                                            onChange={(e)=>{
                                                setEmailAddress(e.target.value);//assign value
                                            }}
                                            value = {emailAddress}
                                        />
                                    </div>
                                </div>


                                <div className="row">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="Gender">Gender : </label>
                                        <select
                                            name="Gender"
                                            id = "Gender"
                                            class="form-control formInput"
                                            onChange={(e) => {
                                                setGender(e.target.value);
                                            }}
                                            value={gender}
                                        >
                                            {" "}
                                            <option selected disabled value="">
                                                choose
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="JoiningDate">Joining Date : </label>
                                        <input 
                                            type="date" 
                                            class="form-control formInput" 
                                            id="JoiningDate" 
                                            tabindex="7"
                                            required
                                            onChange={(e)=>{
                                                setJoiningDate(e.target.value);
                                            }}
                                            value = {joiningDate}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="Designation">Designation : </label>
                                        <input 
                                            type="text" 
                                            class="form-control formInput" 
                                            id="Designation" 
                                            tabindex="8"
                                            required
                                            onChange={(e)=>{
                                                setDesignation(e.target.value);
                                            }}
                                            value={designation}
                                        />
                                    </div>
                                </div>
                                
                                <div className="row mt-2 mb-3">
                                    <div className="col py-3 text-center">
                                        <button type="submit" className="btn btn-ok">
                                            Update
                                        </button>
                                    </div>
                                    <div className="col py-3 text-center">
                                        <button type="reset" className="btn btn-reset">
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
            </Modal.Body>
        </div> 

    )

}