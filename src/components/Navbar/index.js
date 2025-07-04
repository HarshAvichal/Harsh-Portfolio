import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { Bio } from '../../data/constants';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleLogoClick = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('about');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' onClick={handleLogoClick}>
          <span style={{ color: theme.primary, fontWeight: 700, fontSize: 28, marginRight: 4, lineHeight: '1' }}>{'<'}</span>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 20, lineHeight: '1', fontFamily: 'Poppins, Inter, Segoe UI, Arial, sans-serif' }}>Harsh</span>
          <span style={{ color: theme.primary, fontWeight: 700, fontSize: 28, margin: '0 4px', lineHeight: '1.1' }}>/</span>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 20, lineHeight: '1', fontFamily: 'Poppins, Inter, Segoe UI, Arial, sans-serif' }}>Avichal</span>
          <span style={{ color: theme.primary, fontWeight: 700, fontSize: 28, marginLeft: 4, lineHeight: '1' }}>{'>'}</span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        
        {isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar