import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMonitor, FiSmartphone, FiPrinter, FiHardDrive, FiCheckCircle } from 'react-icons/fi';
import { MdRecycling, MdOutlineElectricBolt, MdDevices, MdSecurityUpdateGood } from 'react-icons/md';
import { Container, Section, Hero, Grid } from '../components/common/Container';
import { PrimaryButton } from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';

const ServicesHero = styled(Hero)`
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

const ServiceCard = styled.div`
  padding: var(--space-lg);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background-light);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  border-bottom: 4px solid var(--color-primary);
  
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
    background-color: var(--color-primary-light);
    opacity: 0.2;
    border-radius: 50%;
    margin-bottom: var(--space-md);
  }
  
  .icon {
    font-size: 30px;
    color: var(--color-primary);
  }
  
  h3 {
    margin-bottom: var(--space-sm);
    color: var(--color-primary);
  }
  
  p {
    color: var(--color-text-secondary);
    margin-bottom: var(--space-md);
  }
`;

const AcceptedItemsSection = styled(Section)`
  background-color: var(--color-background-off);
`;

const ItemCategory = styled.div`
  padding: var(--space-lg);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background-light);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
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
    margin-bottom: var(--space-md);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: var(--space-xs) 0;
    border-bottom: 1px solid var(--color-background-dark);
    display: flex;
    align-items: center;
    
    &:last-child {
      border-bottom: none;
    }
    
    svg {
      color: var(--color-primary);
      margin-right: var(--space-sm);
      flex-shrink: 0;
    }
  }
`;

const ProcessSection = styled(Section)``;

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-lg);
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 30px;
    right: -50px;
    width: 100px;
    height: 2px;
    background-color: var(--color-primary-light);
    
    @media (max-width: 1024px) {
      display: none;
    }
  }
  
  .step-number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--space-md);
  }
  
  h3 {
    margin-bottom: var(--space-sm);
    color: var(--color-primary);
  }
  
  p {
    color: var(--color-text-secondary);
  }
`;

const FaqSection = styled(Section)`
  background-color: var(--color-background-off);
`;

