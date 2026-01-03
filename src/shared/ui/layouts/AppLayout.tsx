import type { PropsWithChildren } from 'react';
import { Box, Container } from '@mui/material';
import { AppHeader } from '@/shared/ui/app-header';
import { AppFooter } from '@/shared/ui/app-footer';
import s from './AppLayout.module.scss';

type AppLayoutProps = PropsWithChildren<{
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}>;

export const AppLayout = ({ children, maxWidth = 'lg' }: AppLayoutProps) => {
  return (
    <Box className={s.root}>
      <AppHeader />

      <Box component="main" className={s.main}>
        <Container maxWidth={maxWidth} className={s.container}>
          {children}
        </Container>
      </Box>

      <AppFooter />
    </Box>
  );
};
