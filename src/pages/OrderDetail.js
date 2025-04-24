import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Divider, 
  Chip,
  Stack,
  Button
} from '@mui/material';

const OrderDetail = () => {
  const { id } = useParams();

  // This is a placeholder component
  // In a real implementation, you would fetch order details based on the id

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Order Details #{id}
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Order Information</Typography>
            <Typography variant="body1">Order ID: #{id}</Typography>
            <Typography variant="body1">Date: April 24, 2025</Typography>
            <Typography variant="body1">Status: <Chip label="In Progress" color="primary" size="small" /></Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Client Information</Typography>
            <Typography variant="body1">Client: John Doe</Typography>
            <Typography variant="body1">Phone: (555) 123-4567</Typography>
            <Typography variant="body1">Email: john.doe@example.com</Typography>
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>Order Items</Typography>
            
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="subtitle1">Bespoke Suit - Navy Blue</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Two-piece suit with custom measurements
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">1 x $1,200</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">$1,200</Typography>
                </Grid>
              </Grid>
            </Paper>
            
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="subtitle1">Dress Shirt - White</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Egyptian cotton with French cuffs
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">2 x $180</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">$360</Typography>
                </Grid>
              </Grid>
            </Paper>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Stack spacing={2} sx={{ width: '300px' }}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1">Subtotal:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" align="right">$1,560</Typography>
                  </Grid>
                </Grid>
                
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1">Tax (10%):</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" align="right">$156</Typography>
                  </Grid>
                </Grid>
                
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1" fontWeight="bold">Total:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" fontWeight="bold" align="right">$1,716</Typography>
                  </Grid>
                </Grid>
                
                <Divider />
                
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1">Payment Status:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" align="right">
                      <Chip label="Paid" color="success" size="small" />
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>Delivery Information</Typography>
            <Typography variant="body1">Estimated Completion: May 20, 2025</Typography>
            <Typography variant="body1">Delivery Method: In-Store Pickup</Typography>
            <Typography variant="body1">Special Instructions: Final fitting needed before delivery</Typography>
          </Grid>
        </Grid>
      </Paper>
      
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined">Back to Orders</Button>
        <Button variant="contained">Update Order</Button>
      </Stack>
    </Box>
  );
};

export default OrderDetail;