import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { MdRecycling, MdEco, MdSecurity, MdCorporateFare } from 'react-icons/md';
import { Container, Section, Hero, Grid } from '../components/common/Container';
import { PrimaryButton, SecondaryButton } from '../components/common/Button';
import { FeatureCard } from '../components/common/Card';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContent = styled.div`
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s ease;
`;

const HeroTitle = styled.h1`
  margin-bottom: var(--space-md);
  font-size: var(--font-size-xxxl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-xxl);
  }
  
  span {
    color: var(--color-accent);
  }
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-lg);
  opacity: 0.9;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatsSection = styled(Section)`
  background-color: var(--color-primary-light);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: var(--space-lg);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .stat-value {
    font-size: var(--font-size-xxxl);
    font-weight: 700;
    margin-bottom: var(--space-sm);
    
    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }
  
  .stat-label {
    font-size: var(--font-size-md);
    opacity: 0.9;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-xxl);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-xl);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
`;

const HowItWorkSection = styled(Section)`
  background-color: var(--color-background-off);
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StepImage = styled.div`
  flex: 1;
  padding: var(--space-lg);
  
  img {
    width: 100%;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
  }
`;

const StepContent = styled.div`
  flex: 1;
  padding: var(--space-lg);
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const StepItem = styled.div`
  display: flex;
  gap: var(--space-md);
  
  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 50%;
    font-size: var(--font-size-lg);
    font-weight: 600;
    flex-shrink: 0;
  }
  
  .step-content {
    h3 {
      margin-bottom: var(--space-xs);
      color: var(--color-primary);
    }
    
    p {
      color: var(--color-text-secondary);
    }
  }
`;

const CtaSection = styled(Section)`
  background-color: var(--color-primary);
  color: white;
  text-align: center;
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CtaTitle = styled.h2`
  margin-bottom: var(--space-md);
  font-size: var(--font-size-xxl);
`;

const CtaText = styled.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xl);
  opacity: 0.9;
`;

const TestimonialsSection = styled(Section)``;

const TestimonialCard = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
  
  .testimonial-text {
    font-style: italic;
    margin-bottom: var(--space-md);
    position: relative;
    padding: 0 var(--space-md);
    
    &::before, &::after {
      content: '"';
      font-size: var(--font-size-xxl);
      color: var(--color-primary-light);
      opacity: 0.3;
      position: absolute;
    }
    
    &::before {
      top: 0;
      left: 0;
    }
    
    &::after {
      bottom: 0;
      right: 0;
      transform: rotate(180deg);
    }
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    
    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--color-primary-light);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
    }
    
    .author-info {
      h4 {
        margin-bottom: 0;
      }
      
      p {
        color: var(--color-text-tertiary);
        margin-bottom: 0;
      }
    }
  }
`;

