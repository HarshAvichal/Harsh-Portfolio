import React, { useRef } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HarshuImg from '../../images/harshu.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import styled from 'styled-components';


const TiltImg = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  background: #181824;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  box-shadow: 0 8px 32px 0 rgba(133, 76, 230, 0.08);
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const ProfileTilt = ({ src, alt }) => {
  const imgRef = useRef();

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // up/down
    const rotateY = ((x - centerX) / centerX) * 15; // left/right
    imgRef.current.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) return;
    imgRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <TiltImg
      ref={imgRef}
      src={src}
      alt={alt}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      draggable={false}
    />
  );
};

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 18px 0 18px 0;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <ProfileTilt src={HarshuImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection