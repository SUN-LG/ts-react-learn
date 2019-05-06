export type func = (...args: any[]) => any;
export type Constructor<T = {}> = new (...args: any[]) => T;

export const isFunction = (fn: any): fn is func => {
  return typeof fn === 'function';
};
