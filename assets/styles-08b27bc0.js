import{c as o}from"./styled-components.browser.esm-8c817f58.js";import{f as t}from"./commons-ac9222de.js";const i=o`
  position: relative;
  display: flex;
  height: 40px;
  ${t.center}
  gap: 8px;
  border-radius: 4px;
  transition: background 300ms ease-out;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;

  :disabled,
  &[data-disabled="true"] {
    opacity: 0.2;
  }

  :focus::after,
  &[data-focus="true"]::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 250%;
    height: 250%;
    display: block;
    border-radius: 10px;
    transform: scale(0.4);
    transform-origin: left top;
    box-sizing: border-box;
  }
`;export{i as B};
//# sourceMappingURL=styles-08b27bc0.js.map
