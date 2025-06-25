import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');

  const handleFilterChange = (filter) => {
    setToggle(filter);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => handleFilterChange('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => handleFilterChange('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => handleFilterChange('web app')}>WEB APPs</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => handleFilterChange('web app')}>WEB APPs</ToggleButton>
          }
          <Divider />
          {toggle === 'devops' ?
            <ToggleButton active value="devops" onClick={() => handleFilterChange('devops')}>DevOps</ToggleButton>
            :
            <ToggleButton value="devops" onClick={() => handleFilterChange('devops')}>DevOps</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {toggle !== 'all' && projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects