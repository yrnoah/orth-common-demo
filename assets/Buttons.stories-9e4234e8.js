import{j as t}from"./jsx-runtime-94f6e698.js";import{r as h}from"./index-8db94870.js";import{p as x}from"./styled-components.browser.esm-8c817f58.js";import{H as d,I as l,S as u,T as r,D,a as w}from"./Separator-ab1605ca.js";import{D as v}from"./DmIcon20Share-4070fa0a.js";import{D as y}from"./DmIcon20Deploy-3df39080.js";import{D as B}from"./DmIcon20History-f09108bc.js";import{D as a}from"./DmIcon12Down-dcd36aab.js";import{D as g}from"./Dynamic-c2976920.js";import"./_commonjsHelpers-042e6b4d.js";import"./colors-be3c1ed4.js";import"./styles-86b3dc18.js";import"./commons-26f23e02.js";import"./typography-05e40c9f.js";import"./react-spring-web.esm-b5f0afc3.js";import"./index-8ce4a492.js";import"./common-6b90d0a5.js";const F={title:"PAAS/DynamicMenu",component:d,argTypes:{theme:{control:"select",options:["plus","minus"]}}},j=m=>{const[n,i]=h.useState("");return t.jsx(I,{children:t.jsxs(g,{init:{x:0,y:400,width:500,height:52},theme:m.theme,children:[t.jsx(d,{}),t.jsx(l,{children:t.jsx(v,{width:20,height:20})}),t.jsx(u,{}),t.jsx(r,{onClick:()=>i(e=>e==="text"?"":"text"),"data-active":n==="text",children:"Text"}),t.jsxs(r,{onClick:()=>i(e=>e==="deploy"?"":"deploy"),"data-active":n==="deploy",children:[t.jsx(y,{width:20,height:20}),"Deploy"]}),t.jsxs(D,{onClick:()=>i(e=>e==="icon"?"":"icon"),"data-active":n==="icon",children:[t.jsx(B,{width:20,height:20}),t.jsx(a,{width:12,height:12})]}),t.jsxs(w,{onClick:()=>i(e=>e==="text-dropdown"?"":"text-dropdown"),"data-active":n==="text-dropdown",children:["Text",t.jsx(a,{width:12,height:12})]})]})})},I=x.div`
  width: 600px;
  height: 480px;
  display: flex;
  border: 1px solid black;
  flex-wrap: wrap;
`,o=j.bind({});o.args={theme:"plus"};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [active, setActive] = useState("");
  return <Wrapper>
      <DynamicMenu init={{
      x: 0,
      y: 400,
      width: 500,
      height: 52
    }} theme={args.theme}>
        <HomeButton />
        <IconButton>
          <DmIcon20Share width={20} height={20} />
        </IconButton>
        <Separator />
        <TextButton onClick={() => setActive(pre => pre === "text" ? "" : "text")} data-active={active === "text"}>
          Text
        </TextButton>
        <TextButton onClick={() => setActive(pre => pre === "deploy" ? "" : "deploy")} data-active={active === "deploy"}>
          <DmIcon20Deploy width={20} height={20} />
          Deploy
        </TextButton>
        <DropdownIconButton onClick={() => setActive(pre => pre === "icon" ? "" : "icon")} data-active={active === "icon"}>
          <DmIcon20History width={20} height={20} />
          <DmIcon12Down width={12} height={12} />
        </DropdownIconButton>
        <DropdownTextButton onClick={() => setActive(pre => pre === "text-dropdown" ? "" : "text-dropdown")} data-active={active === "text-dropdown"}>
          Text
          <DmIcon12Down width={12} height={12} />
        </DropdownTextButton>
      </DynamicMenu>
    </Wrapper>;
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const G=["Buttons"];export{o as Buttons,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Buttons.stories-9e4234e8.js.map
