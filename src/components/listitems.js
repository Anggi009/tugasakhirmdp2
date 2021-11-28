import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import PeopleIcon from '@material-ui/icons/People';
import LanguageIcon from '@material-ui/icons/Language';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';
import Filter8Icon from '@material-ui/icons/Filter8';
import Filter9Icon from '@material-ui/icons/Filter9';

import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <div>
    <base href="/"/>
    <Typography marginLeft="10px" component="h6" variant="h6" color="inherit" noWrap>
            Benua
          </Typography>
    {/* <ListItem button component={NavLink} to='/CountryStyled'>
      <ListItemIcon>
        <LanguageIcon />
      </ListItemIcon>
      <ListItemText primary="Semua Negara" />
    </ListItem> */}
    <ListItem button component="a" href="Region/europe">
      <ListItemIcon>
        <Filter1Icon />
      </ListItemIcon>
      <ListItemText primary="Eropa" />
    </ListItem>
    <ListItem button component="a" href="Region/americas">
      <ListItemIcon>
        <Filter2Icon />
      </ListItemIcon>
      <ListItemText primary="Amerika" />
    </ListItem>
    <ListItem button component="a" href="Region/asia">
      <ListItemIcon>
        <Filter3Icon />
      </ListItemIcon>
      <ListItemText primary="Asia" />
    </ListItem>
    <ListItem button component="a" href="Region/africa">
      <ListItemIcon>
        <Filter4Icon />
      </ListItemIcon>
      <ListItemText primary="Afrika" />
    </ListItem>
    <ListItem button component="a" href="Region/oceania">
      <ListItemIcon>
        <Filter5Icon />
      </ListItemIcon>
      <ListItemText primary="Oseania" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
<div>
    <base href="/"/>
    <Typography marginLeft="10px" component="h6" variant="h6" color="inherit" noWrap>
            Regional Bloc
          </Typography>
    <ListItem button component="a" href="Regionbloc/eu">
      <ListItemIcon>
        <Filter1Icon />
      </ListItemIcon>
      <ListItemText primary="Eropean Union" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/asean">
      <ListItemIcon>
        <Filter2Icon />
      </ListItemIcon>
      <ListItemText primary="ASEAN" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/au">
      <ListItemIcon>
        <Filter3Icon />
      </ListItemIcon>
      <ListItemText primary="African Union" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/pa">
      <ListItemIcon>
        <Filter4Icon />
      </ListItemIcon>
      <ListItemText primary="Pacific Alliance" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/al">
      <ListItemIcon>
        <Filter5Icon />
      </ListItemIcon>
      <ListItemText primary="Arab League" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/al">
      <ListItemIcon>
        <Filter6Icon />
      </ListItemIcon>
      <ListItemText primary="Arab League" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/eeu">
      <ListItemIcon>
        <Filter7Icon />
      </ListItemIcon>
      <ListItemText primary="Eurasian Economic Union" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/nafta">
      <ListItemIcon>
        <Filter8Icon />
      </ListItemIcon>
      <ListItemText primary="NAFTA" />
    </ListItem>
    <ListItem button component="a" href="Regionbloc/caricom">
      <ListItemIcon>
        <Filter9Icon />
      </ListItemIcon>
      <ListItemText primary="CARICOM" />
    </ListItem>
  </div>
);