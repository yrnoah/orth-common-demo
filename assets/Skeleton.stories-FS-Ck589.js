import{d as r,m as i,j as e}from"./iframe-BY0Ds_wu.js";import"./preload-helper-D9Z9MdNV.js";const a=i`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`,t=r.div`
  border-radius: 4px;
  height: 18px;
  width: 100%;
  background: ${o=>o.theme.colors.background_warmwhite};
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
  animation-name: ${a};
`,l={title:"PAAS/Skeleton",tags:["autodocs"]},n={render:()=>e.jsxs(s,{children:[e.jsx(t,{style:{width:332}}),e.jsx(t,{style:{width:227}}),e.jsx(t,{style:{width:332}}),e.jsx(t,{style:{width:227}})]})},s=r.div`
  ${o=>o.theme.flexCSS.column}

  ${t} {
    &:nth-child(odd) {
      margin-bottom: 6px;
    }

    &:nth-child(even) {
      margin-bottom: 12px;
    }
  }
`;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const c=["Skeleton"];export{n as Skeleton,c as __namedExportsOrder,l as default};
