import{a as n,j as o,F as E}from"./jsx-runtime-a888423b.js";import{r as s}from"./index-8db94870.js";import{p as J}from"./styled-components.browser.esm-7ed061eb.js";import{M as Q}from"./Modal-63b648b6.js";import{t as X,p as r,c as M}from"./styled-components.browser.esm-6dd904cc.js";import{C as Y}from"./Checkbox-6b7fc70a.js";import{u as Z}from"./useCurrent-3439251d.js";import{I as ee,a as R,b as ne,D as v}from"./IconTriangleRemindFill-435b8318.js";import{I as te}from"./IconClose-762831be.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./Portal-847ba74d.js";import"./index-8ce4a492.js";import"./colors-1c1355f0.js";import"./IconChecked-80c233fc.js";function g({open:e,title:t,children:a,icon:l,confirmIcon:c,cancelIcon:d,theme:i="standard",confirmText:F="Confirm",cancelText:N="Cancel",onConfirm:x,onCancel:y,onBGClick:k,disableConfirm:O,backgroundStyle:_,displayOnceText:H="Don’t show again",displayOnceStorageKey:h,headerStyle:P,contentStyle:G,footerStyle:j,showCloseButton:he,...z}){const b=Z(x),{colors:f}=X(),[$,L]=s.useState(!1),S=!!h&&!!localStorage.getItem(h),W=e&&!S;s.useEffect(()=>{var D;e&&S&&((D=b.current)==null||D.call(b))},[e,S,b]);const w=()=>!!h&&$&&localStorage.setItem(h,"true"),A=()=>{w(),x==null||x()},K=()=>{w(),y==null||y()},U=()=>{w(),k==null||k()},V=typeof l=="string"?{info:n(ee,{color:f.elementsHintPlain}),warning:n(R,{color:f.elementsHintWarning}),error:n(ne,{color:f.elementsHintDanger}),dangerous:n(R,{color:f.elementsHintDanger})}[l]:l;return n(Q,{open:W,onBGClick:U,backgroundStyle:{background:f.filterShade200,backdropFilter:"blur(2px)",..._},children:o(pe,{...z,children:[o(ce,{style:P,children:[o(re,{children:[!!V&&n(oe,{children:V}),n("span",{children:t})]}),n(le,{onClick:y,children:n(te,{})})]}),n(ae,{style:G,children:a}),o(me,{style:j,children:[n(de,{children:!!h&&o(ie,{children:[n(Y,{size:14,checked:$,onChange:()=>L(!$)}),H]})}),o(se,{children:[o(T,{onClick:K,children:[d,n("span",{children:N})]}),o(T,{onClick:A,$type:i,disabled:O,children:[c,n("span",{children:F})]})]})]})]})})}const u=r.div`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
`,oe=r.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 16px;
  background: ${e=>e.theme.colors.container300};

  svg {
    width: 100%;
    height: 100%;
  }
`,re=r(u)`
  ${e=>e.theme.fonts["Document-Sheet/H3"]};
  gap: 16px;
`,ae=r.div`
  ${e=>e.theme.fonts["Document-Sheet/Paragraph"]};
  padding: 28px 8px;
`,le=r.div`
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
`,ie=r(u)`
  gap: 4px;
  ${e=>e.theme.fonts.Compact}
  color: ${e=>e.theme.colors.elementsContentSub};
