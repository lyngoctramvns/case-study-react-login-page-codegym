import React from "react";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCheckbox,
  MDBInput
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css"; // add this line to import the styles

function Input() {
  return (
    <form>
      <label>
        Website
        <MDBInput type="text" name="website"/>
      </label>
      <label>
        Password
        <MDBInput type = "text" name = "password"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function Tablelist() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MDBTable align="middle" style={{ width: "70%" }}>
        <MDBTableHead light>
          <tr>
            <th scope="col">
              <MDBCheckbox></MDBCheckbox>
            </th>
            <th scope="col">Lorem</th>
            <th scope="col">Ipsum</th>
            <th scope="col">Dolor</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="col">
              <MDBCheckbox></MDBCheckbox>
            </th>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
          </tr>
          <tr>
            <th scope="col">
              <MDBCheckbox></MDBCheckbox>
            </th>
            <td>Adipsicing</td>
            <td>Elit</td>
            <td>Sint</td>
          </tr>
          <tr>
            <th scope="col">
              <MDBCheckbox></MDBCheckbox>
            </th>
            <td>Hic</td>
            <td>Fugiat</td>
            <td>Temporibus</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default function Table() {
  return (
    <div>
      <React.Fragment>
        <Input />
        <Tablelist />
      </React.Fragment>
    </div>
  );
}
