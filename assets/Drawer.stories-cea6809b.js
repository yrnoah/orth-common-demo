import{j as r}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{W as g,s as X,A as a}from"./styled-components.browser.esm-6007d051.js";import{P as N,d as T}from"./Portal-0c525ec8.js";import{c as q}from"./unstated-next-d5bc192c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const u=400;function E(e={duration:u}){const[t,i]=s.useState("none");s.useEffect(()=>{if(t==="leaving"){const n=setTimeout(()=>{i("none")},e.duration);return()=>clearTimeout(n)}if(t==="entering"){const n=setTimeout(()=>{i(l=>l==="entering"?"entered":l)},e.duration);return()=>clearTimeout(n)}},[t,e.duration]);const o=s.useCallback(n=>{if(typeof n=="function")return i(n);i(l=>l==="none"&&n==="leaving"?"none":n)},[]);return{animatingStage:t,onSetAnimatingStage:o}}const C=q(E),R=C.Provider,$=C.useContainer,b=s.forwardRef((e,t)=>{if(!e.children)throw new Error("Please set drawer content.");return r.jsx(R,{initialState:{duration:(e==null?void 0:e.duration)||u},children:r.jsx(V,{...e,ref:t})})}),V=s.forwardRef((e,t)=>{const{size:i="max-content",children:o,wrapperStyles:n,duration:l,position:h="right",portalID:A=T}=e,{onSetAnimatingStage:d,animatingStage:c}=$(),F=c!=="none",m=h==="right"||h==="left",Y=m?i:void 0,I=m?void 0:i,P=c==="entering"||c==="entered";return s.useImperativeHandle(t,()=>({open(){d("entering")},close(){d("leaving")},toggle(){let x=!1,w=c;switch(c){default:case"entering":case"entered":w="leaving";break;case"leaving":case"none":x=!0,w="entering";break}return d(w),x}}),[d,c]),!F||m&&!(i||n!=null&&n.width)||!m&&!(i||n!=null&&n.height)?null:r.jsx(N,{id:A,children:r.jsx(L,{style:{...n||{},width:Y,height:I},position:h,duration:l||u,active:P,children:o})})}),z=s.memo(b),W=g`
  0% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`,B=g`
  0% { transform: translateX(-100%) }
  100% { transform: translateX(0) }
`,O=g`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`,H=g`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`,L=X.div`
  position: fixed;
  overflow: hidden;
  transition: transform ${e=>e.duration}ms ease;
  box-shadow: 0 0 20px 0 #0000000d;

  ${({position:e,duration:t})=>{if(e==="right")return a`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${W} ${t}ms ease;
      `;if(e==="left")return a`
        top: 0;
        left: 0;
        bottom: 0;
        animation: ${B} ${t}ms ease;
      `;if(e==="top")return a`
        left: 0;
        right: 0;
        top: 0;
        animation: ${O} ${t}ms ease;
      `;if(e==="bottom")return a`
        left: 0;
        right: 0;
        bottom: 0;
        animation: ${H} ${t}ms ease;
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
`;try{b.displayName="Drawer",b.__docgenInfo={description:"",displayName:"Drawer",props:{size:{defaultValue:{value:"max-content"},description:"@description when position is right or left -> drawer width; when position is top or bottom -> drawer height",name:"size",required:!0,type:{name:"string | number"}},wrapperStyles:{defaultValue:null,description:"@description wrapper styles",name:"wrapperStyles",required:!1,type:{name:"CSSProperties"}},duration:{defaultValue:{value:"400"},description:"@description millionSeconds duration for animation",name:"duration",required:!1,type:{name:"number"}},position:{defaultValue:{value:"right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},portalID:{defaultValue:{value:'"orthogonal-drawer"'},description:"",name:"portalID",required:!1,type:{name:"string"}}}}}catch{}const te={title:"PAAS/Drawer",tags:["autodocs"],component:z};function _({...e}){const t=s.useRef(null),i=Number.isNaN(parseFloat(`${e.size}`))?e.size:parseFloat(`${e.size}`);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{marginLeft:"45%",marginTop:"45%"},children:[r.jsx("button",{onClick:()=>{var o;return(o=t.current)==null?void 0:o.open()},children:"open"}),r.jsx("button",{onClick:()=>{var o;return(o=t.current)==null?void 0:o.close()},children:"close"}),r.jsx("button",{onClick:()=>{var o;return(o=t.current)==null?void 0:o.toggle()},children:"toggle"})]}),r.jsx(z,{...e,size:i,ref:t,children:e.children})]})}const f={render:_,args:{size:"max-content",wrapperStyles:{backgroundColor:"aliceblue"},duration:u,children:"content string"}},p={render:_,args:{size:300,position:"right",wrapperStyles:{backgroundColor:"aliceblue"},duration:u,children:r.jsx(G,{})}};function G(){const e=$(),t=()=>e.onSetAnimatingStage("leaving");return r.jsxs("div",{style:{width:"100%",height:"100%",overflowY:"auto",padding:20,boxSizing:"border-box"},children:[r.jsx("button",{onClick:t,children:"close"}),r.jsx("p",{children:"text content"}),r.jsx("p",{children:"If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"}),r.jsx("p",{children:"text content"}),Array.from({length:20}).map((i,o)=>r.jsxs("p",{children:[o,": If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project. Note that some doc blocks render other blocks. For example, the block expands to:"]},o))]})}var y,S,D;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DrawerStory,
  args: {
    size: "max-content",
    wrapperStyles: {
      backgroundColor: "aliceblue"
    },
    duration: animationStageDuration,
    children: "content string"
  }
}`,...(D=(S=f.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var v,j,k;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DrawerStory,
  args: {
    size: 300,
    position: "right",
    wrapperStyles: {
      backgroundColor: "aliceblue"
    },
    duration: animationStageDuration,
    children: <DrawerContent />
  }
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const re=["Drawer","DrawerWidthContent"];export{f as Drawer,p as DrawerWidthContent,re as __namedExportsOrder,te as default};
//# sourceMappingURL=Drawer.stories-cea6809b.js.map
