// src/components/ActivityFeed.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ActivityFeed = () => (
    <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, minHeight: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Announcements
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary="New features coming soon!" />
            </ListItem>
            <ListItem>
                <ListItemText primary="System maintenance on Saturday." />
            </ListItem>
        </List>
    </Paper>
);

export default ActivityFeed;
