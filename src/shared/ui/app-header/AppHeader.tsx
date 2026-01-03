import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import s from './AppHeader.module.scss';
import { ROUTE_MAP, ROUTE_NAMES, NAV_ITEMS } from '@/shared/constants';

export const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <AppBar position="sticky" elevation={0} className={s.appBar}>
      <Toolbar disableGutters className={s.toolbar}>
        <Container maxWidth="lg" className={s.inner}>
          <Box className={s.left}>
            <Typography
              variant="h6"
              className={s.logo}
              component={Link}
              to={ROUTE_MAP[ROUTE_NAMES.FORECAST]}
            >
              Astro
            </Typography>

            <Box className={s.navDesktop}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.route}
                  component={Link}
                  to={ROUTE_MAP[item.route]}
                  className={s.navBtn}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          <IconButton
            className={s.burger}
            color="inherit"
            onClick={openDrawer}
            aria-label="Открыть меню"
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={closeDrawer} ModalProps={{ keepMounted: true }}>
        <Box className={s.drawer} role="presentation">
          <Typography variant="subtitle1" className={s.drawerTitle}>
            Меню
          </Typography>

          <List className={s.drawerList}>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.route} disablePadding>
                <ListItemButton component={Link} to={ROUTE_MAP[item.route]} onClick={closeDrawer}>
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
