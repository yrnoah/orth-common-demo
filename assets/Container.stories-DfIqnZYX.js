import{j as r,d as s}from"./iframe-D12yBJYT.js";import"./preload-helper-D9Z9MdNV.js";const i={title:"PAAS/DesignSystem/Container"},t=()=>r.jsxs(a,{children:[r.jsx(o,{children:r.jsx(n,{})}),r.jsx(o,{children:r.jsx(n,{style:{width:"100%"}})}),r.jsx(o,{children:r.jsx(n,{style:{height:"100%"}})})]}),a=s.section`
  ${e=>e.theme.flex.row}
  flex-wrap: wrap;
  gap: 8px;
`,o=s.div`
  height: 30vh;
  width: 30vw;
  overflow: auto;
  ${e=>e.theme.scrollbar}
  box-shadow: ${e=>e.theme.colors.hardShadow};
`,n=s.div`
  width: 200vw;
  height: 200vh;
`;t.__docgenInfo={description:"",methods:[],displayName:"Container"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <ScrollWrapper>
      <Content />
    </ScrollWrapper>
    <ScrollWrapper>
      <Content style={{
      width: "100%"
    }} />
    </ScrollWrapper>
    <ScrollWrapper>
      <Content style={{
      height: "100%"
    }} />
    </ScrollWrapper>
  </Wrapper>`,...t.parameters?.docs?.source}}};const c=["Container"];export{t as Container,c as __namedExportsOrder,i as default};
