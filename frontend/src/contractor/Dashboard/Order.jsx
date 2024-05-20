import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer'; // Import TableContainer
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, paymentMethod, amount) {
  return { id, date, name, paymentMethod, amount };
}

const orders = [
  createData(0, '20 Feb, 2024', 'Anuj', 2500, 'VISA ⠀•••• 3719', 312.44),
  createData(1, '1 Mar, 2024', 'Rohan', 5000, 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Manan', '1000', 'MC ⠀•••• 1253', 100.81),
  createData(3, '3 Apr, 2024', 'Abhishek', 2000, 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '7 Apr, 2024', 'Anurag', 10000, 'VISA ⠀•••• 5919', 212.79),
];

// Generate Labourer Data
function createLabourer(id, name, location, jobType, wage) {
  return { id, name, location, jobType, wage };
}

const labourers = [
  createLabourer(0, 'Anuj', 'paota,Jodhpur', 'Construction', 20),
  createLabourer(1, 'Anurag', 'jodhpur', 'Landscaping', 18),
  createLabourer(2, 'Ram', 'ratnada,Jodhpur', 'Plumbing', 25),
  createLabourer(3, 'Rita', 'Jodpur', 'Painting', 22),
  createLabourer(4, 'Shayam', 'Jodhpur', 'Carpentry', 21),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Dashboard() {
  return (
    <React.Fragment>
      <Title>Recent Payments</Title>
      <TableContainer> {/* Wrap the table inside TableContainer */}
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
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell align="right">{`$${order.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>

      <Title>Labourers</Title>
      <TableContainer> {/* Wrap the table inside TableContainer */}
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Job Type</TableCell>
              <TableCell>Wage</TableCell> {/* Include Wage column here */}
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
