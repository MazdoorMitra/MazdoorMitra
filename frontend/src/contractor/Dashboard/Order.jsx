
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function ContractorDashboard() {
  const { contractorId, projectId } = useParams();
  const [orders, setOrders] = useState([]);
  const [labourers, setLabourers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contractors/projects/${projectId}/orders`, {
          params: { contractorId }
        });
        console.log('Orders API Response:', response.data); // Logging the response
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const fetchLabourers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contractors/projects/${projectId}/labourers`, {
          params: { contractorId }
        });
        console.log('Labourers API Response:', response.data); // Logging the response
        setLabourers(response.data.labourers);
      } catch (error) {
        console.error('Error fetching labourers:', error);
      }
    };

    fetchOrders();
    fetchLabourers();
  }, [contractorId, projectId]);

  return (
    <React.Fragment>
      <Title>Recent Payments</Title>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Sale Amount</TableCell>
              <TableCell align="right">Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell align="right">{order.paymentMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>

      <Title>Labourers</Title>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Job Type</TableCell>
              <TableCell>Wage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {labourers.map((labourer) => (
              <TableRow key={labourer.id}>
                <TableCell>{labourer.name}</TableCell>
                <TableCell>{labourer.location}</TableCell>
                <TableCell>{labourer.jobType}</TableCell>
                <TableCell>{labourer.wage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more labourers
      </Link>
    </React.Fragment>
  );
}

