import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgExperienceCover from '../../assets/img/experienceCover.jpg'
import imgExperienceBackground from '../../assets/img/experienceBackground.jpg'
import imgExperienceBankpro from '../../assets/img/experienceBankpro.jpg'
import imgExperienceArcoa from '../../assets/img/experienceArcoa.jpg'
import imgExperienceCollege from '../../assets/img/experienceCollege.jpg'

const StyledExperienceCoverContainer = styled.div`
width: 100%;
height: 200px;
position: relative;
overflow: hidden;

@media (min-width: 992px) {
    height: 300px;
}
`
const StyledExperienceCoverImg = styled.div`
height: 100%;
background-image: url(${imgExperienceCover});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
filter: blur(3px);
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
    <StyledExperienceCoverContainer>
        <StyledExperienceCoverImg />
        <StyledExperienceTitle>經歷</StyledExperienceTitle>
    </StyledExperienceCoverContainer>
)

const StyledExperienceNode = styled.div`
width: 100%;
max-width: 600px;
margin: 0rem auto 3rem;
padding: 1rem 1rem 3rem;
background-image: url(${({ $backgroundImg }) => $backgroundImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

@media (min-width: 576px) {
    width: 80%;
}

@media (min-width: 992px) {
    transform: translateX(-80px);
}
`
const StyledExperienceNodePeriod = styled.h1`
color: ${({ theme }) => theme.highlight};
margin-bottom: 1rem;
`
const StyledExperienceNodeContent = styled.div`
background-color: rgba(255, 255, 255, 0.8);
width: 100%;
height: 80%;
padding: 2rem 1rem;

@media (min-width: 576px) {
    width: 90%;
    margin: 0 auto;
}

@media (min-width: 992px) {
    width: 80%;
    transform: translateX(233px);
}
`
const StyledExperienceNodeContentCompanyName = styled.h2`
`
const StyledExperienceNodeContentJobTitle = styled.h3`
padding-bottom: 1rem;
`
const StyledExperienceNodeContentUseSkill = styled.p`
`
const StyledExperienceNodeContentDivider = styled.hr`
margin: 1rem 0;
`
const StyledExperienceNodeContentInstruction = styled.p`
margin-bottom: 4rem;
`
const ExperienceNode = ({ data }) => (
    <StyledExperienceNode $backgroundImg={data.backgroundImg}>
        <StyledExperienceNodePeriod>
            {data.period}
        </StyledExperienceNodePeriod>
        <StyledExperienceNodeContent>
            <StyledExperienceNodeContentCompanyName>
                {data.companyName}
            </StyledExperienceNodeContentCompanyName>
            <StyledExperienceNodeContentJobTitle>
                {data.jobTitle}
            </StyledExperienceNodeContentJobTitle>
            <StyledExperienceNodeContentInstruction>
                {data.instruction}
            </StyledExperienceNodeContentInstruction>
            <StyledExperienceNodeContentDivider />
            <StyledExperienceNodeContentUseSkill>
                {`使用技術：${data.useSkill}`}
            </StyledExperienceNodeContentUseSkill>
        </StyledExperienceNodeContent>
    </StyledExperienceNode>
)
ExperienceNode.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
}

const StyledExperienceContainer = styled.div`
padding: 3rem 0;
background-image: url(${imgExperienceBackground});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const Experience = () => {
    const experienceData = [
        {
            backgroundImg: imgExperienceBankpro,
            companyName: '金財通商務科技服務股份有限公司',
            jobTitle: '前端工程師',
            period: '2020.2 - Today',
            instruction: '開發「陽信銀行-企業網路銀行」專案',
            useSkill: 'HTML, CSS, React-Hook, Redux, Redux-Saga, Git',
        },
        {
            backgroundImg: imgExperienceArcoa,
            companyName: '全虹企業',
            jobTitle: '工程師',
            period: '2018.1 - 2020.1',
            instruction: `開發 & 維護 兩套WMS倉儲管理系統；
            <br/>
            優化使用者需求；
            <br/>
            串接廠商 API；
            <br/>
            寫排程發 mail；
            <br/>
            定期撈取資料庫的資料轉成報表給使用者或廠商。 `,
            useSkill: 'C#,  SQL, SQL Server, Oracle',
        },
        {
            backgroundImg: imgExperienceCollege,
            companyName: '畢業專題',
            jobTitle: '全端',
            period: '2017.5 - 2018.1',
            instruction: `利用爬蟲抓取 TripAdvisor 的飯店、餐廳 & 景點的評價，抓取下來的評語做文字情感分析，由所寫出來的語意來給出真實的評分，分析出來的資訊利用 Tableau 做視覺化，最後透過網頁呈現， 此專題是快速的讓使用者瞭解在眾多的留言或評論當中，是否有足夠的參考價值。 `,
            useSkill: 'Python, HTML, CSS, JavaScript, PHP ,Tableau API',
        },
    ]

    return (
        <>
            <ExperienceCover />
            <StyledExperienceContainer>
                {experienceData.map((item) => <ExperienceNode data={item} />)}
            </StyledExperienceContainer>
        </>
    )
}
Experience.propTypes = {

}

export default Experience
