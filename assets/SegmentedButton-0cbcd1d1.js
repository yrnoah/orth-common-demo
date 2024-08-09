import{p as a,c as r}from"./styled-components.browser.esm-655d472d.js";const n=a.button.attrs({type:"button"})`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  flex: none;
  outline: none;
  border: none;
  user-select: none;
  width: ${e=>e.$instance?"fit-content":"auto"};
  min-width: ${e=>l(e.$size,e.$instance)}px;
  min-height: ${e=>s(e.$size)}px;
  padding: ${e=>d(e.$size)};
  ${({$size:e,theme:o})=>e==="small"?o.fonts["Caption-Large/Bold"]:o.fonts["Body-Medium/Bold"]}
  ${({$size:e,theme:o})=>e==="large"?r`
        border-radius: ${o.radius.xs}px;
      `:r`
      border-radius: ${o.radius.xxxxs}px;
    `}

  background-color: transparent;
  color: ${e=>e.theme.colors.noColor.Grey9};
  transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.themeColor.Air4};
    color: ${e=>e.theme.colors.textInput.default};
  }

  ${({$active:e,theme:o,disabled:t})=>!t&&e?r`
        background-color: #fff;
        color: ${o.colors.textInput.default};
        box-shadow: ${o.colors.softShadow};

        &:hover {
          background-color: #fff;
          color: ${o.colors.textInput.default};
          box-shadow: ${o.colors.softShadow};
        }
      `:r``}

  &:disabled {
    background-color: ${e=>e.theme.colors.button.disabled};
    color: ${e=>e.theme.colors.buttonInput.disabled};
    cursor: not-allowed;

    &:hover {
      background-color: ${e=>e.theme.colors.button.disabled};
      color: ${e=>e.theme.colors.buttonInput.disabled};
    }
  }
`;function s(e="medium"){switch(e){default:return 32;case"small":return 28;case"medium":return 32;case"large":return 48}}function l(e="medium",o=!1){switch(e){default:return o?40:64;case"small":return o?28:52;case"medium":return o?40:64;case"large":return o?48:118}}function d(e="medium"){switch(e){default:case"medium":return"6px 12px";case"small":return"6px";case"large":return"12px 16px"}}try{n.displayName="SegmentedButton",n.__docgenInfo={description:"",displayName:"SegmentedButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{n as S};
//# sourceMappingURL=SegmentedButton-0cbcd1d1.js.map
