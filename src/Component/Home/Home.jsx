import React from 'react';
import Title from '../Title';
import Skills from '../Skills';
import SkillsGrid from '../SkillsGrid';
import AboutMe from '../AboutMe';
import EducationTable from '../EducationTable';
import GardeningTips from '../gardeningtips';
import Peoject2 from '../peoject2';
import Footer from '../Footer';


const Home = () => {
    return (
        <div>
           <Title></Title>
           <SkillsGrid></SkillsGrid>
           <Skills></Skills>
           <AboutMe></AboutMe>
           <EducationTable></EducationTable>

           <GardeningTips></GardeningTips>
         <Peoject2></Peoject2>
         <Footer></Footer>
        </div>
    );
};

export default Home;