import React, { FC, MouseEvent } from 'react';
import { withDefaultProps } from './withDefaultProps';

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
} & DP;

const defaultProps = {
  color: 'red'
};
type DP = typeof defaultProps;

const Button: FC<Props> = ({ onClick: handleClick, children, color }) => (
  <button onClick={handleClick}>
    {color}
    {children}
  </button>
);

const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button);

export default ButtonWithDefaultProps;
