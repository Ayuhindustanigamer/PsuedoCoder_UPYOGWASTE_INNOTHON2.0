import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--space-lg);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

export const WasteCard = styled(Card)`
  border-left: 4px solid var(--color-primary);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background-color: var(--color-primary-light);
    opacity: 0.3;
    border-bottom-left-radius: 30px;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-md);
  }
  
  .card-title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }
  
  .card-category {
    display: inline-block;
    background-color: var(--color-primary-light);
    color: white;
    padding: 2px var(--space-sm);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-xs);
  }
  
  .card-description {
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
  }
  
  .card-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }
  
  .detail-item {
    display: flex;
    flex-direction: column;
  }
  
  .detail-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
  }
  
  .detail-value {
    font-weight: 500;
  }
  
  .card-footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    gap: var(--space-sm);
  }
`;

export const FeatureCard = styled(Card)`
  text-align: center;
  
  .icon-container {
    width: 60px;
    height: 60px;
    background-color: var(--color-primary-light);
    opacity: 0.2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-md);
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
  }
`;

export default {
  Card,
  WasteCard,
  FeatureCard
};