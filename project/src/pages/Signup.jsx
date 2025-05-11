import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiMail, FiLock, FiUser, FiAlertCircle } from 'react-icons/fi';
import { Container, Section } from '../components/common/Container';
import { Form, FormGroup, Label, Input, ErrorMessage } from '../components/common/Form';
import { PrimaryButton, TextButton } from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';

const SignupSection = styled(Section)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 70px);
  padding-top: 70px;
`;

const SignupCard = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--space-xl);
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const SignupTitle = styled.h2`
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

const SignupFooter = styled.div`
  margin-top: var(--space-lg);
  text-align: center;
  
  p {
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
  }
`;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      return setError('Please fill in all fields');
    }
    
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    
    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }
    
    try {
      setError('');
      setLoading(true);
      await signup(email, password, name);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <SignupSection>
      <Container>
        <SignupCard>
          <SignupTitle>Create an Account</SignupTitle>
          
          {error && (
            <ErrorMessage>
              <FiAlertCircle style={{ marginRight: 'var(--space-xs)' }} />
              {error}
            </ErrorMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <InputIcon>
                <FiUser />
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </InputIcon>
            </FormGroup>
            
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
                  placeholder="Create a password"
                  required
                />
              </InputIcon>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <InputIcon>
                <FiLock />
                <Input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </InputIcon>
            </FormGroup>
            
            <PrimaryButton type="submit" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </PrimaryButton>
          </Form>
          
          <SignupFooter>
            <p>Already have an account?</p>
            <TextButton as={Link} to="/login">Log In</TextButton>
          </SignupFooter>
        </SignupCard>
      </Container>
    </SignupSection>
  );
};

export default Signup;