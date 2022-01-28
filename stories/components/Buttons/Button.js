export const createButton = ({
  label,
  className,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = [`${className}`];

  return btn;
};
