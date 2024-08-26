import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFile, faChartBar, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Link } from 'react-router-dom';
import Sidenavbar from './Sidenavbar';

function Uploadpg() {
  const [showSidebar, setShowSidebar] = useState(true);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Faculty Appraisal Report", 10, 10);

    const appraisalDetailsTable = document.getElementById('appraisalDetailsTable');

    function extractTableText(tableElement) {
      const rows = tableElement.querySelectorAll('tr');
      const tableData = [];
      rows.forEach((row, rowIndex) => {
        if (rowIndex === 0) return; 
        const columns = row.querySelectorAll('td');
        const rowData = [];
        columns.forEach(cell => {
          rowData.push(cell.textContent.trim());
        });
        tableData.push(rowData);
      });
      return tableData;
    }

    const appraisalDetails = extractTableText(appraisalDetailsTable);
    const tableHeaders = Array.from(appraisalDetailsTable.querySelectorAll('th')).map(th => th.textContent.trim());
    const tableBody = appraisalDetails;

    doc.autoTable({
      head: [tableHeaders],
      body: tableBody,
      startY: 20,
      theme: 'striped',
      headStyles: { 
        fillColor: [0, 120, 215],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      styles: { 
        cellPadding: 5, 
        fontSize: 10, 
        cellWidth: 'auto', 
        overflow: 'linebreak',
        lineColor: [0, 0, 0], 
        textColor: [0, 0, 0] 
      },
      margin: { horizontal: 10 },
      alternateRowStyles: { fillColor: [240, 240, 240] } 
    });

    doc.save("faculty_appraisal_report.pdf");
  };

  return (
    <div className="container">
      <Sidenavbar />
      <div className="main-content">
        <div className="header">
          <h1>Faculty Portal</h1>
        </div>
        <div className="faculty-details" id="facultyDetails">
          <h2>Faculty Details</h2>
          <p><strong>Full Name:</strong> John Doe</p>
          <p><strong>Unique ID:</strong> 12345</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Exp Points:</strong> 123</p>
        </div>
        <div className="appraisal-details" id="appraisalDetails">
          <h3>Appraisal Details</h3>
          <table id="appraisalDetailsTable">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Exp Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>International Awards</td>
                <td className="exp-points">100</td>
              </tr>
              <tr>
                <td>National Awards</td>
                <td className="exp-points">50</td>
              </tr>
              <tr>
                <td>International Conferences</td>
                <td className="exp-points">75</td>
              </tr>
              <tr>
                <td>National Conferences</td>
                <td className="exp-points">50</td>
              </tr>
              <tr>
                <td>Seminars Delivered</td>
                <td className="exp-points">25</td>
              </tr>
              <tr>
                <td>International Journals</td>
                <td className="exp-points">150</td>
              </tr>
              <tr>
                <td>National Journals</td>
                <td className="exp-points">100</td>
              </tr>
              <tr>
                <td>Guest Lectures Delivered</td>
                <td className="exp-points">50</td>
              </tr>
              <tr>
                <td>Online/Offline Courses</td>
                <td className="exp-points">25</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttons">
          <button className="save">Save</button>
          <button className="upload" onClick={generatePDF}>Upload</button>
        </div>
      </div>
    </div>
  );
}
 
export default Uploadpg