import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material';

// In a real app, we would import chart components like recharts or chart.js
// and use actual data from an API or database

const Analytics = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Business Analytics
      </Typography>
      
      {/* Key Performance Indicators */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Orders This Month
            </Typography>
            <Typography component="p" variant="h3" sx={{ flexGrow: 1 }}>
              24
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main' }}>
              ↑ 12% from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Revenue
            </Typography>
            <Typography component="p" variant="h3" sx={{ flexGrow: 1 }}>
              $18,240
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main' }}>
              ↑ 18% from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              New Clients
            </Typography>
            <Typography component="p" variant="h3" sx={{ flexGrow: 1 }}>
              8
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main' }}>
              ↑ 33% from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Appointments
            </Typography>
            <Typography component="p" variant="h3" sx={{ flexGrow: 1 }}>
              32
            </Typography>
            <Typography variant="body2" sx={{ color: 'error.main' }}>
              ↓ 5% from last month
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Monthly Sales" subheader="Last 6 months" />
            <Divider />
            <CardContent sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                [Bar Chart Visualization - Would be implemented with a chart library]
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Sales by Product Category" />
            <Divider />
            <CardContent sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                [Pie Chart Visualization - Would be implemented with a chart library]
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Analytics tables */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Top Selling Products" />
            <Divider />
            <CardContent>
              <Box sx={{ p: 1 }}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography variant="subtitle1">Product</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1" align="right">Units Sold</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                
                {[
                  { name: 'Custom Suits', sales: 15 },
                  { name: 'Dress Shirts', sales: 12 },
                  { name: 'Vests', sales: 8 },
                  { name: 'Trousers', sales: 7 },
                  { name: 'Overcoats', sales: 4 }
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography variant="body2">{item.name}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" align="right">{item.sales}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Client Engagement" />
            <Divider />
            <CardContent>
              <Box sx={{ p: 1 }}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography variant="subtitle1">Client</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1" align="right">Orders</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                
                {[
                  { name: 'John Smith', orders: 5 },
                  { name: 'Robert Johnson', orders: 4 },
                  { name: 'Emily Davis', orders: 3 },
                  { name: 'Michael Brown', orders: 3 },
                  { name: 'Sarah Wilson', orders: 2 }
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography variant="body2">{item.name}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" align="right">{item.orders}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;