`,T=r.button`
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

  ${e=>{switch(e.$type){case"standard":return M`
          background: ${t=>t.theme.colors.accentPrimaryEnabled};
          border: 1px solid ${t=>t.theme.colors.accentPrimaryEnabled};
          color: ${t=>t.theme.colors.textContrast600};

          &:hover {
            background: ${t=>t.theme.colors.accentPrimaryHovered};
            border: 1px solid ${t=>t.theme.colors.accentPrimaryHovered};
          }
        `;case"dangerous":return M`
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
`,ce=r(u)`
  min-height: 40px;
  justify-content: space-between;
`,de=r(u)`
  gap: 8px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  color:${e=>e.theme.colors.noColor.Grey14};
`,se=r(u)`
  justify-content: flex-end;
  gap: 8px;
`,me=r(u)`
  justify-content: space-between;
  align-items: center;
`,pe=r.div`
  width: 400px;
  padding: 16px;
  ${e=>e.theme.flex.column}
  gap: 16px;
  z-index: ${e=>e.theme.zIndexes.modal};
  border-radius: 16px;
  background: ${e=>e.theme.colors.container100};
  box-shadow: ${e=>e.theme.colors.shadowPop};
  color: ${e=>e.theme.colors.elementsContentMain};
`;try{g.displayName="ConfirmModal",g.__docgenInfo={description:"",displayName:"ConfirmModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title of the modal.",name:"title",required:!0,type:{name:"React.ReactNode"}},children:{defaultValue:null,description:"@description content/subtitle of the modal.",name:"children",required:!1,type:{name:"React.ReactNode"}},icon:{defaultValue:null,description:"@description replaces the icon",name:"icon",required:!1,type:{name:"any"}},confirmIcon:{defaultValue:null,description:"@description confirm button icon",name:"confirmIcon",required:!1,type:{name:"React.ReactElement<SVGSVGElement>"}},cancelIcon:{defaultValue:null,description:"@description cancel button icon",name:"cancelIcon",required:!1,type:{name:"React.ReactElement<SVGSVGElement>"}},theme:{defaultValue:{value:"standard"},description:"@description modal theme.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dangerous"'},{value:'"standard"'}]}},confirmText:{defaultValue:{value:"Confirm"},description:"@description confirm button text.",name:"confirmText",required:!1,type:{name:"React.ReactNode"}},cancelText:{defaultValue:{value:"Cancel"},description:"@description cancel button text.",name:"cancelText",required:!1,type:{name:"React.ReactNode"}},onConfirm:{defaultValue:null,description:"@description click function on click confirm button.",name:"onConfirm",required:!1,type:{name:"() => void"}},onCancel:{defaultValue:null,description:"@description click function on click cancel button.",name:"onCancel",required:!1,type:{name:"() => void"}},onBGClick:{defaultValue:null,description:"@description click function on click background layer.",name:"onBGClick",required:!1,type:{name:"() => void"}},disableConfirm:{defaultValue:null,description:"@description disable confirm button.",name:"disableConfirm",required:!1,type:{name:"boolean"}},backgroundStyle:{defaultValue:null,description:"@description background layer style",name:"backgroundStyle",required:!1,type:{name:"React.CSSProperties"}},displayOnceText:{defaultValue:{value:"Don’t show again"},description:"@description display once checkbox text.",name:"displayOnceText",required:!1,type:{name:"React.ReactNode"}},displayOnceStorageKey:{defaultValue:null,description:`@description unique display once storage key.
@example "coSimulationHistoryDeleteDisplayOnce".`,name:"displayOnceStorageKey",required:!1,type:{name:"string"}},headerStyle:{defaultValue:null,description:"@description modal header wrapper style",name:"headerStyle",required:!1,type:{name:"React.CSSProperties"}},contentStyle:{defaultValue:null,description:"@description modal content wrapper style",name:"contentStyle",required:!1,type:{name:"React.CSSProperties"}},footerStyle:{defaultValue:null,description:"@description modal footer wrapper style",name:"footerStyle",required:!1,type:{name:"React.CSSProperties"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}}}}}catch{}const Te={title:"ODE Library/Modal/ConfirmModal",tags:["autodocs"],component:g,argTypes:{title:{description:"title of the modal",control:"string"},children:{description:"content/subtitle of the modal",control:"select"},icon:{control:"select",options:["info","warning","error","dangerous"]},theme:{control:"radio",options:["standard","dangerous"]}}};function ue({...e}){const{title:t,children:a,open:l=!1}=e,[c,d]=s.useState(l);return s.useEffect(()=>{d(l)},[l]),o(E,{children:[n("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1976-4372",rel:"noreferrer",children:"design reference"}),n("br",{}),n("br",{}),n("h4",{children:"- Default Confirm Modal"}),o(p,{children:[n("button",{onClick:()=>d(!0),children:"Open Confirm Modal"}),n(g,{...e,open:c,title:t,onConfirm:()=>{console.info("default confirmed."),d(!1)},onCancel:()=>d(!1),onBGClick:()=>d(!1),children:a})]}),n("h4",{children:"- Theme"}),n(p,{children:["standard","dangerous"].map(i=>s.createElement(m,{exampleName:`${i} theme`,...e,theme:i,key:i},a))}),n("h4",{children:"- Icon"}),o(p,{children:[["info","warning","error","dangerous"].map(i=>s.createElement(m,{exampleName:`${i} icon`,...e,icon:i,key:i},a)),n(m,{exampleName:"custom icon",...e,icon:n(v,{})})]}),n("h4",{children:"- Button Icon"}),n(p,{children:n(m,{exampleName:"Button icon",...e,confirmIcon:n(v,{}),cancelIcon:n(v,{})})}),n("h4",{children:"- Display Once"}),o(p,{children:[n(m,{exampleName:"display once",...e,displayOnceStorageKey:"testModalDisplayOnce",children:a}),n("button",{onClick:()=>localStorage.removeItem("testModalDisplayOnce"),children:"clear state"})]}),n("h4",{children:"- Disable Confirm Button"}),n(p,{children:n(m,{exampleName:"disable confirm button",...e,disableConfirm:!0,children:a})})]})}function m({...e}){const{children:t,exampleName:a}=e,[l,c]=s.useState(!1);return o(E,{children:[n("button",{onClick:()=>c(!0),children:a}),n(g,{...e,open:l,title:`This is a [${a}] modal title.`,onConfirm:()=>{console.info(`[${a}] confirmed.`),c(!1)},onCancel:()=>c(!1),onBGClick:()=>c(!1),children:t})]})}const p=J.div`
  margin: 16px;
  ${e=>e.theme.flex.row}
  flex-wrap: wrap;
  gap: 16px;
`,C={render:ue,args:{title:"Confirm Modal Title.",children:"This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",theme:"standard",confirmText:"Confirm",cancelText:"Cancel"}};var q,I,B;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ConfirmModalStory,
  args: {
    title: "Confirm Modal Title.",
    children: "This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",
    theme: "standard",
    confirmText: "Confirm",
    cancelText: "Cancel"
  }
}`,...(B=(I=C.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const qe=["ConfirmModal"];export{C as ConfirmModal,qe as __namedExportsOrder,Te as default};
//# sourceMappingURL=ConfirmModal.stories-31f45e2b.js.map
