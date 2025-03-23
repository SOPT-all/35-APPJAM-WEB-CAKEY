import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const homePageLayout = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
  },
]);

export const mainSectionContainer = style([flexGenerator('column'),{
  width: '100%',
  position: 'relative',
  cursor: 'pointer',
  padding: '13.3rem 1.2rem 0rem 1.2rem',
}])

export const mainImageStyle = style({
  width: '100%',
  height: '23rem',
  borderRadius: '10px',
  position: 'relative',
  objectFit: 'cover',
  objectPosition: 'top',
});

export const mainContentContainer = style([
  flexGenerator('column'),
  {
    width: '100%',
    position: 'absolute',
    top: '3rem',
  },
]);

export const mainTextWrapper = style([
  flexGenerator('column'),
  {
    gap: '0.6rem',
  },
]);

export const mainContentWrapper = style([
  flexGenerator('column'),
  { width: '100%', gap: '1.5rem' },
]);

export const mainTextStyle = style([
  vars.fonts.body04_m_16,
  {
    color: vars.colors.gray700,
  },
]);

export const mainTextMiniStyle = style([
  vars.fonts.head01_b_24,
  {
    color: vars.colors.black,
  },
]);

export const subSectionContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
    gap: '4.2rem',
    padding: '3.3rem 0 7.4rem',
  },
]);

export const subSectionWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  { gap: '1.8rem', padding: '0 2rem', width: '100%' },
]);

export const likedStoreWrapper = style([
  flexGenerator('column'),
  {
    width: '100%',
    gap: ' 1.2rem',
  },
]);

export const cakeSectionWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  { width: '100%', gap: '1.8rem' },
]);

export const subTextWrapper = style([
  flexGenerator('row', 'space-between'),
  { width: '100%' },
]);

export const subTextStyle = style([
  vars.fonts.head03_b_18,
  { color: vars.colors.gray800 },
]);

export const allButtonWrapper = style([
  flexGenerator(),
  {
    gap: '0.4rem',
  },
]);

export const allButtonStyle = style([
  vars.fonts.body05_m_14,
  {
    color: vars.colors.gray500,
  },
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
