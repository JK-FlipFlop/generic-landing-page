import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

import "./SideDrawer.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const anchor = "left";
  const [state, setState] = React.useState({
    left: false,
  });
  const HAMBURGER_MENU_ITEMS = [
    {
      id: 1,
      name: "MY_PROFILE",
      icon: <InboxIcon />,
      onClick: () => {
        console.log("clicked");
      },
    },
    {
      id: 2,
      name: "CONNECTED_DEVICES",
      icon: <InboxIcon />,
      onClick: () => {
        console.log("clicked");
      },
    },
    {
      id: 3,
      name: "SETTINGS",
      icon: <MailIcon />,
      onClick: () => {
        console.log("clicked");
      },
    },
    {
      id: 4,
      name: "SHARED_WITH_ME",
      icon: <MailIcon />,
      onClick: () => {
        console.log("clicked");
      },
    },
    {
      id: 5,
      name: "ABOUT_US",
      icon: <MailIcon />,
      onClick: () => {
        console.log("HamburgerMenu List Item Pressed!");
      },
    },
    {
      id: 6,
      name: "CONTACT_US",
      icon: <InboxIcon />,
      onClick: () => {
        console.log("clicked");
      },
    },
    {
      id: 7,
      name: "LOGOUT",
      icon: <MenuIcon />,
      onClick: () => {
        this.props.logout();
      },
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        {HAMBURGER_MENU_ITEMS.map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <div className="appnav__hamburger-menu">
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            style={{ fontSize: "26rem" }}
          />
        </div>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
        
        {props.page === "document" && (
          <div>
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {list(anchor)}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer variant="permanent" open>
                {list(anchor)}
              </Drawer>
            </Hidden>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}
