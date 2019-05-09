import React, { Component, FC, MouseEvent } from 'react';
import { withDefaultProps } from './withDefaultProps';

interface Props {
  props: {
    a: string;
    b: number;
  };
  onClick(e: MouseEvent<HTMLElement>): void;
}

const Button: FC<Props> = ({ onClick: handleClick, children, props }) => (
  <button onClick={handleClick} data-props={props}>
    {children}
  </button>
);

class Index extends Component {
  public render() {
    return (
      <Button
        onClick={() => {}}
        props={{a: 'a', b: 123, c: 'ccc'}}
      >
        this is a button
      </Button>
    );
  }
}
