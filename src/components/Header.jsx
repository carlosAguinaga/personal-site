import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import NoSsr from "@material-ui/core/NoSsr";
import Link from '@material-ui/core/Link';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  root: {
    //
  },
  toolbar:{
    [theme.breakpoints.up('lg')]:{
      width: '80%',
      margin: '0 auto',
    }
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  fullMenu: {
    color: theme.palette.common.white
  }

}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NoSsr>
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" className={classes.title} >
              {'</CA>'}
            </Typography>
            <div>
              {isMobile ? (
                <div>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    onClick={handleMenu}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {/* <MenuItem onClick={handleClose}>Sobre Mi</MenuItem> */}
                    <MenuItem component={Link} href="#about" onClick={handleClose}>Sobre Mi</MenuItem>
                    <MenuItem component={Link} href="#portafolio" onClick={handleClose}>Portafolio</MenuItem>
                    <MenuItem component={Link} href="#skills" onClick={handleClose}>Habilidades</MenuItem>
                    <MenuItem component={Link} href="#contacto" onClick={handleClose}>Contacto</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div>
                  <Button href="#about" className={classes.fullMenu}>Sobre Mi</Button>
                  <Button href="#portafolio" className={classes.fullMenu}>Portafolio</Button>
                  <Button href="#skills" className={classes.fullMenu}>Habilidades</Button>
                  <Button href="#contacto" className={classes.fullMenu}>Contacto</Button>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </NoSsr>
  );
};

export default Header;
