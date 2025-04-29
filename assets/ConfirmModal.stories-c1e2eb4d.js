import{j as n}from"./jsx-runtime-94f6e698.js";import{r as a,R as V}from"./index-8db94870.js";import{f as Y,p as i,t as Z,c as I}from"./styled-components.browser.esm-655d472d.js";import{P as ee,m as ne}from"./Portal-01fdeda0.js";import{C as te}from"./Checkbox-b7f17791.js";import{u as oe}from"./useCurrent-3439251d.js";import{I as re,a as B,b as ae,D as _}from"./IconTriangleRemindFill-fe005277.js";import{I as le}from"./IconClose-bc396367.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./colors-918da2dc.js";import"./IconChecked-147cf933.js";const F=200;function q({open:e,children:t,onBGClick:o,disableBG:r,portalID:l=ne,duration:c=F,style:s,backgroundColor:m,backgroundStyle:u}){const d=a.useRef(null),{_open:f,enter:p,leave:g}=se(!!e,c,d.current);return!f||!t?null:n.jsx(ee,{id:l,children:n.jsxs(E,{ref:d,enter:p,leave:g,duration:c,style:s,children:[!r&&n.jsx(D,{enter:p,leave:g,onClick:o,duration:c,style:u,backgroundColor:m}),ie(t,{enter:p,leave:g})]})})}const ie=(e,t)=>!e||!t||!V.isValidElement(e)?e:e instanceof Array?e.map(o=>V.cloneElement(o,t)):V.cloneElement(e,t);function se(e,t=F,o){const[r,l]=a.useState(e),[c,s]=a.useState(!1),[m,u]=a.useState(!1);return a.useEffect(()=>{e&&l(!0)},[e]),a.useEffect(()=>{r&&!e&&u(!0)},[e,r]),a.useEffect(()=>{r&&s(!0),r||s(!1)},[r]),a.useEffect(()=>{if(m)if(o)Promise.all(o.getAnimations({subtree:!0}).map(d=>d.finished)).then(()=>{l(!1),u(!1)});else{const d=window.setTimeout(()=>{l(!1),u(!1)},t);return()=>clearTimeout(d)}},[m,o,t]),a.useEffect(()=>()=>{u(!1),l(!1)},[]),{enter:c,leave:m,_open:r}}function ce(e){return e.leave?"transparent":e.enter?e.backgroundColor||"rgba(0, 0, 0, 0.15)":"transparent"}function de(e){return e.leave?0:e.enter?1:0}const ue=Y`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,E=i.div`
  ${e=>e.theme.fixedFill}
  z-index: ${e=>e.theme.zIndexes.modal};
  ${e=>e.theme.flexCSS.column}
  ${e=>e.theme.flexCSS.center}
  opacity: ${e=>de(e)};
  animation: ${e=>e.duration}ms ${ue} ease;
  transition: opacity ${e=>e.duration}ms ease;
`,D=i.div`
  ${e=>e.theme.absoluteFillCSS}
  background-color: ${e=>ce(e)};
  transition: background-color ${e=>e.duration}ms ease;
  touch-action: none;
