import { useState, useEffect } from 'react';

export function useNavbarState() {
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return navbar;
}
