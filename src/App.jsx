import React, { useState } from "react";

function App() {
  const [empData, setEmpData] = useState({});
  const [empList, setEmpList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "department") {
      let department = empData.department || [];

      if (checked) {
        department.push(value);
      } else {
        department = department.filter((dept) => dept !== value);
      }
      setEmpData({ ...empData, department });
    } else {
      setEmpData({ ...empData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedEmpList = empList.map((emp) => {
        if (emp.id === editId) {
          return empData;
        } else {
          return emp;
        }
      });
      setEmpList(updatedEmpList);
      setEditId(null);
    } else {
      setEmpList([
        ...empList,
        { id: Date.now(), ...empData, department: [...empData.department || []] },
      ]);
    }

    setEmpData({});
  };

  const handleDelete = (id) => {
    const newList = empList.filter((oldEmp) => oldEmp.id !== id);
    setEmpList(newList);
  };

  const handleEdit = (id) => {
    const editEmp = empList.find((emp) => emp.id === id);
    setEmpData(editEmp);
    setEditId(id);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form className="border rounded p-4 shadow-lg bg-white" onSubmit={handleSubmit}>
            <h2 className="text-center text-primary mb-4">Employee Management System</h2>

            <div className="mb-3">
              <label htmlFor="ename" className="form-label">Employee Name:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="ename"
                id="ename"
                placeholder="Enter employee name"
                value={empData.ename || ""}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label d-block">Gender:</label>
              <div className="form-check form-check-inline">
                <input
                  onChange={handleChange}
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={empData.gender === "male"}
                  required
                />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onChange={handleChange}
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={empData.gender === "female"}
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label d-block">Department:</label>
              {["HR", "IT", "Marketing"].map((dept) => (
                <div className="form-check form-check-inline" key={dept}>
                  <input
                    onChange={handleChange}
                    className="form-check-input"
                    type="checkbox"
                    id={dept}
                    name="department"
                    value={dept}
                    checked={empData.department?empData.department.includes(dept) : false}
                  />
                  <label className="form-check-label" htmlFor={dept}>
                    {dept}
                  </label>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Salary:</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  name="salary"
                  id="salary"
                  placeholder="Enter salary"
                  value={empData.salary || ""}
                  min="25000"
                  max="100000"
                  required
                />
              </div>
              <div className="form-text">Salary must be between ₹25,000 and ₹1,00,000.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">City:</label>
              <select
                onChange={handleChange}
                className="form-select"
                id="city"
                name="city"
                value={empData.city || ""}
                required
              >
                <option value="" disabled hidden>-- Select City --</option>
                <option value="Surat">Surat</option>
                <option value="Navsari">Navsari</option>
                <option value="Valsad">Valsad</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address:</label>
              <textarea
                className="form-control"
                id="address"
                rows={3}
                name="address"
                placeholder="Enter address"
                onChange={handleChange}
                value={empData.address || ""}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">
                {editId ? "Update" : "Submit"}
              </button>
            </div>
          </form>

          {/* Employee Table */}
          <div className="mt-5">
            <h4 className="mb-3 text-secondary">Employee List</h4>
            {empList.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th>#</th>
                      <th>Emp Name</th>
                      <th>Gender</th>
                      <th>Dept</th>
                      <th>Salary</th>
                      <th>City</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {empList.map((emp, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.gender}</td>
                        <td>
                          {emp.department?.map((dept, i) => (
                            <span key={i} className="badge bg-info me-1">
                              {dept}
                            </span>
                          ))}
                        </td>
                        <td>₹ {emp.salary}</td>
                        <td>{emp.city}</td>
                        <td>{emp.address}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger me-1"
                            onClick={() => handleDelete(emp.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() => handleEdit(emp.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="alert alert-info">No employees added yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;