import{l as t,d as s}from"./iframe-AucjWJ36.js";const c=s.button.attrs({type:"button"})`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  flex: none;
  min-width: ${e=>n(e.$size)}px;
  min-height: ${e=>a(e.$size)}px;
  padding: ${e=>l(e.$size)};
  border-radius: ${e=>e.theme.radius.xxxxs}px;
  ${e=>u(e.$size)}
  background-color: transparent;
  color: ${e=>e.theme.colors.noColor.Grey9};
  transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.themeColor.Air4};
    color: ${e=>e.theme.colors.textInput.default};
  }

  ${({$active:e,theme:o,disabled:r})=>{if(!r&&e)return t`
        background-color: #fff;
        color: ${o.colors.textInput.default};
        box-shadow: ${o.colors.softShadow};

        &:hover {
          background-color: #fff;
          color: ${o.colors.textInput.default};
          box-shadow: ${o.colors.softShadow};
        }
      `}}

  &:disabled {
    background-color: ${e=>e.theme.colors.button.disabled};
    color: ${e=>e.theme.colors.buttonInput.disabled};
    cursor: not-allowed;
    box-shadow: ${e=>e.$active?e.theme.colors.softShadow:"none"};

    &:hover {
      background-color: ${e=>e.theme.colors.button.disabled};
      color: ${e=>e.theme.colors.buttonInput.disabled};
    }
  }
`;function n(e="medium"){switch(e){default:case"medium":return 40;case"small":return 32;case"large":return 48}}function a(e="medium"){switch(e){default:case"medium":return 28;case"small":return 20;case"large":return 36}}function l(e="medium"){switch(e){default:case"medium":return"4px 12px";case"small":return"2px 8px";case"large":return"6px 16px"}}function u(e="medium"){switch(e){default:case"medium":return t`
        ${o=>o.theme.fonts["Body-Medium/Regular"]};
        line-height: 20px;
      `;case"small":return t`
        ${o=>o.theme.fonts["Caption-Large/Regular"]}
        line-height: 16px;
      `;case"large":return t`
        ${o=>o.theme.fonts["Body-Medium/Bold"]};
        line-height: 24px;
      `}}export{c as S};
