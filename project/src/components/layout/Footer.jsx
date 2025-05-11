import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdRecycling } from 'react-icons/md';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Container } from '../common/Container';

const FooterContainer = styled.footer`
  background-color: var(--color-primary-dark);
  color: var(--color-text-light);
  padding: var(--space-xl) 0 var(--space-lg);
  margin-top: auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
  
  &:hover {
    text-decoration: none;
    color: var(--color-text-light);
  }
  
  svg {
    font-size: 1.5em;
  }
`;

const FooterAbout = styled.p`
  margin-bottom: var(--space-md);
  opacity: 0.8;
  line-height: 1.6;
`;

const FooterHeading = styled.h4`
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-md);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--color-accent);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: var(--space-sm);
  
  a {
    color: var(--color-text-light);
    opacity: 0.8;
    transition: var(--transition-fast);
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    
    &:hover {
      opacity: 1;
      color: var(--color-accent);
      text-decoration: none;
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
  opacity: 0.8;
  
  svg {
    font-size: 1.2em;
    color: var(--color-accent);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-text-light);
  transition: var(--transition-fast);
  
  &:hover {
    background-color: var(--color-accent);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: var(--space-lg);
  margin-top: var(--space-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--font-size-sm);
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <div>
            <FooterLogo to="/">
              <MdRecycling />
              <span>ecoRecycle</span>
            </FooterLogo>
            <FooterAbout>
              We are committed to making e-waste recycling easier and more accessible. Our mission is to reduce environmental impact through proper electronic waste disposal and recycling solutions.
            </FooterAbout>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FiFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FiInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </SocialLink>
            </SocialLinks>
          </div>
          
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <Link to="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about">About Us</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services">Services</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/login">Login</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/signup">Sign Up</Link>
              </FooterLink>
            </FooterLinks>
          </div>
          
          <div>
            <FooterHeading>Services</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <Link to="/services">E-Waste Collection</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services">Recycling Process</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services">Corporate Solutions</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services">Data Destruction</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services">Green Certification</Link>
              </FooterLink>
            </FooterLinks>
          </div>
          
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ContactInfo>
              <ContactItem>
                <FiMapPin />
                <span>123 Green Street, Eco City, EC 12345</span>
              </ContactItem>
              <ContactItem>
                <FiPhone />
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <FiMail />
                <span>info@ecorecycle.com</span>
              </ContactItem>
            </ContactInfo>
          </div>
        </FooterGrid>
        
        <Copyright>
          © {new Date().getFullYear()} ecoRecycle. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;