import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, Menu, MenuItem, Divider, makeStyles } from '@material-ui/core';
import router from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    card: {
      height: '100%',
    },
    body: {
      
    },
    CardHeader: {
  
    }
  }));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleProgress = () => {
        setAnchorEl(null);
        router.push("progress");
    };

    const handleHome = () => {
        setAnchorEl(null);
        router.push("/");
    };

    const handleMorphologicView = () => {
        setAnchorEl(null);
        router.push("/docs/morphologicView");
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleClick} color="inherit" aria-controls="simple-menu" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Game Changers
          </Typography>
		  <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={handleProgress}>Voortgang</MenuItem>
        <MenuItem onClick={handleClose} disabled>Livestream</MenuItem>
				<Divider/>
        <MenuItem onClick={handleMorphologicView}>Morfologisch Overzicht</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
      </>
    )
}