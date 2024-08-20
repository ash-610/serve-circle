// src/CreateJobsheet.js
import React, { useState } from 'react';
import './CreateJobsheet.css';

const CreateJobsheet = () => {
  const [jobSheetData, setJobSheetData] = useState({
    serviceType: 'Carry In',
    jobSheetNumberSequence: 'Select',
    jobSheetNumber: '1J55',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    address: '',
    gstin: '',
    productType: '',
    brand: '',
    modelName: '',
    modelNumber: '',
    color: '',
    productConfig: '',
    password: '',
    problem: '',
    imei1: '',
    imei2: '',
    warrantyReference: '',
    condition: '',
    status: 'Warranty',
    estimatedCost: '',
    advancePaid: '',
    receivedItems: [],
    expectedDeliveryDate: '',
    expectedDeliveryTime: '',
    remarks: '',
    technician: '',
    sendAlerts: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJobSheetData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobSheetData); // Handle form submission logic here
  };

  return (
    <form className="job-create-form" onSubmit={handleSubmit}>
      <h2 className="job-form-title">Create New Job Sheet</h2>

      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">Service Type</label>
          <div className="job-radio-group">
            <label className="job-radio-label">
              <input
                type="radio"
                name="serviceType"
                value="Carry In"
                checked={jobSheetData.serviceType === 'Carry In'}
                onChange={handleChange}
              />
              Carry In
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="serviceType"
                value="Pick Up"
                checked={jobSheetData.serviceType === 'Pick Up'}
                onChange={handleChange}
              />
              Pick Up
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="serviceType"
                value="On Site"
                checked={jobSheetData.serviceType === 'On Site'}
                onChange={handleChange}
              />
              On Site
            </label>
          </div>
        </div>

        <div className="job-form-section">
          <label className="job-label">Jobsheet Number Sequence</label>
          <select
            name="jobSheetNumberSequence"
            value={jobSheetData.jobSheetNumberSequence}
            onChange={handleChange}
            className="job-input"
          >
            <option value="Select">Select</option>
            <option value="DEFAULT-JOBSHEET1">DEFAULT-JOBSHEET1</option>
            
          </select>
        </div>

        <div className="job-form-section">
          <label className="job-label">Jobsheet Number</label>
          <input
            type="text"
            name="jobSheetNumber"
            value={jobSheetData.jobSheetNumber}
            // onChange={handleChange}
            className="job-input"
          />
        </div>
      </div>

      <hr/>

      <h3 className="job-section-title">Customer Information</h3>
      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={jobSheetData.lastName}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={jobSheetData.lastName}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Email ID</label>
          <input
            type="email"
            name="email"
            value={jobSheetData.email}
            onChange={handleChange}
            placeholder="Enter valid Email ID's only"
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Mobile Number*</label>
          <input
            type="text"
            name="mobileNumber"
            value={jobSheetData.mobileNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Alternate Mobile Number</label>
          <input
            type="text"
            name="alternateMobileNumber"
            value={jobSheetData.alternateMobileNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Address</label>
          <input
            type="text"
            name="address"
            value={jobSheetData.address}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">GSTIN</label>
          <input
            type="text"
            name="gstin"
            value={jobSheetData.gstin}
            onChange={handleChange}
            className="job-input"
          />
        </div>
      </div>

      <hr/>

      <h3 className="job-section-title">Product Information</h3>
      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">Product Type*</label>
          <select
            name="productType"
            value={jobSheetData.productType}
            onChange={handleChange}
            className="job-input"
          >
            <option value="Select Product Type">Select Product Type</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value=">Charger">Charger</option>
            <option value="Monitor">Monitor</option>
            <option value="CPU">CPU</option>
            <option value="Desktop">Desktop</option>
            <option value="Tablet">Tablet</option>
            <option value="DataCard">DataCard</option>
            <option value="Printer">Printer</option>
            <option value="Router">Router</option>
            <option value="Hard Disk">Hard Disk</option>
            <option value="Speaker">Speaker</option>
            <option value="Other">Other</option>
            <option value="Microwave">Microwave</option>
            <option value="Geyser">Geyser</option>
            <option value="Induction Stove">Induction Stove</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="job-form-section">
          <label className="job-label">Brand*</label>
          <input
            type="text"
            name="brand"
            value={jobSheetData.brand}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Model Name</label>
          <input
            type="text"
            name="modelName"
            value={jobSheetData.modelName}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Model Number</label>
          <input
            type="text"
            name="modelNumber"
            value={jobSheetData.modelNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Colour of the product</label>
          <input
            type="text"
            name="color"
            value={jobSheetData.color}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Product Configuration</label>
          <input
            type="text"
            name="productConfig"
            value={jobSheetData.productConfig}
            onChange={handleChange}
            placeholder="i5 Processor, 8GB ram etc."
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Password/Passcode/Pattern Lock</label>
          <input
            type="text"
            name="password"
            value={jobSheetData.password}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">SI No./IMEI No. 1</label>
          <input
            type="text"
            name="imei1"
            value={jobSheetData.imei1}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">SI No./IMEI No. 2</label>
          <input
            type="text"
            name="imei2"
            value={jobSheetData.imei2}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Problem reported by the customer</label>
          <textarea
            name="problem"
            value={jobSheetData.problem}
            onChange={handleChange}
            className="job-input"
          ></textarea>
        </div>

        <div className="job-form-section">
          <label className="job-label">Condition of the product</label>
          <textarea
            name="condition"
            value={jobSheetData.condition}
            onChange={handleChange}
            placeholder="Scratches, missing screws, water damages etc."
            className="job-input"
          ></textarea>
        </div>

        <div className="job-form-section">
          <label className="job-label">Warranty Reference (fill in case of warranty)</label>
          <input
            name="warrantyReference"
            value={jobSheetData.warrantyReference}
            onChange={handleChange}
            className="job-input"
          ></input>
        </div>

        <div className="job-form-section">
          <label className="job-label">Status</label>
          <div className="job-radio-group">
            <label className="job-radio-label">
              <input
                type="radio"
                name="status"
                value="Warranty"
                checked={jobSheetData.status === 'Warranty'}
                onChange={handleChange}
              />
              Warranty
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="status"
                value="Non Warranty"
                checked={jobSheetData.status === 'Non Warranty'}
                onChange={handleChange}
              />
              Non Warranty
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="status"
                value="AMC"
                checked={jobSheetData.status === 'AMC'}
                onChange={handleChange}
              />
              AMC
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="status"
                value="Return"
                checked={jobSheetData.status === 'Return'}
                onChange={handleChange}
              />
              Return
            </label>
          </div>
        </div>
      </div>

      <hr/>

      <h3 className="job-section-title">Additional Information</h3>
      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">Estimated Cost (Rs.)</label>
          <input
            type="text"
            name="estimatedCost"
            value={jobSheetData.estimatedCost}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Advance Paid (Rs.)</label>
          <input
            type="text"
            name="advancePaid"
            value={jobSheetData.advancePaid}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Expected Delivery Date</label>
          <input
            type="date"
            name="expectedDeliveryDate"
            value={jobSheetData.expectedDeliveryDate}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Expected Delivery Time</label>
          <input
            type="time"
            name="expectedDeliveryTime"
            value={jobSheetData.expectedDeliveryTime}
            onChange={handleChange}
            className="job-input"
          />
        </div>

      </div>


      <div className="job-form-group">

        <div className="job-form-section">
          <label className="job-label">Received Items</label>
          <input
            type="text"
            name="receivedItems"
            value={jobSheetData.receivedItems}
            onChange={handleChange}
            className="job-input"
          />
          <button type="button" className="job-add-item-button"><b>+</b> ADD ITEM</button>
        </div>

        <div className="job-form-section">
          <label className="job-label">Remarks</label>
          <textarea
            name="remarks"
            value={jobSheetData.remarks}
            onChange={handleChange}
            className="job-input"
          ></textarea>
        </div>

        <div className="job-form-section">
          <label className="job-label">Assign Operator/Technician</label>
          <select
            name="technician"
            value={jobSheetData.technician}
            onChange={handleChange}
            className="job-input"
          >
            <option value="">Select User</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="job-form-section">
          <label className="job-checkbox-label">
            <input
              type="checkbox"
              name="sendAlerts"
              checked={jobSheetData.sendAlerts}
              onChange={handleChange}
            />
            Don’t send SMS and E-mail alerts to the customer
          </label>
        </div>
      </div>

      <div className="job-button-group">
        <button type="submit" className="job-save-button">SAVE</button>
        <button type="button" className="job-home-button">GO TO HOME</button>
      </div>
    </form>
  );
};

export default CreateJobsheet;
