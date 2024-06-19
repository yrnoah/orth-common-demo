import{j as o}from"./jsx-runtime-94f6e698.js";import{p as i}from"./styled-components.browser.esm-8c817f58.js";import{u as x,a as y}from"./react-spring-web.esm-b5f0afc3.js";import{r as f}from"./index-8db94870.js";import{a as S}from"./common-6b90d0a5.js";import{D as l}from"./DmIconLargeSsp-4794a515.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";function s({maskText:e,children:p,...t}){const[d,c]=f.useState(!1),[g]=x(()=>({from:{opacity:0},to:{opacity:d?1:0},config:S}),[d]);return o.jsxs(M,{...t,onMouseEnter:a=>{var r;c(!0),(r=t.onMouseEnter)==null||r.call(t,a)},onMouseLeave:a=>{var r;c(!1),(r=t.onMouseLeave)==null||r.call(t,a)},children:[p,o.jsx(k,{style:g,children:e})]})}const M=i.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${e=>e.theme.colors.noColor.Grey4};
  border-radius: 3px;
`,k=i(y.div)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${e=>e.theme.colors.noColor.Grey4};
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
`;try{s.displayName="MaskedButton",s.__docgenInfo={description:"",displayName:"MaskedButton",props:{maskText:{defaultValue:null,description:"",name:"maskText",required:!1,type:{name:"string"}}}}}catch{}const D={title:"PAAS/SystemBuilder",component:s},B=e=>o.jsxs(_,{children:[o.jsx(s,{...e,style:{width:147,height:92},children:o.jsx(l,{width:90,height:52})}),o.jsx(s,{...e,style:{width:147,height:92},children:o.jsx(l,{width:90,height:52})})]}),n=B.bind({});n.args={maskText:"the ME type SSP could only contain ME type FMU files."};const _=i.div`
  position: relative;
  width: 500px;
  height: 400px;
  display: flex;
  ${e=>e.theme.flexCSS.center}
  gap: 40px;
`;var u,h,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const I=["SystemBuilderSSPButton"];export{n as SystemBuilderSSPButton,I as __namedExportsOrder,D as default};
//# sourceMappingURL=CreateButton.stories-342844f4.js.map
