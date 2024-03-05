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
import ForumIcon from '@mui/icons-material/Forum';
import CreateIcon from '@mui/icons-material/Create';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './styles/FeedCard.css';

const LihkgFeedCard = ({
  title,
  category,
  user_nickname,
  like_count,
  dislike_count,
  no_of_reply,
  create_time,
  url,
}) => {
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

  const lihkgCategoryMapping = {
    1: '吹水台',
    5: '時事台',
  };
  const categoryText = lihkgCategoryMapping[category] || category;

  return (
    <div className="feed-card lihkg-feed-card">
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ variant: 'subtitle2' }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          avatar={
            <Avatar
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MTIiLz48cmFkaWFsR3JhZGllbnQgaWQ9IkEiIGN4PSIzNzQuMDIiIGN5PSIxMzA5LjA4OSIgcj0iNjM1LjM1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAtOTUwLjYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmVmMDAwIi8+PHN0b3Agb2Zmc2V0PSIuMzMyIiBzdG9wLWNvbG9yPSIjZmVmMDAwIi8+PHN0b3Agb2Zmc2V0PSIuNDU4IiBzdG9wLWNvbG9yPSIjZmNlNzAxIi8+PHN0b3Agb2Zmc2V0PSIuNjY0IiBzdG9wLWNvbG9yPSIjZjhjZjAyIi8+PHN0b3Agb2Zmc2V0PSIuOTIyIiBzdG9wLWNvbG9yPSIjZjBhNzA0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWU5YTA1Ii8+PC9yYWRpYWxHcmFkaWVudD48Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjQzMC43IiBmaWxsPSJ1cmwoI0EpIi8+PHJhZGlhbEdyYWRpZW50IGlkPSJCIiBjeD0iNTEyIiBjeT0iMTQ2Mi42IiByPSI0MzAuNzMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC05NTAuNikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZWYwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjciIHN0b3AtY29sb3I9IiNmZWYwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2NjNDMwMCIgc3RvcC1vcGFjaXR5PSIuMiIvPjwvcmFkaWFsR3JhZGllbnQ+PGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI0MzAuNyIgZmlsbD0idXJsKCNCKSIvPjxwYXRoIGQ9Ik03NzAuNCA1MjguN2MtMjIuNyAwLTQxLjEgMTguNC00MS4xIDQxLjEgMCA5NC4xLTg1LjEgMTcwLjctMTg5LjkgMTcwLjdzLTE4OS45LTc2LjYtMTg5LjktMTcwLjdjMC0yMi43LTE4LjQtNDEuMS00MS4xLTQxLjFzLTQxLjEgMTguNC00MS4xIDQxLjFjMCAxMzkuNCAxMjEuOSAyNTIuOCAyNzIgMjUyLjhzMjcyLTExMy40IDI3Mi0yNTIuOGMuMS0yMi43LTE4LjMtNDEuMS00MC45LTQxLjF6bS0zNzAuOS05MmMzOC4xIDAgNjguOS0zMi41IDY4LjktNzIuMyAwLTQwLjItMzAuOC03Mi4zLTY4LjktNzIuM3MtNjguOSAzMi41LTY4LjkgNzIuM2MuNSA0MC4yIDMxLjMgNzIuMyA2OC45IDcyLjN6bTI3OC45IDBjMzguMSAwIDY4LjktMzIuNSA2OC45LTcyLjMgMC00MC4yLTMwLjgtNzIuMy02OC45LTcyLjNzLTY4LjkgMzIuNS02OC45IDcyLjNjMCA0MC4yIDMwLjggNzIuMyA2OC45IDcyLjN6Ii8+PC9zdmc+"
              aria-label="LIHKG"
            />
          }
        />
        <CardContent>
          <Box>
            <List disablePadding dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ForumIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={categoryText}
                    primaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={user_nickname}
                    primaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <ThumbUpIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={like_count}
                    primaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <ThumbDownIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dislike_count}
                    primaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <CommentIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={no_of_reply}
                    primaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <EventAvailableIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${formatDate(create_time)} UTC`}
                    primaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon>
                    <OpenInNewIcon fontSize="small" />
                  </ListItemIcon>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText
                      primary="Read More..."
                      primaryTypographyProps={{ variant: 'caption' }}
                    />
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

export default LihkgFeedCard;
