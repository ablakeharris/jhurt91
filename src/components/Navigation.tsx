import { NavContainer } from '@/src/elements/NavContainer';
import { NavLink } from '@/src/elements/NavLink';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-700 dark:bg-blue-900 text-white z-50 shadow-md">
      <NavContainer>
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">JARREN HURT</div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#issues">Issues</NavLink>
            <NavLink href="#volunteer">Get Involved</NavLink>
          </div>
          <SecondaryButton size="sm">DONATE</SecondaryButton>
        </div>
      </NavContainer>
    </nav>
  );
};
