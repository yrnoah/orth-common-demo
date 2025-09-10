import{p as s,c as t}from"./styled-components.browser.esm-6dd904cc.js";const r=s.button.attrs({type:"button"})`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  flex: none;
  min-width: ${e=>a(e.$size)}px;
  min-height: ${e=>c(e.$size)}px;
  padding: ${e=>l(e.$size)};
  border-radius: ${e=>e.theme.radius.xxxxs}px;
  ${e=>d(e.$size)}
  background-color: transparent;
  color: ${e=>e.theme.colors.noColor.Grey9};
  transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.themeColor.Air4};
    color: ${e=>e.theme.colors.textInput.default};
  }

  ${({$active:e,theme:o,disabled:n})=>{if(!n&&e)return t`
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
`;function a(e="medium"){switch(e){default:case"medium":return 40;case"small":return 32;case"large":return 48}}function c(e="medium"){switch(e){default:case"medium":return 28;case"small":return 20;case"large":return 36}}function l(e="medium"){switch(e){default:case"medium":return"4px 12px";case"small":return"2px 8px";case"large":return"6px 16px"}}function d(e="medium"){switch(e){default:case"medium":return t`
        ${o=>o.theme.fonts["Body-Medium/Regular"]};
        line-height: 20px;
      `;case"small":return t`
        ${o=>o.theme.fonts["Caption-Large/Regular"]}
        line-height: 16px;
      `;case"large":return t`
        ${o=>o.theme.fonts["Body-Medium/Bold"]};
        line-height: 24px;
      `}}try{r.displayName="SegmentedButton",r.__docgenInfo={description:"",displayName:"SegmentedButton",props:{}}}catch{}export{r as S};
//# sourceMappingURL=SegmentedButton-4abb021a.js.map
