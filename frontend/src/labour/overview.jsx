// Dashboard.jsx

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import Header from './Header1'; // Import the Header component

function Dashboard() {
  // Sample data for projects, earnings, and labor details
  const [data] = useState([
    { project: 'R.K Construction', earnings: 30000, location: 'Karwar,Jodhpur' },
    { project: 'Mall Construction', earnings: 65000, location: 'Mall Road,Jodhpur' },
    { project: 'IITJ Construction', earnings: 50000, location: 'IITJ,Jodhpur' },
  ]);

  // Calculate total earnings
  const totalEarnings = data.reduce((total, item) => total + item.earnings, 0);

  // Define custom colors for pie chart segments
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div style={styles.dashboardContainer}>
        <div style={styles.profileContainer}>
          <Avatar sx={styles.avatar}>L</Avatar>
          <Typography variant="h5" gutterBottom style={styles.username}>
            Lakshman Kumar
          </Typography>
        </div>
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell style={styles.tableHeader}>Labor Name</TableCell> */}
                <TableCell style={styles.tableHeader}>Project Name</TableCell>
                <TableCell style={styles.tableHeader}>Location</TableCell>
                <TableCell style={styles.tableHeader}>Total Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  {/* <TableCell>{item.labor}</TableCell> */}
                  <TableCell>{item.project}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>₹{item.earnings}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="earnings"
              nameKey="project"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <Typography variant="h6" gutterBottom style={styles.totalEarnings}>
          Total Earnings: ₹{totalEarnings}
        </Typography>
      </div>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  headerContainer: {
    backgroundColor: '#282c34',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#03BFCB',
    color: '#fff',
    fontSize: '48px',
  },
  username: {
    color: '#000',
  },
  totalEarnings: {
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  tableContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  tableHeader: {
    fontWeight: 'bold',
    backgroundColor: '#03BFCB',
    color: '#fff',
  },
  welcomeText: {
    marginTop: '30px',
  },
};

export default Dashboard;

