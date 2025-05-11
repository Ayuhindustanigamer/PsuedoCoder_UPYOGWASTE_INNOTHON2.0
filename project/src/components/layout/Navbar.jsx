import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX, FiUser, FiLogIn } from 'react-icons/fi';
import { MdRecycling } from 'react-icons/md';
import { Container } from '../common/Container';
import { TextButton } from '../common/Button';
import { useAuth } from '../../contexts/AuthContext';

const NavbarContainer = styled.header`
  background-color: ${({ scrolled }) => 
    scrolled ? 'var(--color-background-light)' : 'transparent'};
  box-shadow: ${({ scrolled }) => 
    scrolled ? 'var(--shadow-sm)' : 'none'};
  padding: var(--space-md) 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: var(--transition-normal);
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: ${({ scrolled }) => 
    scrolled ? 'var(--color-primary)' : 'var(--color-text-light)'};

  &:hover {
    text-decoration: none;
  }
  
  svg {
    font-size: 1.5em;
  }
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
  }
`;

const NavLink = styled(Link)`
  color: ${({ scrolled }) => 
    scrolled ? 'var(--color-text-primary)' : 'var(--color-text-light)'};
  font-weight: 500;
  position: relative;
  
  &.active {
    color: ${({ scrolled }) => 
      scrolled ? 'var(--color-primary)' : 'var(--color-accent)'};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ scrolled }) => 
        scrolled ? 'var(--color-primary)' : 'var(--color-accent)'};
    }
  }
  
  &:hover {
    color: ${({ scrolled }) => 
      scrolled ? 'var(--color-primary)' : 'var(--color-accent)'};
    text-decoration: none;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ scrolled }) => 
        scrolled ? 'var(--color-primary)' : 'var(--color-accent)'};
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease;
      animation: navLinkHover 0.3s forwards;
    }
  }
  
  @keyframes navLinkHover {
    to {
      transform: scaleX(1);
    }
  }
`;

const AuthButtons = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ scrolled }) => 
    scrolled ? 'var(--color-text-primary)' : 'var(--color-text-light)'};
  font-size: var(--font-size-xl);
  cursor: pointer;
  display: flex;
  align-items: center;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: var(--color-background-light);
  box-shadow: var(--shadow-lg);
  padding: var(--space-lg);
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: var(--transition-normal);
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-xl);
`;

const MobileNavLink = styled(Link)`
  color: var(--color-text-primary);
  font-size: var(--font-size-lg);
  font-weight: 500;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-background-dark);
  
  &.active {
    color: var(--color-primary);
  }
  
  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;

const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: var(--font-size-xl);
  cursor: pointer;
  align-self: flex-end;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <Container>
        <NavbarContent>
          <Logo to="/" scrolled={scrolled}>
            <MdRecycling />
            <span>ecoRecycle</span>
          </Logo>
          
          <Nav>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''} scrolled={scrolled}>
              Home
            </NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} scrolled={scrolled}>
              About
            </NavLink>
            <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''} scrolled={scrolled}>
              Services
            </NavLink>
          </Nav>
          
          <AuthButtons>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" scrolled={scrolled}>
                  Dashboard
                </NavLink>
                <TextButton onClick={logout}>Logout</TextButton>
              </>
            ) : (
              <>
                <NavLink to="/login" scrolled={scrolled}>
                  <FiLogIn size={16} style={{ marginRight: 'var(--space-xs)' }} />
                  Login
                </NavLink>
                <NavLink to="/signup" scrolled={scrolled}>
                  <FiUser size={16} style={{ marginRight: 'var(--space-xs)' }} />
                  Signup
                </NavLink>
              </>
            )}
          </AuthButtons>
          
          <MobileMenuButton onClick={() => setIsOpen(true)} scrolled={scrolled}>
            <FiMenu />
          </MobileMenuButton>
        </NavbarContent>
      </Container>
      
      <MobileMenu isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <FiX />
        </CloseButton>
        
        <MobileNav>
          <MobileNavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </MobileNavLink>
          <MobileNavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>
            Services
          </MobileNavLink>
        </MobileNav>
        
        <MobileAuthButtons>
          {isAuthenticated ? (
            <>
              <MobileNavLink to="/dashboard">
                Dashboard
              </MobileNavLink>
              <TextButton onClick={logout}>Logout</TextButton>
            </>
          ) : (
            <>
              <MobileNavLink to="/login">
                <FiLogIn size={16} style={{ marginRight: 'var(--space-xs)' }} />
                Login
              </MobileNavLink>
              <MobileNavLink to="/signup">
                <FiUser size={16} style={{ marginRight: 'var(--space-xs)' }} />
                Signup
              </MobileNavLink>
            </>
          )}
        </MobileAuthButtons>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;