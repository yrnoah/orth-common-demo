import{j as n}from"./jsx-runtime-94f6e698.js";import{r as l,R as S}from"./index-8db94870.js";import{f as z,p as c,t as L,c as q}from"./styled-components.browser.esm-655d472d.js";import{P as H,m as J}from"./Portal-2b207d51.js";import{C as X}from"./Checkbox-3671d46d.js";import{u as Y}from"./useCurrent-3439251d.js";import{I}from"./IconWarning-75f2a4c4.js";import{I as Q,D as U}from"./IconError-5cebbfa8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./colors-448bfa34.js";import"./IconChecked-147cf933.js";const G=200;function _({open:e,children:o,onBGClick:t,disableBG:r,portalID:a=J,duration:d=G,style:p,backgroundColor:i,backgroundStyle:u}){const s=l.useRef(null),{_open:m,enter:x,leave:f}=K(!!e,d,s.current);return!m||!o?null:n.jsx(H,{id:a,children:n.jsxs(w,{ref:s,enter:x,leave:f,duration:d,style:p,children:[!r&&n.jsx(M,{enter:x,leave:f,onClick:t,duration:d,style:u,backgroundColor:i}),Z(o,{enter:x,leave:f})]})})}const Z=(e,o)=>!e||!o||!S.isValidElement(e)?e:e instanceof Array?e.map(t=>S.cloneElement(t,o)):S.cloneElement(e,o);function K(e,o=G,t){const[r,a]=l.useState(e),[d,p]=l.useState(!1),[i,u]=l.useState(!1);return l.useEffect(()=>{e&&a(!0)},[e]),l.useEffect(()=>{r&&!e&&u(!0)},[e,r]),l.useEffect(()=>{r&&p(!0),r||p(!1)},[r]),l.useEffect(()=>{if(i)if(t)Promise.all(t.getAnimations({subtree:!0}).map(s=>s.finished)).then(()=>{a(!1),u(!1)});else{const s=window.setTimeout(()=>{a(!1),u(!1)},o);return()=>clearTimeout(s)}},[i,t,o]),l.useEffect(()=>()=>{u(!1),a(!1)},[]),{enter:d,leave:i,_open:r}}function ee(e){return e.leave?"transparent":e.enter?e.backgroundColor||"rgba(0, 0, 0, 0.15)":"transparent"}function ne(e){return e.leave?0:e.enter?1:0}const oe=z`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,w=c.div`
  ${e=>e.theme.fixedFill}
  z-index: ${e=>e.theme.zIndexes.modal};
  ${e=>e.theme.flexCSS.column}
  ${e=>e.theme.flexCSS.center}
  opacity: ${e=>ne(e)};
  animation: ${e=>e.duration}ms ${oe} ease;
  transition: opacity ${e=>e.duration}ms ease;
`,M=c.div`
  ${e=>e.theme.absoluteFillCSS}
  background-color: ${e=>ee(e)};
  transition: background-color ${e=>e.duration}ms ease;
  touch-action: none;
`;try{_.displayName="Modal",_.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},onBGClick:{defaultValue:null,description:"click function on click background layer",name:"onBGClick",required:!1,type:{name:"(() => void)"}},disableBG:{defaultValue:{value:"false"},description:"cancel background layer",name:"disableBG",required:!1,type:{name:"boolean"}},portalID:{defaultValue:{value:"orthogonal-modals"},description:"which root div will be considered as modal's parent",name:"portalID",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"200"},description:`display & dismiss animation duration
@unit million seconds`,name:"duration",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},backgroundStyle:{defaultValue:null,description:"",name:"backgroundStyle",required:!1,type:{name:"CSSProperties"}},backgroundColor:{defaultValue:null,description:"replace default bg color (rgba(0, 0, 0, 0.4))",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}try{w.displayName="ModalWrapper",w.__docgenInfo={description:"",displayName:"ModalWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="ModalBG",M.__docgenInfo={description:"",displayName:"ModalBG",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function h({open:e,title:o,children:t,icon:r,theme:a="standard",confirmText:d="Confirm",cancelText:p="Cancel",onConfirm:i,onCancel:u,onBGClick:s,backgroundStyle:m,displayOnceText:x="Don’t show again",displayOnceStorageKey:f,...O}){const g=Y(i),{colors:k}=L(),[$,N]=l.useState(!1),j=!!f&&!!localStorage.getItem(f),A=e&&!j;l.useEffect(()=>{var V;e&&j&&((V=g.current)==null||V.call(g))},[e,j,g]);const v=()=>!!f&&$&&localStorage.setItem(f,"true"),F=()=>{v(),i==null||i()},P=()=>{v(),u==null||u()},W=()=>{v(),s==null||s()},T=typeof r=="string"?{info:n.jsx(I,{color:k.brandColor.Primary6}),warning:n.jsx(I,{color:k.baseColor.Volcano5}),error:n.jsx(Q,{color:k.baseColor.Red5})}[r]:r;return n.jsx(_,{open:A,onBGClick:W,backgroundStyle:m,children:n.jsxs(me,{...O,children:[n.jsxs(se,{children:[!!T&&n.jsx(te,{children:T}),n.jsxs(le,{children:[n.jsx(re,{children:o}),n.jsx(ae,{children:t})]})]}),n.jsxs(ue,{children:[n.jsx(ce,{children:!!f&&n.jsxs(ie,{children:[n.jsx(X,{size:20,checked:$,onChange:()=>N(!$)}),x]})}),n.jsxs(de,{children:[n.jsx(E,{onClick:P,children:p}),n.jsx(E,{onClick:F,$type:a,children:d})]})]})]})})}const b=c.div`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
`,te=c.div`
  margin-right: 16px;

  svg {
    width: 24px;
    height: 24px;
  }
