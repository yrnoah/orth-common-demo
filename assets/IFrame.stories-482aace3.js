import{j as i,F as d,a as o}from"./jsx-runtime-a888423b.js";import{r as l}from"./index-8db94870.js";import{T as h}from"./TextFrameSingleLine-8b77c2bd.js";import{p as s}from"./styled-components.browser.esm-7ed061eb.js";import{M as f}from"./Modal-63b648b6.js";import"./_commonjsHelpers-042e6b4d.js";import"./ErrorTip-e59299f4.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./IconWarning-93dbea1c.js";import"./Label-007705c7.js";import"./styles-27d1fda3.js";import"./Portal-847ba74d.js";import"./index-8ce4a492.js";const $={title:"__dev/iframe"},g=()=>{const[e,u]=l.useState("https://test.orthogonal.cc/"),[a,n]=l.useState(!1);return i(d,{children:[o(h,{value:e,style:{width:"100%"},onChange:t=>{u(t.target.value||""),a&&n(!1)}}),o("button",{onClick:()=>n(t=>!t),children:"toggle"}),!!e&&o(f,{open:a,children:i(v,{children:[o(b,{onClick:()=>n(t=>!t)}),o(x,{src:e})]})})]})},r=g.bind({}),v=s.main`
  position: fixed;
  inset: 0;
`,b=s.div`
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
`;var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const y=["IframeTest"];export{r as IframeTest,y as __namedExportsOrder,$ as default};
//# sourceMappingURL=IFrame.stories-482aace3.js.map
