import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgHeadShot from '../assets/img/headShot.jpg'

const StyledAboutContainer = styled.div`
display: grid;
height: 100vh;
`
const StyledPortraitContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;

@media (min-width: 576px) {
    width: 50%;
}

@media (min-width: 992px) {
    width: 33.33%;
}
`

const StyledPortraitTitle = styled.h1`
width: 100%;

@media (min-width: 576px) {
    max-width: 270px;
}
`
const StyledPortraitPhoto = styled.div`
width: 100%;
height: 70vh;
background-image: url(${imgHeadShot});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

@media (min-width: 576px) {
    max-width: 270px;
    height: 331px;
}
`

const StyledPortraitSummary = styled.div`
width: 100%;
background-color: ${({ theme }) => theme.darkBackgroundColor};
color: ${({ theme }) => theme.highlight};
padding: 1rem;

@media (min-width: 576px) {
    max-width: 270px;
}
`

const About = () => (
    <StyledAboutContainer>
        <StyledPortraitContainer>
            <StyledPortraitTitle>
                ABOUT
            </StyledPortraitTitle>
            <StyledPortraitPhoto />
            <StyledPortraitSummary>
                陳奎辰 Roy Chen
                <br />
                前端工程師
                <br /><br /><br />
                亞東技術學院
            </StyledPortraitSummary>
        </StyledPortraitContainer>
    </StyledAboutContainer>
)

const Content = () => {
    return (
        <div>
            <About />
        </div>
    )
}

Content.propTypes = {

}

export default Content
