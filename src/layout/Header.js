import React from 'react'
import PropTypes from 'prop-types'
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
background-color: rgba(0, 0, 0, 0.6);
width: 40%;
height: 100%;
position: relative;
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
                    <ul>
                        <li><a href="#about">關於我</a></li>
                        <li><a href="#skills">技能</a></li>
                        <li><a href="#experience">經歷</a></li>
                        <li><a href="#contact">聯絡方式</a></li>
                    </ul>
                </StyledHeaderLeft>
                <StyledHeaderRight>
                    <StyledHeaderTitle>個人簡歷</StyledHeaderTitle>
                </StyledHeaderRight>
            </StyledHeaderContainer>
        </header>
    )
}
Header.propTypes = {

}

export default Header
