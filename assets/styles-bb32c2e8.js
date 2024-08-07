import{c as t}from"./styled-components.browser.esm-655d472d.js";const s=t`
  outline: none;
  padding: 12px;
  border: 1px solid ${o=>o.theme.colors.divider};
  border-radius: ${o=>o.theme.radius.xxxxs}px;
  color: ${o=>o.theme.colors.textInput.default};

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

    &:hover,
    &:focus {
      border-color: ${o=>o.theme.colors.button.disabled};
    }
  }
`;export{s as t};
//# sourceMappingURL=styles-bb32c2e8.js.map
