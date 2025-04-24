// File: src/pages/ClientList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

export default function ClientList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [clients, setClients] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phone: '+1 (123) 456-7890',
      location: 'New York, USA',
      lastOrder: '2025-03-15',
      status: 'active',
      value: 'high',
    },
    {
      id: 2,
      firstName: 'Emma',
      lastName: 'Johnson',
      email: 'emma.johnson@example.com',
      phone: '+1 (234) 567-8901',
      location: 'London, UK',
      lastOrder: '2025-04-02',
      status: 'active',
      value: 'medium',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      phone: '+1 (345) 678-9012',
      location: 'Sydney, Australia',
      lastOrder: '2025-02-20',
      status: 'inactive',
      value: 'high',
    },
    {
      id: 4,
      firstName: 'Sophia',
      lastName: 'Miller',
      email: 'sophia.miller@example.com',
      phone: '+1 (456) 789-0123',
      location: 'Toronto, Canada',
      lastOrder: '2025-04-10',
      status: 'active',
      value: 'high',
    },
    {
      id: 5,
      firstName: 'James',
      lastName: 'Davis',
      email: 'james.davis@example.com',
      phone: '+1 (567) 890-1234',
      location: 'Singapore',
      lastOrder: '2025-01-05',
      status: 'inactive',
      value: 'low',
    },
    {
      id: 6,
      firstName: 'Olivia',
      lastName: 'Wilson',
      email: 'olivia.wilson@example.com',
      phone: '+1 (678) 901-2345',
      location: 'Paris, France',
      lastOrder: '2025-03-28',
      status: 'active',
      value: 'medium',
    },
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleClientClick = (clientId) => {
    navigate(`/clients/${clientId}`);
  };

  const filterClientsByTab = (clients) => {
    if (activeTab === 0) return clients; // All clients
    if (activeTab === 1) return clients.filter((client) => client.status === 'active'); // Active
    if (activeTab === 2) return clients.filter((client) => client.value === 'high'); // High value
    if (activeTab === 3) return clients.filter((client) => client.status === 'inactive'); // Inactive
    return clients;
  };

  const filteredClients = filterClientsByTab(clients).filter(
    (client) =>
      client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Clients</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/clients/new')}
        >
          New Client
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Box sx={{ px: 2, pt: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Search by name, email, or location"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={handleFilterClick}
              >
                Filter
              </Button>
              <Menu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={handleFilterClose}
              >
                <MenuItem onClick={handleFilterClose}>By Last Order</MenuItem>
                <MenuItem onClick={handleFilterClose}>By Value</MenuItem>
                <MenuItem onClick={handleFilterClose}>By Location</MenuItem>
                <Divider />
                <MenuItem onClick={handleFilterClose}>Reset Filters</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Box>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ px: 2 }}
        >
          <Tab label="All Clients" />
          <Tab label="Active" />
          <Tab label="High Value" />
          <Tab label="Inactive" />
        </Tabs>
      </Paper>

      <Grid container spacing={3}>
        {filteredClients.map((client) => (
          <Grid item xs={12} sm={6} md={4} key={client.id}>
            <Card
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
              onClick={() => handleClientClick(client.id)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        mr: 2,
                        bgcolor:
                          client.value === 'high'
                            ? 'primary.main'
                            : client.value === 'medium'
                            ? 'warning.main'
                            : 'grey.400',
                      }}
                    >
                      {client.firstName.charAt(0)}
                      {client.lastName.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">
                        {client.firstName} {client.lastName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {client.location}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2">{client.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2">{client.phone}</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Last order: {client.lastOrder}
                  </Typography>
                  <Chip
                    label={client.status === 'active' ? 'Active' : 'Inactive'}
                    color={client.status === 'active' ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredClients.length === 0 && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No clients found matching "{searchTerm}"
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ mt: 2 }}
            onClick={() => navigate('/clients/new')}
          >
            Add New Client
          </Button>
        </Box>
      )}
    </Box>
  );
}