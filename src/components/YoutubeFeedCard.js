import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useMediaQuery } from 'react-responsive';
import { Waypoint } from 'react-waypoint';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectIcon from '@mui/icons-material/Subject';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import './styles/FeedCard.css';

const YoutubeFeedCard = ({ type, id, title, channel, publishTime }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [playing, setPlaying] = useState(false);

  const calculateHeight = (width) => {
    return Math.round((9 / 16) * width);
  };

  const handleVisible = (isVisible) => {
    if (!isVisible) {
      setPlaying(false);
    }
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div className="feed-card youtube-feed-card">
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
            <Avatar 
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" 
              aria-label={type} 
            />
          }
        />
        <CardContent>
          <Waypoint onEnter={() => handleVisible(true)} onLeave={() => handleVisible(false)}>
            <div className={`youtube-container`}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                playing={playing}
                width={isMobile ? '100%' : '560'}
                height={calculateHeight(isMobile ? (window.innerWidth - 20) : 560)}
                controls
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 0,
                    },
                  },
                }}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            </div>
          </Waypoint>
          <Box>
            <List disablePadding dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SubjectIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={channel} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EventAvailableIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={publishTime} primaryTypographyProps={{variant: 'caption'}} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default YoutubeFeedCard;
