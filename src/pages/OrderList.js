// File: src/pages/OrderList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
} from '@mui/icons-material';

export default function OrderList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [actionAnchorEl, setActionAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Mock order data
  const orders = [
    {
      id: 'ORD-001',
      clientName: 'John Smith',
      clientId: 1,
      date: '2025-04-23',
      status: 'Processing',
      items: 'Suit, 2 Shirts',
      total: 1250,
      currency: 'USD',
      priority: 'Normal',
    },
    {
      id: 'ORD-002',
      clientName: 'Emma Johnson',
      clientId: 2,
      date: '2025-04-22',
      status: 'Ready for Fitting',
      items: 'Evening Dress',
      total: 950,
      currency: 'USD',
      priority: 'High',
    },
    {
      id: 'ORD-003',
      clientName: 'Michael Brown',
      clientId: 3,
      date: '2025-04-21',
      status: 'Completed',
      items: '3 Shirts, Trousers',
      total: 750,
      currency: 'USD',
      priority: 'Normal',
    },
    {
      id: 'ORD-004',
      clientName: 'Sophia Miller',
      clientId: 4,
      date: '2025-04-20',
      status: 'Shipped',
      items: 'Blazer, Trousers',
      total: 850,
      currency: 'USD',
      priority: 'Normal',
    },
    {
      id: 'ORD-005',
      clientName: 'James Davis',
      clientId: 5,
      date: '2025-04-18',
      status: 'Processing',
      items: 'Tuxedo, Bow Tie',
      total: 1450,
      currency: 'USD',
      priority: 'High',
    },
    {
      id: 'ORD-006',
      clientName: 'Olivia Wilson',
      clientId: 6,
      date: '2025-04-15',
      status: 'On Hold',
      items: 'Coat, Scarf',
      total: 780,
      currency: 'USD',
      priority: 'Low',
    },
    {
      id: 'ORD-007',
      clientName: 'David Thompson',
      clientId: 7,
      date: '2025-04-14',
      status: 'Delivered',
      items: 'Full Suit, 5 Shirts',
      total: 2100,
      currency: 'USD',
      priority: 'Normal',
    },
    {
      id: 'ORD-008',
      clientName: 'John Smith',
      clientId: 1,
      date: '2025-04-10',
      status: 'Completed',
      items: 'Waistcoat, Trousers',
      total: 680,
      currency: 'USD',
      priority: 'Normal',
    },
  ];

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleStatusFilterChange = (event, newValue) => {
    setStatusFilter(newValue);
    setPage(0);
  };

  const handleActionMenuOpen = (event, orderId) => {
    setActionAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOrderClick = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  // Filter orders based on status and search term
  const filteredOrders = orders.filter((order) => {
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Status chip color mapping
  const getStatusChipColor = (status) => {
    switch (status) {
      case 'Processing':
        return 'primary';
      case 'Ready for Fitting':
        return 'warning';
      case 'Completed':
        return 'success';
      case 'Shipped':
        return 'info';
      case 'Delivered':
        return 'success';
      case 'On Hold':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Orders</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/orders/new')}
        >
          New Order
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Box sx={{ px: 2, pt: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Search by order ID, client, or items"
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
                <MenuItem onClick={handleFilterClose}>By Date</MenuItem>
                <MenuItem onClick={handleFilterClose}>By Price</MenuItem>
                <MenuItem onClick={handleFilterClose}>By Priority</MenuItem>
                <Divider />
                <MenuItem onClick={handleFilterClose}>Reset Filters</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Box>

        <Tabs
          value={statusFilter}
          onChange={handleStatusFilterChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="All Orders" value="all" />
          <Tab label="Processing" value="processing" />
          <Tab label="Ready for Fitting" value="ready for fitting" />
          <Tab label="Completed" value="completed" />
          <Tab label="Shipped" value="shipped" />
          <Tab label="On Hold" value="on hold" />
        </Tabs>
      </Paper>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <TableRow
                  key={order.id}
                  sx={{
                    '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' },
                    bgcolor: order.priority === 'High' ? 'rgba(239, 200, 139, 0.1)' : 'inherit',
                  }}
                  onClick={() => handleOrderClick(order.id)}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell>{order.clientName}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    {order.currency} {order.total.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={getStatusChipColor(order.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={order.priority}
                      color={
                        order.priority === 'High'
                          ? 'error'
                          : order.priority === 'Normal'
                          ? 'default'
                          : 'secondary'
                      }
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionMenuOpen(e, order.id);
                      }}
                      size="small"
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Menu
        anchorEl={actionAnchorEl}
        open={Boolean(actionAnchorEl)}
        onClose={handleActionMenuClose}
      >
        <MenuItem
          onClick={() => {
            handleActionMenuClose();
            selectedOrderId && navigate(`/orders/${selectedOrderId}`);
          }}
        >
          View Details
        </MenuItem>
        <MenuItem onClick={handleActionMenuClose}>Change Status</MenuItem>
        <MenuItem onClick={handleActionMenuClose}>Update Priority</MenuItem>
        <MenuItem onClick={handleActionMenuClose}>Send Notification</MenuItem>
        <Divider />
        <MenuItem onClick={handleActionMenuClose}>Cancel Order</MenuItem>
      </Menu>
    </Box>
  );
}