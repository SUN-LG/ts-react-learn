import React, { Component, MouseEvent } from 'react';
import { isFunction } from './utils';

const initialState = {
  show: false
};

type State = Readonly<typeof initialState>;
type Props = Partial<{
  render: RenderCB;
  children: RenderCB;
}>;

type RenderCB = (args: ToggleableComponentType) => JSX.Element;
interface ToggleableComponentType {
  show: State['show'];
  toggle: Toggleable['toggle'];
}

export class Toggleable extends Component<Props, State> {
  public readonly state: State = initialState;

  public render() {
    const {render, children} = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle
    };

    if (render) {
      return render(renderProps);
    }

    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = (e: MouseEvent<HTMLElement>) => this.setState(updateShowState);
}

const updateShowState = (prevState: State): State => ({show: !prevState.show});
