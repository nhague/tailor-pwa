// File: src/pages/TravelSchedule.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  LocationOn as LocationIcon,
  DateRange as DateRangeIcon,
  FlightTakeoff as FlightTakeoffIcon,
  FlightLand as FlightLandIcon,
  Hotel as HotelIcon,
  Person as PersonIcon,
  Event as EventIcon,
  Check as CheckIcon,
  ExpandMore as ExpandMoreIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

export default function TravelSchedule() {
  const navigate = useNavigate();
  const [openNewTravel, setOpenNewTravel] = useState(false);
  const [expandedTrip, setExpandedTrip] = useState(null);

  // Mock travel schedule data
  const travelSchedules = [
    {
      id: 1,
      destination: 'Bangkok, Thailand',
      venue: 'Grand Hyatt Erawan',
      address: '494 Rajdamri Road, Bangkok 10330, Thailand',
      startDate: '2025-05-15',
      endDate: '2025-05-20',
      status: 'Upcoming',
      appointmentsBooked: 8,
      totalSlots: 20,
      notificationSent: true,
      clients: [
        { id: 2, name: 'Emma Johnson' },
        { id: 6, name: 'Olivia Wilson' },
        { id: 8, name: 'William Chen' },
      ],
      notes: 'Bring summer fabric samples and lightweight suit options.',
      timeSlots: [
        { date: '2025-05-16', startTime: '10:00 AM', endTime: '06:00 PM', booked: 3, available: 5 },
        { date: '2025-05-17', startTime: '10:00 AM', endTime: '06:00 PM', booked: 4, available: 4 },
        { date: '2025-05-18', startTime: '10:00 AM', endTime: '06:00 PM', booked: 1, available: 7 },
      ],
    },
    {
      id: 2,
      destination: 'Singapore',
      venue: 'Marina Bay Sands',
      address: '10 Bayfront Avenue, Singapore 018956',
      startDate: '2025-06-10',
      endDate: '2025-06-15',
      status: 'Upcoming',
      appointmentsBooked: 12,
      totalSlots: 25,
      notificationSent: true,
      clients: [
        { id: 3, name: 'Michael Brown' },
        { id: 7, name: 'David Thompson' },
        { id: 9, name: 'Sophia Zhang' },
        { id: 10, name: 'Robert Kim' },
      ],
      notes: 'Focus on business attire and formal evening wear.',
      timeSlots: [
        { date: '2025-06-11', startTime: '10:00 AM', endTime: '06:00 PM', booked: 5, available: 3 },
        { date: '2025-06-12', startTime: '10:00 AM', endTime: '06:00 PM', booked: 4, available: 4 },
        { date: '2025-06-13', startTime: '10:00 AM', endTime: '06:00 PM', booked: 3, available: 5 },
      ],
    },
    {
      id: 3,
      destination: 'Hong Kong',
      venue: 'The Peninsula Hong Kong',
      address: 'Salisbury Road, Kowloon, Hong Kong',
      startDate: '2025-07-05',
      endDate: '2025-07-12',
      status: 'Planning',
      appointmentsBooked: 0,
      totalSlots: 30,
      notificationSent: false,
      clients: [],
      notes: 'Will need to bring full range of fabrics and style options for this key market.',
      timeSlots: [
        { date: '2025-07-06', startTime: '10:00 AM', endTime: '06:00 PM', booked: 0, available: 8 },
        { date: '2025-07-07', startTime: '10:00 AM', endTime: '06:00 PM', booked: 0, available: 8 },
        { date: '2025-07-08', startTime: '10:00 AM', endTime: '06:00 PM', booked: 0, available: 8 },
        { date: '2025-07-09', startTime: '10:00 AM', endTime: '06:00 PM', booked: 0, available: 6 },
      ],
    },
    {
      id: 4,
      destination: 'New York, USA',
      venue: 'Four Seasons Hotel New York',
      address: '57 E 57th St, New York, NY 10022, USA',
      startDate: '2025-02-10',
      endDate: '2025-02-17',
      status: 'Completed',
      appointmentsBooked: 22,
      totalSlots: 25,
      notificationSent: true,
      clients: [
        { id: 1, name: 'John Smith' },
        { id: 4, name: 'Sophia Miller' },
        { id: 11, name: 'James Wilson' },
        { id: 12, name: 'Emily Davis' },
        { id: 13, name: 'William Jones' },
      ],
      notes: 'Very successful trip. High demand for winter suits and formal wear.',
      timeSlots: [
        { date: '2025-02-11', startTime: '10:00 AM', endTime: '06:00 PM', booked: 7, available: 1 },
        { date: '2025-02-12', startTime: '10:00 AM', endTime: '06:00 PM', booked: 8, available: 0 },
        { date: '2025-02-13', startTime: '10:00 AM', endTime: '06:00 PM', booked: 7, available: 1 },
      ],
    },
  ];

  const handleNewTravel = () => {
    setOpenNewTravel(true);
  };

  const handleCloseNewTravel = () => {
    setOpenNewTravel(false);
  };

  const handleSaveTravel = () => {
    // In a real app, this would save to the backend
    console.log('New travel schedule saved');
    handleCloseNewTravel();
  };

  const handleExpandTrip = (tripId) => {
    setExpandedTrip(expandedTrip === tripId ? null : tripId);
  };

  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'primary';
      case 'Planning':
        return 'info';
      case 'Completed':
        return 'success';
      case 'Cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const renderUpcomingTravels = () => {
    const upcoming = travelSchedules.filter(travel => travel.status === 'Upcoming');
    
    return (
      <Grid container spacing={3}>
        {upcoming.map(travel => (
          <Grid item xs={12} md={6} key={travel.id}>
            <Card>
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">{travel.destination}</Typography>
                  </Box>
                }
                subheader={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                    <DateRangeIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2">
                      {formatDateRange(travel.startDate, travel.endDate)}
                    </Typography>
                  </Box>
                }
                action={
                  <Chip 
                    label={travel.status}
                    color={getStatusColor(travel.status)}
                    size="small"
                  />
                }
              />
              <Divider />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Venue
                  </Typography>
                  <Typography variant="body1">
                    {travel.venue}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {travel.address}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Appointments
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ flexGrow: 1, mr: 2 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={(travel.appointmentsBooked / travel.totalSlots) * 100} 
                        sx={{ height: 10, borderRadius: 5 }}
                      />
                    </Box>
                    <Typography variant="body2">
                      {travel.appointmentsBooked}/{travel.totalSlots} booked
                    </Typography>
                  </Box>
                </Box>
                
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Clients ({travel.clients.length})
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {travel.clients.map(client => (
                      <Chip 
                        key={client.id}
                        avatar={<Avatar>{client.name.charAt(0)}</Avatar>}
                        label={client.name}
                        size="small"
                        onClick={() => navigate(`/clients/${client.id}`)}
                      />
                    ))}
                    {travel.clients.length === 0 && (
                      <Typography variant="body2" color="text.secondary">
                        No clients have booked appointments yet
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button 
                  size="small" 
                  startIcon={<EventIcon />}
                  onClick={() => navigate('/appointments')}
                >
                  View Schedule
                </Button>
                <Button 
                  size="small" 
                  startIcon={<EditIcon />}
                >
                  Edit Trip
                </Button>
                {!travel.notificationSent && (
                  <Button 
                    size="small" 
                    startIcon={<NotificationsIcon />}
                    color="primary"
                  >
                    Notify Clients
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderAllTravels = () => {
    return (
      <Box>
        {travelSchedules.map(travel => (
          <Accordion 
            key={travel.id} 
            expanded={expandedTrip === travel.id}
            onChange={() => handleExpandTrip(travel.id)}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar 
                    sx={{ 
                      bgcolor: travel.status === 'Completed' 
                        ? 'success.main' 
                        : travel.status === 'Upcoming' 
                          ? 'primary.main' 
                          : 'info.main' 
                    }}
                  >
                    <LocationIcon />
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1">{travel.destination}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formatDateRange(travel.startDate, travel.endDate)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Chip 
                    label={travel.status}
                    color={getStatusColor(travel.status)}
                    size="small"
                  />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Venue
                    </Typography>
                    <Typography variant="body1">
                      {travel.venue}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {travel.address}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Appointments
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Box sx={{ flexGrow: 1, mr: 2 }}>
                        <LinearProgress 
                          variant="determinate" 
                          value={(travel.appointmentsBooked / travel.totalSlots) * 100} 
                          sx={{ height: 10, borderRadius: 5 }}
                        />
                      </Box>
                      <Typography variant="body2">
                        {travel.appointmentsBooked}/{travel.totalSlots} booked
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Notes
                    </Typography>
                    <Typography variant="body2">
                      {travel.notes}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Schedule
                  </Typography>
                  <List dense>
                    {travel.timeSlots.map((slot, index) => (
                      <ListItem key={index} divider={index < travel.timeSlots.length - 1}>
                        <ListItemText
                          primary={new Date(slot.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                          secondary={`${slot.startTime} - ${slot.endTime}`}
                        />
                        <ListItemSecondaryAction>
                          <Chip 
                            label={`${slot.booked} booked / ${slot.available} available`}
                            size="small"
                            color={slot.available === 0 ? 'error' : 'default'}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                    <Button 
                      sx={{ mr: 1 }}
                      startIcon={<EventIcon />}
                      onClick={() => navigate('/appointments')}
                    >
                      View Appointments
                    </Button>
                    <Button 
                      sx={{ mr: 1 }}
                      startIcon={<EditIcon />}
                    >
                      Edit Trip
                    </Button>
                    {travel.status === 'Planning' && (
                      <Button 
                        variant="contained"
                        color="primary"
                        startIcon={<NotificationsIcon />}
                      >
                        Notify Clients
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Travel Schedule</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleNewTravel}
        >
          New Trip
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <FlightTakeoffIcon />
                </Avatar>
                <Box>
                  <Typography variant="h5">2</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upcoming Trips
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'info.main', mr: 2 }}>
                  <DateRangeIcon />
                </Avatar>
                <Box>
                  <Typography variant="h5">20</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Booked Appointments
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography variant="h5">7</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Clients to Visit
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                  <HotelIcon />
                </Avatar>
                <Box>
                  <Typography variant="h5">3</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Locations This Quarter
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Upcoming Travel
        </Typography>
        {renderUpcomingTravels()}
      </Box>

      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          All Travel
        </Typography>
        {renderAllTravels()}
      </Box>

      {/* New Travel Dialog */}
      <Dialog open={openNewTravel} onClose={handleCloseNewTravel} maxWidth="md" fullWidth>
        <DialogTitle>New Travel Schedule</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 0.5 }}>
            <Grid item xs={12}>
              <TextField
                label="Destination"
                fullWidth
                placeholder="e.g. Bangkok, Thailand"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Venue"
                fullWidth
                placeholder="e.g. Grand Hyatt Erawan"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                placeholder="Full address of the venue"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Available Time Slots
              </Typography>
              <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Date"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Start Time"
                      type="time"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      defaultValue="10:00"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="End Time"
                      type="time"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      defaultValue="18:00"
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button fullWidth variant="outlined">
                      Add Day
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="notify-clients-label">Notify Clients</InputLabel>
                <Select
                  labelId="notify-clients-label"
                  label="Notify Clients"
                  defaultValue="after"
                >
                  <MenuItem value="now">Send notifications immediately</MenuItem>
                  <MenuItem value="after">Schedule notifications after save</MenuItem>
                  <MenuItem value="later">I'll notify clients manually later</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Notes"
                multiline
                rows={3}
                fullWidth
                placeholder="Special instructions, reminders, etc."
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewTravel}>Cancel</Button>
          <Button 
            onClick={handleSaveTravel} 
            variant="contained" 
            color="primary"
          >
            Save Trip
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}