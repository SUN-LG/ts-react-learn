import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { Component, ComponentType } from 'react';

import { getHocComponentName, Omit } from './utils';

import Toggleable, { Props as ToggleableProps, ToggleableComponentProps } from './Toggleable';

interface OwnProps {show: boolean;}
type InjectedProps = ToggleableComponentProps;

export const withToggleable = <OriginalProps extends object>(UnwrappedComponent: ComponentType<OriginalProps & InjectedProps>) => {
  type Props = OriginalProps & OwnProps;

  class WithToggleable extends Component<Props> {
    public static readonly displayName = getHocComponentName('WithToggleable', UnwrappedComponent);
    public static readonly UnwrappedComponent = UnwrappedComponent;

    public render() {
      const {show, ...rest} = this.props;
      return (
        <Toggleable
          show={show}
          render={(renderProps) => (
            <UnwrappedComponent {...rest} {...renderProps}></UnwrappedComponent>
          )}
        ></Toggleable>
      );
    }
  }

  return hoistNonReactStatics(WithToggleable, UnwrappedComponent);
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};
