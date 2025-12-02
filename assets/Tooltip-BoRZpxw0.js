import{r as m,n as P,j as h,d as c,l as d}from"./iframe-AucjWJ36.js";import{S as j}from"./TooltipPoint-DGS_NNig.js";const r=t=>l=>Math.min(t,Math.max(0,l));function a(t,l="bottom",i="center",e=0){if(l==="top-left")return a(t,"top","start",e);if(l==="top-right")return a(t,"top","end",e);if(l==="bottom-left")return a(t,"bottom","start",e);if(l==="bottom-right")return a(t,"bottom","end",e);if(l==="left-top")return a(t,"left","start",e);if(l==="left-bottom")return a(t,"left","end",e);if(l==="right-top")return a(t,"right","start",e);if(l==="right-bottom")return a(t,"right","end",e);const o=window.innerWidth??document.body.clientWidth,n=window.innerHeight??document.body.clientHeight;switch(l){case"top":switch(i){case"start":return{left:t.x,bottom:r(n)(n-t.y+e)};case"center":return{left:r(o)(t.x+t.width/2),transform:"translateX(-50%)",bottom:r(n)(n-t.y+e)};case"end":return{right:r(o)(o-t.x-t.width),bottom:r(n)(n-t.y+e)};default:return{}}case"bottom":switch(i){case"start":return{left:t.x,top:r(n)(t.y+t.height+e)};case"center":return{left:r(o)(t.x+t.width/2),transform:"translateX(-50%)",top:r(n)(t.y+t.height+e)};case"end":return{right:r(o)(o-t.x-t.width),top:r(n)(t.y+t.height+e)};default:return{}}case"left":switch(i){case"start":return{right:r(o)(o-t.x+e),top:t.y};case"center":return{right:r(o)(o-t.x+e),transform:"translateY(-50%)",top:r(n)(t.y+t.height/2)};case"end":return{right:r(o)(o-t.x+e),bottom:r(n)(n-t.y-t.height)};default:return{}}case"right":switch(i){case"start":return{left:r(o)(t.x+t.width+e),top:t.y};case"center":return{left:r(o)(t.x+t.width+e),transform:"translateY(-50%)",top:r(n)(t.y+t.height/2)};case"end":return{left:r(o)(t.x+t.width+e),bottom:r(n)(n-t.y-t.height)};default:return{left:r(o)(t.x+t.width+e),top:t.y}}}}const p=4;function M(t){const{tooltip:l,parent:i,tooltipPosition:e="bottom",show:o,bubbleSize:n={width:5,height:4},bubbleOffset:y=12,wrapperGap:v=4}=t,x=m.useRef(e),{colors:T}=P(),g=m.useRef(null),[u,R]=m.useState(void 0);if(m.useEffect(()=>{const s=g.current?.getBoundingClientRect(),H=window.innerWidth??document.body.clientWidth,L=window.innerHeight??document.body.clientHeight;if(s?.width){const f={};s.left<0&&(f.left=s.left*-1+p),s.right<0&&(f.right=s.right*-1+p);const w=s.left+s.width-H;w>0&&(f.right=w+p*2),s.top<0,s.bottom<0;const $=s.top+s.height-L;$>0&&(f.bottom=$+p*2),Object.keys(f).length>0&&R(f)}},[]),!i.current)return null;const W=i.current.getBoundingClientRect(),q=a(W,x.current,"center",n.height+v);let b=0;return typeof u?.left=="number"&&(b=Math.abs(u.left)),typeof u?.right=="number"&&(b=u.right*-1),h.jsx(S,{style:q,children:h.jsxs(C,{ref:g,style:{...t.style||{},opacity:o?1:0,...u||{}},children:[h.jsx(B,{width:n.width,height:n.height,$position:x.current,$fixedLeft:b,$bubbleOffset:y,style:{color:t.bubbleColor||T.container200}}),h.jsx(h.Fragment,{children:l})]})})}const S=c.div`
  pointer-events: none;
  position: fixed;
  z-index: ${t=>t.theme.zIndexes.modal+1};
`,E=t=>t.startsWith("top")?"top":t.startsWith("bottom")?"bottom":t.startsWith("left")?"left":t.startsWith("right")?"right":t,B=c(j)`
  position: absolute;

  ${t=>{const l=E(t.$position),i=t.$position.includes("-"),e=t.$bubbleOffset;switch(l){case"top":return d`
          ${()=>i?t.$position.endsWith("left")?`left: ${e}px;`:`right: ${e}px;`:`left: calc(50% - ${t.$fixedLeft}px);`}
          bottom: 0.5px;
          transform: ${()=>i?"translate(0, 100%)":"translate(-50%, 100%)"};
        `;case"bottom":return d`
          ${()=>i?t.$position.endsWith("left")?`left: ${e}px;`:`right: ${e}px;`:`left: calc(50% - ${t.$fixedLeft}px);`}
          top: 0.5px;
          transform: ${()=>i?"translate(0, -100%) rotate(180deg)":"translate(-50%, -100%) rotate(180deg)"};
        `;case"left":return d`
          ${()=>i?t.$position.endsWith("top")?`top: ${e}px;`:`bottom: ${e}px;`:"top: 50%;"}
          right: 1.5px;
          transform: ${()=>i?"translate(100%, 0) rotate(-90deg)":"translate(100%, -50%) rotate(-90deg)"};
        `;case"right":return d`
          ${()=>i?t.$position.endsWith("top")?`top: ${e}px;`:`bottom: ${e}px;`:"top: 50%;"}
          left: 1.5px;
          transform: ${()=>i?"translate(-100%, 0) rotate(90deg)":"translate(-100%, -50%) rotate(90deg)"};
        `;default:return d`
          left: calc(50% - ${t.$fixedLeft}px);
          top: 0.5px;
          transform: translate(-50%, -100%);
        `}}}
`,C=c.div`
  width: fit-content;
  position: relative;
  ${t=>t.theme.fonts.Default}
  ${t=>t.theme.flex.row}
  ${t=>t.theme.flex.center}
  z-index: ${t=>t.theme.zIndexes.modal+1};
  color: ${t=>t.theme.colors.elementsContentMain};
  background-color: ${t=>t.theme.colors.container200};
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: ${t=>t.theme.colors.shadowPop};
`;M.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},parent:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLButtonElement | HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement | null",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"},{name:"null"}]}]},description:""},tooltipPosition:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-right"
| "bottom-left"
| "bottom-right"
| "top"
| "bottom"
| "left-top"
| "left"
| "left-bottom"
| "right-top"
| "right"
| "right-bottom"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left-top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"left-bottom"'},{name:"literal",value:'"right-top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"right-bottom"'}]},description:"@default bottom"},show:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},wrapperGap:{required:!1,tsType:{name:"number"},description:"@default 4"},bubbleColor:{required:!1,tsType:{name:"string"},description:""},bubbleSize:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width: number; height: number }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},description:"@default {width:5,height:4}"},bubbleOffset:{required:!1,tsType:{name:"number"},description:"@default 12"}}};export{M as T};
