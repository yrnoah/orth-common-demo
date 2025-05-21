import{j as n}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{t as X,p as o,c as V}from"./styled-components.browser.esm-655d472d.js";import{M as A}from"./Modal-91c75e7b.js";import{C as K}from"./Checkbox-eaf429d9.js";import{u as U}from"./useCurrent-3439251d.js";import{I as Q,a as D,b as Y,D as $}from"./IconTriangleRemindFill-fe005277.js";import{I as Z}from"./IconClose-bc396367.js";import"./_commonjsHelpers-042e6b4d.js";import"./Portal-01fdeda0.js";import"./index-8ce4a492.js";import"./colors-e320fa4b.js";import"./IconChecked-147cf933.js";function f({open:e,title:t,children:r,icon:a,confirmIcon:i,cancelIcon:c,theme:l="standard",confirmText:I="Confirm",cancelText:B="Cancel",onConfirm:x,onCancel:g,onBGClick:C,disableConfirm:F,backgroundStyle:N,displayOnceText:R="Don’t show again",displayOnceStorageKey:u,headerStyle:O,contentStyle:_,footerStyle:H,showCloseButton:me,...P}){const y=U(x),{colors:h}=X(),[j,G]=s.useState(!1),S=!!u&&!!localStorage.getItem(u),z=e&&!S;s.useEffect(()=>{var v;e&&S&&((v=y.current)==null||v.call(y))},[e,S,y]);const k=()=>!!u&&j&&localStorage.setItem(u,"true"),J=()=>{k(),x==null||x()},L=()=>{k(),g==null||g()},W=()=>{k(),C==null||C()},w=typeof a=="string"?{info:n.jsx(Q,{color:h.elementsHintPlain}),warning:n.jsx(D,{color:h.elementsHintWarning}),error:n.jsx(Y,{color:h.elementsHintDanger}),dangerous:n.jsx(D,{color:h.elementsHintDanger})}[a]:a;return n.jsx(A,{open:z,onBGClick:W,backgroundStyle:{background:h.filterShade200,backdropFilter:"blur(2px)",...N},children:n.jsxs(se,{...P,children:[n.jsxs(ae,{style:O,children:[n.jsxs(ne,{children:[!!w&&n.jsx(ee,{children:w}),n.jsx("span",{children:t})]}),n.jsx(oe,{onClick:g,children:n.jsx(Z,{})})]}),n.jsx(te,{style:_,children:r}),n.jsxs(ce,{style:H,children:[n.jsx(le,{children:!!u&&n.jsxs(re,{children:[n.jsx(K,{size:14,checked:j,onChange:()=>G(!j)}),R]})}),n.jsxs(ie,{children:[n.jsxs(M,{onClick:L,children:[c,n.jsx("span",{children:B})]}),n.jsxs(M,{onClick:J,$type:l,disabled:F,children:[i,n.jsx("span",{children:I})]})]})]})]})})}const p=o.div`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
`,ee=o.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 16px;
  background: ${e=>e.theme.colors.container300};

  svg {
    width: 100%;
    height: 100%;
  }
`,ne=o(p)`
  ${e=>e.theme.fonts["Document-Sheet/H3"]};
  gap: 16px;
`,te=o.div`
  ${e=>e.theme.fonts["Document-Sheet/Paragraph"]};
  padding: 28px 8px;
`,oe=o.div`
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
`,re=o(p)`
  gap: 4px;
  ${e=>e.theme.fonts.Compact}
  color: ${e=>e.theme.colors.elementsContentSub};
