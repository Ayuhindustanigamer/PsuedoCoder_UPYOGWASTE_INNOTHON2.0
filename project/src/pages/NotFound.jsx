import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { PrimaryButton } from '../components/common/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
  padding: var(--space-xxl) var(--space-md);
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: var(--font-size-xxl);
  margin-bottom: var(--space-lg);
`;

const ErrorDescription = styled.p`
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--space-xl);
`;

const NotFound = () => {
  return (
    <Container>
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorDescription>
          The page you're looking for doesn't exist or has been moved. 
          Please check the URL or return to the homepage.
        </ErrorDescription>
        <PrimaryButton as={Link} to="/">
          Back to Homepage
        </PrimaryButton>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;