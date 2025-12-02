import{j as e,f as t,d as r}from"./iframe-AucjWJ36.js";import"./preload-helper-D9Z9MdNV.js";const d={title:"PAAS/DesignSystem/Fonts"},o=()=>e.jsx(p,{children:Object.keys(t).map(s=>e.jsxs(a,{css:t[s],children:[e.jsx("span",{children:s}),"  ",e.jsx("span",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},s))}),n=o.bind({}),a=r.div`
  ${s=>s.css}
  border-bottom: 1px solid orange;
`,p=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      {Object.keys(F).map(name => <Font css={(F as any)[name]} key={name}>
          <span>{name}</span>&nbsp;&nbsp;
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </Font>)}
    </Wrapper>;
}`,...n.parameters?.docs?.source}}};const m=["Fonts"];export{n as Fonts,m as __namedExportsOrder,d as default};
