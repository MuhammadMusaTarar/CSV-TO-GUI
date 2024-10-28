// src/components/DummyMap.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const DummyMap = () => (
    <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, minHeight: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Regional Sales Heatmap
        </Typography>
        <Box
            sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 1,
                color: '#757575',
                fontSize: 18,
            }}
        >
            [Heatmap Placeholder]
        </Box>
    </Paper>
);

export default DummyMap;