`,re=c.div`
  ${e=>e.theme.fonts["H4/Bold"]};
  color: ${e=>e.theme.colors.noColor.Grey14};
`,ae=c.div`
  margin-top: 8px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]};
  color: ${e=>e.theme.colors.noColor.Grey8};
`,le=c.div`
  flex: 1;
  ${e=>e.theme.flex.column}
  gap: 8px;
`,ie=c(b)`
  gap: 8px;
`,E=c.button`
  outline: none;
  margin: 0;
  user-select: none;
  flex-shrink: 0;
  height: 32px;
  padding: 0 12px;
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  gap: 12px;
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.noColor.Grey11};
  background: transparent;
  border-radius: ${e=>e.theme.radius.xs}px;
  border: 1px solid ${e=>e.theme.colors.noColor.Grey11};
  transition: all 100ms linear;

  &:hover {
    cursor: pointer;
    background: ${e=>e.theme.colors.button.hovered};
  }

  ${e=>{switch(e.$type){case"standard":return q`
          background: ${o=>o.theme.colors.priButton.default};
          border: 1px solid ${o=>o.theme.colors.priButton.default};
          color: ${o=>o.theme.colors.brandColor.Primary8};

          &:hover {
            cursor: pointer;
            background: ${o=>o.theme.colors.priButton.hovered};
            border: 1px solid ${o=>o.theme.colors.priButton.hovered};
          }
        `;case"dangerous":return q`
          background: ${o=>o.theme.colors.baseColor.Red2};
          border: 1px solid ${o=>o.theme.colors.baseColor.Red2};
          color: ${o=>o.theme.colors.baseColor.Red6};

          &:hover {
            cursor: pointer;
            background: ${o=>o.theme.colors.baseColor.Red3};
            border: 1px solid ${o=>o.theme.colors.baseColor.Red3};
          }
        `}}}
`,se=c.div`
  padding: 24px;
  ${e=>e.theme.flex.row}
  justify-content: space-between;
`,ce=c(b)`
  gap: 8px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  color:${e=>e.theme.colors.noColor.Grey14};
`,de=c(b)`
  justify-content: flex-end;
  gap: 8px;
`,ue=c(b)`
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
`,me=c.div`
  width: 400px;
  padding: ${e=>e.theme.padding.xxxxs}px;
  ${e=>e.theme.flex.column}
  gap: ${e=>e.theme.padding.xxxxs}px;
  z-index: ${e=>e.theme.zIndexes.modal};
  border-radius: ${e=>e.theme.radius.l}px;
  background: #fff;
  box-shadow: ${e=>e.theme.colors.hardShadow};