`,M=o.button`
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

  ${e=>{switch(e.$type){case"standard":return V`
          background: ${t=>t.theme.colors.accentPrimaryEnabled};
          border: 1px solid ${t=>t.theme.colors.accentPrimaryEnabled};
          color: ${t=>t.theme.colors.textContrast600};

          &:hover {
            background: ${t=>t.theme.colors.accentPrimaryHovered};
            border: 1px solid ${t=>t.theme.colors.accentPrimaryHovered};
          }
        `;case"dangerous":return V`
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
`,ae=o(p)`
  min-height: 40px;
  justify-content: space-between;
`,le=o(p)`
  gap: 8px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  color:${e=>e.theme.colors.noColor.Grey14};
`,ie=o(p)`
  justify-content: flex-end;
  gap: 8px;
`,ce=o(p)`
  justify-content: space-between;
  align-items: center;
`,se=o.div`
  width: 400px;
  padding: 16px;
  ${e=>e.theme.flex.column}
  gap: 16px;
  z-index: ${e=>e.theme.zIndexes.modal};
  border-radius: 16px;
  background: ${e=>e.theme.colors.container100};
  box-shadow: ${e=>e.theme.colors.shadowPop};
  color: ${e=>e.theme.colors.elementsContentMain};
`;try{f.displayName="ConfirmModal",f.__docgenInfo={description:"",displayName:"ConfirmModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title of the modal.",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description content/subtitle of the modal.",name:"children",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"@description replaces the icon",name:"icon",required:!1,type:{name:'ReactElement<SVGSVGElement, string | JSXElementConstructor<any>> | "info" | "warning" | "error" | "dangerous"'}},confirmIcon:{defaultValue:null,description:"@description confirm button icon",name:"confirmIcon",required:!1,type:{name:"ReactElement<SVGSVGElement, string | JSXElementConstructor<any>>"}},cancelIcon:{defaultValue:null,description:"@description cancel button icon",name:"cancelIcon",required:!1,type:{name:"ReactElement<SVGSVGElement, string | JSXElementConstructor<any>>"}},theme:{defaultValue:{value:"standard"},description:"@description modal theme.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dangerous"'},{value:'"standard"'}]}},confirmText:{defaultValue:{value:"Confirm"},description:"@description confirm button text.",name:"confirmText",required:!1,type:{name:"ReactNode"}},cancelText:{defaultValue:{value:"Cancel"},description:"@description cancel button text.",name:"cancelText",required:!1,type:{name:"ReactNode"}},onConfirm:{defaultValue:null,description:"@description click function on click confirm button.",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"@description click function on click cancel button.",name:"onCancel",required:!1,type:{name:"(() => void)"}},onBGClick:{defaultValue:null,description:"@description click function on click background layer.",name:"onBGClick",required:!1,type:{name:"(() => void)"}},disableConfirm:{defaultValue:null,description:"@description disable confirm button.",name:"disableConfirm",required:!1,type:{name:"boolean"}},backgroundStyle:{defaultValue:null,description:"@description background layer style",name:"backgroundStyle",required:!1,type:{name:"CSSProperties"}},displayOnceText:{defaultValue:{value:"Don’t show again"},description:"@description display once checkbox text.",name:"displayOnceText",required:!1,type:{name:"ReactNode"}},displayOnceStorageKey:{defaultValue:null,description:`@description unique display once storage key.
@example "coSimulationHistoryDeleteDisplayOnce".`,name:"displayOnceStorageKey",required:!1,type:{name:"string"}},headerStyle:{defaultValue:null,description:"@description modal header wrapper style",name:"headerStyle",required:!1,type:{name:"CSSProperties"}},contentStyle:{defaultValue:null,description:"@description modal content wrapper style",name:"contentStyle",required:!1,type:{name:"CSSProperties"}},footerStyle:{defaultValue:null,description:"@description modal footer wrapper style",name:"footerStyle",required:!1,type:{name:"CSSProperties"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}}}}}catch{}const we={title:"ODE Library/Modal/ConfirmModal",tags:["autodocs"],component:f,argTypes:{title:{description:"title of the modal",control:"string"},children:{description:"content/subtitle of the modal",control:"select"},icon:{control:"select",options:["info","warning","error","dangerous"]},theme:{control:"radio",options:["standard","dangerous"]}}};function de({...e}){const{title:t,children:r,open:a=!1}=e,[i,c]=s.useState(a);return s.useEffect(()=>{c(a)},[a]),n.jsxs(n.Fragment,{children:[n.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1976-4372",rel:"noreferrer",children:"design reference"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("h4",{children:"- Default Confirm Modal"}),n.jsxs(m,{children:[n.jsx("button",{onClick:()=>c(!0),children:"Open Confirm Modal"}),n.jsx(f,{...e,open:i,title:t,onConfirm:()=>{console.info("default confirmed."),c(!1)},onCancel:()=>c(!1),onBGClick:()=>c(!1),children:r})]}),n.jsx("h4",{children:"- Theme"}),n.jsx(m,{children:["standard","dangerous"].map(l=>s.createElement(d,{exampleName:`${l} theme`,...e,theme:l,key:l},r))}),n.jsx("h4",{children:"- Icon"}),n.jsxs(m,{children:[["info","warning","error","dangerous"].map(l=>s.createElement(d,{exampleName:`${l} icon`,...e,icon:l,key:l},r)),n.jsx(d,{exampleName:"custom icon",...e,icon:n.jsx($,{})})]}),n.jsx("h4",{children:"- Button Icon"}),n.jsx(m,{children:n.jsx(d,{exampleName:"Button icon",...e,confirmIcon:n.jsx($,{}),cancelIcon:n.jsx($,{})})}),n.jsx("h4",{children:"- Display Once"}),n.jsxs(m,{children:[n.jsx(d,{exampleName:"display once",...e,displayOnceStorageKey:"testModalDisplayOnce",children:r}),n.jsx("button",{onClick:()=>localStorage.removeItem("testModalDisplayOnce"),children:"clear state"})]}),n.jsx("h4",{children:"- Disable Confirm Button"}),n.jsx(m,{children:n.jsx(d,{exampleName:"disable confirm button",...e,disableConfirm:!0,children:r})})]})}function d({...e}){const{children:t,exampleName:r}=e,[a,i]=s.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>i(!0),children:r}),n.jsx(f,{...e,open:a,title:`This is a [${r}] modal title.`,onConfirm:()=>{console.info(`[${r}] confirmed.`),i(!1)},onCancel:()=>i(!1),onBGClick:()=>i(!1),children:t})]})}const m=o.div`
  margin: 16px;
  ${e=>e.theme.flex.row}
  flex-wrap: wrap;
  gap: 16px;
`,b={render:de,args:{title:"Confirm Modal Title.",children:"This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",theme:"standard",confirmText:"Confirm",cancelText:"Cancel"}};var T,q,E;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ConfirmModalStory,
  args: {
    title: "Confirm Modal Title.",
    children: "This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",
    theme: "standard",
    confirmText: "Confirm",
    cancelText: "Cancel"
  }
}`,...(E=(q=b.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const ve=["ConfirmModal"];export{b as ConfirmModal,ve as __namedExportsOrder,we as default};
//# sourceMappingURL=ConfirmModal.stories-20d20959.js.map
