import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import imgExperienceCover from '../../../assets/img/experienceCover.jpg';

const StyledExperienceCoverContainer = styled.div`
  width: 100%;
  background-image: url(${imgExperienceCover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const StyledExperienceTitle = styled.h1`
  color: ${({ theme }) => theme.subLightText};
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
const ExperienceCover = () => {
  return (
    <StyledExperienceCoverContainer id="experience">
      <StyledExperienceTitle>
        <FormattedMessage id="webMenu.experience" />
      </StyledExperienceTitle>
    </StyledExperienceCoverContainer>
  );
};

export default ExperienceCover;
