import{j as t}from"./jsx-runtime-94f6e698.js";import{T as d}from"./Tooltip-a379440d.js";import{p as h,t as j}from"./styled-components.browser.esm-7ed061eb.js";import{r as l}from"./index-8db94870.js";import{P as m,t as b}from"./Portal-01fdeda0.js";import{D as f}from"./DmIcon20Add-61b2a945.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./TooltipPoint-976e1e10.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const O={title:"ODE Library/Buttons/Tooltip",tags:["autodocs"],component:d,argTypes:{tooltipPosition:{control:"select",options:["top-left","top","top-right","bottom-left","bottom","bottom-right","left-top","left","left-bottom","right-top","right","right-bottom"]},parent:{table:{disable:!0}},tooltip:{control:"text"},show:{control:"boolean"},bubbleColor:{control:"color"}}},o=s=>{const e=l.useRef(null),[c,r]=l.useState(!1);return t.jsxs(u,{ref:e,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onWheel:()=>r(!1),children:[t.jsx("span",{children:s.demoTitle||s.tooltip}),t.jsx(m,{id:b,children:t.jsx(d,{...s,parent:e,show:c})})]})};function g({...s}){const{colors:e}=j();return t.jsxs("div",{style:{padding:20,background:e.container500},children:[t.jsx("h3",{children:"Tooltip - Positions"}),t.jsxs(i,{children:[t.jsx("div",{}),t.jsx(o,{tooltipPosition:"top-left",tooltip:"Top Left"}),t.jsx(o,{tooltipPosition:"top",tooltip:"Top"}),t.jsx(o,{tooltipPosition:"top-right",tooltip:"Top Right"}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"left-top",tooltip:"Left Top"}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"right-top",tooltip:"Right Top"}),t.jsx(o,{tooltipPosition:"left",tooltip:"Left"}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"right",tooltip:"Right"}),t.jsx(o,{tooltipPosition:"left-bottom",tooltip:"Left Bottom"}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"right-bottom",tooltip:"Right Bottom"}),t.jsx("div",{}),t.jsx(o,{tooltipPosition:"bottom-left",tooltip:"Bottom Left"}),t.jsx(o,{tooltipPosition:"bottom",tooltip:"Bottom"}),t.jsx(o,{tooltipPosition:"bottom-right",tooltip:"Bottom Right"})]}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - Custom Bubble"}),t.jsxs(i,{children:[t.jsx(o,{tooltip:"Large Bubble",bubbleSize:{width:15,height:12}}),t.jsx(o,{tooltipPosition:"bottom-left",tooltip:"Bubble Offset 20",bubbleOffset:20}),t.jsx(o,{tooltipPosition:"bottom-left",tooltip:"Bubble Offset 30",bubbleOffset:30})]}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - Wrapper Gap"}),t.jsxs(i,{children:[t.jsx(o,{tooltip:"Wrapper Gap default 4"}),t.jsx(o,{tooltip:"Wrapper Gap 10",wrapperGap:10}),t.jsx(o,{tooltip:"Wrapper Gap 30",wrapperGap:30}),t.jsx(o,{tooltip:"Wrapper Gap -10",wrapperGap:-10}),t.jsx(o,{tooltip:"Wrapper Gap -4",wrapperGap:-4})]}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - dark style"}),t.jsx(i,{children:t.jsx(o,{tooltip:"dark",bubbleColor:"#000",style:{background:"#000",color:"#fff"},bubbleSize:{width:15,height:12}})}),t.jsx("br",{}),t.jsx("h3",{children:"Tooltip - Rich Content"}),t.jsx(i,{children:t.jsx(o,{demoTitle:"rich content",tooltip:t.jsxs("div",{style:{maxWidth:"300px"},children:[t.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Rich Content Tooltip"}),t.jsx("p",{children:"This tooltip contains formatted content with multiple elements."}),t.jsx("hr",{style:{margin:"8px 0"}}),t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t.jsx(f,{width:16,height:16}),t.jsx("span",{children:"With icons and styling"})]})]})})})]})}const i=h.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin: 100px;
`,u=h.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #000;
  user-select: none;
`,p={render:g,args:{tooltipPosition:"bottom",show:!0}};var n,a,x;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: TooltipStory,
  args: {
    tooltipPosition: "bottom",
    show: true
  }
}`,...(x=(a=p.parameters)==null?void 0:a.docs)==null?void 0:x.source}}};const C=["TooltipPositions"];export{p as TooltipPositions,C as __namedExportsOrder,O as default};
//# sourceMappingURL=Tooltip.stories-c532f301.js.map
