import{r as l,j as t,d as s}from"./iframe-D12yBJYT.js";import{T as p}from"./TextFrameSingleLine-D3X1b71e.js";import{M as c}from"./Modal-NhuBUynA.js";import"./preload-helper-D9Z9MdNV.js";import"./ErrorTip-BJ6zSHkg.js";import"./IconWarning-BYWa4H6F.js";import"./Label-BQEWlu5n.js";import"./styles-wacdRwg_.js";import"./Portal-BcC3rkwp.js";import"./index-CLFaP9oP.js";import"./index-DihtluQp.js";const O={title:"__dev/iframe"},m=()=>{const[e,i]=l.useState("https://test.orthogonal.cc/"),[a,n]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(p,{value:e,style:{width:"100%"},onChange:o=>{i(o.target.value||""),a&&n(!1)}}),t.jsx("button",{onClick:()=>n(o=>!o),children:"toggle"}),!!e&&t.jsx(c,{open:a,children:t.jsxs(u,{children:[t.jsx(d,{onClick:()=>n(o=>!o)}),t.jsx(h,{src:e})]})})]})},r=m.bind({}),u=s.main`
  position: fixed;
  inset: 0;
`,d=s.div`
  ${e=>e.theme.absoluteFill}
  background-color: ${e=>e.theme.colors.elementsBackgroundFocus};
`,h=s.iframe`
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
`;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const T=["IframeTest"];export{r as IframeTest,T as __namedExportsOrder,O as default};
