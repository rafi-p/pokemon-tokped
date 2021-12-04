import Styled from 'styled-components';

import { Colors } from '../../constant';

const StyledText = Styled.p`
  font-size: ${props => (
    props.styling && !props.size
    ? props.styling.size
    : props.size
      ? props.size
      : '16px'
  )};
  font-weight: ${props => (
    props.styling && !props.weight
    ? props.styling.weight
    : props.weight
      ? props.weight
      : 'unset'
  )};
  line-height: ${props => (
    props.styling && !props.lineHeight
    ? props.styling.lineHeight
    : props.lineHeight
      ? props.lineHeight
      : 'unset'
  )};
  color: ${props => (
    props.color
    ? props.color
    : Colors.black.default
  )};
`;

export { StyledText };
