import{p as u,c as b}from"./styled-components.browser.esm-655d472d.js";const n=u.button`
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

  ${({theme:{colors:o},active:c,disabled:i,...e})=>{let a=e.defaultColor||"#000",d=e.hoverColor||"#000",r=e.defaultBGColor||"transparent",l=e.defaultBorderColor||r,t=e.hoverBGColor||o.baseColor.Blue1;return c&&!i&&(a=e.activeColor||a,d=e.activeColor||d,r=e.activeBGColor||o.brandColor.Primary7,l=e.activeBorderColor||r,t=e.activeBGColor||o.brandColor.Primary7),i&&(a=e.disabledColor||a,l=e.disabledBorderColor||r,r=e.disabledBGColor||r),b`
      color: ${a};
      border-color: ${l};
      background-color: ${r};
      transition: all 0.2s;

      &:hover:not(:disabled) {
        color: ${d};
        border-color: ${e.hoverBorderColor||t};
        background-color: ${t};
      }
    `}}
`,f=n;try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{f as I};
//# sourceMappingURL=IconButton-878f1a35.js.map