`;try{q.displayName="Modal",q.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},onBGClick:{defaultValue:null,description:"click function on click background layer",name:"onBGClick",required:!1,type:{name:"(() => void)"}},disableBG:{defaultValue:{value:"false"},description:"cancel background layer",name:"disableBG",required:!1,type:{name:"boolean"}},portalID:{defaultValue:{value:"orthogonal-modals"},description:"which root div will be considered as modal's parent",name:"portalID",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"200"},description:`display & dismiss animation duration
@unit million seconds`,name:"duration",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},backgroundStyle:{defaultValue:null,description:"",name:"backgroundStyle",required:!1,type:{name:"CSSProperties"}},backgroundColor:{defaultValue:null,description:"replace default bg color (rgba(0, 0, 0, 0.4))",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}try{E.displayName="ModalWrapper",E.__docgenInfo={description:"",displayName:"ModalWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="ModalBG",D.__docgenInfo={description:"",displayName:"ModalBG",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function S({open:e,title:t,children:o,icon:r,confirmIcon:l,cancelIcon:c,theme:s="standard",confirmText:m="Confirm",cancelText:u="Cancel",onConfirm:d,onCancel:f,onBGClick:p,disableConfirm:g,backgroundStyle:O,displayOnceText:H="Don’t show again",displayOnceStorageKey:b,headerStyle:W,contentStyle:A,footerStyle:z,showCloseButton:ke,...L}){const j=oe(d),{colors:C}=Z(),[$,J]=a.useState(!1),v=!!b&&!!localStorage.getItem(b),X=e&&!v;a.useEffect(()=>{var T;e&&v&&((T=j.current)==null||T.call(j))},[e,v,j]);const w=()=>!!b&&$&&localStorage.setItem(b,"true"),K=()=>{w(),d==null||d()},U=()=>{w(),f==null||f()},Q=()=>{w(),p==null||p()},M=typeof r=="string"?{info:n.jsx(re,{color:C.elementsHintPlain}),warning:n.jsx(B,{color:C.elementsHintWarning}),error:n.jsx(ae,{color:C.elementsHintDanger}),dangerous:n.jsx(B,{color:C.elementsHintDanger})}[r]:r;return n.jsx(q,{open:X,onBGClick:Q,backgroundStyle:{background:C.filterShade200,backdropFilter:"blur(2px)",...O},children:n.jsxs(Se,{...L,children:[n.jsxs(ye,{style:W,children:[n.jsxs(pe,{children:[!!M&&n.jsx(me,{children:M}),n.jsx("span",{children:t})]}),n.jsx(he,{onClick:f,children:n.jsx(le,{})})]}),n.jsx(fe,{style:A,children:o}),n.jsxs(Ce,{style:z,children:[n.jsx(ge,{children:!!b&&n.jsxs(xe,{children:[n.jsx(te,{size:14,checked:$,onChange:()=>J(!$)}),H]})}),n.jsxs(be,{children:[n.jsxs(N,{onClick:U,children:[c,n.jsx("span",{children:u})]}),n.jsxs(N,{onClick:K,$type:s,disabled:g,children:[l,n.jsx("span",{children:m})]})]})]})]})})}const y=i.div`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
`,me=i.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 16px;
  background: ${e=>e.theme.colors.container300};

  svg {
    width: 100%;
    height: 100%;
  }
`,pe=i(y)`
  ${e=>e.theme.fonts["Document-Sheet/H3"]};
  gap: 16px;
`,fe=i.div`
  ${e=>e.theme.fonts["Document-Sheet/Paragraph"]};
  padding: 28px 8px;
`,he=i.div`
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
`,xe=i(y)`
  gap: 4px;
  ${e=>e.theme.fonts.Compact}
  color: ${e=>e.theme.colors.elementsContentSub};
`,N=i.button`
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

  ${e=>{switch(e.$type){case"standard":return I`
          background: ${t=>t.theme.colors.accentPrimaryEnabled};
          border: 1px solid ${t=>t.theme.colors.accentPrimaryEnabled};
          color: ${t=>t.theme.colors.textContrast600};

          &:hover {
            background: ${t=>t.theme.colors.accentPrimaryHovered};
            border: 1px solid ${t=>t.theme.colors.accentPrimaryHovered};
          }
        `;case"dangerous":return I`
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
`,ye=i(y)`
  min-height: 40px;
  justify-content: space-between;
`,ge=i(y)`
  gap: 8px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  color:${e=>e.theme.colors.noColor.Grey14};
`,be=i(y)`
  justify-content: flex-end;
  gap: 8px;
`,Ce=i(y)`
  justify-content: space-between;
  align-items: center;
`,Se=i.div`
  width: 400px;
  padding: 16px;
  ${e=>e.theme.flex.column}
  gap: 16px;
  z-index: ${e=>e.theme.zIndexes.modal};
  border-radius: 16px;
  background: ${e=>e.theme.colors.container100};
  box-shadow: ${e=>e.theme.colors.shadowPop};
  color: ${e=>e.theme.colors.elementsContentMain};
