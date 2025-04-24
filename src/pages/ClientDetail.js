// File: src/pages/ClientDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Avatar,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Divider,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Assignment as OrderIcon,
  Straighten as MeasureIcon,
  Event as AppointmentIcon,
  Message as MessageIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Add as AddIcon,
} from '@mui/icons-material';

export default function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');

  useEffect(() => {
    // Simulate fetching client data
    setTimeout(() => {
      const mockClients = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          email: 'john.smith@example.com',
          phone: '+1 (123) 456-7890',
          address: '123 Broadway Ave',
          city: 'New York',
          country: 'USA',
          postalCode: '10001',
          lastOrder: '2025-03-15',
          status: 'active',
          value: 'high',
          joinDate: '2023-01-10',
          totalSpent: 3750,
          measurements: {
            lastUpdated: '2025-02-15',
            neck: 39,
            chest: 102,
            waist: 89,
            shoulder: 47,
            sleeveLength: 65,
            inseam: 81,
          },
          orders: [
            {
              id: 'ORD-001',
              date: '2025-03-15',
              status: 'Processing',
              items: 'Suit, 2 Shirts',
              total: 1250,
            },
            {
              id: 'ORD-008',
              date: '2025-01-20',
              status: 'Completed',
              items: 'Waistcoat, Trousers',
              total: 680,
            },
            {
              id: 'ORD-014',
              date: '2024-11-05',
              status: 'Delivered',
              items: '3 Shirts',
              total: 450,
            },
            {
              id: 'ORD-022',
              date: '2024-08-12',
              status: 'Delivered',
              items: 'Blazer, 2 Shirts',
              total: 950,
            },
          ],
          appointments: [
            {
              id: 'APT-002',
              date: '2025-04-28',
              time: '11:00 AM',
              purpose: 'Fitting',
              location: 'Phuket Shop',
              status: 'Confirmed',
            },
            {
              id: 'APT-001',
              date: '2025-03-10',
              time: '10:30 AM',
              purpose: 'Initial Measurement',
              location: 'New York',
              status: 'Completed',
            },
          ],
          notes: [
            {
              id: 1,
              date: '2025-03-10',
              text: 'Client prefers slightly looser fit around the shoulders.',
              author: 'Tailor',
            },
            {
              id: 2,
              date: '2025-02-15',
              text: 'Special preference for mother of pearl buttons.',
              author: 'Tailor',
            },
          ],
          preferences: {
            fit: 'Regular',
            fabric: 'Wool, Linen',
            colors: ['Blue', 'Gray', 'Burgundy'],
            patterns: ['Solid', 'Pinstripe'],
            notes: 'Allergic to polyester. Prefers natural fibers.',
          },
        },
        // Additional clients would be here
      ];

      const clientData = mockClients.find(c => c.id === parseInt(id));
      setClient(clientData);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAddNote = () => {
    if (note.trim()) {
      const newNote = {
        id: client.notes.length + 1,
        date: new Date().toISOString().split('T')[0],
        text: note,
        author: 'Tailor',
      };
      setClient(prev => ({
        ...prev,
        notes: [newNote, ...prev.notes],
      }));
      setNote('');
    }
  };

  const getStatusChipColor = (status) => {
    switch (status) {
      case 'Processing':
        return 'primary';
      case 'Ready for Fitting':
        return 'warning';
      case 'Completed':
        return 'success';
      case 'Delivered':
        return 'success';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Typography>Loading client information...</Typography>
      </Box>
    );
  }

  if (!client) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Typography>Client not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: client.value === 'high' ? 'primary.main' : 'secondary.main',
                  mr: 2,
                }}
              >
                {client.firstName.charAt(0)}
                {client.lastName.charAt(0)}
              </Avatar>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h4" gutterBottom sx={{ mr: 1 }}>
                    {client.firstName} {client.lastName}
                  </Typography>
                  {client.value === 'high' && <StarIcon color="warning" />}
                </Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Client since {client.joinDate}
                </Typography>
                <Box sx={{ display: 'flex', mt: 1 }}>
                  <Chip 
                    label={client.status === 'active' ? 'Active Client' : 'Inactive Client'} 
                    color={client.status === 'active' ? 'success' : 'default'}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Chip 
                    label={`${client.value.charAt(0).toUpperCase() + client.value.slice(1)} Value`}
                    color={client.value === 'high' ? 'primary' : 'secondary'}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, alignItems: 'center' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              color="primary"
              onClick={() => navigate('/orders/new')}
              sx={{ mr: 1 }}
            >
              New Order
            </Button>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => navigate(`/clients/edit/${client.id}`)}
            >
              Edit
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">{client.phone}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">{client.email}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">
                {client.city}, {client.country}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Overview" />
          <Tab label="Measurements" />
          <Tab label="Orders" />
          <Tab label="Appointments" />
          <Tab label="Notes" />
        </Tabs>
      </Paper>

      {/* Overview Tab Content */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Client Summary" />
              <Divider />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Spent
                  </Typography>
                  <Typography variant="h4">USD {client.totalSpent.toLocaleString()}</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Last Order
                  </Typography>
                  <Typography variant="body1">{client.lastOrder}</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Orders
                  </Typography>
                  <Typography variant="body1">{client.orders.length}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Next Appointment
                  </Typography>
                  {client.appointments.length > 0 ? (
                    <Typography variant="body1">
                      {client.appointments[0].date} at {client.appointments[0].time}
                    </Typography>
                  ) : (
                    <Typography variant="body1">None scheduled</Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Style Preferences" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Fit Preference
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {client.preferences.fit}
                    </Typography>
                    
                    <Typography variant="subtitle2" color="text.secondary">
                      Preferred Fabrics
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {client.preferences.fabric}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Preferred Colors
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {client.preferences.colors.map((color) => (
                        <Chip key={color} label={color} size="small" />
                      ))}
                    </Box>
                    
                    <Typography variant="subtitle2" color="text.secondary">
                      Preferred Patterns
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {client.preferences.patterns.map((pattern) => (
                        <Chip key={pattern} label={pattern} size="small" />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Special Notes
                    </Typography>
                    <Typography variant="body1">
                      {client.preferences.notes}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader 
                title="Recent Activity"
                action={
                  <Button size="small" color="primary">
                    View All
                  </Button>
                }
              />
              <Divider />
              <CardContent sx={{ p: 0 }}>
                <List>
                  {[...client.orders, ...client.appointments]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 5)
                    .map((item) => (
                      <ListItem key={item.id} divider>
                        <ListItemText
                          primary={
                            item.id.startsWith('ORD') 
                              ? `Order ${item.id}: ${item.items}` 
                              : `Appointment for ${item.purpose}`
                          }
                          secondary={`${item.date}${item.time ? ` at ${item.time}` : ''}`}
                        />
                        <ListItemSecondaryAction>
                          {item.id.startsWith('ORD') ? (
                            <Chip 
                              label={item.status} 
                              color={getStatusChipColor(item.status)}
                              size="small"
                            />
                          ) : (
                            <Chip 
                              label={item.status} 
                              color={item.status === 'Completed' ? 'success' : 'primary'}
                              size="small"
                            />
                          )}
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Measurements Tab Content */}
      {activeTab === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader 
                title="Measurement History" 
                subheader={`Last updated: ${client.measurements.lastUpdated}`}
                action={
                  <Button 
                    variant="contained" 
                    startIcon={<MeasureIcon />}
                    onClick={() => navigate('/measurements')}
                  >
                    Update Measurements
                  </Button>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {Object.entries(client.measurements)
                    .filter(([key]) => key !== 'lastUpdated')
                    .map(([key, value]) => (
                      <Grid item xs={6} sm={4} md={3} lg={2} key={key}>
                        <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                          <Typography variant="subtitle2" color="text.secondary">
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                          </Typography>
                          <Typography variant="h6">{value} cm</Typography>
                        </Box>
                      </Grid>
                    ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Orders Tab Content */}
      {activeTab === 2 && (
        <Card>
          <CardHeader 
            title="Order History" 
            action={
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={() => navigate('/orders/new')}
              >
                New Order
              </Button>
            }
          />
          <Divider />
          <CardContent sx={{ p: 0 }}>
            <List>
              {client.orders.map((order) => (
                <ListItem 
                  key={order.id} 
                  divider 
                  button
                  onClick={() => navigate(`/orders/${order.id}`)}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <OrderIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="subtitle1">
                          {order.id}: {order.items}
                        </Typography>
                      </Box>
                    }
                    secondary={`Date: ${order.date} • Total: ${order.total}`}
                  />
                  <ListItemSecondaryAction>
                    <Chip 
                      label={order.status} 
                      color={getStatusChipColor(order.status)}
                      size="small"
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      {/* Appointments Tab Content */}
      {activeTab === 3 && (
        <Card>
          <CardHeader 
            title="Appointment History" 
            action={
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={() => navigate('/appointments')}
              >
                New Appointment
              </Button>
            }
          />
          <Divider />
          <CardContent sx={{ p: 0 }}>
            <List>
              {client.appointments.map((appointment) => (
                <ListItem 
                  key={appointment.id} 
                  divider 
                  button
                  onClick={() => navigate(`/appointments/${appointment.id}`)}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AppointmentIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="subtitle1">
                          {appointment.purpose}
                        </Typography>
                      </Box>
                    }
                    secondary={`Date: ${appointment.date} at ${appointment.time} • Location: ${appointment.location}`}
                  />
                  <ListItemSecondaryAction>
                    <Chip 
                      label={appointment.status} 
                      color={appointment.status === 'Completed' ? 'success' : 'primary'}
                      size="small"
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      {/* Notes Tab Content */}
      {activeTab === 4 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ mb: 3 }}>
              <CardHeader title="Add Note" />
              <Divider />
              <CardContent>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  placeholder="Add a note about this client..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={handleAddNote}
                    disabled={!note.trim()}
                  >
                    Save Note
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Client Notes" />
              <Divider />
              <List>
                {client.notes.map((note) => (
                  <ListItem key={note.id} divider>
                    <ListItemText
                      primary={note.text}
                      secondary={`Added by ${note.author} on ${note.date}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}