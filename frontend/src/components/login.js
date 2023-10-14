import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { signin, getAccountStatus } from "./../services/util/auth";
import Swal from "sweetalert2";

export default function LoginUser() {
	let history = useHistory();
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState([]);

	async function checkUser(e) {
		//function checks the availbilty of the admin within the system
		e.preventDefault();
		//pass the username and password and if exact user exsits will be directed to dashbord else it will display error for unavailable user
		let respond = await signin(username, password);
		if (respond.success === true) {
			handleRedirect();
		} else {
			Swal.fire({
				title: "Error!",
				text: "Invalid user credentials",
				icon: "error",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				// window.location.replace("/all-employee-list");
			});
		}
	}

	function handleRedirect() {
		window.location.href = "/all-employee-list";
	}

	return (
		<div>
			<br />

			<br />

			<div className="container">
				<div className="row px-3">
					<div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
						<div className="img-left d-none d-md-flex">
							<img
								src="/images/City driver.png"
								width="350px"
								height="350px"
							/>
						</div>
						<div className="card-body">
							<h4 className="title text-center mt-4">
								Login
							</h4>
							<form
								className="form-box px-3"
								onSubmit={checkUser}>
								<div className="form-input">
									<input
										type="text"
										name=""
										placeholder="Username"
										tabIndex="10"
										required
										onChange={(event) => {
											setUserName(
												event.target.value,
											);
										}}
									/>
								</div>
								<div className="form-input">
									<input
										type="password"
										name=""
										placeholder="Password"
										tabIndex="10"
										required
										onChange={(event) => {
											setPassword(
												event.target.value,
											);
										}}
									/>
								</div>
								{/* <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="cb1"/>{" "}
                            <label className="custom-control-label" for="cb1">Remember me</label>
                        </div>
                    </div> */}
								<div className="mb-3">
									<button
										class="btn btn-ok white"
										onClick={{ handleRedirect }}
										style={{
											marginRight: "25px",
											borderRadius: 20,
											width: 120,
											fontWeight: 600,
											marginTop: 10,
										}}>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />
			<br />
			<br />

			<br />
			<br />

			<br />
			<br />
			<br />

			<br />
			<br />
		</div>
	);
}
