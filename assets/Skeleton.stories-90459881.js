import{j as t}from"./jsx-runtime-94f6e698.js";import{p as s}from"./styled-components.browser.esm-7ed061eb.js";import{f as d,p as l}from"./styled-components.browser.esm-6dd904cc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";const m=d`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`,e=l.div`
  border-radius: 4px;
  height: 18px;
  width: 100%;
  background: ${n=>n.theme.colors.background_warmwhite};
  background: linear-gradient(
    90deg,
    rgba(248, 247, 246, 1) 25%,
    rgba(0, 0, 0, 0.15) 37%,
    rgba(0, 0, 0, 0.06) 63%
  );
  background-size: 400% 100%;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-name: ${m};
`;try{e.displayName="SkeletonItem",e.__docgenInfo={description:"",displayName:"SkeletonItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const S={title:"PAAS/Skeleton",tags:["autodocs"]},o={render:()=>t.jsxs(p,{children:[t.jsx(e,{style:{width:332}}),t.jsx(e,{style:{width:227}}),t.jsx(e,{style:{width:332}}),t.jsx(e,{style:{width:227}})]})},p=s.div`
  ${n=>n.theme.flexCSS.column}

  ${e} {
    &:nth-child(odd) {
      margin-bottom: 6px;
    }

    &:nth-child(even) {
      margin-bottom: 12px;
    }
  }
`;var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <SkeletonWrapper>
      <SkeletonItem style={{
      width: 332
    }} />
      <SkeletonItem style={{
      width: 227
    }} />
      <SkeletonItem style={{
      width: 332
    }} />
      <SkeletonItem style={{
      width: 227
    }} />
    </SkeletonWrapper>
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Skeleton"];export{o as Skeleton,y as __namedExportsOrder,S as default};
//# sourceMappingURL=Skeleton.stories-90459881.js.map
