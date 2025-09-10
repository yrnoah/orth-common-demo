import{j as t}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{T as u}from"./TextFrameSingleLine-d92e5e95.js";import{p as s}from"./styled-components.browser.esm-7ed061eb.js";import{M as d}from"./Modal-e047e149.js";import"./_commonjsHelpers-042e6b4d.js";import"./ErrorTip-557d4d7f.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./IconWarning-75f2a4c4.js";import"./Label-66f79118.js";import"./styles-27d1fda3.js";import"./Portal-01fdeda0.js";import"./index-8ce4a492.js";const E={title:"__dev/iframe"},h=()=>{const[e,c]=i.useState("https://test.orthogonal.cc/"),[a,n]=i.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(u,{value:e,style:{width:"100%"},onChange:o=>{c(o.target.value||""),a&&n(!1)}}),t.jsx("button",{onClick:()=>n(o=>!o),children:"toggle"}),!!e&&t.jsx(d,{open:a,children:t.jsxs(f,{children:[t.jsx(g,{onClick:()=>n(o=>!o)}),t.jsx(x,{src:e})]})})]})},r=h.bind({}),f=s.main`
  position: fixed;
  inset: 0;
`,g=s.div`
  ${e=>e.theme.absoluteFill}
  background-color: ${e=>e.theme.colors.elementsBackgroundFocus};
`,x=s.iframe`
  width: 90vw;
  height: 90vh;
  border: none;
  outline: none;
  border-radius: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${e=>e.theme.colors.shadowPop};
`;var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [url, setUrl] = useState("https://test.orthogonal.cc/");
  const [open, setOpen] = useState(false);
  return <>
      <TextFrameSingleLine value={url} style={{
      width: "100%"
    }} onChange={e => {
      setUrl(e.target.value || "");
      if (open) setOpen(false);
    }} />
      <button onClick={() => setOpen(v => !v)}>toggle</button>
      {!!url && <Modal open={open}>
          <Wrapper>
            <BG onClick={() => setOpen(v => !v)} />
            <IFrame src={url} />
          </Wrapper>
        </Modal>}
    </>;
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["IframeTest"];export{r as IframeTest,U as __namedExportsOrder,E as default};
//# sourceMappingURL=IFrame.stories-baaf2da4.js.map
