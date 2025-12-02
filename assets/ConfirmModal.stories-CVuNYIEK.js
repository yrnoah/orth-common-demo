import{n as z,r as l,j as n,d as o,l as k}from"./iframe-AucjWJ36.js";import{M as L}from"./Modal-Dk5E9BW2.js";import{C as W}from"./Checkbox-DCEtUvBN.js";import{u as A}from"./useCurrent-Bts7HZnN.js";import{S as $,a as U,b as J,c as y}from"./IconTriangleRemindFill-C6_uolRj.js";import{S as K}from"./IconClose-uw-4xgex.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-Cf1ZhHdQ.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";import"./IconChecked-CdAAP_x_.js";function x({open:e,title:t,children:r,icon:a,confirmIcon:s,cancelIcon:c,theme:i="standard",confirmText:T="Confirm",cancelText:E="Cancel",onConfirm:S,onCancel:j,onBGClick:D,disableConfirm:q,backgroundStyle:M,displayOnceText:G="Don’t show again",displayOnceStorageKey:u,headerStyle:V,contentStyle:B,footerStyle:I,showCloseButton:se,...N}){const w=A(S),{colors:h}=z(),[g,P]=l.useState(!1),C=!!u&&!!localStorage.getItem(u),F=e&&!C;l.useEffect(()=>{e&&C&&w.current?.()},[e,C,w]);const b=()=>!!u&&g&&localStorage.setItem(u,"true"),H=()=>{b(),S?.()},O=()=>{b(),j?.()},_=()=>{b(),D?.()},R=typeof a=="string"?{info:n.jsx(J,{color:h.elementsHintPlain}),warning:n.jsx($,{color:h.elementsHintWarning}),error:n.jsx(U,{color:h.elementsHintDanger}),dangerous:n.jsx($,{color:h.elementsHintDanger})}[a]:a;return n.jsx(L,{open:F,onBGClick:_,backgroundStyle:{background:h.filterShade200,backdropFilter:"blur(2px)",...M},children:n.jsxs(ae,{...N,children:[n.jsxs(ne,{style:V,children:[n.jsxs(X,{children:[!!R&&n.jsx(Q,{children:R}),n.jsx("span",{children:t})]}),n.jsx(Z,{onClick:j,children:n.jsx(K,{})})]}),n.jsx(Y,{style:B,children:r}),n.jsxs(re,{style:I,children:[n.jsx(te,{children:!!u&&n.jsxs(ee,{children:[n.jsx(W,{size:14,checked:g,onChange:()=>P(!g)}),G]})}),n.jsxs(oe,{children:[n.jsxs(v,{onClick:O,children:[c,n.jsx("span",{children:E})]}),n.jsxs(v,{onClick:H,$type:i,disabled:q,children:[s,n.jsx("span",{children:T})]})]})]})]})})}const p=o.div`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
`,Q=o.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 16px;
  background: ${e=>e.theme.colors.container300};

  svg {
    width: 100%;
    height: 100%;
  }
`,X=o(p)`
  ${e=>e.theme.fonts["Document-Sheet/H3"]};
  gap: 16px;
`,Y=o.div`
  ${e=>e.theme.fonts["Document-Sheet/Paragraph"]};
  padding: 28px 8px;
  word-break: break-all;
`,Z=o.div`
  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 4px;
  opacity: 0.7;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 1;
  }
`,ee=o(p)`
  gap: 4px;
  ${e=>e.theme.fonts.Compact}
  color: ${e=>e.theme.colors.elementsContentSub};
`,v=o.button`
  outline: none;
  margin: 0;
  user-select: none;
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  gap: 2px;
  ${e=>e.theme.fonts.Default}
  background: ${e=>e.theme.colors.elementsBackground};
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.elementsDivider};
  transition: all 100ms linear;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${e=>e.theme.colors.elementsBackgroundAlt};
  }

  ${e=>{switch(e.$type){case"standard":return k`
          background: ${t=>t.theme.colors.accentPrimaryEnabled};
          border: 1px solid ${t=>t.theme.colors.accentPrimaryEnabled};
          color: ${t=>t.theme.colors.textContrast600};

          &:hover {
            background: ${t=>t.theme.colors.accentPrimaryHovered};
            border: 1px solid ${t=>t.theme.colors.accentPrimaryHovered};
          }
        `;case"dangerous":return k`
          background: ${t=>t.theme.colors.accentDangerEnabled};
          border: 1px solid ${t=>t.theme.colors.accentDangerEnabled};
          color: ${t=>t.theme.colors.textContrast600};

          &:hover {
            background: ${t=>t.theme.colors.accentDangerHovered};
            border: 1px solid ${t=>t.theme.colors.accentDangerHovered};
          }
        `}}}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: ${e=>e.theme.colors.elementsBackground};
    border-color: ${e=>e.theme.colors.elementsBackground};
    cursor: not-allowed;

    & > span {
      opacity: 0.3;
    }
  }
`,ne=o(p)`
  min-height: 40px;
  justify-content: space-between;
`,te=o(p)`
  gap: 8px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  color:${e=>e.theme.colors.noColor.Grey14};
`,oe=o(p)`
  justify-content: flex-end;
  gap: 8px;
`,re=o(p)`
  justify-content: space-between;
  align-items: center;
