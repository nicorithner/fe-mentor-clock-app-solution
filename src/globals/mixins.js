export const toRem = (size, base = 16) => `
  ${size / base}rem;
`;

export const widthHeight = (w, h) => `
  width: ${w}px;
  height: ${h}px;
`;
