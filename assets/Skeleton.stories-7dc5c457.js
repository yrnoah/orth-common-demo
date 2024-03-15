import{j as t}from"./jsx-runtime-94f6e698.js";import{W as d,s}from"./styled-components.browser.esm-6007d051.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const l=d`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`,e=s.div`
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
  animation-name: ${l};
`;try{e.displayName="SkeletonItem",e.__docgenInfo={description:"",displayName:"SkeletonItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const h={title:"PAAS/Skeleton",tags:["autodocs"]},a={render:()=>t.jsxs(m,{children:[t.jsx(e,{style:{width:332}}),t.jsx(e,{style:{width:227}}),t.jsx(e,{style:{width:332}}),t.jsx(e,{style:{width:227}})]})},m=s.div`
  ${n=>n.theme.flexCSS.column}

  ${e} {
    &:nth-child(odd) {
      margin-bottom: 6px;
    }

    &:nth-child(even) {
      margin-bottom: 12px;
    }
  }
`;var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const k=["Skeleton"];export{a as Skeleton,k as __namedExportsOrder,h as default};
//# sourceMappingURL=Skeleton.stories-7dc5c457.js.map