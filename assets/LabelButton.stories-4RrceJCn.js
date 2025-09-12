import{r as l,j as e,d as x,l as m,n as g}from"./iframe-D12yBJYT.js";import{t as w,P as v}from"./Portal-BcC3rkwp.js";import{T as P}from"./Tooltip-8NnUTefg.js";import{S}from"./DmIcon20Add-BC5fNFyf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CLFaP9oP.js";import"./index-DihtluQp.js";import"./TooltipPoint-BZ-2dmGb.js";const a=t=>{const{ref:o,tooltip:p,portalID:u=w,tooltipPosition:f="bottom",children:h,tooltipStyle:b,tooltipProps:y,...i}=t,c=l.useRef(null),[d,s]=l.useState(0);return e.jsxs($,{...i,onMouseOver:n=>{i.onMouseOver?.(n),s(Date.now())},onMouseOut:n=>{i.onMouseOut?.(n),s(0)},onWheel:n=>{i.onWheel?.(n),s(Date.now())},ref:n=>{c.current=n,o&&typeof o!="string"&&(typeof o=="function"?o(n):o.current=n)},children:[!!p&&e.jsx(v,{id:u,children:l.createElement(P,{...y||{},tooltip:p,tooltipPosition:f,parent:c,key:`${d}`,show:!!d,style:b})}),h]})},T=m`
  ${t=>t.theme.button.reset}
  ${t=>t.theme.flex.row}
  ${t=>t.theme.flex.center}
  ${t=>t.theme.fonts.Default}
  position: relative;
  gap: 4px;
  color: ${t=>t.theme.colors.elementsContentMain};
  padding: 4px 0;
  transition: all ${t=>t.theme.animation.duration};

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    transition: all ${t=>t.theme.animation.duration};
  }

  &:hover {
    color: ${t=>t.theme.colors.elementsContentFocus};
  }

  &:active {
    color: ${t=>t.theme.colors.elementsContentFocus};
  }

  ${t=>t.$active&&m`
      color: ${o=>o.theme.colors.elementsContentMain};

      &::after {
        background-color: ${o=>o.theme.colors.elementsContentFocus};
      }
    `}

  &:disabled {
    color: ${t=>t.theme.colors.elementsContentMain};
    opacity: 0.3;
    cursor: not-allowed;
  }
`,$=x.button.attrs({type:"button"})`
  ${T}
`;a.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",methods:[],displayName:"LabelButton",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const M={title:"ODE Library/Buttons/LabelButton",tags:["autodocs"],component:a,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function j({...t}){const{colors:o}=g();return e.jsxs("div",{style:{padding:20,background:o.container500},children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default Label Button"}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("div",{style:{height:"80dvw"}})]})}const r={render:j,args:{style:{position:"absolute",left:"95%",top:150},children:e.jsxs(e.Fragment,{children:[e.jsx(S,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: LabelButtonStory,
  args: {
    style: {
      position: "absolute",
      left: "95%",
      top: 150
    },
    children: <>
        <DmIcon20Add width={20} height={20} /> Label text
      </>,
    disabled: false,
    $active: false,
    tooltip: "notification"
    // tooltip:
    //   "在这里显示 有几个result了，有Result 才可以点击 有没有Result都可以Load Result 在Diagram 页面选完成功后再跳转",
  }
}`,...r.parameters?.docs?.source}}};const I=["LabelButton"];export{r as LabelButton,I as __namedExportsOrder,M as default};
