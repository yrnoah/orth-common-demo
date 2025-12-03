import{d as n,l as r}from"./iframe-BY0Ds_wu.js";const s=r`
  outline: none;
  padding: 0 14px;
  ${e=>e.theme.fonts.InputLarge};
  border: 1px solid ${e=>e.theme.colors.elementsDivider};
  border-radius: ${e=>e.theme.radius.buttonCorner}px;
  background-color: ${e=>e.theme.colors.elementsBackground};
  color: ${e=>e.theme.colors.elementsContentMain};
  caret-color: ${e=>e.theme.colors.elementsContentFocus};

  &::selection {
    background-color: ${e=>e.theme.colors.elementsBackgroundAlt};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.elementsContentSub};
    opacity: 0.6;
  }

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.elementsLayerActivated};
  }

  &:focus {
    border-color: ${e=>e.theme.colors.elementsContentFocus};
  }

  /* error styles */
  ${({$error:e,$errorColor:o,theme:{colors:t}})=>!!e&&r`
      border-color: ${o||t.elementsHintWarning};

      &:hover,
      &:focus {
        border-color: ${o||t.elementsHintWarning};
      }
    `}

  /* disable styles */
  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    border-color: ${e=>e.theme.colors.elementsDivider};
    background-color: ${e=>e.theme.colors.elementsBackground};

    &:hover,
    &:focus {
      border-color: ${e=>e.theme.colors.elementsDivider};
      background-color: ${e=>e.theme.colors.elementsBackground};
    }
  }
`,c=n.span`
  ${e=>e.theme.fonts.Nearsighted}
  color: ${e=>e.theme.colors.elementsHintPlain};
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
`;export{c as W,s as t};
