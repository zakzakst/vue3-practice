export const Colors = {
  types: ['primary', 'link', 'info', 'success', 'warning', 'danger'],
  brightnesses: ['white', 'light', 'dark', 'black'],
};

export const Button = {
  colors: [...Colors.types, ...Colors.brightnesses, 'text', 'ghost'],
  sizes: ['small', 'normal', 'medium', 'large'],
};

export const Tag = {
  colors: [...Colors.types, ...Colors.brightnesses],
  sizes: ['normal', 'medium', 'large'],
};

export const Progress = {
  colors: [...Colors.types],
  sizes: ['small', 'normal', 'medium', 'large'],
};

export const Breadcrumb = {
  alignment: ['centered', 'right'],
  separators: ['arrow', 'bullet', 'dot', 'succeeds'],
  sizes: ['small', 'medium', 'large'],
};

export const Pagination = {
  alignment: ['centered', 'right'],
  sizes: ['small', 'medium', 'large'],
};

export const Tabs = {
  alignment: ['centered', 'right'],
  sizes: ['small', 'medium', 'large'],
  styles: ['boxed', 'toggle', 'toggle-rounded'],
};

export const Message = {
  colors: Colors.types,
  sizes: ['small', 'medium', 'large'],
};
