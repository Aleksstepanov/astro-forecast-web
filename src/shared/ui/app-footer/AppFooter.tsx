import { Box, Container, Typography } from '@mui/material';
import s from './AppFooter.module.scss';

export const AppFooter = () => {
  return (
    <Box component="footer" className={s.footer}>
      <Container maxWidth="lg" className={s.inner}>
        <Typography variant="body2" className={s.text}>
          © {new Date().getFullYear()} Astro Forecast
        </Typography>

        <Box className={s.links}>
          <Typography variant="body2" component="a" href="/how-it-works" className={s.link}>
            Как это работает
          </Typography>

          <Typography variant="body2" component="a" href="/privacy" className={s.link}>
            Privacy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
