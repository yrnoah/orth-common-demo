import{j as i,a as t}from"./jsx-runtime-a888423b.js";import{T as c}from"./Tooltip-c494eb8d.js";import{p as m,t as f}from"./styled-components.browser.esm-7ed061eb.js";import{r as s}from"./index-8db94870.js";import{P as g,t as u}from"./Portal-847ba74d.js";import{D as T}from"./DmIcon20Add-8a2014f9.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./TooltipPoint-61ad6988.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const D={title:"ODE Library/Buttons/Tooltip",tags:["autodocs"],component:c,argTypes:{tooltipPosition:{control:"select",options:["top-left","top","top-right","bottom-left","bottom","bottom-right","left-top","left","left-bottom","right-top","right","right-bottom"]},parent:{table:{disable:!0}},tooltip:{control:"text"},show:{control:"boolean"},bubbleColor:{control:"color"}}},o=p=>{const r=s.useRef(null),[b,n]=s.useState(!1);return i(x,{ref:r,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onWheel:()=>n(!1),children:[t("span",{children:p.demoTitle||p.tooltip}),t(g,{id:u,children:t(c,{...p,parent:r,show:b})})]})};function P({...p}){const{colors:r}=f();return i("div",{style:{padding:20,background:r.container500},children:[t("h3",{children:"Tooltip - Positions"}),i(e,{children:[t("div",{}),t(o,{tooltipPosition:"top-left",tooltip:"Top Left"}),t(o,{tooltipPosition:"top",tooltip:"Top"}),t(o,{tooltipPosition:"top-right",tooltip:"Top Right"}),t("div",{}),t(o,{tooltipPosition:"left-top",tooltip:"Left Top"}),t("div",{}),t("div",{}),t("div",{}),t(o,{tooltipPosition:"right-top",tooltip:"Right Top"}),t(o,{tooltipPosition:"left",tooltip:"Left"}),t("div",{}),t("div",{}),t("div",{}),t(o,{tooltipPosition:"right",tooltip:"Right"}),t(o,{tooltipPosition:"left-bottom",tooltip:"Left Bottom"}),t("div",{}),t("div",{}),t("div",{}),t(o,{tooltipPosition:"right-bottom",tooltip:"Right Bottom"}),t("div",{}),t(o,{tooltipPosition:"bottom-left",tooltip:"Bottom Left"}),t(o,{tooltipPosition:"bottom",tooltip:"Bottom"}),t(o,{tooltipPosition:"bottom-right",tooltip:"Bottom Right"})]}),t("br",{}),t("h3",{children:"Tooltip - Custom Bubble"}),i(e,{children:[t(o,{tooltip:"Large Bubble",bubbleSize:{width:15,height:12}}),t(o,{tooltipPosition:"bottom-left",tooltip:"Bubble Offset 20",bubbleOffset:20}),t(o,{tooltipPosition:"bottom-left",tooltip:"Bubble Offset 30",bubbleOffset:30})]}),t("br",{}),t("h3",{children:"Tooltip - Wrapper Gap"}),i(e,{children:[t(o,{tooltip:"Wrapper Gap default 4"}),t(o,{tooltip:"Wrapper Gap 10",wrapperGap:10}),t(o,{tooltip:"Wrapper Gap 30",wrapperGap:30}),t(o,{tooltip:"Wrapper Gap -10",wrapperGap:-10}),t(o,{tooltip:"Wrapper Gap -4",wrapperGap:-4})]}),t("br",{}),t("h3",{children:"Tooltip - dark style"}),t(e,{children:t(o,{tooltip:"dark",bubbleColor:"#000",style:{background:"#000",color:"#fff"},bubbleSize:{width:15,height:12}})}),t("br",{}),t("h3",{children:"Tooltip - Rich Content"}),t(e,{children:t(o,{demoTitle:"rich content",tooltip:i("div",{style:{maxWidth:"300px"},children:[t("h4",{style:{margin:"0 0 8px 0"},children:"Rich Content Tooltip"}),t("p",{children:"This tooltip contains formatted content with multiple elements."}),t("hr",{style:{margin:"8px 0"}}),i("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t(T,{width:16,height:16}),t("span",{children:"With icons and styling"})]})]})})})]})}const e=m.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin: 100px;
`,x=m.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #000;
  user-select: none;
`,l={render:P,args:{tooltipPosition:"bottom",show:!0}};var a,d,h;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: TooltipStory,
  args: {
    tooltipPosition: "bottom",
    show: true
  }
}`,...(h=(d=l.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const j=["TooltipPositions"];export{l as TooltipPositions,j as __namedExportsOrder,D as default};
//# sourceMappingURL=Tooltip.stories-655d25a3.js.map
