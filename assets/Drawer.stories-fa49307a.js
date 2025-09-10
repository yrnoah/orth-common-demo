import{a,j as h,F as N}from"./jsx-runtime-a888423b.js";import{r as u}from"./index-8db94870.js";import{f as w,p as V,c as n}from"./styled-components.browser.esm-6dd904cc.js";import{P as T,d as j}from"./Portal-847ba74d.js";import{c as E}from"./unstated-next-d5bc192c.js";import{u as R}from"./useCurrent-3439251d.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./index-8ce4a492.js";const d=400;function B(e={duration:d,initialStage:"none"}){const[t,o]=u.useState(e.initialStage),r=R(e.onStageChange);u.useEffect(()=>{if(t==="leaving"){const i=setTimeout(()=>{o("none")},e.duration);return()=>clearTimeout(i)}if(t==="entering"){const i=setTimeout(()=>{o(l=>l==="entering"?"entered":l)},e.duration);return()=>clearTimeout(i)}r.current&&r.current(t)},[t,r,e.duration]);const s=u.useCallback(i=>{if(typeof i=="function")return o(i);o(l=>l==="none"&&i==="leaving"?"none":i)},[]);return{animatingStage:t,onSetAnimatingStage:s}}const z=E(B),O=z.Provider,_=z.useContainer,b=u.forwardRef((e,t)=>{if(!e.children)throw new Error("Please set drawer content.");return a(O,{initialState:{duration:(e==null?void 0:e.duration)||d,initialStage:e.initialStage||"none",onStageChange:e.onStageChange},children:a(W,{...e,ref:t})})}),W=u.forwardRef((e,t)=>{const{size:o="max-content",children:r,wrapperStyles:s,duration:i,position:l="right",portalID:Y=j}=e,{onSetAnimatingStage:m,animatingStage:c}=_(),I=c!=="none",g=l==="right"||l==="left",P=g?o:void 0,X=g?void 0:o,q=c==="entering"||c==="entered";return u.useImperativeHandle(t,()=>({open(){m("entering")},close(){m("leaving")},toggle(){let y=!1,S=c;switch(c){default:case"entering":case"entered":S="leaving";break;case"leaving":case"none":y=!0,S="entering";break}return m(S),y}}),[m,c]),!I||g&&!(o||s!=null&&s.width)||!g&&!(o||s!=null&&s.height)?null:a(T,{id:Y,children:a(K,{style:{...s||{},width:P,height:X},position:l,duration:i||d,active:q,children:r})})}),A=u.memo(b),H=w`
  0% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`,L=w`
  0% { transform: translateX(-100%) }
  100% { transform: translateX(0) }
`,G=w`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`,J=w`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`,K=V.div`
  position: fixed;
  overflow: hidden;
  transition: transform ${e=>e.duration}ms ease;
  box-shadow: 0 0 20px 0 #0000000d;

  ${({position:e,duration:t})=>{if(e==="right")return n`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${H} ${t}ms ease;
      `;if(e==="left")return n`
        top: 0;
        left: 0;
        bottom: 0;
        animation: ${L} ${t}ms ease;
      `;if(e==="top")return n`
        left: 0;
        right: 0;
        top: 0;
        animation: ${G} ${t}ms ease;
      `;if(e==="bottom")return n`
        left: 0;
        right: 0;
        bottom: 0;
        animation: ${J} ${t}ms ease;
      `}}

  ${({active:e})=>e?n`
        pointer-events: auto;
      `:n`
      pointer-events: none;
      animation: none;
    `}

  ${({active:e,position:t})=>{if(t==="right"&&e)return n`
        transform: translateX(0);
      `;if(t==="right"&&!e)return n`
        transform: translateX(100%);
      `;if(t==="left"&&e)return n`
        transform: translateX(0);
      `;if(t==="left"&&!e)return n`
        transform: translateX(-100%);
      `;if(t==="top"&&e)return n`
        transform: translateY(0);
      `;if(t==="top"&&!e)return n`
        transform: translateY(-100%);
      `;if(t==="bottom"&&e)return n`
        transform: translateY(0);
      `;if(t==="bottom"&&!e)return n`
        transform: translateY(100%);
      `}}
`;try{b.displayName="Drawer",b.__docgenInfo={description:"",displayName:"Drawer",props:{size:{defaultValue:{value:"max-content"},description:"@description when position is right or left -> drawer width; when position is top or bottom -> drawer height",name:"size",required:!0,type:{name:"string | number"}},wrapperStyles:{defaultValue:null,description:"@description wrapper styles",name:"wrapperStyles",required:!1,type:{name:"CSSProperties"}},duration:{defaultValue:{value:"400"},description:"@description millionSeconds duration for animation",name:"duration",required:!1,type:{name:"number"}},initialStage:{defaultValue:{value:"none"},description:"@value entered = default open",name:"initialStage",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"entering"'},{value:'"entered"'},{value:'"leaving"'}]}},onStageChange:{defaultValue:null,description:"",name:"onStageChange",required:!1,type:{name:"(currentStage: AnimationStage) => void"}},position:{defaultValue:{value:"right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},portalID:{defaultValue:{value:'"orthogonal-drawer"'},description:"",name:"portalID",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"PAAS/Drawer",tags:["autodocs"],component:A};function F({...e}){const t=u.useRef(null),o=Number.isNaN(parseFloat(`${e.size}`))?e.size:parseFloat(`${e.size}`);return h(N,{children:[h("div",{style:{marginLeft:"45%",marginTop:"45%"},children:[a("button",{onClick:()=>{var r;return(r=t.current)==null?void 0:r.open()},children:"open"}),a("button",{onClick:()=>{var r;return(r=t.current)==null?void 0:r.close()},children:"close"}),a("button",{onClick:()=>{var r;return(r=t.current)==null?void 0:r.toggle()},children:"toggle"})]}),a(A,{...e,size:o,ref:t,children:e.children})]})}const f={render:F,args:{size:"max-content",wrapperStyles:{backgroundColor:"aliceblue"},duration:d,children:"content string"}},p={render:F,args:{size:300,position:"right",wrapperStyles:{backgroundColor:"aliceblue"},duration:d,initialStage:"entered",children:a(M,{})}};function M(){const e=_();return h("div",{style:{width:"100%",height:"100%",overflowY:"auto",padding:20,boxSizing:"border-box"},children:[a("button",{onClick:()=>e.onSetAnimatingStage("leaving"),children:"close"}),a("p",{children:"text content"}),a("p",{children:"If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"}),a("p",{children:"text content"}),Array.from({length:20}).map((o,r)=>h("p",{children:[r,": If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"]},r))]})}var v,D,C;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DrawerStory,
  args: {
    size: "max-content",
    wrapperStyles: {
      backgroundColor: "aliceblue"
    },
    duration: animationStageDuration,
    children: "content string"
  }
}`,...(C=(D=f.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var k,x,$;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    //   console.info("drawer currentStage===", currentStage),
  }
}`,...($=(x=p.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const se=["Drawer","DrawerWidthContent"];export{f as Drawer,p as DrawerWidthContent,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=Drawer.stories-fa49307a.js.map