`;try{S.displayName="ConfirmModal",S.__docgenInfo={description:"",displayName:"ConfirmModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title of the modal.",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description content/subtitle of the modal.",name:"children",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"@description replaces the icon",name:"icon",required:!1,type:{name:'ReactElement<SVGSVGElement, string | JSXElementConstructor<any>> | "info" | "warning" | "error" | "dangerous"'}},confirmIcon:{defaultValue:null,description:"@description confirm button icon",name:"confirmIcon",required:!1,type:{name:"ReactElement<SVGSVGElement, string | JSXElementConstructor<any>>"}},cancelIcon:{defaultValue:null,description:"@description cancel button icon",name:"cancelIcon",required:!1,type:{name:"ReactElement<SVGSVGElement, string | JSXElementConstructor<any>>"}},theme:{defaultValue:{value:"standard"},description:"@description modal theme.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dangerous"'},{value:'"standard"'}]}},confirmText:{defaultValue:{value:"Confirm"},description:"@description confirm button text.",name:"confirmText",required:!1,type:{name:"ReactNode"}},cancelText:{defaultValue:{value:"Cancel"},description:"@description cancel button text.",name:"cancelText",required:!1,type:{name:"ReactNode"}},onConfirm:{defaultValue:null,description:"@description click function on click confirm button.",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"@description click function on click cancel button.",name:"onCancel",required:!1,type:{name:"(() => void)"}},onBGClick:{defaultValue:null,description:"@description click function on click background layer.",name:"onBGClick",required:!1,type:{name:"(() => void)"}},disableConfirm:{defaultValue:null,description:"@description disable confirm button.",name:"disableConfirm",required:!1,type:{name:"boolean"}},backgroundStyle:{defaultValue:null,description:"@description background layer style",name:"backgroundStyle",required:!1,type:{name:"CSSProperties"}},displayOnceText:{defaultValue:{value:"Don’t show again"},description:"@description display once checkbox text.",name:"displayOnceText",required:!1,type:{name:"ReactNode"}},displayOnceStorageKey:{defaultValue:null,description:`@description unique display once storage key.
@example "coSimulationHistoryDeleteDisplayOnce".`,name:"displayOnceStorageKey",required:!1,type:{name:"string"}},headerStyle:{defaultValue:null,description:"@description modal header wrapper style",name:"headerStyle",required:!1,type:{name:"CSSProperties"}},contentStyle:{defaultValue:null,description:"@description modal content wrapper style",name:"contentStyle",required:!1,type:{name:"CSSProperties"}},footerStyle:{defaultValue:null,description:"@description modal footer wrapper style",name:"footerStyle",required:!1,type:{name:"CSSProperties"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}}}}}catch{}const Ne={title:"ODE Library/Modal/ConfirmModal",tags:["autodocs"],component:S,argTypes:{title:{description:"title of the modal",control:"string"},children:{description:"content/subtitle of the modal",control:"select"},icon:{control:"select",options:["info","warning","error","dangerous"]},theme:{control:"radio",options:["standard","dangerous"]}}};function je({...e}){const{title:t,children:o,open:r=!1}=e,[l,c]=a.useState(r);return a.useEffect(()=>{c(r)},[r]),n.jsxs(n.Fragment,{children:[n.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1976-4372",rel:"noreferrer",children:"design reference"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("h4",{children:"- Default Confirm Modal"}),n.jsxs(x,{children:[n.jsx("button",{onClick:()=>c(!0),children:"Open Confirm Modal"}),n.jsx(S,{...e,open:l,title:t,onConfirm:()=>{console.info("default confirmed."),c(!1)},onCancel:()=>c(!1),onBGClick:()=>c(!1),children:o})]}),n.jsx("h4",{children:"- Theme"}),n.jsx(x,{children:["standard","dangerous"].map(s=>a.createElement(h,{exampleName:`${s} theme`,...e,theme:s,key:s},o))}),n.jsx("h4",{children:"- Icon"}),n.jsxs(x,{children:[["info","warning","error","dangerous"].map(s=>a.createElement(h,{exampleName:`${s} icon`,...e,icon:s,key:s},o)),n.jsx(h,{exampleName:"custom icon",...e,icon:n.jsx(_,{})})]}),n.jsx("h4",{children:"- Button Icon"}),n.jsx(x,{children:n.jsx(h,{exampleName:"Button icon",...e,confirmIcon:n.jsx(_,{}),cancelIcon:n.jsx(_,{})})}),n.jsx("h4",{children:"- Display Once"}),n.jsxs(x,{children:[n.jsx(h,{exampleName:"display once",...e,displayOnceStorageKey:"testModalDisplayOnce",children:o}),n.jsx("button",{onClick:()=>localStorage.removeItem("testModalDisplayOnce"),children:"clear state"})]}),n.jsx("h4",{children:"- Disable Confirm Button"}),n.jsx(x,{children:n.jsx(h,{exampleName:"disable confirm button",...e,disableConfirm:!0,children:o})})]})}function h({...e}){const{children:t,exampleName:o}=e,[r,l]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>l(!0),children:o}),n.jsx(S,{...e,open:r,title:`This is a [${o}] modal title.`,onConfirm:()=>{console.info(`[${o}] confirmed.`),l(!1)},onCancel:()=>l(!1),onBGClick:()=>l(!1),children:t})]})}const x=i.div`
  margin: 16px;
  ${e=>e.theme.flex.row}
  flex-wrap: wrap;
  gap: 16px;
`,k={render:je,args:{title:"Confirm Modal Title.",children:"This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",theme:"standard",confirmText:"Confirm",cancelText:"Cancel"}};var R,G,P;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: ConfirmModalStory,
  args: {
    title: "Confirm Modal Title.",
    children: "This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",
    theme: "standard",
    confirmText: "Confirm",
    cancelText: "Cancel"
  }
}`,...(P=(G=k.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const Re=["ConfirmModal"];export{k as ConfirmModal,Re as __namedExportsOrder,Ne as default};
//# sourceMappingURL=ConfirmModal.stories-c1e2eb4d.js.map
