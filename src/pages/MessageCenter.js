import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  TextField,
  Button,
  Tabs,
  Tab
} from '@mui/material';

const MessageCenter = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Message Center
      </Typography>
      
      <Paper sx={{ p: 0, mb: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="message tabs">
            <Tab label="Inbox" />
            <Tab label="Sent" />
            <Tab label="Archived" />
          </Tabs>
        </Box>
        
        <List sx={{ maxHeight: '60vh', overflow: 'auto' }}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{ 
                bgcolor: index === 0 ? 'rgba(18, 69, 89, 0.08)' : 'inherit',
                '&:hover': { bgcolor: 'rgba(18, 69, 89, 0.05)' }
              }}>
                <ListItemAvatar>
                  <Avatar alt={`Client ${item}`} src={`/static/images/avatar/${item}.jpg`} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" component="span">
                      {`Client ${item}`}
                      {index === 0 && (
                        <Typography
                          component="span"
                          variant="body2"
                          color="primary"
                          sx={{ ml: 1, fontWeight: 'bold' }}
                        >
                          (New)
                        </Typography>
                      )}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Fitting appointment confirmation
                      </Typography>
                      {" — I would like to confirm my fitting appointment scheduled for next Tuesday at 2 PM..."}
                      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        April 20, 2025 • 10:30 AM
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Compose New Message
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="recipient"
            label="Recipient"
            name="recipient"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Subject"
            name="subject"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            id="message"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MessageCenter;