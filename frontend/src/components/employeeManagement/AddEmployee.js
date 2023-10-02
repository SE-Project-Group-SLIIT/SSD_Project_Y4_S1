import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import DatePicker from "react-datetime";
import { addEmployees } from "../../services/util/employee";

import Header from "../shared/Header";

export default function AddEmployee() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [nic, setNIC] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState(moment().format('MM-DD-YYYY'));
	const [phoneNumber, setPhoneNumber] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [gender, setGender] = useState("");
	const [joiningDate, setJoiningDate] = useState(moment().format('MM-DD-YYYY'));
	const [designation, setDesignation] = useState("");

	const [TeleErr, setTeleNoErr] = useState("");
	const [NICErr, setNICErr] = useState("");

	async function sendData(e) {
		e.preventDefault();
	  
		const teleValid = TeleValidation();
		const NICValid = NICValidation();
	  
		const newEmployee = {
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
		};
	  
		// Send data to the backend
		if (teleValid === true && NICValid === true) {
		  try {
			const response = await addEmployees(newEmployee); // Call your backend function
			// Handle success response here
			Swal.fire({
			  title: "Success!",
			  text: "Employee Details Added Successfully",
			  icon: "success",
			  showConfirmButton: false,
			  timer: 2000,
			}).then(() => {
			  window.location.replace("/all-employee-list");
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
		}
	  }
	  

	const TeleValidation = () => {
		//validate function

		const TeleErr = {}; //State
		let teleValid = true; //setting flag

		if (phoneNumber.trim().length > 10) {
			TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
			// alert("**Invalid Telephone Number");
			Swal.fire({
				icon: "error",
				title: "Oops...Invalid Telephone Number",
				text: "You enterd Invalid Telephone Number , Try Again !!",
				confirmButtonColor: "#1fc191",
				// footer: '<a href=""#home">Why do I have this issue?</a>'
			});
			teleValid = false;
		} else if (phoneNumber.trim().length < 10) {
			TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
			// alert("**Invalid Telephone Number");
			Swal.fire({
				icon: "error",
				title: "Oops...Invalid Telephone Number",
				text: "You enterd Invalid Telephone Number , Try Again !!",
				confirmButtonColor: "#1fc191",
				// footer: '<a href=""#home">Why do I have this issue?</a>'
			});
			teleValid = false;
		}

		setTeleNoErr(TeleErr); //update error objects

		return teleValid;
	};

	const NICValidation = () => {
		const NICErr = {}; //State
		let NICValid = true; //setting flag

		if (nic.trim().length > 12) {
			NICErr.InValidNIC = " Invalid NIC Number"; // error msg
			// alert("**Invalid NIC Number");
			Swal.fire({
				icon: "error",
				title: "Oops...Invalid NIC Number",
				text: "You enterd invalid NIC , Try Again !!",
				confirmButtonColor: "#1fc191",
				// footer: '<a href=""#home">Why do I have this issue?</a>'
			});
			NICValid = false;
		} else if (nic.trim().length < 10) {
			NICErr.InValidNIC = " Invalid NIC Number"; // error msg
			// alert("**Invalid NIC Number");
			Swal.fire({
				icon: "error",
				title: "Oops... Invalid NIC Number",
				text: "You enterd invalid NIC , Try Again !!",
				confirmButtonColor: "#1fc191",
				// footer: '<a href=""#home">Why do I have this issue?</a>'
			});
			NICValid = false;
		}

		setNICErr(NICErr); //update error objects
		return NICValid;
	};

	const [isMobileValid, setMobileIsValid] = useState(false);
	const [Mobilemessage, setMobileMessage] = useState("");

	const MobileRegex =
		/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

	const validateMobile = (event) => {
		const mobile = event.target.value;
		if (MobileRegex.test(mobile)) {
			setMobileIsValid(true);
			setMobileMessage("Your Mobile Number looks good!");
		} else {
			setMobileIsValid(false);
			setMobileMessage("Please enter a valid Mobile Number!");
		}
	};

	const [isValid, setIsValid] = useState(false);
	const [message, setMessage] = useState("");

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	const validateEmail = (event) => {
		const email = event.target.value;
		if (emailRegex.test(email)) {
			setIsValid(true);
			setMessage("Your email looks good!");
		} else {
			setIsValid(false);
			setMessage("Please enter a valid email!");
		}
	};

	const [isNICValid, setNICIsValid] = useState(false);
	const [NICmessage, setNICMessage] = useState("");

	const NICRegex1 =
		/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;
	const NICRegex2 =
		/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

	const validateNIC = (event) => {
		const NIC = event.target.value;
		if (NICRegex1.test(NIC)) {
			setNICIsValid(true);
			setNICMessage("Your NIC looks good!");
		} else if (NICRegex2.test(NIC)) {
			setNICIsValid(true);
			setNICMessage("Your NIC looks good!");
		} else {
			setNICIsValid(false);
			setNICMessage("Please enter a valid NIC Number!");
		}
	};

	return (
		<div class="page-component-body">
			<Header></Header>
			<div class="container input-main-form-emp pt-3">
				<div class="container border-top">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
							<h3 className="topic-V text-left mt-4 mb-4">
								Add Employee Details
							</h3>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<form
								id="contact-form"
								class="form"
								role="form"
								onSubmit={sendData}>
								<div className="row">
									<div class="form-group col-md-6">
										{/* <label class="form-label" for="Name">Name : </label> */}
										<input
											type="text"
											class="form-control formInput"
											id="Name"
											name="Name"
											placeholder="First Name"
											tabindex="1"
											required
											onChange={(e) => {
												setFirstName(
													e.target.value,
												); // assign value
											}}
										/>
									</div>
									<div class="form-group col-md-6">
										<input
											type="text"
											class="form-control formInput"
											id="Name"
											name="Name"
											placeholder="Last Name"
											tabindex="1"
											required
											onChange={(e) => {
												setLastName(
													e.target.value,
												); // assign value
											}}
										/>
									</div>
								</div>
								<div class="form-group">
									{/* <label class="form-label" for="Address">Address : </label> */}
									<input
										type="text"
										class="form-control formInput"
										id="Address"
										name="Address"
										placeholder="Employee Address"
										tabindex="2"
										required
										onChange={(e) => {
											setAddress(e.target.value); // assign value
										}}
									/>
								</div>

								<div className="row">
									<div class="form-group col-md-6">
										{/* <label class="form-label" for="NIC">NIC : </label> */}
										<input
											type="text"
											class="form-control formInput"
											id="NIC"
											name="NIC"
											placeholder="Employee NIC"
											tabindex="3"
											required
											onChange={(e) => {
												setNIC(e.target.value); //assign value
												validateNIC(e);
											}}
										/>
										<div
											className={`message ${
												isNICValid
													? "success"
													: "error"
											}`}>
											{NICmessage}
										</div>
										{Object.keys(NICErr).map((key) => {
											// return <div style={{ color: "red" }}>{NICErr[key]}</div>
										})}
									</div>

									<div class="form-group col-md-6">
										{/* <label class="form-label" for="Email">Email : </label> */}
										<input
											type="email"
											class="form-control formInput"
											id="Email"
											placeholder="Employee Email"
											tabindex="6"
											required
											onChange={(e) => {
												setEmailAddress(
													e.target.value,
												); //assign value
												validateEmail(e);
											}}
										/>
										<div
											className={`message ${
												isValid
													? "success"
													: "error"
											}`}>
											{message}
										</div>
									</div>
								</div>

								<div className="row">
									<div class="form-group col-md-6">
										{/* <label class="form-label" for="Phone">Phone : </label> */}
										<input
											type="text"
											class="form-control formInput"
											id="Phone"
											placeholder="Employee Contact Number"
											tabindex="5"
											required
											onChange={(e) => {
												setPhoneNumber(
													e.target.value,
												);
												validateMobile(e);
											}}
										/>
										<div
											className={`message ${
												isMobileValid
													? "success"
													: "error"
											}`}>
											{Mobilemessage}
										</div>

										{Object.keys(TeleErr).map(
											(key) => {
												// return<div className ={message}>{TeleErr[key]}</div>
											},
										)}
									</div>
										<div class="form-group col-md-6">
											{/* <label class="form-label" for="Gender">Gender : </label> */}
											<input
												type="radio"
												id="Gender"
												name="Gender"
												value="Male"
												required
												onChange={(e) => {
													setGender(
														e.target.value,
													);
												}}
											/>{" "}
											Male{" "}
											<input
												type="radio"
												id="Gender"
												name="Gender"
												value="Female"
												required
												onChange={(e) => {
													setGender(
														e.target.value,
													);
													// {' '}
												}}
											/>{" "}
											Female
										</div>
									</div>

									<div className="row">
                                    <div class="form-group col-md-6">
										{/* <label class="form-label" for="DOB">DOB : </label> */}
										<input
											type="date"
											class="form-control formInput"
											id="DOB"
											placeholder="Employee DOB"
											tabindex="4"
											required
											onChange={(e) => {
												setDateOfBirth(
													e.target.value,
												);
											}}
										/>
									</div>
									<div class="form-group col-md-6">
										{/* <label class="form-label" for="JoiningDate">JoiningDate : </label> */}
										<input
											type="date"
											class="form-control formInput"
											id="JoiningDate"
											placeholder="Enter JoiningDate"
											tabindex="7"
											required
											onChange={(e) => {
												setJoiningDate(
													e.target.value,
												);
											}}
										/>
									</div>
								</div>
								<div className="row">
									<div class="form-group col-md-6">
										{/* <label class="form-label" for="Designation">Designation : </label> */}
										<input
											type="text"
											class="form-control formInput"
											id="Designation"
											placeholder="Employee Designation"
											tabindex="8"
											required
											onChange={(e) => {
												setDesignation(
													e.target.value,
												);
											}}
										/>
									</div>
								</div>

								<div className="row mt-2 mb-3">
									<div className="col py-3 text-center">
										<button
											type="submit"
											className="btn btn-ok">
											Add
										</button>
									</div>
									<div className="col py-3 text-center">
										<button
											type="reset"
											className="btn btn-reset">
											Cancel
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
