import{j as r,d as i}from"./iframe-D12yBJYT.js";import{S as c}from"./IconWarning-BYWa4H6F.js";const p=e=>{const{message:n,icon:o,iconContainerStyles:s,$errorColor:a,...l}=e;return e.message?r.jsxs(t,{...l,children:[r.jsxs(d,{style:s,$errorColor:a,children:[!o&&r.jsx(c,{width:12,height:12}),o]}),r.jsx("span",{children:n})]}):r.jsx(t,{})},t=i.p`
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
`,d=i.span`
  padding: 0 2px;
  font-size: 0;
  color: ${e=>e.$errorColor||e.theme.colors.baseColor.Volcano5};

  > svg {
    vertical-align: middle;
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"ErrorTip",props:{message:{required:!1,tsType:{name:"string"},description:"@description if not provided will return 16px height placeholder block"},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},description:"@description replace default icon, should use svg component"},iconContainerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description styles for IconWrapper"},$errorColor:{required:!1,tsType:{name:'ReactCSSProperties["color"]',raw:'React.CSSProperties["color"]'},description:"@default baseColor.Volcano5 `#EE8152`\n@description override error color for icon"}},composes:["ComponentProps"]};export{p as E};
