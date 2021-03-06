import { ComponentType } from 'react';
import { Omit } from './utils';

// declare type Omit<T, K> = {
//   [P in Exclude<keyof T, K>]: T[P]
// };

export const withDefaultProps = <P extends {}, DP extends Partial<P>>(defaultProps: DP, cmp: ComponentType<P>) => {
  type RequiredProps = Omit<P, keyof DP>;
  type Props = Partial<DP> & Required<RequiredProps>;

  cmp.defaultProps = defaultProps;

  return cmp as any as ComponentType<Props>;
};

