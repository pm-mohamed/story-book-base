export const createTextInput = ({
  className,
  placeholder
}) => {
  const textInput = document.createElement('INPUT');
  textInput.setAttribute("type", "text");
  textInput.className = [`${className}`];
  textInput.placeholder = placeholder;

  return textInput;
};
