// src/components/TopMetric.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const TopMetric = () => (
    <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, minHeight: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Overview Metrics
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary="Total Orders" secondary="1234" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Total Cost" secondary="$500,000" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Average Order Value" secondary="$400" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Last Updated" secondary="10/26/2024" />
            </ListItem>
        </List>
    </Paper>
);

export default TopMetric;
