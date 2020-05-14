import styled from '@emotion/styled';

const Header = styled('div')`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;

  border-bottom: 1px solid ${p => p.theme.borderDark};
  box-shadow: ${p => p.theme.dropShadowLight};
  z-index: ${p => p.theme.zIndex.globalSelectionHeader};

  background: #fff;
  font-size: ${p => p.theme.fontSizeExtraLarge};
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: 54px;
  }
`;

export default Header;
