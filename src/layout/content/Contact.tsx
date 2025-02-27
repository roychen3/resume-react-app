import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import imgContact from '../../assets/img/contact.jpg';

interface StyledContactWayProps {
  $isNotLink?: boolean;
}
const StyledContactWay = styled.a<StyledContactWayProps>`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
  display: block;
  color: ${({ theme }) => theme.subLightText};

  :hover {
    cursor: ${({ $isNotLink }) => ($isNotLink ? 'default' : 'pointer')};
  }

  @media (min-width: 992px) {
    width: 33.33%;
  }
`;

interface ContactWayProps {
  data: {
    icon: JSX.Element;
    infomation: string;
    href: string;
  };
}
const ContactWay: React.FC<ContactWayProps> = ({ data }) => (
  <>
    {data.href ? (
      <StyledContactWay href={data.href} target="_blank">
        {data.icon}
        {data.infomation}
      </StyledContactWay>
    ) : (
      <StyledContactWay $isNotLink>
        {data.icon}
        {data.infomation}
      </StyledContactWay>
    )}
  </>
);

const StyledContactContainer = styled.div`
  background-image: url(${imgContact});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const StyledContactWayShadow = styled.div`
  background-color: ${({ theme }) => theme.darkShadow};
  padding: 3rem 0;
`;
const StyledContactTitle = styled.h1`
  color: ${({ theme }) => theme.subLightText};
  text-align: center;
`;
const StyledContactWayContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledContactWayIcon = styled.i`
  display: block;
  font-size: 2.875rem;
`;
const Contact = () => {
  const contactWays = [
    {
      icon: <StyledContactWayIcon className="fas fa-envelope" />,
      infomation: 'roy850323@gmail.com',
      href: '',
    },
    {
      icon: <StyledContactWayIcon className="fas fa-phone-square" />,
      infomation: '0987726674',
      href: '',
    },
    {
      icon: <StyledContactWayIcon className="fab fa-github" />,
      infomation: 'roychen3',
      href: 'https://github.com/roychen3',
    },
  ];
  return (
    <StyledContactContainer id="contact">
      <StyledContactWayShadow>
        <StyledContactTitle>
          <FormattedMessage id="webMenu.contact" />
        </StyledContactTitle>
        <StyledContactWayContainer>
          {contactWays.map((item, index) => (
            <ContactWay key={index} data={item} />
          ))}
        </StyledContactWayContainer>
      </StyledContactWayShadow>
    </StyledContactContainer>
  );
};
Contact.propTypes = {};

export default Contact;