const Home = () => {
  return (
    <>
      <Hero>
        <Container>
          <HeroContent>
            <HeroTitle>
              Responsible <span>E-Waste</span> Collection for a Greener Future
            </HeroTitle>
            <HeroSubtitle>
              Join us in our mission to properly recycle electronic waste and protect our environment for generations to come.
            </HeroSubtitle>
            <HeroButtons>
              <PrimaryButton as={Link} to="/services">
                Our Services
                <FiArrowRight />
              </PrimaryButton>
              <SecondaryButton as={Link} to="/signup">
                Get Started
              </SecondaryButton>
            </HeroButtons>
          </HeroContent>
        </Container>
      </Hero>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatItem>
              <div className="stat-value">5M+</div>
              <div className="stat-label">Devices Recycled</div>
            </StatItem>
            <StatItem>
              <div className="stat-value">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </StatItem>
            <StatItem>
              <div className="stat-value">50+</div>
              <div className="stat-label">Collection Centers</div>
            </StatItem>
            <StatItem>
              <div className="stat-value">99%</div>
              <div className="stat-label">Recovery Rate</div>
            </StatItem>
          </StatsGrid>
        </Container>
      </StatsSection>

      <Section>
        <Container>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            We provide comprehensive e-waste recycling solutions for individuals and businesses
          </SectionSubtitle>
          
          <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
            <FeatureCard>
              <div className="icon-container">
                <MdRecycling className="icon" />
              </div>
              <h3>E-Waste Collection</h3>
              <p>We collect all types of electronic waste from your doorstep for proper recycling.</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon-container">
                <MdEco className="icon" />
              </div>
              <h3>Eco-Friendly Process</h3>
              <p>Our recycling process follows the highest environmental standards and regulations.</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon-container">
                <MdSecurity className="icon" />
              </div>
              <h3>Data Security</h3>
              <p>We ensure complete data destruction from all electronic devices before recycling.</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon-container">
                <MdCorporateFare className="icon" />
              </div>
              <h3>Corporate Solutions</h3>
              <p>Tailored recycling programs for businesses of all sizes with compliance certificates.</p>
            </FeatureCard>
          </Grid>
        </Container>
      </Section>

      <HowItWorkSection>
        <Container>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSubtitle>
            Our simple 4-step process makes recycling your electronic waste easy and convenient
          </SectionSubtitle>
          
          <StepContainer>
            <StepImage>
              <img src="https://images.pexels.com/photos/4025766/pexels-photo-4025766.jpeg" alt="Recycling Process" />
            </StepImage>
            
            <StepContent>
              <StepList>
                <StepItem>
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Register</h3>
                    <p>Create your account and get instant access to our e-waste collection services.</p>
                  </div>
                </StepItem>
                
                <StepItem>
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Add Items</h3>
                    <p>Add your electronic items through our easy-to-use dashboard interface.</p>
                  </div>
                </StepItem>
                
                <StepItem>
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Schedule Collection</h3>
                    <p>Submit your request and select a convenient time for pickup from your location.</p>
                  </div>
                </StepItem>
                
                <StepItem>
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Eco-Friendly Recycling</h3>
                    <p>We handle the rest! Your e-waste gets processed at our certified recycling facilities.</p>
                  </div>
                </StepItem>
              </StepList>
            </StepContent>
          </StepContainer>
        </Container>
      </HowItWorkSection>

      <TestimonialsSection>
        <Container>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <SectionSubtitle>
            Don't just take our word for it. Here's what people are saying about our service.
          </SectionSubtitle>
          
          <Grid cols={1} colsMd={2} colsLg={3} gap="lg">
            <TestimonialCard>
              <div className="testimonial-text">
                The e-waste collection service was incredibly easy to use. They picked up all my old electronics from my doorstep, and I even got a certificate of proper disposal.
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <h4>John Doe</h4>
                  <p>Homeowner</p>
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard>
              <div className="testimonial-text">
                As a small business owner, proper disposal of our IT equipment is crucial. ecoRecycle provides us with excellent service and the documentation we need for compliance.
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SA</div>
                <div className="author-info">
                  <h4>Sarah Adams</h4>
                  <p>Tech Company CEO</p>
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard>
              <div className="testimonial-text">
                I was looking for an environmentally responsible way to get rid of my old electronics. This service exceeded my expectations with their professional approach.
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">RM</div>
                <div className="author-info">
                  <h4>Robert Miller</h4>
                  <p>Environmental Activist</p>
                </div>
              </div>
            </TestimonialCard>
          </Grid>
        </Container>
      </TestimonialsSection>

      <CtaSection>
        <Container>
          <CtaContent>
            <CtaTitle>Ready to Recycle Your E-Waste?</CtaTitle>
            <CtaText>
              Join thousands of environmentally conscious individuals and businesses who trust us with their electronic waste recycling needs.
            </CtaText>
            <PrimaryButton as={Link} to="/signup" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
              Sign Up Now
              <FiArrowRight />
            </PrimaryButton>
          </CtaContent>
        </Container>
      </CtaSection>
    </>
  );
};

export default Home;