import{j as s,a as n}from"./jsx-runtime-a888423b.js";import{p as d}from"./styled-components.browser.esm-7ed061eb.js";import{f as m,p as l}from"./styled-components.browser.esm-6dd904cc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";const p=m`
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
  background: ${t=>t.theme.colors.background_warmwhite};
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
  animation-name: ${p};
`;try{e.displayName="SkeletonItem",e.__docgenInfo={description:"",displayName:"SkeletonItem",props:{}}}catch{}const y={title:"PAAS/Skeleton",tags:["autodocs"]},o={render:()=>s(c,{children:[n(e,{style:{width:332}}),n(e,{style:{width:227}}),n(e,{style:{width:332}}),n(e,{style:{width:227}})]})},c=d.div`
  ${t=>t.theme.flexCSS.column}

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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const w=["Skeleton"];export{o as Skeleton,w as __namedExportsOrder,y as default};
//# sourceMappingURL=Skeleton.stories-a63936df.js.map
