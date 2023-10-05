import { useState, useEffect } from 'react';

export function useHeaderState() {
  const [header, setheader] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
          setheader(false);
        } else {
          setheader(true); 
        }
    };

    handlescroll();

    window.addEventListener('scroll',handlescroll);

    return () => {
      window.removeEventListener('scroll',handlescroll);
    };
  }, []);

  return header;
}
