import{r as l,j as t,d as n}from"./iframe-BY0Ds_wu.js";import{T as p}from"./TextFieldDefault-C0GY-dvf.js";import{M as m}from"./Modal-CB7JT1Mz.js";import"./preload-helper-D9Z9MdNV.js";import"./ErrorTip-BwmSfvSE.js";import"./IconWarning-C4uXhNFZ.js";import"./Label-DCWLVuuJ.js";import"./IconButton-B0QxEmQa.js";import"./Portal-CsufOtEp.js";import"./index-1WFH_otD.js";import"./index-jXhlw_Vl.js";import"./Tooltip-BVq8jL3O.js";import"./TooltipPoint-CBgdh05o.js";import"./useRefreshPosition-DM-1Nh4A.js";import"./styles-DmNQvTDp.js";import"./IconClose-CRaMrq-t.js";const B={title:"__dev/iframe"},c=()=>{const[e,i]=l.useState("https://test.orthogonal.cc/"),[a,s]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(p,{value:e,style:{width:"100%"},onChange:o=>{i(o.target.value||""),a&&s(!1)}}),t.jsx("button",{onClick:()=>s(o=>!o),children:"toggle"}),!!e&&t.jsx(m,{open:a,children:t.jsxs(u,{children:[t.jsx(d,{onClick:()=>s(o=>!o)}),t.jsx(h,{src:e})]})})]})},r=c.bind({}),u=n.main`
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
