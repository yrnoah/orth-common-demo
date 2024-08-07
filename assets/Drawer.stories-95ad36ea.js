import{j as r}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{f as h,p as X,c as a}from"./styled-components.browser.esm-655d472d.js";import{u as q,P as N,d as V}from"./useCurrent-9b1a0363.js";import{c as T}from"./unstated-next-d5bc192c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const d=400;function E(e={duration:d,initialStage:"none"}){const[t,o]=u.useState(e.initialStage),n=q(e.onStageChange);u.useEffect(()=>{if(t==="leaving"){const i=setTimeout(()=>{o("none")},e.duration);return()=>clearTimeout(i)}if(t==="entering"){const i=setTimeout(()=>{o(l=>l==="entering"?"entered":l)},e.duration);return()=>clearTimeout(i)}n.current&&n.current(t)},[t,n,e.duration]);const s=u.useCallback(i=>{if(typeof i=="function")return o(i);o(l=>l==="none"&&i==="leaving"?"none":i)},[]);return{animatingStage:t,onSetAnimatingStage:s}}const k=T(E),R=k.Provider,$=k.useContainer,S=u.forwardRef((e,t)=>{if(!e.children)throw new Error("Please set drawer content.");return r.jsx(R,{initialState:{duration:(e==null?void 0:e.duration)||d,initialStage:e.initialStage||"none",onStageChange:e.onStageChange},children:r.jsx(B,{...e,ref:t})})}),B=u.forwardRef((e,t)=>{const{size:o="max-content",children:n,wrapperStyles:s,duration:i,position:l="right",portalID:A=V}=e,{onSetAnimatingStage:m,animatingStage:c}=$(),F=c!=="none",g=l==="right"||l==="left",Y=g?o:void 0,I=g?void 0:o,P=c==="entering"||c==="entered";return u.useImperativeHandle(t,()=>({open(){m("entering")},close(){m("leaving")},toggle(){let b=!1,w=c;switch(c){default:case"entering":case"entered":w="leaving";break;case"leaving":case"none":b=!0,w="entering";break}return m(w),b}}),[m,c]),!F||g&&!(o||s!=null&&s.width)||!g&&!(o||s!=null&&s.height)?null:r.jsx(N,{id:A,children:r.jsx(G,{style:{...s||{},width:Y,height:I},position:l,duration:i||d,active:P,children:n})})}),z=u.memo(S),O=h`
  0% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`,W=h`
  0% { transform: translateX(-100%) }
  100% { transform: translateX(0) }
`,H=h`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`,L=h`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`,G=X.div`
  position: fixed;
  overflow: hidden;
  transition: transform ${e=>e.duration}ms ease;
  box-shadow: 0 0 20px 0 #0000000d;

  ${({position:e,duration:t})=>{if(e==="right")return a`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${O} ${t}ms ease;
      `;if(e==="left")return a`
        top: 0;
        left: 0;
        bottom: 0;
        animation: ${W} ${t}ms ease;
      `;if(e==="top")return a`
        left: 0;
        right: 0;
        top: 0;
        animation: ${H} ${t}ms ease;
      `;if(e==="bottom")return a`
        left: 0;
        right: 0;
        bottom: 0;
        animation: ${L} ${t}ms ease;
      `}}

  ${({active:e})=>e?a`
        pointer-events: auto;
      `:a`
      pointer-events: none;
      animation: none;
    `}

  ${({active:e,position:t})=>{if(t==="right"&&e)return a`
        transform: translateX(0);
      `;if(t==="right"&&!e)return a`
        transform: translateX(100%);
      `;if(t==="left"&&e)return a`
        transform: translateX(0);
      `;if(t==="left"&&!e)return a`
        transform: translateX(-100%);
      `;if(t==="top"&&e)return a`
        transform: translateY(0);
      `;if(t==="top"&&!e)return a`
        transform: translateY(-100%);
      `;if(t==="bottom"&&e)return a`
        transform: translateY(0);
      `;if(t==="bottom"&&!e)return a`
        transform: translateY(100%);
      `}}
`;try{S.displayName="Drawer",S.__docgenInfo={description:"",displayName:"Drawer",props:{size:{defaultValue:{value:"max-content"},description:"@description when position is right or left -> drawer width; when position is top or bottom -> drawer height",name:"size",required:!0,type:{name:"string | number"}},wrapperStyles:{defaultValue:null,description:"@description wrapper styles",name:"wrapperStyles",required:!1,type:{name:"CSSProperties"}},duration:{defaultValue:{value:"400"},description:"@description millionSeconds duration for animation",name:"duration",required:!1,type:{name:"number"}},initialStage:{defaultValue:{value:"none"},description:"@value entered = default open",name:"initialStage",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"entering"'},{value:'"entered"'},{value:'"leaving"'}]}},onStageChange:{defaultValue:null,description:"",name:"onStageChange",required:!1,type:{name:"((currentStage: AnimationStage) => void)"}},position:{defaultValue:{value:"right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},portalID:{defaultValue:{value:'"orthogonal-drawer"'},description:"",name:"portalID",required:!1,type:{name:"string"}}}}}catch{}const re={title:"PAAS/Drawer",tags:["autodocs"],component:z};function _({...e}){const t=u.useRef(null),o=Number.isNaN(parseFloat(`${e.size}`))?e.size:parseFloat(`${e.size}`);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{marginLeft:"45%",marginTop:"45%"},children:[r.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.open()},children:"open"}),r.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.close()},children:"close"}),r.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.toggle()},children:"toggle"})]}),r.jsx(z,{...e,size:o,ref:t,children:e.children})]})}const f={render:_,args:{size:"max-content",wrapperStyles:{backgroundColor:"aliceblue"},duration:d,children:"content string"}},p={render:_,args:{size:300,position:"right",wrapperStyles:{backgroundColor:"aliceblue"},duration:d,initialStage:"entered",children:r.jsx(J,{})}};function J(){const e=$(),t=()=>e.onSetAnimatingStage("leaving");return r.jsxs("div",{style:{width:"100%",height:"100%",overflowY:"auto",padding:20,boxSizing:"border-box"},children:[r.jsx("button",{onClick:t,children:"close"}),r.jsx("p",{children:"text content"}),r.jsx("p",{children:"If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"}),r.jsx("p",{children:"text content"}),Array.from({length:20}).map((o,n)=>r.jsxs("p",{children:[n,": If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"]},n))]})}var x,y,v;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DrawerStory,
  args: {
    size: "max-content",
    wrapperStyles: {
      backgroundColor: "aliceblue"
    },
    duration: animationStageDuration,
    children: "content string"
  }
}`,...(v=(y=f.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var D,C,j;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DrawerStory,
  args: {
    size: 300,
    position: "right",
    wrapperStyles: {
      backgroundColor: "aliceblue"
    },
    duration: animationStageDuration,
    initialStage: "entered",
    children: <DrawerContent />
    /** @description storybook will auto output log with \`Actions\` */
    // onStageChange: (currentStage) =>
    //   console.log("drawer currentStage===", currentStage),
  }
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const ne=["Drawer","DrawerWidthContent"];export{f as Drawer,p as DrawerWidthContent,ne as __namedExportsOrder,re as default};
//# sourceMappingURL=Drawer.stories-95ad36ea.js.map
