import{j as o}from"./jsx-runtime-94f6e698.js";import{p as c,c as y,f as M}from"./styled-components.browser.esm-655d472d.js";import{r as d}from"./index-8db94870.js";import{P as E}from"./Portal-2b207d51.js";import{T as R}from"./TooltipPoint-976e1e10.js";import{n as C}from"./util-051783c3.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";var N=d.useState,k=function(e){var n=N(!1),r=n[0],t=n[1],a=function(f){return function(u){(f||C)(u),t(!0)}},l=function(f){return function(u){(f||C)(u),t(!1)}};typeof e=="function"&&(e=e(r));var h=d.cloneElement(e,{onMouseEnter:a(e.props.onMouseEnter),onMouseLeave:l(e.props.onMouseLeave)});return[h,r]};const F=k,G={top:{left:"50%",bottom:0,transform:"translate(-50%, 100%) rotate(0deg)"},bottom:{left:"50%",top:0,transform:"translate(-50%, -100%) rotate(180deg)"},right:{left:0,top:"50%",transform:"translate(-90%, -50%) rotate(90deg)"},left:{right:0,top:"50%",transform:"translate(90%, -50%) rotate(-90deg)"},"bottom-left":{left:"20%",top:0,transform:"translate(-50%, -100%) rotate(180deg)"},"bottom-right":{left:"80%",top:0,transform:"translate(-50%, -100%) rotate(180deg)"}},b=e=>{const{location:n="top",hasBubbleTail:r=!1,bubbleTailStyle:t}=e;return o.jsxs(Y,{style:e.style,children:[o.jsx(O,{children:e.children}),r&&o.jsx(J,{style:{...G[n],...t}})]})},Y=c.div`
  position: relative;
  ${e=>e.theme.fonts["Caption-Large/Regular"]}
  line-height: unset;
`,O=c.div`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 6px;
  user-select: none;
  white-space: nowrap;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
  ${e=>e.$theme==="light"?X:z}
`,z=y`
  background: ${e=>e.theme.colors.noColor.Ash13};
  color: #fff;
`,X=y`
  background: #fff;
  color: ${e=>e.theme.colors.noColor.Grey14};
`,J=c(R)`
  position: absolute;
  color: ${e=>e.theme.colors.noColor.Ash13};
  width: 5px;
  height: 4px;
`;try{b.displayName="Tooltip",b.__docgenInfo={description:"",displayName:"Tooltip",props:{location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},hasBubbleTail:{defaultValue:null,description:"",name:"hasBubbleTail",required:!1,type:{name:"boolean"}},bubbleTailStyle:{defaultValue:null,description:"",name:"bubbleTailStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const $={FAST:150},P="tooltip-container",S=({component:e,text:n,padding:r=12,alwaysShow:t,align:a="center",location:l="top",hide:h,wrapperStyle:f,tooltipProps:u,hasWrapperDiv:I,children:L,...j})=>{var q;const g=d.useRef(null),[v,m]=F(L({ref:g})),w=(q=g.current)==null?void 0:q.getBoundingClientRect(),[_,W]=d.useState(t),T=d.useRef();d.useEffect(()=>{if(!t)if(clearTimeout(T.current),m)W(!0);else return T.current=setTimeout(()=>{W(!1)},$.FAST),()=>{clearTimeout(T.current)}},[t,m]);const V=d.useMemo(()=>w?K(w,l,a,r):{},[a,l,r,w]);return!e&&!n?v:I?o.jsxs("div",{ref:g,style:{display:"flex",...f},children:[v,!h&&_&&o.jsx(E,{id:P,children:o.jsx(A,{style:V,$anim:t||m,children:e??o.jsx(b,{location:l,...u,...j,children:n})})})]}):o.jsxs(o.Fragment,{children:[v,!h&&_&&o.jsx(E,{id:P,children:o.jsx(A,{style:V,$anim:t||m,children:e??o.jsx(b,{hasBubbleTail:!0,location:l,...u,...j,children:n})})})]})},A=c.div`
  position: fixed;
  ${({$anim:e})=>e?y`
          animation: ${U} ${$.FAST}ms ease-in-out;
        `:y`
          animation: ${Z} ${$.FAST}ms ease-in-out;
        `};
  z-index: ${e=>e.theme.zIndexes.dropdownZIndex+1};
`,U=M`
  from { opacity: 0; }
  to { opacity: 1; }
`,Z=M`
  from { opacity: 1; }
  to { opacity: 0; }
`;function K(e,n,r,t){const a=window.innerWidth??document.body.clientWidth,l=window.innerHeight??document.body.clientHeight;switch(n){case"top":switch(r){case"start":return{left:e.x,top:e.y-t,transform:"translateY(-100%)"};case"center":return{left:e.x+e.width/2,top:e.y-t,transform:"translate(-50%, -100%)"};case"end":return{right:a-e.x-e.width,top:e.y-t,transform:"translateY(-100%)"};default:return{}}case"bottom":switch(r){case"start":return{left:e.x,top:e.y+e.height+t};case"center":return{left:e.x+e.width/2,transform:"translateX(-50%)",top:e.y+e.height+t};case"end":return{right:a-e.x-e.width,top:e.y+e.height+t};default:return{}}case"left":switch(r){case"start":return{right:a-e.x+t,top:e.y};case"center":return{right:a-e.x+t,transform:"translateY(-50%)",top:e.y+e.height/2};case"end":return{right:a-e.x+t,bottom:l-e.y-e.height};default:return{}}case"right":switch(r){case"start":return{left:e.x+e.width+t,top:e.y};case"center":return{left:e.x+e.width+t,transform:"translateY(-50%)",top:e.y+e.height/2};case"end":return{left:e.x+e.width+t,bottom:l-e.y-e.height};default:return{left:e.x+e.width+t,top:e.y}}}}try{S.displayName="TooltipWrapper",S.__docgenInfo={description:'Tooltip wrapper, provide default tooltip style, can be changed by prop "component"',displayName:"TooltipWrapper",props:{children:{defaultValue:null,description:"@property children - Children to be rendered",name:"children",required:!0,type:{name:"(props: { ref: RefObject<HTMLDivElement & SVGSVGElement & HTMLButtonElement>; }) => ReactElement<any, string | JSXElementConstructor<any>>"}},padding:{defaultValue:{value:"12"},description:"@property padding - Padding between the tooltip and children",name:"padding",required:!1,type:{name:"number"}},hide:{defaultValue:null,description:"@property hide - Hide the tooltip",name:"hide",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"@property align - Alignment of the tooltip",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},location:{defaultValue:{value:"top"},description:"@property location - Location of the tooltip",name:"location",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},alwaysShow:{defaultValue:null,description:"@property alwaysShow - DEBUG ONLY, Always show the tooltip",name:"alwaysShow",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"@property component - Component to be rendered",name:"component",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"@property text - Text to be rendered, will be overwrite if component is given",name:"text",required:!1,type:{name:"string"}},tooltipProps:{defaultValue:null,description:"@property tooltipProps - Props of the tooltip, will be overwrite if component is given",name:"tooltipProps",required:!1,type:{name:"TooltipProps"}},hasWrapperDiv:{defaultValue:null,description:"@property hasWrapperDiv - add a div as wrapper outside the children elements",name:"hasWrapperDiv",required:!1,type:{name:"boolean"}},wrapperStyle:{defaultValue:null,description:"@property wrapperStyle - Style of the tooltip wrapper div, affect the wrapper div if hasWrapperDiv is true",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ce={title:"PAAS/TooltipWrapper"},Q=["top","bottom","left","right"],ee=["start","center","end"],te=e=>o.jsx(oe,{children:Q.map((n,r)=>ee.map((t,a)=>o.jsx(S,{align:t,location:n,padding:10,text:`Tooltip ${n} ${t}`,alwaysShow:r===0&&a===0,children:({ref:l})=>re(l)[r][a]},n+t)))}),x=te.bind({}),s=88,p=32,oe=c.div`
  position: relative;
  ${e=>e.theme.flexCSS.row}
  flex-wrap: wrap;
  top: ${60}px;
  left: ${60}px;
  width: ${s*5}px;
  height: ${p*5}px;
  gap: 8px;
`,i=c.div`
  ${e=>e.top!==void 0?`top: ${e.top}px`:""};
  ${e=>e.bottom!==void 0?`bottom: ${e.bottom}px`:""};
  ${e=>e.left!==void 0?`left: ${e.left}px`:""};
  ${e=>e.right!==void 0?`right: ${e.right}px`:""};
  position: absolute;
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}
  width: ${s}px;
  height: ${p}px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
`,re=e=>[[o.jsx(i,{ref:e,left:s,top:0,children:"top start"},"ts"),o.jsx(i,{ref:e,left:s*2,top:0,children:"top center"},"tc"),o.jsx(i,{ref:e,left:s*3,top:0,children:"top end"},"te")],[o.jsx(i,{ref:e,left:s,top:p*4,children:"bottom start"},"bs"),o.jsx(i,{ref:e,left:s*2,top:p*4,children:"bottom center"},"bc"),o.jsx(i,{ref:e,left:s*3,top:p*4,children:"bottom end"},"be")],[o.jsx(i,{ref:e,left:0,top:p,children:"left start"},"ls"),o.jsx(i,{ref:e,left:0,top:p*2,children:"left center"},"lc"),o.jsx(i,{ref:e,left:0,top:p*3,children:"left end"},"le")],[o.jsx(i,{ref:e,left:s*4,top:p,children:"right start"},"rs"),o.jsx(i,{ref:e,left:s*4,top:p*2,children:"right center"},"rc"),o.jsx(i,{ref:e,left:s*4,top:p*3,children:"right end"},"re")]];var H,B,D;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Wrapper>
    {pos.map((position, i) => align.map((align, j) => <TooltipWrapper key={position + align} align={align} location={position} padding={10} text={\`Tooltip \${position} \${align}\`} alwaysShow={i === 0 && j === 0}>
          {({
      ref
    }) => divs(ref)[i][j]}
        </TooltipWrapper>))}
  </Wrapper>`,...(D=(B=x.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const fe=["Tooltip"];export{x as Tooltip,fe as __namedExportsOrder,ce as default};
//# sourceMappingURL=TooltipWrapper.stories-fe9dfb0d.js.map
