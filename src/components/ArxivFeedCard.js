import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectIcon from '@mui/icons-material/Subject';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CreateIcon from '@mui/icons-material/Create';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './styles/Card.css';
import './styles/ArxivFeedCard.css';

const ArxivFeedCard = ({ type, subject, title, summary, author, updated, url }) => {
  return (
    <div className="feed-card arxiv-feed-card">
      <Card>
        <CardHeader 
          title={title} 
          titleTypographyProps={{variant: 'subtitle2'}}
          action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          }
          avatar={
            <Avatar src="https://info.arxiv.org/brand/images/brand-logo-primary.jpg" aria-label={type} />
          }
        />
        <CardContent>
          <Box>
            <List disablePadding dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SubjectIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={subject} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <SummarizeIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={summary} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={author} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <EventAvailableIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={updated} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <OpenInNewIcon fontSize='small' />
                  </ListItemIcon>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <ListItemText primary='Read More...' primaryTypographyProps={{variant: 'caption'}} />
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArxivFeedCard;
