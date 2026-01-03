import { useMemo, useState } from 'react';
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
import s from './AppHeader.module.scss';

type NavItem = {
  label: string;
  href: string; // пока через href, потом легко сменить на react-router Link
};

export const AppHeader = () => {
  const nav = useMemo<NavItem[]>(
    () => [
      { label: 'Прогноз', href: '/' },
      { label: 'Как это работает', href: '/how-it-works' },
      { label: 'Privacy', href: '/privacy' },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} className={s.appBar}>
      <Toolbar disableGutters className={s.toolbar}>
        <Container maxWidth="lg" className={s.inner}>
          <Box className={s.left}>
            <Typography variant="h6" className={s.logo} component="a" href="/">
              Astro
            </Typography>

            {/* Desktop nav */}
            <Box className={s.navDesktop}>
              {nav.map((item) => (
                <Button key={item.href} href={item.href} className={s.navBtn} color="inherit">
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Mobile burger */}
          <IconButton
            className={s.burger}
            color="inherit"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className={s.drawer}>
          <Typography variant="subtitle1" className={s.drawerTitle}>
            Меню
          </Typography>

          <List className={s.drawerList}>
            {nav.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component="a" href={item.href} onClick={() => setOpen(false)}>
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
