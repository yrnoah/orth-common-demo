import{j as r}from"./jsx-runtime-94f6e698.js";import{s as a}from"./styled-components.browser.esm-6007d051.js";import{D as s}from"./Dynamic-b27796d8.js";import{D as n}from"./Toast-c722bfac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-spring-web.esm-788c8f7b.js";import"./index-8ce4a492.js";import"./colors-0fffe0c4.js";import"./typography-46bf24ce.js";import"./common-d4e29412.js";import"./useMount-33212c03.js";import"./useEffectOnce-29e89586.js";import"./DmIcon20ErrorRed-7a58926a.js";const W={title:"PAAS/DynamicMenu",argTypes:{theme:{control:"select",options:["plus","minus"]}}},c=t=>r.jsxs(m,{children:[r.jsx(s,{...t,init:{x:200,y:200},anchor:"center",children:r.jsx(n,{type:"success",children:"Success!"})}),r.jsx(s,{...t,init:{x:200,y:100},anchor:"top-left",children:r.jsx(n,{type:"error",children:"Error!"})})]}),e=c.bind({});e.args={theme:"minus"};const m=a.div`
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
//# sourceMappingURL=Toast.stories-a4b653ef.js.map
