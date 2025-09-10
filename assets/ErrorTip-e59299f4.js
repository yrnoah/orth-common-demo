import{a as o,j as i}from"./jsx-runtime-a888423b.js";import{r as f}from"./index-8db94870.js";import{p as s}from"./styled-components.browser.esm-6dd904cc.js";import{I as u}from"./IconWarning-93dbea1c.js";const a=f.forwardRef((e,l)=>{const{message:c,icon:n,iconContainerStyles:p,$errorColor:d,...m}=e;return e.message?i(r,{...m,ref:l,children:[i(t,{style:p,$errorColor:d,children:[!n&&o(u,{width:12,height:12}),n]}),o("span",{children:c})]}):o(r,{})}),r=s.p`
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
`,t=s.span`
  padding: 0 2px;
  font-size: 0;
  color: ${e=>e.$errorColor||e.theme.colors.baseColor.Volcano5};

  > svg {
    vertical-align: middle;
  }
`;try{a.displayName="ErrorTip",a.__docgenInfo={description:"",displayName:"ErrorTip",props:{icon:{defaultValue:null,description:"@description replace default icon, should use svg component",name:"icon",required:!1,type:{name:"ReactElement<SVGSVGElement, string | JSXElementConstructor<any>>"}},$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for icon",name:"$errorColor",required:!1,type:{name:"Color"}},message:{defaultValue:null,description:"@description if not provided will return 16px height placeholder block",name:"message",required:!1,type:{name:"string"}},iconContainerStyles:{defaultValue:null,description:"@description styles for IconWrapper",name:"iconContainerStyles",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{r.displayName="Container",r.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}try{t.displayName="IconWrapper",t.__docgenInfo={description:"",displayName:"IconWrapper",props:{}}}catch{}export{a as E};
//# sourceMappingURL=ErrorTip-e59299f4.js.map
