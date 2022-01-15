import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgHeadShot from '../../assets/img/headShot.jpg'


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

@media (min-width: 1200px) {
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
const Portrait = () => (
    <StyledPortraitContainer id="about">
        <StyledPortraitTitle>
            關於我
        </StyledPortraitTitle>
        <StyledPortraitPhoto />
        <StyledPortraitSummary>
            陳奎辰
            <br />
            前端工程師
            <br /><br /><br />
            亞東技術學院
        </StyledPortraitSummary>
    </StyledPortraitContainer>
)


const StyledIntroductionContainer = styled.div`
width: 100%;
background-color: ${({ theme }) => theme.subDarkBackgroundColor};
color: ${({ theme }) => theme.highlight};
padding: 3rem 2rem;

@media (min-width: 576px) {
    width: 50%;
    padding: 12rem 4rem;
}

@media (min-width: 992px) {
    width: 33.33%;
    padding: 9rem 3rem;
}

@media (min-width: 1200px) {
    width: 20%;
    padding: 12rem 2rem;
}
`
const Introduction = () => (
    <StyledIntroductionContainer>
        我熱愛學習實用的程式，來幫助自己用更有效率的方式整理資訊。
        <br />
        平常會關注科技、財經和藝術的趨勢，提醒自己這個世界一直在持續進步；
        <br />
        如果在開發時遇到問題，常常可以在網路上找到非常多資源幫助我解決。
        <br /><br /><br /><br />
        所以， 我感謝有幸能活在這個世代。
    </StyledIntroductionContainer>
)


const StyledSkillsContainer = styled.div`
width: 100%;
padding: 3rem;
background-color: ${({ theme }) => theme.lighDarktBackgroundColor};

@media (min-width: 576px) {
    width: 100%;
}

@media (min-width: 992px) {
    width: 33.33%;
    padding: 5rem;
}

@media (min-width: 1200px) {
    width: 40%;
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
        <h1>技能</h1>

        <StyledSkillListContainerLayout>
            <StyledSkillListContainer>
                <h3>前端</h3>
                <StyledSkillListDivider />
                <StyledSkillList>
                    <StyledSkillItem>React</StyledSkillItem>
                    <StyledSkillItem>JavaScript</StyledSkillItem>
                    <StyledSkillItem>CSS</StyledSkillItem>
                    <StyledSkillItem>HTML</StyledSkillItem>
                </StyledSkillList>
            </StyledSkillListContainer>

            <StyledSkillListContainer>
                <h3>後端</h3>
                <StyledSkillListDivider />
                <StyledSkillList>
                    <StyledSkillItem>C#</StyledSkillItem>
                    <StyledSkillItem>SQL</StyledSkillItem>
                    <StyledSkillItem>Python</StyledSkillItem>
                    <StyledSkillItem>PHP</StyledSkillItem>
                </StyledSkillList>
            </StyledSkillListContainer>

            <StyledSkillListContainer>
                <h3>其他</h3>
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

@media (min-width: 992px) {
    min-height: 100vh;
}
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
