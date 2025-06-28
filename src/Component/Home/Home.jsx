import React from 'react';
import Title from '../Title';
import Skills from '../Skills';
import SkillsGrid from '../SkillsGrid';
import AboutMe from '../AboutMe';
import EducationTable from '../EducationTable';

const Home = () => {
    return (
        <div>
           <Title></Title>
           <SkillsGrid></SkillsGrid>
           <Skills></Skills>
           <AboutMe></AboutMe>
           <EducationTable></EducationTable>
        </div>
    );
};

export default Home;