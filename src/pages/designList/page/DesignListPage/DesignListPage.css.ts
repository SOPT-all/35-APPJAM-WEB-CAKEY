import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const designListPageLayout = style([
  flexGenerator('column'),
  {
    width: '100%',
    gap: '1.2rem',
  },
]);

export const categoryContainer = style([
  flexGenerator('column'),
  {
    width: '100%',
    gap: '1.5rem',
    paddingTop: '1.6rem',
  },
]);

export const categoryWrapper = style({
  padding: '0 1.95rem',
  width: '100%',
});

export const subCategoryWrapper = style({
  width: '100%',
});

export const cardListWrapper = style({
  padding: '0 2rem',
});
