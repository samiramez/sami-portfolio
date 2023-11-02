// links

import Link from "next/link";

//icons {
  import {RiWhatsappLine,
  RiFacebookLine,
  RiGithubFill,RiLinkedinLine} from 'react-icons/ri'

  import {SiCodeforces} from 'react-icons/si'

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
      
      
      <Link href={'https://github.com/samiramez'} className="hover:text-accent transition-all duration-300">
      <RiGithubFill/>
      </Link>
      <Link href={'https://www.linkedin.com/in/sami-atanah-li/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
      </Link>
      <Link href={'https://codeforces.com/profile/Captin'} className="hover:text-accent transition-all duration-300">
      <SiCodeforces/>
      </Link>
      <Link href={'https://www.facebook.com/sami.ramiz/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
      </Link>
      <Link href={'https://wa.me/+962798028686'} className="hover:text-accent transition-all duration-300">
      <RiWhatsappLine/>
      </Link>
  </div>
  );
};

export default Socials;
