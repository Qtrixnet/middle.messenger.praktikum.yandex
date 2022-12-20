export type Indexed<T = any> = {
  [key in string]: T;
};
