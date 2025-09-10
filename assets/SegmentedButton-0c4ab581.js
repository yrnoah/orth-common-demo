import{p as n,c as o}from"./styled-components.browser.esm-6dd904cc.js";const r=n.button.attrs({type:"button"})`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  flex: none;
  min-width: ${e=>s(e.$size)}px;
  min-height: ${e=>l(e.$size)}px;
  padding: ${e=>d(e.$size)};
  border-radius: ${e=>e.theme.radius.xxxxs}px;
  ${e=>u(e.$size)}
  background-color: transparent;
  color: ${e=>e.theme.colors.noColor.Grey9};
  transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.themeColor.Air4};
    color: ${e=>e.theme.colors.textInput.default};
  }

  ${({$active:e,theme:t,disabled:a})=>{if(!a&&e)return o`
        background-color: #fff;
        color: ${t.colors.textInput.default};
        box-shadow: ${t.colors.softShadow};

        &:hover {
          background-color: #fff;
          color: ${t.colors.textInput.default};
          box-shadow: ${t.colors.softShadow};
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
`;function s(e="medium"){switch(e){default:case"medium":return 40;case"small":return 32;case"large":return 48}}function l(e="medium"){switch(e){default:case"medium":return 28;case"small":return 20;case"large":return 36}}function d(e="medium"){switch(e){default:case"medium":return"4px 12px";case"small":return"2px 8px";case"large":return"6px 16px"}}function u(e="medium"){switch(e){default:case"medium":return o`
        ${t=>t.theme.fonts["Body-Medium/Regular"]};
        line-height: 20px;
      `;case"small":return o`
        ${t=>t.theme.fonts["Caption-Large/Regular"]}
        line-height: 16px;
      `;case"large":return o`
        ${t=>t.theme.fonts["Body-Medium/Bold"]};
        line-height: 24px;
      `}}try{r.displayName="SegmentedButton",r.__docgenInfo={description:"",displayName:"SegmentedButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{r as S};
//# sourceMappingURL=SegmentedButton-0c4ab581.js.map
