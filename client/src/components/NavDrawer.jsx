import React from "react";
// import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
// import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/ListItem";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KitchenIcon from "@material-ui/icons/Kitchen";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import FireplaceIcon from '@material-ui/icons/Fireplace';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    minWidth: 250,
  },
  fullList: {
    width: "auto",
  },
});

const views = [
  {text: "Speak", icon: <RecordVoiceOverIcon />},
  {text: "Cook", icon: <FireplaceIcon />},
  {text: "Save", icon: <KitchenIcon />},
];

const NavDrawer = ({ isOpen, closeDrawer }) => {
  return (
    <div>
      <Drawer anchor={"left"} open={isOpen} onClose={closeDrawer}>
        <List>
          <ListItem button onClick={closeDrawer}>
            <ListItemIcon>{<MenuOpenIcon />}</ListItemIcon>
            <ListItemText primary={"speak2eat"} />
          </ListItem>
          {views.map((view, index) => (
            <ListItem button key={index}>
              {view.icon && <ListItemIcon>{view.icon}</ListItemIcon>}
              <ListItemText primary={view.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
