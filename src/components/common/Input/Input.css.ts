import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.384rem',
});

export const inputLabel = style({
  color: '#646464',
  fontFamily: 'Pretendeard',
  fontSize: '1.1782rem',
  fontWeight: '400',
});

export const input = style({
  backgroundColor: '#FBFBFB',
  borderRadius: '0.768rem',
  color: '#000',
  fontFamily: 'Pretendard',
  fontSize: '1.1782rem',
  fontWeight: '400',
  padding: '0.96rem 1.92rem',
});
