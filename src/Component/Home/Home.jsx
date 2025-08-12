import React from 'react';
import Title from '../Title';
import Skills from '../Skills';
import SkillsGrid from '../SkillsGrid';
import AboutMe from '../AboutMe';
import EducationTable from '../EducationTable';

import Peoject2 from '../peoject2';
import Footer from '../Footer';
import GardeningTips from '../GardeningTips/GardeningTips';

  import Project3 from '../Project3';
import Project5 from '../Project5';




const Home = () => {
    return (
        <div>
           <Title></Title>
           <SkillsGrid></SkillsGrid>
           <Skills></Skills>
           <AboutMe></AboutMe>
           <EducationTable></EducationTable>

    <Project5></Project5>
           <GardeningTips></GardeningTips>
         <Peoject2></Peoject2>
         <Project3/>
         <Footer></Footer>
        </div>
    );
};

export default Home;