import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  @media (min-width: 768px) {
    padding: 0 var(--space-lg);
  }
`;

export const Section = styled.section`
  padding: var(--space-xl) 0;

  @media (min-width: 768px) {
    padding: var(--space-xxl) 0;
  }
`;

export const Hero = styled.section`
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-xxl) 0;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18.48 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z' fill='%23ffffff' opacity='.25'/%3E%3C/svg%3E");
    background-size: cover;
    background-position: center;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  margin: var(--space-lg) 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Flex = styled.div`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ gap }) => gap && `gap: var(--space-${gap});`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols = 1 }) => cols}, 1fr);
  gap: ${({ gap = 'md' }) => `var(--space-${gap})`};
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${({ colsMd = 2 }) => colsMd}, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(${({ colsLg = 3 }) => colsLg}, 1fr);
  }
`;

export default {
  Container,
  Section,
  Hero,
  CardContainer,
  Flex,
  Grid
};