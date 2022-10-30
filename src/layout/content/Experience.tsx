import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';

import imgExperienceCover from '../../assets/img/experienceCover.jpg';
import imgExperienceBackground from '../../assets/img/experienceBackground.jpg';
import experienceBibian from '../../assets/img/experienceBibian.jpg';
import imgExperienceBankpro from '../../assets/img/experienceBankpro.jpg';
import imgExperienceArcoa from '../../assets/img/experienceArcoa.jpg';
import imgExperienceCollege from '../../assets/img/experienceCollege.jpg';

const StyledExperienceCoverContainer = styled.div`
  width: 100%;
  background-image: url(${imgExperienceCover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const StyledExperienceTitle = styled.h1`
  color: ${({ theme }) => theme.subLighDarkText};
  background-color: ${({ theme }) => theme.darkShadow};
  text-align: center;
  padding: 3rem;

  @media (min-width: 576px) {
    padding: 6rem;
  }

  @media (min-width: 992px) {
    padding: 9rem;
  }
`;
const ExperienceCover = () => (
  <StyledExperienceCoverContainer id="experience">
    <StyledExperienceTitle>
      <FormattedMessage id="webMenu.experience" />
    </StyledExperienceTitle>
  </StyledExperienceCoverContainer>
);

interface StyledExperienceNodeProps {
  $backgroundImg: string;
}
const StyledExperienceNode = styled.div<StyledExperienceNodeProps>`
  width: 100%;
  max-width: 600px;
  margin: 0rem auto 3rem;
  padding: 1rem 1rem 3rem;
  background-image: url(${({ $backgroundImg }) => $backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :last-child {
    margin-bottom: 0rem;
  }

  @media (min-width: 576px) {
    width: 80%;
  }

  @media (min-width: 992px) {
    transform: translateX(-80px);
  }
`;

const StyledExperienceNodePeriod = styled.h1`
  color: ${({ theme }) => theme.highlight};
  margin-bottom: 1rem;
`;
const StyledExperienceNodeContent = styled.div`
  background-color: ${({ theme }) => theme.whiteShadow};
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
`;
const StyledExperienceNodeContentCompanyName = styled.h2``;
const StyledExperienceNodeContentJobTitle = styled.h4`
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.subDarkText};
`;
const StyledExperienceNodeContentDivider = styled.hr`
  border: 1px solid ${({ theme }) => theme.mainText};
  background-color: ${({ theme }) => theme.mainText};
  margin: 1rem 0;
`;
const StyledExperienceNodeContentInstruction = styled.div`
  margin-bottom: 4rem;
`;

interface ExperienceNodeProps {
  data: {
    backgroundImg: string;
    companyName: string;
    jobTitle: string;
    period: string;
    instruction: string;
    useSkill: string;
  };
}
const ExperienceNode: React.FC<ExperienceNodeProps> = ({ data }) => {
  const intl = useIntl();

  return (
    <StyledExperienceNode $backgroundImg={data.backgroundImg}>
      <StyledExperienceNodePeriod>{data.period}</StyledExperienceNodePeriod>
      <StyledExperienceNodeContent>
        <StyledExperienceNodeContentCompanyName>
          {data.companyName}
        </StyledExperienceNodeContentCompanyName>
        <StyledExperienceNodeContentJobTitle>
          {data.jobTitle}
        </StyledExperienceNodeContentJobTitle>
        <StyledExperienceNodeContentInstruction>
          {data.instruction?.split('<br />').map((text, index) => (
            <p key={`${index}`}>{text}</p>
          ))}
        </StyledExperienceNodeContentInstruction>
        <StyledExperienceNodeContentDivider />
        <p>
          {`${intl.formatMessage({ id: 'experience.useSkill' })}${
            data.useSkill
          }`}
        </p>
      </StyledExperienceNodeContent>
    </StyledExperienceNode>
  );
};

const StyledExperienceContainer = styled.div`
  padding: 3rem 0;
  background-image: url(${imgExperienceBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;
const Experience = () => {
  const intl = useIntl();

  const experienceData = [
    {
      backgroundImg: experienceBibian,
      companyName: intl.formatMessage({ id: 'experience.bibian.companyName' }),
      jobTitle: intl.formatMessage({ id: 'experience.bibian.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.bibian.period' }),
      instruction: intl.formatMessage({ id: 'experience.bibian.instruction' }),
      useSkill: 'HTML, CSS, React-Hook, Redux, Redux-Saga, Next.js, Git',
    },
    {
      backgroundImg: imgExperienceBankpro,
      companyName: intl.formatMessage({ id: 'experience.bankpro.companyName' }),
      jobTitle: intl.formatMessage({ id: 'experience.bankpro.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.bankpro.period' }),
      instruction: intl.formatMessage({ id: 'experience.bankpro.instruction' }),
      useSkill: 'HTML, CSS, React-Hook, Redux, Redux-Saga, Git',
    },
    {
      backgroundImg: imgExperienceArcoa,
      companyName: intl.formatMessage({ id: 'experience.arcoa.companyName' }),
      jobTitle: intl.formatMessage({ id: 'experience.arcoa.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.arcoa.period' }),
      instruction: intl.formatMessage({ id: 'experience.arcoa.instruction' }),
      useSkill: 'C#,  SQL, SQL Server, Oracle',
    },
    {
      backgroundImg: imgExperienceCollege,
      companyName: intl.formatMessage({
        id: 'experience.graduationTopic.companyName',
      }),
      jobTitle: intl.formatMessage({
        id: 'experience.graduationTopic.jobTitle',
      }),
      period: intl.formatMessage({ id: 'experience.graduationTopic.period' }),
      instruction: intl.formatMessage({
        id: 'experience.graduationTopic.instruction',
      }),
      useSkill: 'Python, HTML, CSS, JavaScript, PHP ,Tableau API',
    },
  ];

  return (
    <>
      <ExperienceCover />
      <StyledExperienceContainer>
        {experienceData.map((item, index) => (
          <ExperienceNode key={index} data={item} />
        ))}
      </StyledExperienceContainer>
    </>
  );
};
Experience.propTypes = {};

export default Experience;