`;try{h.displayName="ConfirmModal",h.__docgenInfo={description:"",displayName:"ConfirmModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title of the modal.",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description content/subtitle of the modal.",name:"children",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"@description replaces the icon",name:"icon",required:!1,type:{name:'ReactElement<SVGSVGElement, string | JSXElementConstructor<any>> | "info" | "warning" | "error"'}},theme:{defaultValue:{value:"standard"},description:"@description modal theme.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"dangerous"'}]}},confirmText:{defaultValue:{value:"Confirm"},description:"@description confirm button text.",name:"confirmText",required:!1,type:{name:"ReactNode"}},cancelText:{defaultValue:{value:"Cancel"},description:"@description cancel button text.",name:"cancelText",required:!1,type:{name:"ReactNode"}},onConfirm:{defaultValue:null,description:"@description click function on click confirm button.",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"@description click function on click cancel button.",name:"onCancel",required:!1,type:{name:"(() => void)"}},onBGClick:{defaultValue:null,description:"@description click function on click background layer.",name:"onBGClick",required:!1,type:{name:"(() => void)"}},backgroundStyle:{defaultValue:null,description:"@description background layer style",name:"backgroundStyle",required:!1,type:{name:"CSSProperties"}},displayOnceText:{defaultValue:{value:"Don’t show again"},description:"@description display once checkbox text.",name:"displayOnceText",required:!1,type:{name:"ReactNode"}},displayOnceStorageKey:{defaultValue:null,description:`@description unique display once storage key.
@example "coSimulationHistoryDeleteDisplayOnce".`,name:"displayOnceStorageKey",required:!1,type:{name:"string"}}}}}catch{}const Me={title:"ODE Library/Modal/ConfirmModal",tags:["autodocs"],component:h,argTypes:{title:{description:"title of the modal",control:"string"},children:{description:"content/subtitle of the modal",control:"select"},icon:{control:"select",options:["info","warning","error"]},theme:{control:"radio",options:["standard","dangerous"]}}};function fe({...e}){const{title:o,children:t,open:r=!1}=e,[a,d]=l.useState(r),[p,i]=l.useState(!1),[u,s]=l.useState(!1);return l.useEffect(()=>{d(r)},[r]),n.jsxs(n.Fragment,{children:[n.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7844-3502&t=8kjub6QccXJCSCJx-1",rel:"noreferrer",children:"design reference"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("h4",{children:"- Default Confirm Modal"}),n.jsxs(y,{children:[n.jsx("button",{onClick:()=>d(!0),children:"Open Confirm Modal"}),n.jsx(h,{...e,open:a,title:o,onConfirm:()=>{console.info("default confirmed."),d(!1)},onCancel:()=>d(!1),onBGClick:()=>d(!1),children:t})]}),n.jsx("h4",{children:"- Theme"}),n.jsx(y,{children:["standard","dangerous"].map(m=>l.createElement(pe,{...e,theme:m,key:m},t))}),n.jsx("h4",{children:"- Icon"}),n.jsxs(y,{children:[["info","warning","error"].map(m=>l.createElement(he,{...e,icon:m,key:m},t)),n.jsx("button",{onClick:()=>i(!0),children:"Custom Icon"}),n.jsx(h,{...e,open:p,title:o,onConfirm:()=>{console.info("custom icon confirmed."),i(!1)},onCancel:()=>i(!1),onBGClick:()=>i(!1),icon:n.jsx(U,{}),children:t})]}),n.jsx("h4",{children:"- Allow don't show again"}),n.jsxs(y,{children:[n.jsx("button",{onClick:()=>s(!0),children:"Open Modal with Don't Show Again"}),n.jsx("button",{onClick:()=>localStorage.removeItem("testModalDisplayOnce"),children:"Clear State"}),n.jsx(h,{...e,open:u,title:o,onConfirm:()=>{console.info("dont show again confirmed."),s(!1)},onCancel:()=>s(!1),onBGClick:()=>s(!1),displayOnceStorageKey:"testModalDisplayOnce",children:t})]})]})}function pe({...e}){const{children:o,theme:t}=e,[r,a]=l.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>a(!0),children:t}),n.jsx(h,{open:r,title:`This is a ${t} modal title.`,onConfirm:()=>{console.info(`${t} confirmed.`),a(!1)},onCancel:()=>a(!1),onBGClick:()=>a(!1),theme:t,children:o})]})}function he({...e}){const{children:o,icon:t}=e,[r,a]=l.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>a(!0),children:t}),n.jsx(h,{open:r,title:`This is a ${t} modal title.`,onConfirm:()=>{console.info(`${t} confirmed.`),a(!1)},onCancel:()=>a(!1),onBGClick:()=>a(!1),icon:t,children:o})]})}const y=c.div`
  margin: 16px;
  ${e=>e.theme.flex.row}
  flex-wrap: wrap;
  gap: 16px;
`,C={render:fe,args:{title:"Confirm Modal Title.",children:"This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",theme:"standard",confirmText:"Confirm",cancelText:"Cancel"}};var B,R,D;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ConfirmModalStory,
  args: {
    title: "Confirm Modal Title.",
    children: "This is a confirm modal content.This is a confirm modal content.This is a confirm modal content.",
    theme: "standard",
    confirmText: "Confirm",
    cancelText: "Cancel"
  }
}`,...(D=(R=C.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const Te=["ConfirmModal"];export{C as ConfirmModal,Te as __namedExportsOrder,Me as default};
//# sourceMappingURL=ConfirmModal.stories-eacd248b.js.map
