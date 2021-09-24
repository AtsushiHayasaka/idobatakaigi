import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';


const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',

  }
})

const Main = ({ name }) => {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <MessageList />
    <MessageInputField name={name}/>
  </div>
  )
}

export default Main;