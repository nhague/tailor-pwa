import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Mock data for inventory items
const inventoryItems = [
  { id: 1, name: 'Navy Blue Wool', type: 'Fabric', quantity: 24, unit: 'yards', status: 'In Stock', location: 'Storage A' },
  { id: 2, name: 'Italian Linen', type: 'Fabric', quantity: 12, unit: 'yards', status: 'Low Stock', location: 'Storage B' },
  { id: 3, name: 'Mother of Pearl Buttons', type: 'Notions', quantity: 150, unit: 'pcs', status: 'In Stock', location: 'Drawer C' },
  { id: 4, name: 'Black Thread', type: 'Notions', quantity: 45, unit: 'spools', status: 'In Stock', location: 'Shelf D' },
  { id: 5, name: 'Tweed Herringbone', type: 'Fabric', quantity: 8, unit: 'yards', status: 'Low Stock', location: 'Storage A' },
  { id: 6, name: 'Gold Zippers', type: 'Notions', quantity: 3, unit: 'packs', status: 'Out of Stock', location: 'Drawer E' },
  { id: 7, name: 'White Cotton', type: 'Fabric', quantity: 30, unit: 'yards', status: 'In Stock', location: 'Storage B' },
  { id: 8, name: 'Silk Lining', type: 'Fabric', quantity: 15, unit: 'yards', status: 'In Stock', location: 'Storage C' },
];

const InventoryView = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            placeholder="Search inventory..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" fullWidth>Add New Item</Button>
        </Grid>
      </Grid>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="inventory table">
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Location</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow hover key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell align="right">
                    {item.quantity} {item.unit}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={item.status} 
                      color={
                        item.status === 'In Stock' ? 'success' : 
                        item.status === 'Low Stock' ? 'warning' : 'error'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell align="center">
                    <Button size="small" sx={{ mr: 1 }}>Edit</Button>
                    <Button size="small" color="secondary">Use</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Low Stock Items</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              The following items need to be reordered soon:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {inventoryItems
                .filter(item => item.status === 'Low Stock' || item.status === 'Out of Stock')
                .map(item => (
                  <Typography component="li" key={item.id} variant="body2">
                    {item.name} - {item.quantity} {item.unit} ({item.status})
                  </Typography>
                ))
              }
            </Box>
            <Button variant="outlined" size="small" sx={{ mt: 2 }}>
              Generate Order List
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Inventory Summary</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default', textAlign: 'center' }}>
                  <Typography variant="h4" color="primary">
                    {inventoryItems.length}
                  </Typography>
                  <Typography variant="body2">Total Items</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default', textAlign: 'center' }}>
                  <Typography variant="h4" color="success.main">
                    {inventoryItems.filter(item => item.status === 'In Stock').length}
                  </Typography>
                  <Typography variant="body2">In Stock</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default', textAlign: 'center' }}>
                  <Typography variant="h4" color="error.main">
                    {inventoryItems.filter(item => item.status === 'Out of Stock').length}
                  </Typography>
                  <Typography variant="body2">Out of Stock</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InventoryView;