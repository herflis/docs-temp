import * as React from "react";
import { Alert, AlertTitle } from '@material-ui/lab';

const Note = ({ children, title: title, ...props }) => {
  if(children) {
    return (
      <Alert severity={props.severity ? props.severity : `info`}>
        <AlertTitle>{title ? title : ``}</AlertTitle>
        {children}
      </Alert>
    );
  } else {
    return null;
  }
};

export default Note;
