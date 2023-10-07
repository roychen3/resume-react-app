import styled from 'styled-components';
import { useIntl } from 'react-intl';

import imgExperienceBackground from '../../../assets/img/experienceBackground.jpg';
import imgExperiencePentiumNetwork from '../../../assets/img/experiencePentiumNetwork.jpg';
import imgExperienceBibian from '../../../assets/img/experienceBibian.jpg';
import imgExperienceBankpro from '../../../assets/img/experienceBankpro.jpg';
import imgExperienceArcoa from '../../../assets/img/experienceArcoa.jpg';

import ExperienceCover from './ExperienceCover'
import ExperienceNode from './ExperienceNode'

const StyledExperienceContainer = styled.div`
  padding: 3rem 0;
  background-image: url(${imgExperienceBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

const StyledExperienceNodeContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 62rem;
  display: grid;
  gap: 3rem;

  @media (min-width: 992px) {
    width: 80%;
  }
`;
const Experience = () => {
  const intl = useIntl();

  const experienceData = [
    {
      backgroundImg: imgExperiencePentiumNetwork,
      companyName: intl.formatMessage({ id: 'experience.pentium-network.companyName' }),
      companyUrl: 'https://www.pentiumnetwork.com/',
      jobTitle: intl.formatMessage({ id: 'experience.pentium-network.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.pentium-network.period' }),
      instruction: intl.formatMessage({ id: 'experience.pentium-network.instruction' }),
      useSkill: 'Micro frontends, Module Federation, webpack5, TypeScript, React, Vue, MobX, rollup, vite, Git, HTML, CSS',
    },
    {
      backgroundImg: imgExperienceBibian,
      companyName: intl.formatMessage({ id: 'experience.bibian.companyName' }),
      companyUrl: 'https://www.bibian.co.jp/',
      jobTitle: intl.formatMessage({ id: 'experience.bibian.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.bibian.period' }),
      instruction: intl.formatMessage({ id: 'experience.bibian.instruction' }),
      useSkill: 'Next.js, React, Redux, Tailwind, Jest, webpack, Git, HTML, CSS',
    },
    {
      backgroundImg: imgExperienceBankpro,
      companyName: intl.formatMessage({ id: 'experience.bankpro.companyName' }),
      companyUrl: 'https://www.bankpro.com.tw/',
      jobTitle: intl.formatMessage({ id: 'experience.bankpro.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.bankpro.period' }),
      instruction: intl.formatMessage({ id: 'experience.bankpro.instruction' }),
      useSkill: 'React, Redux, Redux-Saga, BootStrap, i18n, Jest, Git, HTML, CSS',
    },
    {
      backgroundImg: imgExperienceArcoa,
      companyName: intl.formatMessage({ id: 'experience.arcoa.companyName' }),
      companyUrl: 'http://www.arcoa.com.tw/',
      jobTitle: intl.formatMessage({ id: 'experience.arcoa.jobTitle' }),
      period: intl.formatMessage({ id: 'experience.arcoa.period' }),
      instruction: intl.formatMessage({ id: 'experience.arcoa.instruction' }),
      useSkill: 'C#,  SQL, SQL Server, Oracle',
    },
  ];

  return (
    <>
      <ExperienceCover />
      <StyledExperienceContainer>
        <StyledExperienceNodeContainer>
          {experienceData.map((item, index) => (
            <ExperienceNode key={index} data={item} />
          ))}
        </StyledExperienceNodeContainer>
      </StyledExperienceContainer>
    </>
  );
};
Experience.propTypes = {};

export default Experience;
