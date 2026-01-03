import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '@/shared/ui/app-header';
import { AppFooter } from '@/shared/ui/app-footer';
import s from './AppLayout.module.scss';

type AppLayoutProps = {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
};

export const AppLayout = ({ maxWidth = 'lg' }: AppLayoutProps) => {
  return (
    <Box className={s.root}>
      <AppHeader />

      <Box component="main" className={s.main}>
        <Container maxWidth={maxWidth} className={s.container}>
          <Outlet />
        </Container>
      </Box>

      <AppFooter />
    </Box>
  );
};
