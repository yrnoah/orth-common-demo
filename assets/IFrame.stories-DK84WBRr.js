import{r as l,j as t,d as n}from"./iframe-AucjWJ36.js";import{T as p}from"./TextFieldDefault-B_ewbTiG.js";import{M as m}from"./Modal-Dk5E9BW2.js";import"./preload-helper-D9Z9MdNV.js";import"./ErrorTip-D2oQAdq3.js";import"./IconWarning-BpHkre3Q.js";import"./Label-BAPk4OKl.js";import"./IconButton-bqBj36BN.js";import"./Portal-Cf1ZhHdQ.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";import"./Tooltip-BoRZpxw0.js";import"./TooltipPoint-DGS_NNig.js";import"./useRefreshPosition-CadW4XDp.js";import"./styles-CHsHN8Tj.js";import"./IconClose-uw-4xgex.js";const B={title:"__dev/iframe"},c=()=>{const[e,i]=l.useState("https://test.orthogonal.cc/"),[a,s]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(p,{value:e,style:{width:"100%"},onChange:o=>{i(o.target.value||""),a&&s(!1)}}),t.jsx("button",{onClick:()=>s(o=>!o),children:"toggle"}),!!e&&t.jsx(m,{open:a,children:t.jsxs(u,{children:[t.jsx(d,{onClick:()=>s(o=>!o)}),t.jsx(h,{src:e})]})})]})},r=c.bind({}),u=n.main`
  position: fixed;
  inset: 0;
`,d=n.div`
  ${e=>e.theme.absoluteFill}
  background-color: ${e=>e.theme.colors.elementsBackgroundFocus};
`,h=n.iframe`
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
      <TextFieldDefault value={url} style={{
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
}`,...r.parameters?.docs?.source}}};const E=["IframeTest"];export{r as IframeTest,E as __namedExportsOrder,B as default};
