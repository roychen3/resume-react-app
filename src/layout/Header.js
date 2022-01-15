import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgCover from '../assets/img/cover.jpg'

const StyledHeaderContainer = styled.div`
width: 100%;
height: 100vh;
background-image: url(${imgCover});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
`

const StyledHeaderLeft = styled.div`
background-color: ${({ theme }) => theme.darkShadow};
width: 40%;
height: 100%;
position: relative;
`

const StyledMenuList = styled.ul`
list-style: none;
position: absolute;
top: 50%;
right: 0;
transform: translate(0%, -50%);
`

const StyledMenuItem = styled.li`
width: 100%;
padding: 1rem 1rem 1rem 0;
display: block;
text-align: right;
color: ${({ theme }) => theme.subText};
font-size: 18px;

:hover {
    color: ${({ theme }) => theme.highlight};
    font-weight: 900;
}

a {
    color: ${({ theme }) => theme.subText};
    font-size: 18px;
}
a:hover {
    color: ${({ theme }) => theme.highlight};
    font-weight: 900;
}
`

const StyledHeaderRight = styled.div`
width: 60%;
height: 100%;
position: relative;
`

const StyledHeaderTitle = styled.p`
position: absolute;
color: ${({ theme }) => theme.highlight};
font-size: 36px;
font-weight: bold;
top: 50%;
transform: translateY(-50%);
padding: 1rem;
`

const Header = () => {
    return (
        <header>
            <StyledHeaderContainer>
                <StyledHeaderLeft>
                    <StyledMenuList>
                        <StyledMenuItem>
                            <a href="#about">關於我</a>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <a href="#skill">技能</a>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <a href="#experience">經歷</a>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <a href="#contact">聯絡方式</a>
                        </StyledMenuItem>
                    </StyledMenuList>
                </StyledHeaderLeft>
                <StyledHeaderRight>
                    <StyledHeaderTitle>個人簡歷</StyledHeaderTitle>
                </StyledHeaderRight>
            </StyledHeaderContainer>
        </header>
    )
}
Header.propTypes = {}

export default Header
