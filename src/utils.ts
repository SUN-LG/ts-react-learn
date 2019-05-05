type func = (...args: any[]) => any;

export const isFunction = (fn: func | undefined): fn is func => {
  return typeof fn === 'function';
};
