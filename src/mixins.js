export const fontSize = (size, base = 16) => `
  font-size: calc(${size / base} * 1rem);
`
export const widthHeight = (w, h = w) => `
  width: ${w};
  height: ${h};
`;
