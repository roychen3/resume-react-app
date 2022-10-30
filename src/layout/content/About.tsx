import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import imgHeadShot from '../../assets/img/headShot.jpg'


const StyledPortraitContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;

@media (min-width: 576px) {
    width: 40%;
}
`
const StyledPortraitTitle = styled.h1`
width: 100%;
margin-top: 3rem;

@media (min-width: 576px) {
    max-width: 270px;
}
`
const StyledPortraitPhoto = styled.div`
background-image: url(${imgHeadShot});
background-repeat: no-repeat;
background-size: cover;
background-position: center 0px;    
width: 100%;
padding-top: 100%; /* Aspect Ratio 1:1 */

@media (min-width: 576px) {
    width: 100%;
    max-width: 270px;
    height: 331px;
    padding: 0;
}
`
const StyledPortraitSummary = styled.div`
width: 100%;
background-color: ${({ theme }) => theme.darkBackground};
color: ${({ theme }) => theme.highlight};
padding: 2rem;

@media (min-width: 576px) {
    max-width: 270px;
    padding: 1rem;
}
`
const Portrait = () => (
    <StyledPortraitContainer id="about">
        <StyledPortraitTitle>
            <FormattedMessage id="webMenu.about" />
        </StyledPortraitTitle>
        <StyledPortraitPhoto />
        <StyledPortraitSummary>
            <FormattedMessage id="about.name" />
            <br />
            <FormattedMessage id="about.jobTitle" />
            <br /><br /><br />
            <FormattedMessage id="about.education" />
        </StyledPortraitSummary>
    </StyledPortraitContainer>
)


const StyledIntroductionContainer = styled.div`
width: 100%;
background-color: ${({ theme }) => theme.subDarkBackground};
color: ${({ theme }) => theme.highlight};
padding: 3rem 2rem;

@media (min-width: 576px) {
    width: 60%;
    padding: 12rem 4rem;
}

@media (min-width: 992px) {
    width: 30%;
    padding: 12rem 3rem;
}

@media (min-width: 1200px) {
    padding: 12rem 3rem;
}
`
const Introduction = () => (
    <StyledIntroductionContainer>
        <FormattedMessage id="about.introduction.section1" />
        <br /><br /><br /><br />
        <FormattedMessage id="about.introduction.section2" />
    </StyledIntroductionContainer>
)


const StyledSkillsContainer = styled.div`
width: 100%;
padding: 3rem 2rem;
background-color: ${({ theme }) => theme.subLightDarkBackground};

@media (min-width: 576px) {
    width: 100%;
    padding: 3rem;
}

@media (min-width: 992px) {
    width: 30%;
}
`
const StyledSkillListContainerLayout = styled.div`
display: flex;
flex-wrap: wrap;
`
const StyledSkillListContainer = styled.div`
padding: 2rem 0 0 0;
width: 100%;

@media (min-width: 576px) {
    padding: 2rem 2rem 0 0;
    width: 33.33%;
}

@media (min-width: 992px) {
    padding: 2rem 0 0 0;
    width: 100%;
}
`
const StyledSkillListDivider = styled.hr`
border: 1px solid ${({ theme }) => theme.mainText};
background-color: ${({ theme }) => theme.mainText};
margin: 1rem 0;
`
const StyledSkillList = styled.ul`
padding-left: 1rem;
`
const StyledSkillItem = styled.li`
padding: 0.5rem 0;
`
const Skills = () => (
    <StyledSkillsContainer id="skill">
        <h1>
            <FormattedMessage id="webMenu.skill" />
        </h1>

        <StyledSkillListContainerLayout>
            <StyledSkillListContainer>
                <h3>
                    <FormattedMessage id="about.skill.frontEnd" />
                </h3>
                <StyledSkillListDivider />
                <StyledSkillList>
                    <StyledSkillItem>React</StyledSkillItem>
                    <StyledSkillItem>JavaScript</StyledSkillItem>
                    <StyledSkillItem>CSS</StyledSkillItem>
                    <StyledSkillItem>HTML</StyledSkillItem>
                </StyledSkillList>
            </StyledSkillListContainer>

            <StyledSkillListContainer>
                <h3>
                    <FormattedMessage id="about.skill.backEnd" />
                </h3>
                <StyledSkillListDivider />
                <StyledSkillList>
                    <StyledSkillItem>C#</StyledSkillItem>
                    <StyledSkillItem>SQL</StyledSkillItem>
                    <StyledSkillItem>Python</StyledSkillItem>
                    <StyledSkillItem>PHP</StyledSkillItem>
                </StyledSkillList>
            </StyledSkillListContainer>

            <StyledSkillListContainer>
                <h3>
                    <FormattedMessage id="about.skill.other" />
                </h3>
                <StyledSkillListDivider />
                <StyledSkillList>
                    <StyledSkillItem>Git</StyledSkillItem>
                </StyledSkillList>
            </StyledSkillListContainer>
        </StyledSkillListContainerLayout>
    </StyledSkillsContainer>
)

const StyledAboutContainer = styled.div`
display: flex;
flex-wrap: wrap;
`
const About = () => (
    <StyledAboutContainer>
        <Portrait />
        <Introduction />
        <Skills />
    </StyledAboutContainer>
)
About.propTypes = {}

export default About
