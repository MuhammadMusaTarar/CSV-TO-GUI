// src/components/Dashboard.js
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import Header from './Header';
import SidePanel from './SidePanel';
import TopMetric from './TopMetric';
import DummyMap from './DummyMap';
import ActivityFeed from './ActivityFeed';
import CSVUploader from './CSVUploader';

const Dashboard = () => {
    const handleFileUpload = (file) => {
        console.log('CSV file uploaded:', file);
    };

    return (
        <Box sx={{ display: 'flex', overflow: 'hidden', height: '100vh' }}>
            <SidePanel />
            <Box sx={{ flexGrow: 1, padding: 3, overflowY: 'auto' }}>
                <Header />
                <Container sx={{ mt: 2 }}>
                    <CSVUploader onFileUpload={handleFileUpload} />
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {/* TopMetric */}
                        <Grid item xs={12} md={4}>
                            <TopMetric />
                        </Grid>

                        {/* DummyMap */}
                        <Grid item xs={12} md={8}>
                            <DummyMap />
                        </Grid>

                        {/* ActivityFeed */}
                        <Grid item xs={12}>
                            <ActivityFeed />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;
