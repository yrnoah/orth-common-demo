import{r as u,j as n,l as r,d as z,m as h}from"./iframe-BY0Ds_wu.js";import{d as R,P as q}from"./Portal-CsufOtEp.js";import{c as A}from"./unstated-next-CmWiC140.js";import{u as F}from"./useCurrent-DG4O13e4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-1WFH_otD.js";import"./index-jXhlw_Vl.js";const d=400;function P(e={duration:d,initialStage:"none"}){const[t,a]=u.useState(e.initialStage),i=F(e.onStageChange);u.useEffect(()=>{if(t==="leaving"){const o=setTimeout(()=>{a("none")},e.duration);return()=>clearTimeout(o)}if(t==="entering"){const o=setTimeout(()=>{a(s=>s==="entering"?"entered":s)},e.duration);return()=>clearTimeout(o)}i.current&&i.current(t)},[t,i,e.duration]);const c=u.useCallback(o=>{if(typeof o=="function")return a(o);a(s=>s==="none"&&o==="leaving"?"none":o)},[]);return{animatingStage:t,onSetAnimatingStage:c}}const b=A(P),Y=b.Provider,v=b.useContainer,y=e=>{if(!e.children)throw new Error("Please set drawer content.");return n.jsx(Y,{initialState:{duration:e?.duration||d,initialStage:e.initialStage||"none",onStageChange:e.onStageChange},children:n.jsx(I,{...e})})},I=e=>{const{ref:t,size:a="max-content",children:i,wrapperStyles:c,duration:o,position:s="right",portalID:C=R}=e,{onSetAnimatingStage:m,animatingStage:l}=v(),k=l!=="none",g=s==="right"||s==="left",j=g?a:void 0,$=g?void 0:a,T=l==="entering"||l==="entered";return u.useImperativeHandle(t,()=>({open(){m("entering")},close(){m("leaving")},toggle(){let S=!1,w=l;switch(l){default:case"entering":case"entered":w="leaving";break;case"leaving":case"none":S=!0,w="entering";break}return m(w),S}}),[m,l]),!k||g&&!(a||c?.width)||!g&&!(a||c?.height)?null:n.jsx(q,{id:C,children:n.jsx(B,{style:{...c||{},width:j,height:$},position:s,duration:o||d,active:T,children:i})})},x=u.memo(y),N=h`
  0% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`,X=h`
  0% { transform: translateX(-100%) }
  100% { transform: translateX(0) }
`,_=h`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`,E=h`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`,B=z.div`
  position: fixed;
  overflow: hidden;
  transition: transform ${e=>e.duration}ms ease;
  box-shadow: 0 0 20px 0 #0000000d;

  ${({position:e,duration:t})=>{if(e==="right")return r`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${N} ${t}ms ease;
      `;if(e==="left")return r`
        top: 0;
        left: 0;
        bottom: 0;
        animation: ${X} ${t}ms ease;
      `;if(e==="top")return r`
        left: 0;
        right: 0;
        top: 0;
        animation: ${_} ${t}ms ease;
      `;if(e==="bottom")return r`
        left: 0;
        right: 0;
        bottom: 0;
        animation: ${E} ${t}ms ease;
      `}}

  ${({active:e})=>e?r`
        pointer-events: auto;
      `:r`
      pointer-events: none;
      animation: none;
    `}

  ${({active:e,position:t})=>{if(t==="right"&&e)return r`
        transform: translateX(0);
      `;if(t==="right"&&!e)return r`
        transform: translateX(100%);
      `;if(t==="left"&&e)return r`
        transform: translateX(0);
      `;if(t==="left"&&!e)return r`
        transform: translateX(-100%);
      `;if(t==="top"&&e)return r`
        transform: translateY(0);
      `;if(t==="top"&&!e)return r`
        transform: translateY(-100%);
      `;if(t==="bottom"&&e)return r`
        transform: translateY(0);
      `;if(t==="bottom"&&!e)return r`
        transform: translateY(100%);
      `}}
`;y.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<DrawerAPI>",elements:[{name:"signature",type:"object",raw:`{
  open: () => void;
  close: () => void;
  toggle: () => boolean;
}`,signature:{properties:[{key:"open",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"close",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"toggle",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}}]}}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`@description when position is right or left -> drawer width; when position is top or bottom -> drawer height
@default max-content`},wrapperStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description wrapper styles"},duration:{required:!1,tsType:{name:"number"},description:`@description millionSeconds duration for animation
@default 400`},initialStage:{required:!1,tsType:{name:"union",raw:`| "entering"
| "entered"
| "leaving"
// | "leaved"
| "none"`,elements:[{name:"literal",value:'"entering"'},{name:"literal",value:'"entered"'},{name:"literal",value:'"leaving"'},{name:"literal",value:'"none"'}]},description:`@default none
@value entered = default open`},onStageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(currentStage: AnimationStage) => void",signature:{arguments:[{type:{name:"union",raw:`| "entering"
| "entered"
| "leaving"
// | "leaved"
| "none"`,elements:[{name:"literal",value:'"entering"'},{name:"literal",value:'"entered"'},{name:"literal",value:'"leaving"'},{name:"literal",value:'"none"'}]},name:"currentStage"}],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"@default right"},portalID:{required:!1,tsType:{name:"string"},description:'@default "orthogonal-drawer"'}}};const U={title:"PAAS/Drawer",tags:["autodocs"],component:x};function D({...e}){const t=u.useRef(null),a=Number.isNaN(parseFloat(`${e.size}`))?e.size:parseFloat(`${e.size}`);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginLeft:"45%",marginTop:"45%"},children:[n.jsx("button",{onClick:()=>t.current?.open(),children:"open"}),n.jsx("button",{onClick:()=>t.current?.close(),children:"close"}),n.jsx("button",{onClick:()=>t.current?.toggle(),children:"toggle"})]}),n.jsx(x,{...e,size:a,ref:t,children:e.children})]})}const p={render:D,args:{size:"max-content",wrapperStyles:{backgroundColor:"aliceblue"},duration:d,children:"content string"}},f={render:D,args:{size:300,position:"right",wrapperStyles:{backgroundColor:"aliceblue"},duration:d,initialStage:"entered",children:n.jsx(O,{})}};function O(){const e=v(),t=()=>e.onSetAnimatingStage("leaving");return n.jsxs("div",{style:{width:"100%",height:"100%",overflowY:"auto",padding:20,boxSizing:"border-box"},children:[n.jsx("button",{onClick:t,children:"close"}),n.jsx("p",{children:"text content"}),n.jsx("p",{children:"If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"}),n.jsx("p",{children:"text content"}),Array.from({length:20}).map((a,i)=>n.jsxs("p",{children:[i,": If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"]},i))]})}p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: DrawerStory,
  args: {
    size: "max-content",
    wrapperStyles: {
      backgroundColor: "aliceblue"
    },
    duration: animationStageDuration,
    children: "content string"
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const V=["Drawer","DrawerWidthContent"];export{p as Drawer,f as DrawerWidthContent,V as __namedExportsOrder,U as default};
