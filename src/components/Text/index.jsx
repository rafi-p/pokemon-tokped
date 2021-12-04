import React from 'react';

import { StyledText } from './style';

const Text = ({ color, text, styling, ...props }) => {
  return (
    <StyledText
      color={ color }
      styling= { styling }
      { ...props }
    >
      {text}
    </StyledText>
  );
};

export default Text;
