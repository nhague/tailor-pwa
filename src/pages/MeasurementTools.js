// File: src/pages/MeasurementTools.js
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Alert,
} from '@mui/material';
import {
  CameraAlt as CameraIcon,
  MicNone as MicIcon,
  Save as SaveIcon,
  Compare as CompareIcon,
  Straighten as MeasureIcon,
  HelpOutline as HelpIcon,
} from '@mui/icons-material';

export default function MeasurementTools() {
  const [activeTab, setActiveTab] = useState(0);
  const [units, setUnits] = useState('cm');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Mock measurements for a client
  const [measurements, setMeasurements] = useState({
    height: 180,
    weight: 82,
    neck: 39,
    chest: 102,
    waist: 89,
    hips: 104,
    shoulder: 47,
    sleeveLength: 65,
    bicep: 36,
    wrist: 17,
    inseam: 81,
    outseam: 106,
    thigh: 59,
    knee: 42,
    calf: 38,
    ankle: 24,
    shirtLength: 76,
    jacketLength: 74,
  });

  // Previous measurements for comparison
  const previousMeasurements = {
    height: 180,
    weight: 80,
    neck: 38.5,
    chest: 100,
    waist: 88,
    hips: 103,
    shoulder: 47,
    sleeveLength: 65,
    bicep: 35,
    wrist: 17,
    inseam: 81,
    outseam: 106,
    thigh: 58,
    knee: 41,
    calf: 37,
    ankle: 24,
    shirtLength: 76,
    jacketLength: 74,
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleUnitChange = (event, newUnits) => {
    if (newUnits !== null) {
      setUnits(newUnits);
      // Convert measurements when changing units
      if (newUnits === 'in' && units === 'cm') {
        const converted = Object.fromEntries(
          Object.entries(measurements).map(([key, value]) => [key, +(value / 2.54).toFixed(1)])
        );
        setMeasurements(converted);
      } else if (newUnits === 'cm' && units === 'in') {
        const converted = Object.fromEntries(
          Object.entries(measurements).map(([key, value]) => [key, +(value * 2.54).toFixed(1)])
        );
        setMeasurements(converted);
      }
    }
  };

  const handleMeasurementChange = (measurement) => (event) => {
    setMeasurements({
      ...measurements,
      [measurement]: parseFloat(event.target.value) || 0,
    });
  };

  const handleSave = () => {
    // Simulate saving measurements
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const getMeasurementDifference = (key) => {
    return measurements[key] - previousMeasurements[key];
  };

  const renderUpperBodyMeasurements = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Neck"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.neck}
            onChange={handleMeasurementChange('neck')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('neck') !== 0
                ? `${getMeasurementDifference('neck') > 0 ? '+' : ''}${getMeasurementDifference(
                    'neck'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('neck') > 0.5 || getMeasurementDifference('neck') < -0.5
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Chest"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.chest}
            onChange={handleMeasurementChange('chest')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('chest') !== 0
                ? `${getMeasurementDifference('chest') > 0 ? '+' : ''}${getMeasurementDifference(
                    'chest'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('chest') > 2 || getMeasurementDifference('chest') < -2
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Waist"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.waist}
            onChange={handleMeasurementChange('waist')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('waist') !== 0
                ? `${getMeasurementDifference('waist') > 0 ? '+' : ''}${getMeasurementDifference(
                    'waist'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('waist') > 2 || getMeasurementDifference('waist') < -2
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Shoulders"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.shoulder}
            onChange={handleMeasurementChange('shoulder')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('shoulder') !== 0
                ? `${
                    getMeasurementDifference('shoulder') > 0 ? '+' : ''
                  }${getMeasurementDifference('shoulder').toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('shoulder') > 1 ||
                  getMeasurementDifference('shoulder') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Sleeve Length"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.sleeveLength}
            onChange={handleMeasurementChange('sleeveLength')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('sleeveLength') !== 0
                ? `${
                    getMeasurementDifference('sleeveLength') > 0 ? '+' : ''
                  }${getMeasurementDifference('sleeveLength').toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('sleeveLength') > 1 ||
                  getMeasurementDifference('sleeveLength') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Bicep"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.bicep}
            onChange={handleMeasurementChange('bicep')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('bicep') !== 0
                ? `${getMeasurementDifference('bicep') > 0 ? '+' : ''}${getMeasurementDifference(
                    'bicep'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('bicep') > 1 || getMeasurementDifference('bicep') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const renderLowerBodyMeasurements = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Inseam"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.inseam}
            onChange={handleMeasurementChange('inseam')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('inseam') !== 0
                ? `${getMeasurementDifference('inseam') > 0 ? '+' : ''}${getMeasurementDifference(
                    'inseam'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('inseam') > 1 || getMeasurementDifference('inseam') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Outseam"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.outseam}
            onChange={handleMeasurementChange('outseam')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('outseam') !== 0
                ? `${getMeasurementDifference('outseam') > 0 ? '+' : ''}${getMeasurementDifference(
                    'outseam'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('outseam') > 1 ||
                  getMeasurementDifference('outseam') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Thigh"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.thigh}
            onChange={handleMeasurementChange('thigh')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('thigh') !== 0
                ? `${getMeasurementDifference('thigh') > 0 ? '+' : ''}${getMeasurementDifference(
                    'thigh'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('thigh') > 1 || getMeasurementDifference('thigh') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Knee"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.knee}
            onChange={handleMeasurementChange('knee')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('knee') !== 0
                ? `${getMeasurementDifference('knee') > 0 ? '+' : ''}${getMeasurementDifference(
                    'knee'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('knee') > 1 || getMeasurementDifference('knee') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Calf"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.calf}
            onChange={handleMeasurementChange('calf')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('calf') !== 0
                ? `${getMeasurementDifference('calf') > 0 ? '+' : ''}${getMeasurementDifference(
                    'calf'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('calf') > 1 || getMeasurementDifference('calf') < -1
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Ankle"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={measurements.ankle}
            onChange={handleMeasurementChange('ankle')}
            variant="outlined"
            InputProps={{ endAdornment: units }}
            helperText={
              getMeasurementDifference('ankle') !== 0
                ? `${getMeasurementDifference('ankle') > 0 ? '+' : ''}${getMeasurementDifference(
                    'ankle'
                  ).toFixed(1)} ${units} from previous`
                : ''
            }
            FormHelperTextProps={{
              sx: {
                color:
                  getMeasurementDifference('ankle') > 0.5 || getMeasurementDifference('ankle') < -0.5
                    ? 'warning.main'
                    : 'text.secondary',
              },
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const renderMeasurementCapture = () => (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Capturing New Measurements</Typography>
        <ToggleButtonGroup
          value={units}
          exclusive
          onChange={handleUnitChange}
          aria-label="measurement units"
        >
          <ToggleButton value="cm" aria-label="centimeters">
            cm
          </ToggleButton>
          <ToggleButton value="in" aria-label="inches">
            in
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {saveSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Measurements saved successfully!
        </Alert>
      )}

      <Card sx={{ mb: 4 }}>
        <CardHeader
          title="Client Information"
          action={
            <Button startIcon={<CompareIcon />} color="primary">
              Compare with Previous
            </Button>
          }
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Height"
                type="number"
                InputLabelProps={{ shrink: true }}
                value={measurements.height}
                onChange={handleMeasurementChange('height')}
                variant="outlined"
                InputProps={{ endAdornment: units }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Weight"
                type="number"
                InputLabelProps={{ shrink: true }}
                value={measurements.weight}
                onChange={handleMeasurementChange('weight')}
                variant="outlined"
                InputProps={{ endAdornment: units === 'cm' ? 'kg' : 'lb' }}
                helperText={
                  getMeasurementDifference('weight') !== 0
                    ? `${
                        getMeasurementDifference('weight') > 0 ? '+' : ''
                      }${getMeasurementDifference('weight').toFixed(1)} ${
                        units === 'cm' ? 'kg' : 'lb'
                      } from previous`
                    : ''
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="fit-preference-label">Fit Preference</InputLabel>
                <Select
                  labelId="fit-preference-label"
                  id="fit-preference"
                  label="Fit Preference"
                  defaultValue="regular"
                >
                  <MenuItem value="slim">Slim Fit</MenuItem>
                  <MenuItem value="regular">Regular Fit</MenuItem>
                  <MenuItem value="relaxed">Relaxed Fit</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="measurement sections">
          <Tab label="Upper Body" />
          <Tab label="Lower Body" />
        </Tabs>
      </Box>

      <Card>
        <CardContent>
          {activeTab === 0 ? renderUpperBodyMeasurements() : renderLowerBodyMeasurements()}
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          variant="outlined"
          startIcon={<CameraIcon />}
          color="primary"
        >
          Add Reference Photo
        </Button>
        <Button
          variant="outlined"
          startIcon={<MicIcon />}
          color="primary"
        >
          Voice Notes
        </Button>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          color="primary"
          onClick={handleSave}
        >
          Save Measurements
        </Button>
      </Box>
    </Box>
  );

  const renderMeasurementComparison = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Measurement Comparison
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Compare current measurements with previous records to track changes over time.
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader
          title="Significant Changes"
          subheader="Measurements that have changed significantly since last record"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            {Object.entries(measurements).map(([key, value]) => {
              const diff = getMeasurementDifference(key);
              const isSignificant =
                (key === 'weight' && (diff > 2 || diff < -2)) ||
                (key !== 'weight' && (diff > 1 || diff < -1));

              if (isSignificant) {
                return (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <Box
                      sx={{
                        p: 2,
                        border: 1,
                        borderColor: 'divider',
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Typography variant="subtitle2" gutterBottom>
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          Previous: {previousMeasurements[key]} {units}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Current: {value} {units}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          mt: 1,
                          fontWeight: 'medium',
                          color: diff > 0 ? 'success.main' : 'error.main',
                        }}
                      >
                        {diff > 0 ? '+' : ''}
                        {diff.toFixed(1)} {units} ({((diff / previousMeasurements[key]) * 100).toFixed(1)}%)
                      </Typography>
                    </Box>
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
        </CardContent>
      </Card>

      <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
        Generate Measurement Report
      </Button>
    </Box>
  );

  const renderMeasurementGuide = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Measurement Guide
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Reference materials for accurate measurement techniques.
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="How to Measure" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Upper Body Measurements
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Neck:</strong> Measure around the middle of the neck, at the height of the Adam's apple.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Chest:</strong> Measure around the fullest part of the chest, keeping the tape horizontal.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Waist:</strong> Measure around the natural waist, the narrowest part of the torso.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Shoulder:</strong> Measure from the edge of one shoulder to the other, across the back.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Sleeve:</strong> Measure from shoulder edge to wrist, with arm slightly bent.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Lower Body Measurements
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Inseam:</strong> Measure from the crotch to the desired trouser length.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Outseam:</strong> Measure from the waist to the desired trouser length.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Thigh:</strong> Measure around the fullest part of the thigh.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Knee:</strong> Measure around the knee, with leg slightly bent.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    <strong>Calf:</strong> Measure around the fullest part of the calf.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Button variant="outlined" startIcon={<MeasureIcon />} sx={{ mr: 2 }}>
        View Video Tutorials
      </Button>
      <Button variant="outlined" startIcon={<HelpIcon />}>
        Common Adjustments Guide
      </Button>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Measurement Tools</Typography>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Capture Measurements" />
          <Tab label="Measurement Comparison" />
          <Tab label="Measurement Guide" />
        </Tabs>
      </Paper>

      {activeTab === 0 && renderMeasurementCapture()}
      {activeTab === 1 && renderMeasurementComparison()}
      {activeTab === 2 && renderMeasurementGuide()}
    </Box>
  );
}