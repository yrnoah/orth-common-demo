import{j as r,d as n}from"./iframe-BY0Ds_wu.js";import{S as c}from"./IconWarning-C4uXhNFZ.js";const p=e=>{const{message:i,icon:o,iconContainerStyles:s,$errorColor:a,...l}=e;return e.message?r.jsxs(t,{...l,children:[r.jsxs(d,{style:s,$errorColor:a,children:[!o&&r.jsx(c,{width:12,height:12}),o]}),r.jsx("span",{children:i})]}):r.jsx(t,{})},t=n.p`
  position: relative;
  width: 100%;
  padding-left: 14px;
  box-sizing: border-box;
  word-break: break-all;

  /* override if necessary */
  max-width: 30vw;
  min-height: 16px;
  ${e=>e.theme.fonts.Compact}
  /* 1.6 will make font-height larger then 16px */
  line-height: 1.5;
  color: ${e=>e.theme.colors.elementsContentWarning};

  > span {
    vertical-align: middle;
  }
`,d=n.span`
  padding: 0 2px;
  font-size: 0;
  color: ${e=>e.$errorColor||e.theme.colors.elementsHintWarning};

  > svg {
    vertical-align: middle;
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"ErrorTip",props:{message:{required:!1,tsType:{name:"string"},description:"@description if not provided will return 16px height placeholder block"},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},description:"@description replace default icon, should use svg component"},iconContainerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description styles for IconWrapper"},$errorColor:{required:!1,tsType:{name:'ReactCSSProperties["color"]',raw:'React.CSSProperties["color"]'},description:"@default colors.elementsHintWarning `#EE8152`\n@description override error color for icon"}},composes:["ComponentProps"]};export{p as E};
