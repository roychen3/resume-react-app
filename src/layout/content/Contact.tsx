import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneSquare, FaGithub } from 'react-icons/fa';

import imgContact from '../../assets/img/contact.jpg';

interface StyledContactWayProps {
  $isNotLink?: boolean;
}
const StyledContactWay = styled.a<StyledContactWayProps>`
  color: ${({ theme }) => theme.subLightText};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  :hover {
    cursor: ${({ $isNotLink }) => ($isNotLink ? 'default' : 'pointer')};
  }
`;

interface ContactWayProps {
  data: {
    icon: React.ReactNode;
    information: string;
    href: string;
  };
}
const ContactWay: React.FC<ContactWayProps> = ({ data }) => {
  const content = (
    <div>
      {data.icon}
      <span>{data.information}</span>
    </div>
  );
  return (
    <>
      {data.href ? (
        <StyledContactWay href={data.href} target="_blank">
          {content}
        </StyledContactWay>
      ) : (
        <StyledContactWay $isNotLink>{content}</StyledContactWay>
      )}
    </>
  );
};

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
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
const StyledContactIcon = styled.span`
  display: block;
  height: 2.875rem;
  font-size: 2.875rem;
`;
const Contact = () => {
  const contactWays: ContactWayProps['data'][] = [
    {
      icon: (
        <StyledContactIcon>
          <IoMdMail />
        </StyledContactIcon>
      ),
      information: 'roy850323@gmail.com',
      href: 'mailto:roy850323@gmail.com',
    },
    {
      icon: (
        <StyledContactIcon>
          <FaPhoneSquare />
        </StyledContactIcon>
      ),
      information: '0987726674',
      href: 'tel:0987726674',
    },
    {
      icon: (
        <StyledContactIcon>
          <FaGithub />
        </StyledContactIcon>
      ),
      information: 'roychen3',
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

export default Contact;
