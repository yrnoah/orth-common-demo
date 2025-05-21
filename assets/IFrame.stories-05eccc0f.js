import{j as t}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{T as u}from"./TextFrameSingleLine-c535846b.js";import{p as s}from"./styled-components.browser.esm-655d472d.js";import{M as d}from"./Modal-91c75e7b.js";import"./_commonjsHelpers-042e6b4d.js";import"./ErrorTip-2a6ec254.js";import"./IconWarning-75f2a4c4.js";import"./Label-1532c367.js";import"./styles-5c0f67c2.js";import"./Portal-01fdeda0.js";import"./index-8ce4a492.js";const M={title:"__dev/iframe"},h=()=>{const[e,c]=l.useState("https://test.orthogonal.cc/"),[a,n]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(u,{value:e,style:{width:"100%"},onChange:o=>{c(o.target.value||""),a&&n(!1)}}),t.jsx("button",{onClick:()=>n(o=>!o),children:"toggle"}),!!e&&t.jsx(d,{open:a,children:t.jsxs(f,{children:[t.jsx(g,{onClick:()=>n(o=>!o)}),t.jsx(x,{src:e})]})})]})},r=h.bind({}),f=s.main`
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
`;var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const B=["IframeTest"];export{r as IframeTest,B as __namedExportsOrder,M as default};
//# sourceMappingURL=IFrame.stories-05eccc0f.js.map
