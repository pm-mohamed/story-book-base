export const createButton = ({
  label = "",
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = ['primary-btn'];

  return btn;
};
