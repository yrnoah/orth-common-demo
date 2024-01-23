import{j as r}from"./jsx-runtime-94f6e698.js";import{s as i}from"./styled-components.browser.esm-6007d051.js";import{u as x,a as f}from"./react-spring-web.esm-788c8f7b.js";import{r as y}from"./index-8db94870.js";import{a as S}from"./common-d4e29412.js";import{D as l}from"./DmIconLargeSsp-4794a515.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";function n({maskText:e,children:p,...t}){const[d,c]=y.useState(!1),[g]=x(()=>({from:{opacity:0},to:{opacity:d?1:0},config:S}),[d]);return r.jsxs(M,{...t,onMouseEnter:a=>{var o;c(!0),(o=t.onMouseEnter)==null||o.call(t,a)},onMouseLeave:a=>{var o;c(!1),(o=t.onMouseLeave)==null||o.call(t,a)},children:[p,r.jsx(k,{style:g,children:e})]})}const M=i.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${e=>e.theme.colors.Neutral_200};
  border-radius: 3px;
`,k=i(f.div)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${e=>e.theme.colors.Neutral_200};
  background-color: ${e=>e.theme.colors.Neutral_400};
  cursor: pointer;
  text-align: start;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  display: flex;
  ${e=>e.theme.flexCSS.center}
  padding: 12px;
  box-sizing: border-box;
`;try{n.displayName="MaskedButton",n.__docgenInfo={description:"",displayName:"MaskedButton",props:{maskText:{defaultValue:null,description:"",name:"maskText",required:!1,type:{name:"string"}}}}}catch{}const D={title:"PAAS/SystemBuilder",component:n},B=e=>r.jsxs(_,{children:[r.jsx(n,{...e,style:{width:147,height:92},children:r.jsx(l,{width:90,height:52})}),r.jsx(n,{...e,style:{width:147,height:92},children:r.jsx(l,{width:90,height:52})})]}),s=B.bind({});s.args={maskText:"the ME type SSP could only contain ME type FMU files."};const _=i.div`
  position: relative;
  width: 500px;
  height: 400px;
  display: flex;
  ${e=>e.theme.flexCSS.center}
  gap: 40px;
`;var u,h,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Wrapper>
      <MaskedButton {...args} style={{
      width: 147,
      height: 92
    }}>
        <DmIconLargeSsp width={90} height={52} />
      </MaskedButton>
      <MaskedButton {...args} style={{
      width: 147,
      height: 92
    }}>
        <DmIconLargeSsp width={90} height={52} />
      </MaskedButton>
    </Wrapper>;
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const I=["SystemBuilderSSPButton"];export{s as SystemBuilderSSPButton,I as __namedExportsOrder,D as default};
//# sourceMappingURL=CreateButton.stories-6d346cf1.js.map
