import { useState } from 'react';

export default function useOpenState(initialState = false) {
  const [open, setIsOpen] = useState(initialState);

  const toggleOpen = () => setIsOpen(!open);

  // Combine handleClick logic within the hook
  const handleClick = () => toggleOpen();

  // Return the isOpen state and a combined function (handleClick)
  return { open, handleClick };
}