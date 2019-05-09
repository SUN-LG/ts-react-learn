import { ComponentType } from 'react';
export type func = (...args: any[]) => any;
// export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Omit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P]
};
export type Constructor<T = {}> = new (...args: any[]) => T;

type RComponent = ComponentType & {
  displayName?: string;
  name?: string;
};

export const isFunction = (fn: any): fn is func => {
  return typeof fn === 'function';
};
export const getComponentName = (component: RComponent) => component.displayName || component.name;
export const getHocComponentName = (hocName: string, component: RComponent) => `${hocName}(${getComponentName(component)})`;
