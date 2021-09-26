import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import {gravatarPath} from '../gravatar';
import MessageFiled from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'

const useStyles = makeStyles({
  root:{
    gridRow: 2,
    margin: '26px'
  }
})

const MessageInputField = ({ name }) => {
  const [text, setText] = useState('')
  const classes = useStyles()
  const avatarPath = gravatarPath(name)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item={true} xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item={true} xs={10}>
          <MessageFiled name={name} setText={setText} text={text} />
        </Grid>
        <Grid item={true} xs={1}>
          <MessageSubmitButton name={name} setText={setText} text={text} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;