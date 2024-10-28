// src/components/SidePanel.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/system';

const SidePanel = () => {
  const [insightsOpen, setInsightsOpen] = useState(false);

  // Open dropdown on hover
  const handleInsightsHover = (isHovered) => {
    setInsightsOpen(isHovered);
  };

  // Styled ListItem with hover effects
  const StyledListItem = styled(ListItem)({
    '&:hover': {
      backgroundColor: '#e0e0e0', // Light grey background on hover
      borderRadius: '8px', // Rounded corners on hover
    },
    transition: 'background-color 0.3s ease', // Smooth background color transition
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#F7F8FC',
          color: '#333',
          paddingTop: '20px',
        },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2, fontWeight: 'bold' }}>
        Business Analytics
      </Typography>
      <List>
        {/* Home */}
        <StyledListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </StyledListItem>

        {/* Insights - automatically open on hover */}
        <StyledListItem
          button
          onMouseEnter={() => handleInsightsHover(true)}
          onMouseLeave={() => handleInsightsHover(false)}
        >
          <ListItemIcon><InsightsIcon /></ListItemIcon>
          <ListItemText primary="Insights" />
        </StyledListItem>
        <Collapse in={insightsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Product Sales and Profit" />
            </StyledListItem>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Customer Segmentation" />
            </StyledListItem>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Geographic Distribution" />
            </StyledListItem>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Top Performing Products" />
            </StyledListItem>
          </List>
        </Collapse>

        {/* Accounts */}
        <StyledListItem button>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Accounts" />
        </StyledListItem>

        {/* Settings */}
        <StyledListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledListItem>
      </List>
    </Drawer>
  );
};

export default SidePanel;
