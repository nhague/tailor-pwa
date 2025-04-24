// File: src/pages/Dashboard.js
import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  Chip,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Assignment as AssignmentIcon,
  Event as EventIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

export default function Dashboard() {
  // Mock data for the dashboard
  const stats = [
    { title: 'Orders in Progress', value: '12', icon: <AssignmentIcon color="primary" /> },
    { title: 'Today\'s Appointments', value: '3', icon: <EventIcon color="success" /> },
    { title: 'New Clients (This Week)', value: '8', icon: <PeopleIcon color="info" /> },
    { title: 'Low Stock Items', value: '5', icon: <InventoryIcon color="warning" /> },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      clientName: 'John Smith',
      time: '10:00 AM',
      purpose: 'Measurement',
    },
    {
      id: 2,
      clientName: 'Emma Johnson',
      time: '1:30 PM',
      purpose: 'Fitting',
    },
    {
      id: 3,
      clientName: 'David Wilson',
      time: '4:00 PM',
      purpose: 'Consultation',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      clientName: 'Michael Brown',
      date: '2025-04-23',
      status: 'Processing',
      items: 'Suit, 2 Shirts',
    },
    {
      id: 'ORD-002',
      clientName: 'Sophia Miller',
      date: '2025-04-22',
      status: 'Ready for Fitting',
      items: 'Evening Dress',
    },
    {
      id: 'ORD-003',
      clientName: 'James Davis',
      date: '2025-04-21',
      status: 'Completed',
      items: '3 Shirts, Trousers',
    },
    {
      id: 'ORD-004',
      clientName: 'Olivia Wilson',
      date: '2025-04-20',
      status: 'Shipped',
      items: 'Blazer, Trousers',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Thursday, April 24, 2025
      </Typography>

      {/* Quick Stats Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  p: 1,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                }}
              >
                {stat.icon}
              </Box>
              <Typography variant="h3" component="div" align="center">
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {stat.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Today's Appointments */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ mb: 3, height: '100%' }}>
            <CardHeader
              title="Today's Appointments"
              action={
                <Button color="primary" size="small">
                  View All
                </Button>
              }
            />
            <Divider />
            <CardContent sx={{ p: 0 }}>
              <List>
                {upcomingAppointments.map((appointment) => (
                  <React.Fragment key={appointment.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar>{appointment.clientName.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={appointment.clientName}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {appointment.time}
                            </Typography>
                            {` - ${appointment.purpose}`}
                          </React.Fragment>
                        }
                      />
                      <Button variant="outlined" size="small">
                        Details
                      </Button>
                    </ListItem>
                    {appointment.id !== upcomingAppointments.length && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={8}>
          <Card sx={{ mb: 3, height: '100%' }}>
            <CardHeader
              title="Recent Orders"
              action={
                <Button color="primary" size="small">
                  View All
                </Button>
              }
            />
            <Divider />
            <CardContent>
              <Box sx={{ overflowX: 'auto' }}>
                <Box
                  sx={{
                    display: 'table',
                    width: '100%',
                    borderCollapse: 'collapse',
                  }}
                >
                  <Box sx={{ display: 'table-header-group' }}>
                    <Box sx={{ display: 'table-row' }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          display: 'table-cell',
                          p: 1.5,
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        Order ID
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          display: 'table-cell',
                          p: 1.5,
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        Client
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          display: 'table-cell',
                          p: 1.5,
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        Items
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          display: 'table-cell',
                          p: 1.5,
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        Status
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          display: 'table-cell',
                          p: 1.5,
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        Action
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'table-row-group' }}>
                    {recentOrders.map((order) => (
                      <Box key={order.id} sx={{ display: 'table-row' }}>
                        <Typography
                          sx={{
                            display: 'table-cell',
                            p: 1.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          {order.id}
                        </Typography>
                        <Typography
                          sx={{
                            display: 'table-cell',
                            p: 1.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          {order.clientName}
                        </Typography>
                        <Typography
                          sx={{
                            display: 'table-cell',
                            p: 1.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          {order.items}
                        </Typography>
                        <Box
                          sx={{
                            display: 'table-cell',
                            p: 1.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          <Chip
                            label={order.status}
                            color={
                              order.status === 'Processing'
                                ? 'primary'
                                : order.status === 'Ready for Fitting'
                                ? 'warning'
                                : order.status === 'Completed'
                                ? 'success'
                                : 'info'
                            }
                            size="small"
                          />
                        </Box>
                        <Box
                          sx={{
                            display: 'table-cell',
                            p: 1.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          <Button size="small" variant="outlined">
                            View
                          </Button>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}