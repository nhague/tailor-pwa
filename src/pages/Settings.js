import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import BackupIcon from '@mui/icons-material/Backup';
import HelpIcon from '@mui/icons-material/Help';
import DeleteIcon from '@mui/icons-material/Delete';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Settings = () => {
  const [value, setValue] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [timeZone, setTimeZone] = useState('UTC+5:00');
  const [language, setLanguage] = useState('English');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTimeZoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      
      <Paper sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="settings tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab icon={<AccountCircleIcon />} label="Account" />
            <Tab icon={<NotificationsIcon />} label="Notifications" />
            <Tab icon={<SecurityIcon />} label="Security" />
            <Tab icon={<BackupIcon />} label="Data & Backup" />
            <Tab icon={<HelpIcon />} label="Help & Support" />
          </Tabs>
        </Box>
        
        {/* Account Settings */}
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Profile Information</Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Business Name"
                defaultValue="Bennett & Co. Tailoring"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Owner Name"
                defaultValue="James Bennett"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                defaultValue="james@bennetttailoring.com"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                defaultValue="+1 (555) 123-4567"
              />
              <Button variant="contained" sx={{ mt: 2 }}>
                Save Changes
              </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Preferences</Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                }
                label="Dark Mode"
              />
              
              <Box sx={{ mt: 2 }}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="timezone-label">Time Zone</InputLabel>
                  <Select
                    labelId="timezone-label"
                    value={timeZone}
                    label="Time Zone"
                    onChange={handleTimeZoneChange}
                  >
                    <MenuItem value="UTC-8:00">Pacific Time (UTC-8:00)</MenuItem>
                    <MenuItem value="UTC-5:00">Eastern Time (UTC-5:00)</MenuItem>
                    <MenuItem value="UTC+0:00">Greenwich Mean Time (UTC+0:00)</MenuItem>
                    <MenuItem value="UTC+1:00">Central European Time (UTC+1:00)</MenuItem>
                    <MenuItem value="UTC+5:00">Pakistan Standard Time (UTC+5:00)</MenuItem>
                    <MenuItem value="UTC+5:30">Indian Standard Time (UTC+5:30)</MenuItem>
                    <MenuItem value="UTC+8:00">China Standard Time (UTC+8:00)</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl fullWidth margin="normal">
                  <InputLabel id="language-label">Language</InputLabel>
                  <Select
                    labelId="language-label"
                    value={language}
                    label="Language"
                    onChange={handleLanguageChange}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    <MenuItem value="German">German</MenuItem>
                    <MenuItem value="Chinese">Chinese</MenuItem>
                    <MenuItem value="Japanese">Japanese</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
              <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Measurement Units</Typography>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Use metric system (cm)"
              />
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Notifications Settings */}
        <TabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>Notification Preferences</Typography>
          
          <FormControlLabel
            control={
              <Switch
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
            }
            label="Email Notifications"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mt: -1, mb: 2 }}>
            Receive appointment reminders, order updates, and client messages via email
          </Typography>
          
          <FormControlLabel
            control={
              <Switch
                checked={smsNotifications}
                onChange={() => setSmsNotifications(!smsNotifications)}
              />
            }
            label="SMS Notifications"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mt: -1, mb: 2 }}>
            Receive urgent appointment reminders and order status changes via SMS
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h6" gutterBottom>Notification Types</Typography>
          
          {[
            'New client registrations',
            'Appointment reminders (24 hours before)',
            'Order status changes',
            'Inventory alerts (low stock)',
            'Payment confirmations',
            'Client messages',
            'System updates'
          ].map((item, index) => (
            <FormControlLabel
              key={index}
              control={<Switch defaultChecked={index < 5} />}
              label={item}
              sx={{ display: 'block', my: 1 }}
            />
          ))}
          
          <Button variant="contained" sx={{ mt: 3 }}>
            Save Notification Settings
          </Button>
        </TabPanel>
        
        {/* Security Settings */}
        <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Change Password</Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Current Password"
                type="password"
              />
              <TextField
                fullWidth
                margin="normal"
                label="New Password"
                type="password"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Confirm New Password"
                type="password"
              />
              <Button variant="contained" sx={{ mt: 2 }}>
                Update Password
              </Button>
              
              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Two-Factor Authentication</Typography>
              <FormControlLabel
                control={<Switch />}
                label="Enable Two-Factor Authentication"
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Add an extra layer of security to your account by requiring a verification code in addition to your password.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Active Sessions</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Current Session" 
                    secondary="MacBook Pro • Karachi, Pakistan • Apr 24, 2025"
                  />
                  <Typography variant="body2" color="success.main">Active</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="iPhone 15 Pro" 
                    secondary="Karachi, Pakistan • Apr 22, 2025"
                  />
                  <Button size="small" color="secondary">Log Out</Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="iPad Pro" 
                    secondary="Karachi, Pakistan • Apr 20, 2025"
                  />
                  <Button size="small" color="secondary">Log Out</Button>
                </ListItem>
              </List>
              
              <Button variant="outlined" color="error" sx={{ mt: 2 }}>
                Log Out of All Devices
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Data & Backup Settings */}
        <TabPanel value={value} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Data Export</Typography>
              <Typography variant="body2" paragraph>
                Export your tailor shop data for backup or migration purposes.
              </Typography>
              
              <Button variant="contained" sx={{ mr: 2 }}>
                Export All Data
              </Button>
              
              <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>Select Data to Export</Typography>
              
              {['Client records', 'Order history', 'Measurements', 'Inventory data', 'Appointment calendar', 'Financial records'].map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={<Switch defaultChecked />}
                  label={item}
                  sx={{ display: 'block', my: 0.5 }}
                />
              ))}
              
              <Button variant="outlined" sx={{ mt: 2 }}>
                Export Selected Data
              </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Automatic Backups</Typography>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Enable daily backups"
              />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Your data will be automatically backed up to secure cloud storage daily.
              </Typography>
              
              <Typography variant="h6" gutterBottom>Data Retention</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel id="data-retention-label">Retain Data For</InputLabel>
                <Select
                  labelId="data-retention-label"
                  defaultValue="7-years"
                  label="Retain Data For"
                >
                  <MenuItem value="1-year">1 Year</MenuItem>
                  <MenuItem value="3-years">3 Years</MenuItem>
                  <MenuItem value="5-years">5 Years</MenuItem>
                  <MenuItem value="7-years">7 Years</MenuItem>
                  <MenuItem value="indefinitely">Indefinitely</MenuItem>
                </Select>
              </FormControl>
              
              <Typography variant="body2" color="text.secondary">
                Choose how long to keep your business records. This helps comply with local regulations.
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Help & Support Settings */}
        <TabPanel value={value} index={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Help Resources</Typography>
              
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Knowledge Base" 
                    secondary="Browse tutorials and answers to common questions"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Video Tutorials" 
                    secondary="Watch guides on how to use the tailor shop management system"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User Manual" 
                    secondary="Download comprehensive PDF documentation"
                  />
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Contact Support</Typography>
              <Typography variant="body2" paragraph>
                Our support team is available Monday-Friday, 9am-5pm Eastern Time.
              </Typography>
              
              <Button variant="contained" sx={{ mr: 2 }}>
                Email Support
              </Button>
              
              <Button variant="outlined">
                Live Chat
              </Button>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>System Information</Typography>
                <Typography variant="body2">App Version: 1.2.4</Typography>
                <Typography variant="body2">Last Update: April 15, 2025</Typography>
                <Typography variant="body2">Device ID: TLR-MAC-7842</Typography>
                
                <Button variant="outlined" sx={{ mt: 2 }} size="small">
                  Check for Updates
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default Settings;