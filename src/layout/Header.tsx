import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import imgCover from '../assets/img/cover.jpg';

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imgCover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`;

interface StyledHeaderLeftProps {
  readonly theme: {
    darkShadow: string;
  };
}
const StyledHeaderLeft = styled.div<StyledHeaderLeftProps>`
  background-color: ${({ theme }) => theme.darkShadow};
  width: 40%;
  height: 100%;
  position: relative;
`;

const StyledMenuList = styled.ul`
  list-style: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
`;

const StyledMenuItem = styled.li`
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  display: block;
  text-align: right;
  color: ${({ theme }) => theme.subLightText};
  font-size: 1.125rem;

  :hover {
    color: ${({ theme }) => theme.highlight};
  }

  a {
    color: ${({ theme }) => theme.subLightText};
    font-size: 1.125rem;
  }
  a:hover {
    color: ${({ theme }) => theme.highlight};
  }
`;

const StyledHeaderRight = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
`;

const StyledHeaderTitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.mainText};
  background-color: ${({ theme }) => theme.whiteShadow};
  font-size: 2.25rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
`;

const Header = () => {
  return (
    <header>
      <StyledHeaderContainer>
        <StyledHeaderLeft>
          <StyledMenuList>
            <StyledMenuItem>
              <a href="#about">
                <FormattedMessage id="webMenu.about" />
              </a>
            </StyledMenuItem>
            <StyledMenuItem>
              <a href="#skill">
                <FormattedMessage id="webMenu.skill" />
              </a>
            </StyledMenuItem>
            <StyledMenuItem>
              <a href="#experience">
                <FormattedMessage id="webMenu.experience" />
              </a>
            </StyledMenuItem>
            <StyledMenuItem>
              <a href="#contact">
                <FormattedMessage id="webMenu.contact" />
              </a>
            </StyledMenuItem>
          </StyledMenuList>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledHeaderTitle>
            <FormattedMessage id="webCoverTitle" />
          </StyledHeaderTitle>
        </StyledHeaderRight>
      </StyledHeaderContainer>
    </header>
  );
};
Header.propTypes = {};

export default Header;
