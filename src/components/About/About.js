import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Vinay Patel, a passionate self-taught frontEnd web developer
          from Canada, Open to the Next Opportunity.{' '}
          <a className="about__link" href="#">
        
          </a>{' '}
          I tend to make use of modern web technologies.
          To build websites that look great, feel fantastic, and function correctly.
          <br />
          <br />
          I'm also a graduated Computer Programmer from {' '}
          <a className="about__link" href="https://www.algonquincollege.com/online/program-info/computer-programming/#courses">
          "Algonquin College"
          </a>{' '}. I also do Graphic and UI designing. Since I love both
          programming and designing, I'm also interested in creating
          programmatic designs and creative coding projects.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Code can't lie, Comments Can.“</p>
        </Quote>
        <Quote>
          <p>
            “The Journey isn't Clean, But Code should be.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
