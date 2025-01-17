import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const homePageLayout = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
  },
]);

export const mainSectionContainer = style({
  width: '100%',
  position: 'relative',
});

export const mainContentContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
    position: 'absolute',
    bottom: '3.5rem',
    padding: '0 2rem',
  },
]);

export const mainTextContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '0.4rem',
  },
]);

export const mainTextWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '0.8rem',
  },
]);

export const mainContentWrapper = style([
  flexGenerator('row', 'space-between'),
  { width: '100%' },
]);

export const mainTextStyle = style([
  vars.fonts.head01_b_24,
  {
    color: vars.colors.white,
  },
]);

export const mainTextMiniStyle = style([
  vars.fonts.body04_m_16,
  {
    color: vars.colors.gray100,
  },
]);

export const subSectionContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
    gap: '4.2rem',
    padding: '3.3rem 0 7.3rem',
  },
]);

export const subSectionWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  { gap: '1.8rem', padding: '0 2rem', width: '100%' },
]);

export const cakeSectionWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  { width: '100%', gap: '1.8rem' },
]);

export const subTextStyle = style([
  vars.fonts.head03_b_18,
  { color: vars.colors.gray800 },
]);

export const cakeTextStyle = style([
  vars.fonts.head03_b_18,
  { color: vars.colors.gray800, paddingLeft: '2rem' },
]);

export const categoryWrapper = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.6rem',
});

export const likedCakeWrapper = style([
  flexGenerator('row', 'flex-start', 'flex-start'),
  {
    width: '100%',
    overflowX: 'scroll',
    gap: '1.5rem',
    padding: '0 2rem',
  },
]);

export const likedCakeStyle = style({
  minWidth: '16rem',
});
