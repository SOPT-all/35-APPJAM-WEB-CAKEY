import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const modalContainer = style([
  flexGenerator('column', 'flex-start', 'center'),
  {
    width: 'calc(100dvw - 9.2rem)',
    minWidth: 'calc(var(--min-width) - 9.2rem)',
    maxWidth: 'calc(var(--max-width) - 9.2rem)',
  },
]);

export const modalHeader = style([
  flexGenerator('column', 'center', 'flex-start'),
  vars.fonts.head06_sb_16,
  {
    gap: '0.4rem',
    padding: '2.4rem 2rem 1.6rem 2rem',
    width: '100%',
    borderBottom: `1px solid ${vars.colors.gray100}`,
  },
]);

export const headerContent = style([
  flexGenerator('row', 'space-between'),
  { gap: '0.7rem', width: '100%' },
]);

export const modalDescription = style([
  vars.fonts.body09_r_10,
  { color: vars.colors.red1 },
]);

export const modalForm = style({
  padding: '0 0.4rem',
  width: '100%',
  fontSize: '9rem',
});

export const formContent = style([
  flexGenerator('column', 'flex-start'),
  {
    gap: '1.8rem',
    padding: '1.5rem 1.6rem',
    width: '100%',
    height: '18rem',
    overflowY: 'scroll',

    selectors: {
      '&::-webkit-scrollbar': {
        display: 'block',
        width: '0.4rem',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '4.8rem',
        backgroundColor: vars.colors.gray300,
      },
    },
  },
]);

export const modalFooter = style([
  vars.fonts.body09_r_10,
  {
    padding: '1.2rem 2rem',
    width: '100%',
    borderTop: `1px solid ${vars.colors.gray100}`,
    borderRadius: '0rem 0rem 1rem 1rem',
    backgroundColor: vars.colors.white,
  },
]);
