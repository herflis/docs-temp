import * as React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10,
    cursor: 'pointer',
    backgroundColor: '#ebeef3',
    padding: '4px 8px',
    fontSize: '12px',
    color: '#5c5e6c',
    fontWeight: 500,
    borderRadius: '10%'
  },
}));

const CopyToClipBoard = () => {
  const classes = useStyles();
  return(
<a className={classes.button}>Copy</a>
)}

export default CopyToClipBoard
