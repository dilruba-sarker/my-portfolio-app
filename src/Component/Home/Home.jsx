import React from 'react';
import Title from '../Title';
import Skills from '../Skills';
import SkillsGrid from '../SkillsGrid';
import AboutMe from '../AboutMe';
import EducationTable from '../EducationTable';

import Peoject2 from '../peoject2';
import Footer from '../Footer';
import GardeningTips from '../GardeningTips/GardeningTips';
import Project4 from '../project4/project4';
  import Project3 from '../Project3';


const Home = () => {
    return (
        <div>
           <Title></Title>
           <SkillsGrid></SkillsGrid>
           <Skills></Skills>
           <AboutMe></AboutMe>
           <EducationTable></EducationTable>

         
         <Project4></Project4>
           <GardeningTips></GardeningTips>
         <Peoject2></Peoject2>
         <Project3/>
         <Footer></Footer>
        </div>
    );
};

export default Home;