`,ae=o.div`
  width: 400px;
  padding: 16px;
  ${e=>e.theme.flex.column}
  gap: 16px;
  z-index: ${e=>e.theme.zIndexes.modal};
  border-radius: 16px;
  background: ${e=>e.theme.colors.container100};
  box-shadow: ${e=>e.theme.colors.shadowPop};
  color: ${e=>e.theme.colors.elementsContentMain};
`;x.__docgenInfo={description:"",methods:[],displayName:"ConfirmModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"@description title of the modal."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"@description content/subtitle of the modal."},icon:{required:!1,tsType:{name:"union",raw:`| "info"
| "warning"
| "error"
| "dangerous"
| React.ReactElement<SVGSVGElement>`,elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"dangerous"'},{name:"ReactReactElement",raw:"React.ReactElement<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]},description:"@description replaces the icon"},confirmIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},description:"@description confirm button icon"},cancelIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},description:"@description cancel button icon"},theme:{required:!1,tsType:{name:"union",raw:'"standard" | "dangerous"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"dangerous"'}]},description:`@description modal theme.
@default "standard"`,defaultValue:{value:'"standard"',computed:!1}},confirmText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description confirm button text.
@default "Confirm"`,defaultValue:{value:'"Confirm"',computed:!1}},cancelText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description cancel button text.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"@description click function on click confirm button."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"@description click function on click cancel button."},onBGClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"@description click function on click background layer."},disableConfirm:{required:!1,tsType:{name:"boolean"},description:"@description disable confirm button."},backgroundStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description background layer style"},displayOnceText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description display once checkbox text.
@default "Don’t show again"`,defaultValue:{value:'"Don’t show again"',computed:!1}},displayOnceStorageKey:{required:!1,tsType:{name:"string"},description:`@description unique display once storage key.
@example "coSimulationHistoryDeleteDisplayOnce".`},headerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description modal header wrapper style"},contentStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description modal content wrapper style"},footerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description modal footer wrapper style"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"@default false"}},composes:["Omit"]};const be={title:"ODE Library/Modal/ConfirmModal",tags:["autodocs"],component:x,argTypes:{title:{description:"title of the modal",control:"string"},children:{description:"content/subtitle of the modal",control:"select"},icon:{control:"select",options:["info","warning","error","dangerous"]},theme:{control:"radio",options:["standard","dangerous"]}}};function ie({...e}){const{title:t,children:r,open:a=!1}=e,[s,c]=l.useState(a);return l.useEffect(()=>{c(a)},[a]),n.jsxs(n.Fragment,{children:[n.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1976-4372",rel:"noreferrer",children:"design reference"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("h4",{children:"- Default Confirm Modal"}),n.jsxs(m,{children:[n.jsx("button",{onClick:()=>c(!0),children:"Open Confirm Modal"}),n.jsx(x,{...e,open:s,title:t,onConfirm:()=>{console.info("default confirmed."),c(!1)},onCancel:()=>c(!1),onBGClick:()=>c(!1),children:r})]}),n.jsx("h4",{children:"- Theme"}),n.jsx(m,{children:["standard","dangerous"].map(i=>l.createElement(d,{exampleName:`${i} theme`,...e,theme:i,key:i},r))}),n.jsx("h4",{children:"- Icon"}),n.jsxs(m,{children:[["info","warning","error","dangerous"].map(i=>l.createElement(d,{exampleName:`${i} icon`,...e,icon:i,key:i},r)),n.jsx(d,{exampleName:"custom icon",...e,icon:n.jsx(y,{})})]}),n.jsx("h4",{children:"- Button Icon"}),n.jsx(m,{children:n.jsx(d,{exampleName:"Button icon",...e,confirmIcon:n.jsx(y,{}),cancelIcon:n.jsx(y,{})})}),n.jsx("h4",{children:"- Display Once"}),n.jsxs(m,{children:[n.jsx(d,{exampleName:"display once",...e,displayOnceStorageKey:"testModalDisplayOnce",children:r}),n.jsx("button",{onClick:()=>localStorage.removeItem("testModalDisplayOnce"),children:"clear state"})]}),n.jsx("h4",{children:"- Disable Confirm Button"}),n.jsx(m,{children:n.jsx(d,{exampleName:"disable confirm button",...e,disableConfirm:!0,children:r})})]})}function d({...e}){const{children:t,exampleName:r}=e,[a,s]=l.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>s(!0),children:r}),n.jsx(x,{...e,open:a,title:`This is a [${r}] modal title.`,onConfirm:()=>{console.info(`[${r}] confirmed.`),s(!1)},onCancel:()=>s(!1),onBGClick:()=>s(!1),children:t})]})}const m=o.div`
  margin: 16px;
  ${e=>e.theme.flex.row}
  flex-wrap: wrap;
  gap: 16px;
`,f={render:ie,args:{title:"Confirm Modal Title.",children:"This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",theme:"standard",confirmText:"Confirm",cancelText:"Cancel"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ConfirmModalStory,
  args: {
    title: "Confirm Modal Title.",
    children: "This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",
    theme: "standard",
    confirmText: "Confirm",
    cancelText: "Cancel"
  }
}`,...f.parameters?.docs?.source}}};const ye=["ConfirmModal"];export{f as ConfirmModal,ye as __namedExportsOrder,be as default};
