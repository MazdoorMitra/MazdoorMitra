import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';

import Title from './Title';

// Generate Orders Data
function createData(id, date, customer, amount, card, transaction) {
  return { id, date, amount: amount ?? null };
}

const orders = [
  createData(0, '20 Feb, 2024', 'Abhishek', 2500, 'VISA ⠀•••• 3719', 312.44),
  createData(1, '1 Mar, 2024', 'Annuj', 5000, 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2024', 'Rohan', 1000, 'MC ⠀•••• 1253', 100.81),
  createData(3, '3 Apr, 2024', 'Anil', 2000, 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '7 Apr, 2024', 'Aman', 10000, 'VISA ⠀•••• 5919', 212.79),
];

export default function Chart() {
  const theme = useTheme();

  // Extracting payment dates and amounts from orders
  const data = orders.map(order => ({
    time: order.date,
    amount: order.amount
  }));

  return (
    <React.Fragment>
      <Title>Date vs Amount</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 2,
              tickLabelStyle: theme.typography.body2,
            },
          ]}
          yAxis={[
            {
              label: 'Amount (₹)',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2,
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
