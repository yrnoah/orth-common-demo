import{j as r}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{p as i}from"./styled-components.browser.esm-6dd904cc.js";import{I as u}from"./IconWarning-75f2a4c4.js";const n=m.forwardRef((e,l)=>{const{message:s,icon:t,iconContainerStyles:d,$errorColor:p,...c}=e;return e.message?r.jsxs(a,{...c,ref:l,children:[r.jsxs(o,{style:d,$errorColor:p,children:[!t&&r.jsx(u,{width:12,height:12}),t]}),r.jsx("span",{children:s})]}):r.jsx(a,{})}),a=i.p`
  position: relative;
  width: 100%;

  /* override if necessary */
  max-width: 30vw;
  min-height: 16px;
  ${e=>e.theme.fonts["Caption-Medium/Regular"]}
  /* 1.6 will make font-height larger then 16px */
  line-height: 1.5;
  color: ${e=>e.theme.colors.textInput.default};

  > span {
    vertical-align: middle;
  }
`,o=i.span`
  padding: 0 2px;
  font-size: 0;
  color: ${e=>e.$errorColor||e.theme.colors.baseColor.Volcano5};

  > svg {
    vertical-align: middle;
  }
`;try{n.displayName="ErrorTip",n.__docgenInfo={description:"",displayName:"ErrorTip",props:{$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for icon",name:"$errorColor",required:!1,type:{name:"Color"}},message:{defaultValue:null,description:"@description if not provided will return 16px height placeholder block",name:"message",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"@description replace default icon, should use svg component",name:"icon",required:!1,type:{name:"ReactElement<SVGSVGElement, string | JSXElementConstructor<any>>"}},iconContainerStyles:{defaultValue:null,description:"@description styles for IconWrapper",name:"iconContainerStyles",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{a.displayName="Container",a.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="IconWrapper",o.__docgenInfo={description:"",displayName:"IconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{n as E};
//# sourceMappingURL=ErrorTip-557d4d7f.js.map
