import{p as u,c as b}from"./styled-components.browser.esm-8c817f58.js";const n=u.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  ${o=>o.theme.flexCSS.row}
  ${o=>o.theme.flexCSS.center}
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: 3.6px;
  cursor: ${o=>o.disabled?"not-allowed":"pointer"};

  ${({theme:{colors:o},active:c,disabled:i,...e})=>{let d=e.defaultColor||"#000",a=e.hoverColor||"#000",r=e.defaultBGColor||"transparent",l=e.defaultBorderColor||r,t=e.hoverBGColor||o.Oxfordblue_100;return c&&!i&&(d=e.activeColor||d,a=e.activeColor||a,r=e.activeBGColor||o.Oxfordblue_200,l=e.activeBorderColor||r,t=e.activeBGColor||o.Oxfordblue_200),i&&(d=e.disabledColor||d,l=e.disabledBorderColor||r,r=e.disabledBGColor||r),b`
      color: ${d};
      border-color: ${l};
      background-color: ${r};
      transition: all 0.2s;

      &:hover:not(:disabled) {
        color: ${a};
        border-color: ${e.hoverBorderColor||t};
        background-color: ${t};
      }
    `}}
`,f=n;try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{f as I};
//# sourceMappingURL=IconButton-f3976049.js.map
