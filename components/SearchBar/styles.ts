import css from 'styled-jsx/css';

const searchBarStyles = css`
  @import 'color';
  @import 'rem';

  .SearchBar {
    box-sizing: border-box;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    padding: rem(10px);
    border-bottom: 3px solid accent(mainAccentColor);
    width: 100%;
    margin-bottom: rem(30px);
    font-size: rem(16px);
    opacity: 0.8;

    &:focus,
    focus-visible {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 3px solid accent(mainAccentColor);
      padding: rem(12px);
      outline: none;
      opacity: 1;
    }
  }
`;

export { searchBarStyles };
