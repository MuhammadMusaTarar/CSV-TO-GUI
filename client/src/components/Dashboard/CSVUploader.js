// src/components/CSVUploader.js
import React from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const CSVUploader = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file); // Call the parent function to process the CSV
    }
  };

  return (
    <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Upload CSV File
      </Typography>
      <label htmlFor="csv-upload">
        <Input
          accept=".csv"
          id="csv-upload"
          type="file"
          onChange={handleFileChange}
        />
        <Button variant="contained" color="primary" component="span">
          Choose CSV
        </Button>
      </label>
    </Paper>
  );
};

export default CSVUploader;
