export type InputMap = {
  [key: number]: string;
};

export type Controller = {
  buttons: InputMap;
  axis: InputMap;
};