const FaqItem = styled.div`
  margin-bottom: var(--space-md);
  
  h3 {
    background-color: var(--color-background-light);
    padding: var(--space-md);
    border-radius: var(--border-radius-md);
    margin-bottom: var(--space-sm);
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    cursor: pointer;
    transition: var(--transition-fast);
    box-shadow: var(--shadow-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:hover {
      background-color: var(--color-primary-light);
      color: white;
    }
  }
  
  .faq-answer {
    padding: var(--space-md);
    color: var(--color-text-secondary);
    line-height: 1.6;
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

const Services = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <>
      <ServicesHero>
        <Container>
          <HeroContent>
            <h1>Our Services</h1>
            <p>Discover our comprehensive range of e-waste collection and recycling services designed for individuals and businesses.</p>
          </HeroContent>
        </Container>
      </ServicesHero>

      <Section>
        <Container>
          <SectionTitle>What We Offer</SectionTitle>
          <Grid cols={1} colsMd={2} colsLg={3} gap="lg">
            <ServiceCard>
              <div className="icon-container">
                <MdRecycling className="icon" />
              </div>
              <h3>Residential Collection</h3>
              <p>
                Our convenient pickup service for individuals looking to dispose of their electronic waste responsibly. Schedule a pickup at your convenience.
              </p>
              {isAuthenticated ? (
                <PrimaryButton as={Link} to="/dashboard">Go to Dashboard</PrimaryButton>
              ) : (
                <PrimaryButton as={Link} to="/signup">Get Started</PrimaryButton>
              )}
            </ServiceCard>
            
            <ServiceCard>
              <div className="icon-container">
                <MdOutlineElectricBolt className="icon" />
              </div>
              <h3>Business Solutions</h3>
              <p>
                Tailored e-waste management programs for businesses of all sizes, including regular pickups, compliance documentation, and asset tracking.
              </p>
              <PrimaryButton as="a" href="mailto:business@ecorecycle.com">Contact Us</PrimaryButton>
            </ServiceCard>
            
            <ServiceCard>
              <div className="icon-container">
                <MdSecurityUpdateGood className="icon" />
              </div>
              <h3>Data Destruction</h3>
              <p>
                Secure data wiping and physical destruction services for sensitive information stored on electronic devices, with certification.
              </p>
              <PrimaryButton as="a" href="mailto:security@ecorecycle.com">Learn More</PrimaryButton>
            </ServiceCard>
            
            <ServiceCard>
              <div className="icon-container">
                <MdDevices className="icon" />
              </div>
              <h3>IT Asset Disposition</h3>
              <p>
                Professional management of end-of-life IT assets, including value recovery through remarketing when possible.
              </p>
              <PrimaryButton as="a" href="mailto:itad@ecorecycle.com">Contact Us</PrimaryButton>
            </ServiceCard>
            
            <ServiceCard>
              <div className="icon-container">
                <MdRecycling className="icon" />
              </div>
              <h3>Bulk Collection</h3>
              <p>
                Specialized service for handling large quantities of e-waste from clearances, office moves, or equipment upgrades.
              </p>
              <PrimaryButton as="a" href="mailto:bulk@ecorecycle.com">Get a Quote</PrimaryButton>
            </ServiceCard>
            
            <ServiceCard>
              <div className="icon-container">
                <MdSecurityUpdateGood className="icon" />
              </div>
              <h3>Compliance Reporting</h3>
              <p>
                Comprehensive documentation and reporting to meet environmental regulations and corporate sustainability goals.
              </p>
              <PrimaryButton as="a" href="mailto:compliance@ecorecycle.com">Learn More</PrimaryButton>
            </ServiceCard>
          </Grid>
        </Container>
      </Section>

      <AcceptedItemsSection>
        <Container>
          <SectionTitle>What We Accept</SectionTitle>
          <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
            <ItemCategory>
              <div className="icon-container">
                <FiMonitor className="icon" />
              </div>
              <h3>Computers</h3>
              <ul>
                <li><FiCheckCircle size={16} /> Desktop Computers</li>
                <li><FiCheckCircle size={16} /> Laptops</li>
                <li><FiCheckCircle size={16} /> Servers</li>
                <li><FiCheckCircle size={16} /> Monitors</li>
                <li><FiCheckCircle size={16} /> Keyboards</li>
                <li><FiCheckCircle size={16} /> Mice</li>
              </ul>
            </ItemCategory>
            
            <ItemCategory>
              <div className="icon-container">
                <FiSmartphone className="icon" />
              </div>
              <h3>Mobile Devices</h3>
              <ul>
                <li><FiCheckCircle size={16} /> Smartphones</li>
                <li><FiCheckCircle size={16} /> Tablets</li>
                <li><FiCheckCircle size={16} /> E-Readers</li>
                <li><FiCheckCircle size={16} /> MP3 Players</li>
                <li><FiCheckCircle size={16} /> Wearable Tech</li>
                <li><FiCheckCircle size={16} /> GPS Devices</li>
              </ul>
            </ItemCategory>
            
            <ItemCategory>
              <div className="icon-container">
                <FiPrinter className="icon" />
              </div>
              <h3>Office Equipment</h3>
              <ul>
                <li><FiCheckCircle size={16} /> Printers</li>
                <li><FiCheckCircle size={16} /> Copiers</li>
                <li><FiCheckCircle size={16} /> Scanners</li>
                <li><FiCheckCircle size={16} /> Fax Machines</li>
                <li><FiCheckCircle size={16} /> Telephones</li>
                <li><FiCheckCircle size={16} /> UPS Systems</li>
              </ul>
            </ItemCategory>
            
            <ItemCategory>
              <div className="icon-container">
                <FiHardDrive className="icon" />
              </div>
              <h3>Accessories</h3>
              <ul>
                <li><FiCheckCircle size={16} /> Hard Drives</li>
                <li><FiCheckCircle size={16} /> Power Supplies</li>
                <li><FiCheckCircle size={16} /> Memory/RAM</li>
                <li><FiCheckCircle size={16} /> Cables</li>
                <li><FiCheckCircle size={16} /> Batteries</li>
                <li><FiCheckCircle size={16} /> Ink Cartridges</li>
              </ul>
            </ItemCategory>
          </Grid>
        </Container>
      </AcceptedItemsSection>

      <ProcessSection>
        <Container>
          <SectionTitle>Our Recycling Process</SectionTitle>
          <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
            <ProcessStep>
              <div className="step-number">1</div>
              <h3>Collection</h3>
              <p>We collect e-waste from your location or you can drop it off at our centers.</p>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">2</div>
              <h3>Sorting</h3>
              <p>Items are sorted by type and evaluated for potential reuse or recycling.</p>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">3</div>
              <h3>Data Destruction</h3>
              <p>All storage devices undergo secure data wiping or physical destruction.</p>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">4</div>
              <h3>Recycling</h3>
              <p>Materials are processed using eco-friendly methods to recover valuable resources.</p>
            </ProcessStep>
          </Grid>
        </Container>
      </ProcessSection>

      <FaqSection>
        <Container>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          
          <FaqItem>
            <h3>How do I schedule a pickup?</h3>
            <div className="faq-answer">
              <p>
                You can schedule a pickup by creating an account on our platform, adding your e-waste items, and submitting a collection request. Alternatively, you can contact our customer service team directly to arrange a pickup.
              </p>
            </div>
          </FaqItem>
          
          <FaqItem>
            <h3>Is there a fee for your e-waste collection service?</h3>
            <div className="faq-answer">
              <p>
                Our standard residential collection service is free for most common electronic items. However, there may be a nominal fee for specialized items or bulk collections. Business services are priced based on volume and requirements.
              </p>
            </div>
          </FaqItem>
          
          <FaqItem>
            <h3>How do you ensure my data is safe?</h3>
            <div className="faq-answer">
              <p>
                We take data security very seriously. All storage devices undergo a certified data destruction process that meets industry standards. We can provide a certificate of data destruction upon request.
              </p>
            </div>
          </FaqItem>
          
          <FaqItem>
            <h3>Do you offer services for businesses?</h3>
            <div className="faq-answer">
              <p>
                Yes, we offer comprehensive e-waste management solutions for businesses of all sizes. Our services include regular collections, compliance documentation, secure data destruction, and asset tracking. Contact our business solutions team for a customized quote.
              </p>
            </div>
          </FaqItem>
          
          <FaqItem>
            <h3>What happens to the e-waste after collection?</h3>
            <div className="faq-answer">
              <p>
                After collection, we sort the items at our facility. Devices that can be refurbished are prepared for reuse. For items that cannot be reused, we dismantle them and separate the materials for recycling. Hazardous components are safely handled according to environmental regulations.
              </p>
            </div>
          </FaqItem>
        </Container>
      </FaqSection>

      <CtaSection>
        <Container>
          <CtaContent>
            <CtaTitle>Ready to Recycle Your E-Waste?</CtaTitle>
            <CtaText>
              Join our mission to protect the environment through responsible e-waste management. It's easy to get started!
            </CtaText>
            {isAuthenticated ? (
              <PrimaryButton as={Link} to="/dashboard" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
                Go to Dashboard
              </PrimaryButton>
            ) : (
              <PrimaryButton as={Link} to="/signup" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
                Sign Up Now
              </PrimaryButton>
            )}
          </CtaContent>
        </Container>
      </CtaSection>
    </>
  );
};

export default Services;