import React, { useState } from 'react';
import Header from './Header';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

function Attendance() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [laborers, setLaborers] = useState([
    { id: 1, name: 'Aman', attendance: 'Present', timestamp: new Date().toLocaleString() },
    { id: 2, name: 'Deepak', attendance: 'Absent', timestamp: null },
    { id: 3, name: 'Anurag', attendance: 'Present', timestamp: new Date().toLocaleString() },
  ]);

  const handleAttendanceChange = (laborerId, newAttendance) => {
    const updatedLaborers = laborers.map((laborer) =>
      laborer.id === laborerId
        ? { ...laborer, attendance: newAttendance, timestamp: newAttendance === 'Present' ? new Date().toLocaleString() : null }
        : laborer
    );
    setLaborers(updatedLaborers);
  };

  const getLastAttendance = (laborer) => {
    if (laborer.attendance === 'Present') {
      return laborer.timestamp;
    }
    return 'No attendance marked';
  };

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      laborers.map((laborer) => Object.values(laborer).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleSubmit = () => {
    // Here you can submit the attendance data to the server
    console.log('Attendance submitted:', laborers);
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <TextField
          id="date"
          label="Select Date"
          type="text"
          value={selectedDate.toDateString()}
          onClick={() => setShowCalendar(true)}
          style={{ marginBottom: '20px' }}
        />
        {showCalendar && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Calendar
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false); // Hide the calendar when a date is clicked
              }}
              value={selectedDate}
            />
          </div>
        )}
        <h2>Attendance for {selectedDate.toDateString()}</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Attendance</TableCell>
                <TableCell>Last Marked Attendance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {laborers.map((laborer) => (
                <TableRow key={laborer.id}>
                  <TableCell>{laborer.name}</TableCell>
                  <TableCell>
                    <ToggleButtonGroup
                      value={laborer.attendance}
                      exclusive
                      onChange={(event, newAttendance) =>
                        handleAttendanceChange(laborer.id, newAttendance)
                      }
                    >
                      <ToggleButton value="Present">Present</ToggleButton>
                      <ToggleButton value="Absent">Absent</ToggleButton>
                    </ToggleButtonGroup>
                  </TableCell>
                  <TableCell>{getLastAttendance(laborer)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Attendance
        </Button>
        <Button variant="contained" onClick={downloadCSV} style={{ marginLeft: '10px' }}>
          Download CSV
        </Button>
      </div>
    
    </>
  );
}

export default Attendance;

