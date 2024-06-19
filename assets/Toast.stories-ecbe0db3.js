import{j as r}from"./jsx-runtime-94f6e698.js";import{p as a}from"./styled-components.browser.esm-8c817f58.js";import{D as n}from"./Dynamic-c2976920.js";import{D as s}from"./Toast-e962be06.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-spring-web.esm-b5f0afc3.js";import"./index-8ce4a492.js";import"./colors-be3c1ed4.js";import"./typography-05e40c9f.js";import"./common-6b90d0a5.js";import"./useMount-33212c03.js";import"./useEffectOnce-29e89586.js";import"./DmIcon20ErrorRed-7a58926a.js";const W={title:"PAAS/DynamicMenu",argTypes:{theme:{control:"select",options:["plus","minus"]}}},c=t=>r.jsxs(m,{children:[r.jsx(n,{...t,init:{x:200,y:200},anchor:"center",children:r.jsx(s,{type:"success",children:"Success!"})}),r.jsx(n,{...t,init:{x:200,y:100},anchor:"top-left",children:r.jsx(s,{type:"error",children:"Error!"})})]}),e=c.bind({});e.args={theme:"minus"};const m=a.div`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  ${t=>t.theme.flexCSS.center}
`;var o,i,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <Wrapper>
      <DynamicMenu {...args} init={{
      x: 200,
      y: 200
    }} anchor="center">
        <Tst type="success">Success!</Tst>
      </DynamicMenu>
      <DynamicMenu {...args} init={{
      x: 200,
      y: 100
    }} anchor="top-left">
        <Tst type="error">Error!</Tst>
      </DynamicMenu>
    </Wrapper>;
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const _=["Toast"];export{e as Toast,_ as __namedExportsOrder,W as default};
//# sourceMappingURL=Toast.stories-ecbe0db3.js.map
