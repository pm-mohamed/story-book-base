export const createHeading = ({
  text,
  className
}) => {
  const heading = document.createElement('h1');
  heading.type = 'button';
  heading.innerText = text;
  heading.className = [`${className}`];

  return heading;
};
