import React from 'react';
import IconFb from '../assets/icon-fb.png';
import IconTw from '../assets/icon-tw.png';
import IconInsta from '../assets/icon-insta.png';
import IconLinkedin from '../assets/icon-ln.png';
import IconGitHub from '../assets/icon-github.png';
const socials = [
  {
    fullname: 'Linkedin',
    icon: IconLinkedin,
    url: 'https://www.linkedin.com/in/edouarddesgree/'
  },
  {
    fullname: 'GitHub',
    icon: IconGitHub,
    url: 'https://github.com/edesgree'
  }
];
function SocialLink() {
  console.log({ socials });
  const socialElements = socials.map((item) => {
    return (
      <a href={item.url}>
        <img src={item.icon} alt={item.fullname} />
      </a>
    );
  });

  console.log('socialElements', socialElements);
  return socialElements;
}

export default SocialLink;
