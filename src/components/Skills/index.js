import React, { useRef } from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

const iconColors = {
  SiJavascript: "#F7DF1E",
  SiTypescript: "#3178C6",
  SiPython: "#3776AB",
  SiC: "#A8B9CC",
  SiCplusplus: "#00599C",
  SiGnubash: "#4EAA25",
  SiMysql: "#4479A1",
  FaReact: "#61DAFB",
  SiNextdotjs: "#000000",
  FaNodeJs: "#339933",
  SiExpress: "#000000",
  SiTailwindcss: "#06B6D4",
  SiMaterialui: "#007FFF",
  SiRedux: "#764ABC",
  FaDocker: "#2496ED",
  SiKubernetes: "#326CE5",
  SiHelm: "#277A9F",
  SiJenkins: "#D24939",
  SiGit: "#F05032",
  FaGithub: "#181717",
  FaGitlab: "#FC6D26",
  SiAnsible: "#EE0000",
  SiArgocd: "#EF7B4D",
  SiSonarqube: "#4E9BCD",
  SiTerraform: "#623CE4",
  FaAws: "#FF9900",
  FaMicrosoft: "#0078D4",
  SiGooglecloud: "#4285F4",
  SiMongodb: "#47A248",
  SiPostgresql: "#336791",
  SiRedis: "#DC382D",
  SiPrometheus: "#E6522C",
  SiGrafana: "#F46800",
  SiGithubactions: "#2088FF",
  FaLinux: "#FCC624",
  FaWindows: "#0078D6",
};

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
width: 100%;
background: #181824;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const SkillCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.10) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  position: relative;
  transition: box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1), border 0.3s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  overflow: visible;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  &:hover {
    border: 1.5px solid transparent;
    box-shadow: 0 2px 32px 0 rgba(133, 76, 230, 0.10), 0 0 0 2px #854CE6;
    background: ${({ theme }) => theme.card};
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const Skill = ({ children }) => {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // up/down
    const rotateY = ((x - centerX) / centerX) * 12; // left/right
    cardRef.current.style.transform = `perspective(700px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) return;
    cardRef.current.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <SkillCard
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </SkillCard>
  );
};

const Skills = () => {
  // Helper to get the icon component by name
  const getIconComponent = (iconName) => {
    if (!iconName) return null;
    if (iconName.startsWith('Si')) return SiIcons[iconName];
    if (iconName.startsWith('Fa')) return FaIcons[iconName];
    return null;
  };

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working.</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => {
                  const Icon = getIconComponent(item.icon);
                  return (
                    <SkillItem key={item.name}>
                      {Icon && <Icon size={22} style={{ marginRight: 6 }} color={iconColors[item.icon]} />}
                      {item.name}
                    </SkillItem>
                  );
                })}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills