import{s as c,A as f}from"./styled-components.browser.esm-6007d051.js";const n=c.button`
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

  ${({theme:{colors:o},active:u,disabled:i,...e})=>{let l=e.defaultColor||"#000",a=e.hoverColor||"#000",r=e.defaultBGColor||"transparent",d=e.defaultBorderColor||r,t=e.hoverBGColor||o.Oxfordblue_100;return u&&!i&&(l=e.activeColor||l,a=e.activeColor||a,r=e.activeBGColor||o.Oxfordblue_200,d=e.activeBorderColor||r,t=e.activeBGColor||o.Oxfordblue_200),i&&(l=e.disabledColor||l,d=e.disabledBorderColor||r,r=e.disabledBGColor||r),f`
      color: ${l};
      border-color: ${d};
      background-color: ${r};
      transition: all 0.2s;

      &:hover:not(:disabled) {
        color: ${a};
        border-color: ${e.hoverBorderColor||t};
        background-color: ${t};
      }
    `}}
`,p=n;try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},defaultColor:{defaultValue:{value:"#000"},description:"@description default color",name:"defaultColor",required:!1,type:{name:"string"}},hoverColor:{defaultValue:{value:"#000"},description:"@description color when hovered",name:"hoverColor",required:!1,type:{name:"string"}},activeColor:{defaultValue:{value:"#000"},description:"@description color when active",name:"activeColor",required:!1,type:{name:"string"}},disabledColor:{defaultValue:{value:"defaultColor"},description:"@description color when disabled",name:"disabledColor",required:!1,type:{name:"string"}},defaultBGColor:{defaultValue:{value:"transparent"},description:"@description default background color",name:"defaultBGColor",required:!1,type:{name:"string"}},hoverBGColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description background color when hovered",name:"hoverBGColor",required:!1,type:{name:"string"}},activeBGColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description background color when active",name:"activeBGColor",required:!1,type:{name:"string"}},disabledBGColor:{defaultValue:{value:"defaultBGColor"},description:"@description background color when disabled",name:"disabledBGColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"defaultBGColor"},description:"@description default border color",name:"defaultBorderColor",required:!1,type:{name:"string"}},hoverBorderColor:{defaultValue:{value:"hoverBGColor Oxfordblue_100 #DCEBF3"},description:"@description background color when hovered",name:"hoverBorderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"activeBGColor Oxfordblue_200 #457D96"},description:"@description background color when active",name:"activeBorderColor",required:!1,type:{name:"string"}},disabledBorderColor:{defaultValue:{value:"defaultBGColor"},description:"@description background color when disabled",name:"disabledBorderColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{p as I};
//# sourceMappingURL=IconButton-380e3ebb.js.map
