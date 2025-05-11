import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: var(--space-lg);
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${({ cols = 2 }) => cols}, 1fr);
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: var(--space-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
`;

export const Input = styled.input`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  border: 1px solid var(--color-background-dark);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-background-light);
  transition: var(--transition-fast);
  
  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:disabled {
    background-color: var(--color-background-dark);
    cursor: not-allowed;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  border: 1px solid var(--color-background-dark);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-background-light);
  transition: var(--transition-fast);
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:disabled {
    background-color: var(--color-background-dark);
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  border: 1px solid var(--color-background-dark);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-background-light);
  transition: var(--transition-fast);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23424242' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-md) center;
  
  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
  
  &:disabled {
    background-color: var(--color-background-dark);
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: var(--font-size-sm);
  margin-top: var(--space-xs);
`;

export const SuccessMessage = styled.div`
  color: var(--color-success);
  font-size: var(--font-size-md);
  padding: var(--space-md);
  border-radius: var(--border-radius-sm);
  background-color: rgba(76, 175, 80, 0.1);
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export default {
  FormGroup,
  FormRow,
  Label,
  Input,
  Textarea,
  Select,
  ErrorMessage,
  SuccessMessage,
  Form
};