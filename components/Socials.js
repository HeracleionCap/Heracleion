// links
import Link from "next/link";

// icons
import {
  RiInstagramLine, 
  RiThreadsLine,
  RiTwitterLine, 
  RiTiktokLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiInstagramLine/>  
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiThreadsLine/>  
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiTwitterLine/>  
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiTiktokLine/>  
    </Link>
  </div>
  );
};

export default Socials;
