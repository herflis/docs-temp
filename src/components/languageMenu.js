import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import langs from './mdxComponents/langs';
import {LanguageContext} from '../context/LanguageContext';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  wrapper: {
    flexGrow: 1,
    boxShadow: 'rgba(116, 129, 141, 0.1) 0px 1px 1px 0px',
    color: '#333',
    borderTop: 'solid 1px #eee'
  },
  button: {
    borderRight: 'solid 1px #eee',
    borderRadius: '0px',
    padding: '10px 20px',
    fontWeight: 'normal'
  },
  active: {
    borderRight: 'solid 1px #eee',
    borderRadius: '0px',
    padding: '10px 20px',
    fontWeight: 500
  }
}));

const LanguageMenu = (props) => {
  const classes = useStyles();


  const isActive = (lang, name) => lang === name;

  return (
<div className={classes.wrapper}>
      <AppBar position="static" style={{ background: '#ffffff', color: '#13a5ad'}}>
        <Toolbar>
          {langs.map(l =>
          <LanguageContext.Consumer key={`langMenu-${l.name}`}>
            {({lang, toggleLanguage}) => {
              return (
              <Button color="inherit" className={isActive(lang, l.name) ? classes.active : classes.button} onClick={() => toggleLanguage(l.name)}>
                {l.title}
              </Button>
            )}}
          </LanguageContext.Consumer>
          )}
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default LanguageMenu
