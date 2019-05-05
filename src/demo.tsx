import React, { Component, FC, MouseEvent, ReactNode } from 'react';
import Button from './Button';


const initialState = {clicksCount: 0};
type State = Readonly<typeof initialState>;

class ButtonCounter extends Component<{}, State> {
  public readonly state: State = initialState;

  public handleIncrement = () => this.setState(incrementClicksCount);
  public handleDecrement = () => this.setState(decrementClicksCount);

  public render() {
    const {clicksCount} = this.state;
    return (
      <>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
        You've clicked {clicksCount} times!
      </>
    );
  }
}

const incrementClicksCount = (prevState: State): State => ({clicksCount: prevState.clicksCount + 1});
const decrementClicksCount = (prevState: State): State => ({clicksCount: prevState.clicksCount - 1});
