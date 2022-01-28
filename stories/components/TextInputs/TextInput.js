export const createTextInput = ({
  className,
  placeholder
}) => {
  const wrapper= document.createElement('div');
  wrapper.innerHTML=  `<input type="text" class=${className} placeholder=${placeholder} />`;
  const textInput= wrapper.firstChild;

  return textInput;
};
