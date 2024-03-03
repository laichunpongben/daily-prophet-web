import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
import ForumIcon from '@mui/icons-material/Forum';
import CreateIcon from '@mui/icons-material/Create';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './styles/Card.css';

const RedditFeedCard = ({ type, community, title, author, ups, num_comments, created_utc, url }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC',
    });
    return formatter.format(date);
  };

  const isImageURL = (url) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif']; 
    const urlExtension = url.split('.').pop().toLowerCase();
  
    return imageExtensions.includes(urlExtension);
  };
  

  return (
    <div className="feed-card reddit-feed-card">
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
            <Avatar src="https://static.lingoapp.com/avatar/s/75148/4D5390E4-1A1E-429A-8C24-73CF0F35EACD.png" aria-label={type} />
          }
        />
        <CardContent>
          <Box>
            <List disablePadding dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ForumIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={community} primaryTypographyProps={{variant: 'caption'}} />
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
                    <ThumbUpIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={ups} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <CommentIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={num_comments} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <EventAvailableIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={`${formatDate(created_utc)} UTC`} primaryTypographyProps={{variant: 'caption'}} />
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
          <div className={`image-container`}>
            {isImageURL(url) && (
              <CardMedia
                component="img"
                image={url}
                alt={title}
              />
            )}
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default RedditFeedCard;
