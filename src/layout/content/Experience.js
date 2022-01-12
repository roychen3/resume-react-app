import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgExperienceCover from '../../assets/img/experienceCover.jpg'

const StyledExperienceContainer = styled.div`
width: 100%;
height: 200px;
position: relative;
overflow: hidden;

@media (min-width: 992px) {
    height: 300px;
}
`
const StyledExperienceImg = styled.div`
height: 100%;
background-image: url(${imgExperienceCover});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
filter: blur(6px);
`
const StyledExperienceTitle = styled.h1`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
padding: 1rem;

@media (min-width: 992px) {
    padding: 2rem;
}
`
const ExperienceCover = () => (
    <StyledExperienceContainer>
        <StyledExperienceImg />
        <StyledExperienceTitle>經歷</StyledExperienceTitle>
    </StyledExperienceContainer>
)

const Experience = () => {
    return (
        <>
            <ExperienceCover />
            <div>
            </div>
        </>
    )
}
Experience.propTypes = {

}

export default Experience
