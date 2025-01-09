import { style } from '@vanilla-extract/css';

export const flexGenerator = (
  flexDirection: 'row' | 'column' = 'row',
  justifyContent:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around' = 'center',
  alignItems:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline' = 'center'
) =>
  style({
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
  });
