import { Box } from '@mui/material';
import type { PropsWithChildren } from 'react';
import s from './UiPageSection.module.scss';

export const UiPageSection = ({ children }: PropsWithChildren) => {
  return <Box className={s.section}>{children}</Box>;
};
