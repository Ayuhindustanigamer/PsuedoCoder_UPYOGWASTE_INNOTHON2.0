import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color palette */
    --color-primary: #2E7D32;
    --color-primary-light: #60ad5e;
    --color-primary-dark: #005005;
    
    --color-secondary: #00796B;
    --color-secondary-light: #48a999;
    --color-secondary-dark: #004c40;
    
    --color-accent: #FFC107;
    --color-accent-light: #fff350;
    --color-accent-dark: #c79100;
    
    --color-success: #4CAF50;
    --color-warning: #FF9800;
    --color-error: #F44336;
    
    --color-text-primary: #212121;
    --color-text-secondary: #424242;
    --color-text-tertiary: #757575;
    --color-text-light: #FFFFFF;
    
    --color-background-light: #FFFFFF;
    --color-background-off: #F5F5F5;
    --color-background-dark: #EEEEEE;
    
    /* Spacing system (8px) */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-xxl: 48px;
    
    /* Typography */
    --font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 2rem;
    --font-size-xxxl: 3rem;
    
    /* Border radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-family);
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text-primary);
    background-color: var(--color-background-light);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: var(--space-md);
    font-weight: 600;
  }

  h1 {
    font-size: var(--font-size-xxxl);
  }

  h2 {
    font-size: var(--font-size-xxl);
  }

  h3 {
    font-size: var(--font-size-xl);
  }

  h4 {
    font-size: var(--font-size-lg);
  }

  p {
    margin-bottom: var(--space-md);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition-fast);
  }

  a:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }

  button {
    font-family: var(--font-family);
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;