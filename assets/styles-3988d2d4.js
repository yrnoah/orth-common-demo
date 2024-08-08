import{c as t}from"./styled-components.browser.esm-655d472d.js";const c=t`
  outline: none;
  padding: 0 12px;
  border: 1px solid ${o=>o.theme.colors.divider};
  border-radius: ${o=>o.theme.radius.xxxxs}px;
  color: ${o=>o.theme.colors.textInput.default};
  caret-color: ${o=>o.theme.colors.textInput.link};

  &::selection {
    background: ${o=>o.theme.colors.button.hovered};
  }

  &::placeholder {
    color: ${o=>o.theme.colors.textInput.minor};
  }

  &:hover,
  &:focus {
    border-color: ${o=>o.theme.colors.textInput.link};
  }

  /* error styles */
  ${({$error:o,$errorColor:e,theme:{colors:r}})=>!!o&&t`
      border-color: ${e||r.baseColor.Volcano5};

      &:hover,
      &:focus {
        border-color: ${e||r.baseColor.Volcano5};
      }
    `}

  /* disable styles */
  &:disabled {
    color: ${o=>o.theme.colors.buttonInput.disabled};
    border-color: ${o=>o.theme.colors.button.disabled};
    background-color: transparent;

    &:hover,
    &:focus {
      border-color: ${o=>o.theme.colors.button.disabled};
    }
  }
`;export{c as t};
//# sourceMappingURL=styles-3988d2d4.js.map
