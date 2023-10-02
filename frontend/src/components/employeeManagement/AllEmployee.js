import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  viewEmployees,
  inactiveEmployee,
  activeEmployee,
} from "../../services/util/employee";
import UpdateEmployee from "./UpdateEmployee";
import Header from "../shared/Header";

export default function AllEmployee() {
  // const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState([]);

  const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
  const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] = useState(false);

  const [ModalEmpDelete, setModalEmpDelete] = useState([]);
  const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] = useState(false);

  const [ModalEmpActive, setModalEmpActive] = useState([]);
  const [ModalEmpActiveConfirm, setModalEmpActiveConfirm] = useState(false);

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openRestoreConfirm, setOpenRestoreConfirm] = useState(false);

  useEffect(() => {
    async function getEmployees() {
      try {
        let respond = await viewEmployees();
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

  const deleteEmployee = async (id) => {
    try {
      const response = await inactiveEmployee(id);
      // You can handle the response as needed
      if (response.status === 200) {
        // Employee was made inactive successfully
        return response.data;
      } else {
        // Handle the error case
        throw new Error("Failed to make the employee inactive");
      }
    } catch (error) {
      // Handle any other errors
      console.error("An error occurred:", error);
      throw error;
    }
  };

  const restoreEmployee = async (id) => {
    try {
      const response = await activeEmployee(id);
      // You can handle the response as needed
      if (response.status === 200) {
        // Employee was made inactive successfully
        return response.data;
      } else {
        // Handle the error case
        throw new Error("Failed to make the employee inactive");
      }
    } catch (error) {
      // Handle any other errors
      console.error("An error occurred:", error);
      throw error;
    }
  };

  const openModalEmpUpdate = (data) => {
    setModalEmpUpdate(data);
    setModalEmpUpdateConfirm(true);
  };

  const openModalEmpDelete = (data) => {
    setModalEmpDelete(data);
    setModalEmpDeleteConfirm(true);
  };

  const openModalEmpActivate = (data) => {
    setModalEmpActive(data);
    setModalEmpActiveConfirm(true);
  };

  return (
    <div className="container pt-2">
      <div className="page-component-body">
        <Header></Header>

        <div className="table-emp" style={{ width: "1180px" }}>
          <div class="row table-head mt-4 mb-5">
            <div class="col">
              <h3 className="float-left">List of All Employees</h3>
            </div>
            <a href="/add-new-employee" class="float-right">
              <button class="btn btn-ok white" style={{ marginRight: "25px" }}>
                + &nbsp; Add Employee
              </button>
            </a>
            <a href="/active-employee-list" class="float-right">
              <button class="btn btn-ok white" style={{ marginRight: "25px" }}>
                Active Employees
              </button>
            </a>
            <a href="/inactive-employee-list" class="float-right">
              <button class="btn btn-ok white">Inactive Employees</button>
            </a>
          </div>

          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th class="text-center" style={{ width: "105px" }}>
                  First Name
                </th>
                <th class="text-center" style={{ width: "105px" }}>
                  Last Name
                </th>
                <th class="text-center" style={{ width: "115px" }}>
                  Address
                </th>
                <th class="text-center" style={{ width: "115px" }}>
                  Email Address
                </th>
                <th class="text-center" style={{ width: "120px" }}>
                  Phone Number
                </th>
                <th class="text-center" style={{ width: "115px" }}>
                  NIC
                </th>
                <th class="text-center" style={{ width: "95px" }}>
                  Designation
                </th>
                <th class="text-center" style={{ width: "155px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr>
                    <td class="text-center">{employee.firstName}</td>
                    <td class="text-center">{employee.lastName}</td>
                    <td class="text-center">{employee.address}</td>
                    <td class="text-center">{employee.emailAddress}</td>
                    <td class="text-center">{employee.phoneNumber}</td>
                    <td class="text-center">{employee.nic}</td>
                    <td class="text-center">{employee.designation}</td>
                    <td class="text-center">
                      <button
                        class="btn btn-warning btn-sm"
                        style={{
                          marginRight: "4px",
                        }}
                        onClick={() => openModalEmpUpdate(employee)}
                      >
                        Update
                      </button>
                      {employee.isActive ? ( // Check if employee.isActive is true
                        <button
                          onClick={() => openModalEmpDelete(employee)}
                          class="btn btn-danger btn-sm"
                        >
                          Inactive
                        </button>
                      ) : (
                        // If employee.isActive is false
                        <button
                          onClick={() => openModalEmpActivate(employee)}
                          class="btn btn-success btn-sm"
                        >
                          Active
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* modal for update employee details */}
        <Modal
          show={ModalEmpUpdateConfirm}
          onHide={() => setModalEmpUpdateConfirm(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <UpdateEmployee
            data={ModalEmpUpdate}
            onHide={() => setModalEmpUpdate(false)}
          />
        </Modal>

        {/* modal for delete employee details */}
		<Modal
          show={ModalEmpDeleteConfirm}
          onHide={() => setModalEmpDeleteConfirm(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Inactive Employee Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Would you like to inactive this employee's details ?</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col -6">
                <button
                  type="submit"
                  className="btn btn-delete"
                  onClick={() => {
					setOpenConfirm(true);
                  }}
                >
                  Inactive
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          show={openConfirm}
          onHide={() => setModalEmpDeleteConfirm(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to inactive this employee's details ?</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col -6">
                <button
                  type="submit"
                  className="btn btn-delete"
                  onClick={() => {
                    deleteEmployee(ModalEmpDelete);
                  }}
                >
                  Confirm
                </button>
              </div>
              <div
                className="col-6 text-right"
                onClick={() => setOpenConfirm(false)}
              >
                <button type="reset" className="btn btn-reset">
                  cancel
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>

        {/* modal for active employee details */}
		<Modal
          show={ModalEmpActiveConfirm}
          onHide={() => setModalEmpActiveConfirm(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Active Employee Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Would you like to active this employee's details ?</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col -6">
                <button
                  type="submit"
                  className="btn btn-delete"
                  onClick={() => {
					setOpenRestoreConfirm(true);
                  }}
                >
                  Active
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          show={openRestoreConfirm}
          onHide={() => setModalEmpActiveConfirm(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Would you like to active this employee's details ?</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col -6">
                <button
                  type="submit"
                  className="btn btn-delete"
                  onClick={() => {
                    restoreEmployee(ModalEmpActive);
                  }}
                >
                  Confirm
                </button>
              </div>
              <div
                className="col-6 text-right"
				onClick={() => setOpenRestoreConfirm(false)}
              >
                <button type="reset" className="btn btn-reset">
                  cancel
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
