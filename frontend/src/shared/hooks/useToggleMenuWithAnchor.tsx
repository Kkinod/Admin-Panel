import { useState, MouseEvent, TouchEvent } from 'react';

const useToggleMenuWithAnchor = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);

  const handleClick = (
    event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, isOpen, handleClick, handleClose };
};

export default useToggleMenuWithAnchor;
