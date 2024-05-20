import React, { useState } from 'react';
import Header from './Header1'; // Import Header component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

// Sample data for schemes
const schemes = [
  {
    id: 1,
    title: 'Pradhan Mantri Shram Yogi Maan-Dhan Yojana (PM-SYM) (Old Age Protection)',
    description: 'Voluntary and contributory pension scheme. Monthly contribution ranges from Rs.55 to Rs.200 depending upon the entry age of the beneficiary. Under this scheme, 50% monthly contribution is payable by the beneficiary and equal matching contribution is paid by the Central Government.',
    visitLink: 'visit_link_for_scheme_1',
    state: 'Maharashtra' // Assuming scheme belongs to a specific state
  },
  // Add more schemes as needed
  {
    id: 3,
    title: 'Maharashtra Construction Workers Welfare Board Scheme',
    description: 'Provides financial assistance, insurance coverage, and various welfare measures for construction workers in Maharashtra.',
    visitLink: 'visit_link_for_scheme_3',
    state: 'Maharashtra'
  },
  {
    id: 4,
    title: 'Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)',
    description: 'A health insurance scheme for workers in the unorganized sector, offering cashless treatment for critical illnesses.',
    visitLink: 'visit_link_for_scheme_4',
    state: 'Maharashtra'
  },
  {
    id: 5,
    title: 'Kerala Labour Welfare Fund',
    description: 'A fund managed by the Labour Welfare Board, Kerala, which provides financial assistance for education, healthcare, marriage, and housing for workers.',
    visitLink: 'visit_link_for_scheme_5',
    state: 'Kerala'
  },
  {
    id: 6,
    title: 'Kerala Housing Fund Scheme for Workers',
    description: 'Provides financial assistance for housing to registered construction workers in Kerala.',
    visitLink: 'visit_link_for_scheme_6',
    state: 'Kerala'
  },
  {
    id: 7,
    title: 'Tamil Nadu Manual Workers Social Security and Welfare Scheme',
    description: 'Offers various benefits including maternity assistance, education assistance, health insurance, and old-age pension for manual workers.',
    visitLink: 'visit_link_for_scheme_7',
    state: 'Tamil Nadu'
  },
  {
    id: 8,
    title: 'Unorganised Workers Social Security Scheme (Tamil Nadu)',
    description: 'Provides social security benefits such as accident insurance, death benefits, and educational assistance to unorganized sector workers in Tamil Nadu.',
    visitLink: 'visit_link_for_scheme_8',
    state: 'Tamil Nadu'
  },
  // Add more schemes as needed
];

function SchemeDashboard() {
  const [selectedState, setSelectedState] = useState('National');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Filter schemes based on selected state
  const filteredSchemes = selectedState === 'National' ? schemes : schemes.filter(scheme => scheme.state === selectedState);

  return (
    <div>
      <Header /> {/* Include Header component */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Central Government/State Government Schemes for Labourers
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" gutterBottom style={{ marginRight: '10px' }}>
            Select State:
          </Typography>
          <Select
            value={selectedState}
            onChange={handleStateChange}
            variant="outlined"
            style={{ minWidth: '120px', marginRight: '10px' }}
          >
            <MenuItem value="National">National</MenuItem>
            <MenuItem value="Maharashtra">Maharashtra</MenuItem>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
            <MenuItem value="Kerala">Kerala</MenuItem>
            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
            {/* Add more states as needed */}
          </Select>
        
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredSchemes.map(scheme => (
            <Card key={scheme.id} style={{ width: '300px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: '0.3s' }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {scheme.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {scheme.description}
                </Typography>
              </CardContent>
              <Button href={scheme.visitLink} target="_blank" rel="noopener noreferrer" variant="contained" style={{ marginTop: 'auto', marginLeft: 'auto' }}>
                Visit Link
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SchemeDashboard;
