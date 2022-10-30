import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

interface StyledExperienceNodeProps {
  $backgroundImg: string;
}
const StyledExperienceNode = styled.div<StyledExperienceNodeProps>`
  padding: 1rem 1rem 3rem;
  background-image: url(${({ $backgroundImg }) => $backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 1rem 3rem 3rem;
  }

  @media (min-width: 992px) {
    transform: translateX(-5rem);
  }
`;

const StyledExperienceNodePeriod = styled.h1`
  color: ${({ theme }) => theme.highlight};
  margin-bottom: 1rem;
`;

const StyledExperienceNodeContent = styled.div`
  background-color: ${({ theme }) => theme.whiteShadow};
  padding: 2rem 1rem;

  @media (min-width: 992px) {
    transform: translateX(13rem);
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
const StyledExperienceNodeContentInstruction = styled.p`
  font-size: 0.875rem;
  margin-bottom: 2rem;
  white-space: pre-wrap;
  max-height: 45vh;
  overflow-y: auto;
`;
const StyledExperienceNodeSkills = styled.p`
  font-size: 0.875rem;
`;

interface ExperienceNodeProps {
  data: {
    backgroundImg: string;
    companyName: string;
    companyUrl: string;
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
          <a href={data.companyUrl} target="_blank">{data.companyName}</a>
        </StyledExperienceNodeContentCompanyName>
        <StyledExperienceNodeContentJobTitle>
          {data.jobTitle}
        </StyledExperienceNodeContentJobTitle>
        <StyledExperienceNodeContentInstruction>
          {data.instruction?.split('<br />').join('\n')}
        </StyledExperienceNodeContentInstruction>
        <StyledExperienceNodeContentDivider />
        <StyledExperienceNodeSkills>
          {`${intl.formatMessage({ id: 'experience.useSkill' })}${
            data.useSkill
          }`}
        </StyledExperienceNodeSkills>
      </StyledExperienceNodeContent>
    </StyledExperienceNode>
  );
};

export default ExperienceNode;
