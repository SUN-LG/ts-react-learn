import React, { Component, ComponentType, MouseEvent, ReactNode } from 'react';
import { Constructor, getComponentName, isFunction } from './utils';

interface DefaultProps<P extends object = object> {props: P; show: boolean; }

const initialState = {
  show: false
};
const defaultProps: DefaultProps = {props: {}, ...initialState};


type RenderCB = (args: ToggleableComponentProps) => JSX.Element;
export type ToggleableComponentProps<P extends object = object> = {
  show: State['show'];
  toggle: Toggleable<P>['toggle'];
} & P;

type State = Readonly<typeof initialState>;
export type Props<P extends object = object> = Partial<{
  render: RenderCB;
  children: RenderCB | ReactNode;
  component: ComponentType<ToggleableComponentProps<P | {}>>;
} & DefaultProps<P>>;


export class Toggleable<T extends {} = {}> extends Component<Props<T>, State> {
  public static readonly displayName: 'Toggleable';
  public static readonly defaultProps: Props = defaultProps;
  public static ofType<T extends object>() {
    return Toggleable as Constructor<Toggleable<T>>;
  }
  public readonly state: State = {show: this.props.show!};

  public componentWillReceiveProps(nextProps: Props<T>) {
    const currentProps = this.props;
    if (nextProps.show !== currentProps.show) {
      this.setState({show: Boolean(nextProps.show)});
    }
  }

  public render() {
    const {render, children, component: InjectedComponent, props} = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle
    };

    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      );
    }

    if (render) {
      return render(renderProps);
    }

    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = (e: MouseEvent<HTMLElement>) => this.setState(updateShowState);
}

const updateShowState = (prevState: State): State => ({show: !prevState.show});

export default Toggleable;
