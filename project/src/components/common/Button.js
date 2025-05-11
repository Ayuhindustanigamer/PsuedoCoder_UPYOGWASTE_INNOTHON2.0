import { styled } from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: var(--space-md);
  margin: var(--space-md) 0;
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--font-size-md);
  font-weight: 500;
  border-radius: var(--border-radius-md);
  transition: var(--transition-fast);
  cursor: pointer;
  border: none;
  outline: none;
  gap: var(--space-sm);
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.2);
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: var(--color-primary);
  color: white;
  
  &:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: var(--color-secondary);
  color: white;
  
  &:hover:not(:disabled) {
    background-color: var(--color-secondary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }
`;

export const OutlineButton = styled(BaseButton)`
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  
  &:hover:not(:disabled) {
    background-color: var(--color-primary-light);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }
`;

export const TextButton = styled(BaseButton)`
  background-color: transparent;
  color: var(--color-primary);
  padding: var(--space-sm);
  
  &:hover:not(:disabled) {
    background-color: rgba(46, 125, 50, 0.1);
  }
`;

export const ActionButton = styled(PrimaryButton)`
  background-color: var(--color-accent);
  color: var(--color-text-primary);
  
  &:hover:not(:disabled) {
    background-color: var(--color-accent-dark);
  }
`;

export default {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  TextButton,
  ActionButton,
  ButtonContainer
};