import React from 'react';
import IconFb from '../assets/icon-fb.png';
import IconTw from '../assets/icon-tw.png';
import IconInsta from '../assets/icon-insta.png';
import IconLinkedin from '../assets/icon-ln.png';
import IconGitHub from '../assets/icon-github.png';
const socials = {
  facebook: {
    fullname: 'Facebook',
    icon: IconFb,
    url: 'http://www.facebook.com/'
  },
  instagram: {
    fullname: 'Instagram',
    icon: IconInsta,
    url: 'http://www.instagram.com/'
  },
  linkedin: {
    fullname: 'Linkedin',
    icon: IconLinkedin,
    url: 'https://www.linkedin.com/in/edouarddesgree/'
  },
  github: {
    fullname: 'GitHub',
    icon: IconGitHub,
    url: 'https://github.com/edesgree'
  },
  twitter: {
    fullname: 'Twitter',
    icon: IconTw,
    url: 'http://www.twitter.com/'
  }
};
function SocialLink({ name }) {
  return (
    <a href={socials[name].url}>
      <img src={socials[name].icon} alt={socials[name].fullname} />
    </a>
  );
}

export default SocialLink;
