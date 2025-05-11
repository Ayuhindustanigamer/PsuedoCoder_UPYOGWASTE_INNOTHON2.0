import React from 'react';
import styled from 'styled-components';
import { Container, Section, Hero } from '../components/common/Container';
import { FiTarget, FiEye, FiAward, FiHeart } from 'react-icons/fi';

const AboutHero = styled(Hero)`
  background-color: var(--color-secondary);
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutSection = styled(Section)`
  background-color: var(--color-background-light);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--space-lg);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: var(--space-md);
    line-height: 1.7;
    color: var(--color-text-secondary);
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
  }
`;

const MissionVisionSection = styled(Section)`
  background-color: var(--color-background-off);
`;

const MissionVisionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MissionVisionCard = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
  
  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: ${({ iconBg }) => iconBg || 'var(--color-primary-light)'};
    opacity: 0.2;
    border-radius: 50%;
    margin-bottom: var(--space-md);
  }
  
  .icon {
    font-size: 30px;
    color: ${({ iconColor }) => iconColor || 'var(--color-primary)'};
  }
  
  h3 {
    margin-bottom: var(--space-md);
    color: ${({ titleColor }) => titleColor || 'var(--color-primary)'};
  }
  
  p {
    line-height: 1.7;
    color: var(--color-text-secondary);
  }
`;

const ValuesSection = styled(Section)``;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  padding: var(--space-lg);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background-light);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  border-top: 4px solid var(--color-primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: rgba(46, 125, 50, 0.1);
    border-radius: 50%;
    margin-bottom: var(--space-md);
  }
  
  .icon {
    font-size: 24px;
    color: var(--color-primary);
  }
  
  h3 {
    margin-bottom: var(--space-sm);
  }
  
  p {
    color: var(--color-text-secondary);
  }
`;

const TeamSection = styled(Section)`
  background-color: var(--color-background-off);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamMember = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    
    .member-image img {
      transform: scale(1.05);
    }
  }
  
  .member-image {
    height: 250px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-normal);
    }
  }
  
  .member-info {
    padding: var(--space-md);
    text-align: center;
    
    h3 {
      margin-bottom: var(--space-xs);
    }
    
    .member-position {
      color: var(--color-primary);
      font-weight: 500;
      margin-bottom: var(--space-sm);
    }
    
    .member-bio {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
    }
  }
`;

const About = () => {
  return (
    <>
      <AboutHero>
        <Container>
          <HeroContent>
            <h1>About Us</h1>
            <p>Learn about our mission, vision, and commitment to a sustainable future through responsible e-waste management.</p>
          </HeroContent>
        </Container>
      </AboutHero>

      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <SectionTitle>Our Story</SectionTitle>
              <p>
                Founded in 2015, ecoRecycle started with a simple yet powerful vision: to address the growing problem of electronic waste in our communities. What began as a small collection center has now grown into a leading e-waste recycling company with a presence across multiple locations.
              </p>
              <p>
                Our journey reflects our commitment to environmental sustainability and responsible waste management. We recognized early on that electronic waste contains harmful materials that, if not properly handled, can cause significant damage to our environment and health.
              </p>
              <p>
                Today, we pride ourselves on being at the forefront of the e-waste recycling industry, continuously innovating our processes and expanding our services to meet the evolving needs of our customers while staying true to our environmental commitments.
              </p>
            </AboutText>
            <AboutImage>
              <img src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg" alt="Team working on e-waste recycling" />
            </AboutImage>
          </AboutContent>
        </Container>
      </AboutSection>

      <MissionVisionSection>
        <Container>
          <MissionVisionContainer>
            <MissionVisionCard iconBg="var(--color-primary-light)" iconColor="var(--color-primary)" titleColor="var(--color-primary)">
              <div className="icon-container">
                <FiTarget className="icon" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible and responsible e-waste management solutions that protect our environment, conserve resources, and create a sustainable future for generations to come.
              </p>
              <p>
                We are committed to educating communities about the importance of proper electronic waste disposal and making it convenient for everyone to participate in sustainable practices.
              </p>
            </MissionVisionCard>
            
            <MissionVisionCard iconBg="var(--color-secondary-light)" iconColor="var(--color-secondary)" titleColor="var(--color-secondary)">
              <div className="icon-container">
                <FiEye className="icon" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading force in transforming how society manages electronic waste, setting the standard for environmental responsibility, innovation, and customer service in the recycling industry.
              </p>
              <p>
                We envision a world where e-waste is viewed as a valuable resource rather than a disposal problem, and where recycling is the norm rather than the exception.
              </p>
            </MissionVisionCard>
          </MissionVisionContainer>
        </Container>
      </MissionVisionSection>

      <ValuesSection>
        <Container>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValueGrid>
            <ValueCard>
              <div className="icon-container">
                <FiHeart className="icon" />
              </div>
              <h3>Environmental Stewardship</h3>
              <p>
                We are deeply committed to protecting our planet through responsible waste management practices that minimize environmental impact and conserve natural resources.
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="icon-container">
                <FiAward className="icon" />
              </div>
              <h3>Integrity</h3>
              <p>
                We operate with honesty, transparency, and ethical standards in all our business practices, building trust with our customers, partners, and communities.
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="icon-container">
                <FiTarget className="icon" />
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously seek better, more efficient ways to recycle e-waste, investing in new technologies and processes that advance our industry.
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="icon-container">
                <FiEye className="icon" />
              </div>
              <h3>Education</h3>
              <p>
                We believe in raising awareness about the importance of proper e-waste disposal and empowering communities with knowledge.
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="icon-container">
                <FiAward className="icon" />
              </div>
              <h3>Quality Service</h3>
              <p>
                We are dedicated to providing exceptional service to our customers, making e-waste recycling easy, convenient, and rewarding.
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="icon-container">
                <FiHeart className="icon" />
              </div>
              <h3>Community Impact</h3>
              <p>
                We strive to make a positive difference in the communities we serve, creating jobs and supporting local initiatives.
              </p>
            </ValueCard>
          </ValueGrid>
        </Container>
      </ValuesSection>

      <TeamSection>
        <Container>
          <SectionTitle>Our Leadership Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <div className="member-image">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="CEO" />
              </div>
              <div className="member-info">
                <h3>Sarah Johnson</h3>
                <div className="member-position">CEO & Founder</div>
                <p className="member-bio">
                  With over 15 years in environmental management, Sarah founded ecoRecycle with a vision to revolutionize e-waste recycling.
                </p>
              </div>
            </TeamMember>
            
            <TeamMember>
              <div className="member-image">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="CTO" />
              </div>
              <div className="member-info">
                <h3>Michael Chen</h3>
                <div className="member-position">Chief Technology Officer</div>
                <p className="member-bio">
                  Michael leads our technological innovations, developing efficient and eco-friendly recycling processes.
                </p>
              </div>
            </TeamMember>
            
            <TeamMember>
              <div className="member-image">
                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="Operations Director" />
              </div>
              <div className="member-info">
                <h3>James Wilson</h3>
                <div className="member-position">Operations Director</div>
                <p className="member-bio">
                  James oversees our collection centers and ensures smooth day-to-day operations across all locations.
                </p>
              </div>
            </TeamMember>
            
            <TeamMember>
              <div className="member-image">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Sustainability Manager" />
              </div>
              <div className="member-info">
                <h3>Emily Rodriguez</h3>
                <div className="member-position">Sustainability Manager</div>
                <p className="member-bio">
                  Emily champions our environmental initiatives and ensures compliance with environmental regulations.
                </p>
              </div>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection>
    </>
  );
};

export default About;