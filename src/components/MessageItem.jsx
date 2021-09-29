import React, {useEffect, useRef} from 'react';
import {
  Avatar, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography  
} from '@material-ui/core';
import {gravatarPath} from '../gravatar';


const MessageItem = ( {isLastItem, name, text} ) => {
  const ref = useRef(null)
  const AvatarPath = gravatarPath(name);

  useEffect(() => {
    if(isLastItem) {
      //TODO:ここでscrollする
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [isLastItem])
  return (
    <ListItem divider={true} ref={ref}>
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