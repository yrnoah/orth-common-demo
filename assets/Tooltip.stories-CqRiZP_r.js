import{n as d,j as t,d as n,r}from"./iframe-AucjWJ36.js";import{T as a}from"./Tooltip-BoRZpxw0.js";import{P as h,t as c}from"./Portal-Cf1ZhHdQ.js";import{S as j}from"./DmIcon20Add-BS5eAE2G.js";import"./preload-helper-D9Z9MdNV.js";import"./TooltipPoint-DGS_NNig.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";const B={title:"ODE Library/Buttons/Tooltip",tags:["autodocs"],component:a,argTypes:{tooltipPosition:{control:"select",options:["top-left","top","top-right","bottom-left","bottom","bottom-right","left-top","left","left-bottom","right-top","right","right-bottom"]},parent:{table:{disable:!0}},tooltip:{control:"text"},show:{control:"boolean"},bubbleColor:{control:"color"}}},o=i=>{const p=r.useRef(null),[x,l]=r.useState(!1);return t.jsxs(b,{ref:p,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onWheel:()=>l(!1),children:[t.jsx("span",{children:i.demoTitle||i.tooltip}),t.jsx(h,{id:c,children:t.jsx(a,{...i,parent:p,show:x})})]})};function m(){const{colors:i}=d();return t.jsxs("div",{style:{padding:20,background:i.container500},children:[t.jsx("h3",{children:"Tooltip - Positions"}),t.jsxs(s,{children:[t.jsx("div",{}),t.jsx(o,{tooltipPosition:"top-left",tooltip:"Top Left"}),t.jsx(o,{tooltipPosition:"top",tooltip:"Top"}),t.jsx(o,{tooltipPosition:"top-right",tooltip:"Top Right"}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"left-top",tooltip:"Left Top"}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"right-top",tooltip:"Right Top"}),t.jsx(o,{tooltipPosition:"left",tooltip:"Left"}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"right",tooltip:"Right"}),t.jsx(o,{tooltipPosition:"left-bottom",tooltip:"Left Bottom"}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"right-bottom",tooltip:"Right Bottom"}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"bottom-left",tooltip:"Bottom Left"}),t.jsx(o,{tooltipPosition:"bottom",tooltip:"Bottom"}),t.jsx(o,{tooltipPosition:"bottom-right",tooltip:"Bottom Right"})]}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - Custom Bubble"}),t.jsxs(s,{children:[t.jsx(o,{tooltip:"Large Bubble",bubbleSize:{width:15,height:12}}),t.jsx(o,{tooltipPosition:"bottom-left",tooltip:"Bubble Offset 20",bubbleOffset:20}),t.jsx(o,{tooltipPosition:"bottom-left",tooltip:"Bubble Offset 30",bubbleOffset:30})]}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - Wrapper Gap"}),t.jsxs(s,{children:[t.jsx(o,{tooltip:"Wrapper Gap default 4"}),t.jsx(o,{tooltip:"Wrapper Gap 10",wrapperGap:10}),t.jsx(o,{tooltip:"Wrapper Gap 30",wrapperGap:30}),t.jsx(o,{tooltip:"Wrapper Gap -10",wrapperGap:-10}),t.jsx(o,{tooltip:"Wrapper Gap -4",wrapperGap:-4})]}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - dark style"}),t.jsx(s,{children:t.jsx(o,{tooltip:"dark",bubbleColor:"#000",style:{background:"#000",color:"#fff"},bubbleSize:{width:15,height:12}})}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - Rich Content"}),t.jsx(s,{children:t.jsx(o,{demoTitle:"rich content",tooltip:t.jsxs("div",{style:{maxWidth:"300px"},children:[t.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Rich Content Tooltip"}),t.jsx("p",{children:"This tooltip contains formatted content with multiple elements."}),t.jsx("hr",{style:{margin:"8px 0"}}),t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t.jsx(j,{width:16,height:16}),t.jsx("span",{children:"With icons and styling"})]})]})})})]})}const s=n.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin: 100px;
`,b=n.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #000;
  user-select: none;
`,e={render:m,args:{tooltipPosition:"bottom",show:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: TooltipStory,
  args: {
    tooltipPosition: "bottom",
    show: true
  }
}`,...e.parameters?.docs?.source}}};const G=["TooltipPositions"];export{e as TooltipPositions,G as __namedExportsOrder,B as default};
