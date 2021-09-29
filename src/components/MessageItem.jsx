import React from 'react';
import {
  Avatar, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography  
} from '@material-ui/core';
import {gravatarPath} from '../gravatar';


const MessageItem = ( {name, text} ) => {
  const AvatarPath = gravatarPath(name);
  return (
    <ListItem divider={true}>
    <ListItemAvatar>
      <Avatar  src={AvatarPath} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            // color="text.primary"
          >
            {text}
          </Typography>
      }
    />
  </ListItem>

  )}

export default MessageItem;