import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import Header from "../shared/Header";
import { viewAllInactiveEmployees } from "../../services/util/employee";

const RemovedEmployee = () => {
	const [employees, setEmployees] = useState([]);
	// const [showEmp, setShowEmp] = useState(false);
	// const [modalEmp, setEmp] = useState([]);

	useEffect(() => {
		async function getEmployees() {
			try {
				let respond = await viewAllInactiveEmployees();
				if (respond.data) {
					setEmployees(respond.data);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getEmployees();
	}, []);

	return (
        <div className="container pt-2">
		<div className="page-component-body">
			<Header></Header>

			<div className="table-emp" style={{ width: "1180px" }}>
				<div class="row table-head mt-3">
					<div class="col">
						<h3 className="float-left ">
							List of Inactive Employees
						</h3>
					</div>
					<a href="/all-employee-list" class="float-right">
						<button class="btn btn-ok white" style={{ marginRight: "25px" }}>
							All Employees
						</button>
					</a>
                    <a href="/active-employee-list" class="float-right">
							<button
								class="btn btn-ok white"
								>
								Active Employees
							</button>
						</a>
				</div>

				<table class="table table-hover">
					<thead class="thead-dark">
						<tr>
							<th class="text-center">First Name</th>
							<th class="text-center">Last Name</th>
							<th class="text-center">Address</th>
							<th class="text-center">Email Address</th>
							<th class="text-center">Phone Number</th>
							<th class="text-center">NIC</th>
							<th class="text-center">Designation</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => {
							return (
								<tr>
									<td class="text-center">
										{employee.firstName}
									</td>
									<td class="text-center">
										{employee.lastName}
									</td>
									<td class="text-center">
										{employee.address}
									</td>
									<td class="text-center">
										{employee.emailAddress}
									</td>
									<td class="text-center">
										{employee.phoneNumber}
									</td>
									<td class="text-center">
										{employee.nic}
									</td>
									<td class="text-center">
										{employee.designation}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
        </div>
	);
};
export default RemovedEmployee;
