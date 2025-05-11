import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import { Container, Section } from '../components/common/Container';
import { Form, FormGroup, Label, Input, ErrorMessage } from '../components/common/Form';
import { PrimaryButton, TextButton } from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';

const LoginSection = styled(Section)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 70px);
  padding-top: 70px;
`;

const LoginCard = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--space-xl);
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-lg);
  color: var(--color-primary);
`;

const InputIcon = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    top: 50%;
    left: var(--space-md);
    transform: translateY(-50%);
    color: var(--color-text-tertiary);
  }
  
  input {
    padding-left: 40px;
  }
`;

const LoginFooter = styled.div`
  margin-top: var(--space-lg);
  text-align: center;
  
  p {
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      return setError('Please enter both email and password');
    }
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <LoginSection>
      <Container>
        <LoginCard>
          <LoginTitle>Welcome Back</LoginTitle>
          
          {error && (
            <ErrorMessage>
              <FiAlertCircle style={{ marginRight: 'var(--space-xs)' }} />
              {error}
            </ErrorMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <InputIcon>
                <FiMail />
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </InputIcon>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <InputIcon>
                <FiLock />
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </InputIcon>
            </FormGroup>
            
            <PrimaryButton type="submit" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Logging in...' : 'Log In'}
            </PrimaryButton>
          </Form>
          
          <LoginFooter>
            <p>Don't have an account?</p>
            <TextButton as={Link} to="/signup">Create an Account</TextButton>
          </LoginFooter>
        </LoginCard>
      </Container>
    </LoginSection>
  );
};

export default Login;