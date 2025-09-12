import{r as n,j as t,d as f,l as u,n as y}from"./iframe-D12yBJYT.js";import{t as P,P as w}from"./Portal-BcC3rkwp.js";import{T as S}from"./Tooltip-8NnUTefg.js";import{S as g}from"./DmIcon20Add-BC5fNFyf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CLFaP9oP.js";import"./index-DihtluQp.js";import"./TooltipPoint-BZ-2dmGb.js";const d=e=>{const{ref:r,tooltip:p,portalID:h=P,tooltipPosition:$="bottom",children:v,tooltipStyle:T,tooltipProps:b,...s}=e,i=n.useRef(null),[m,c]=n.useState(0);return n.useEffect(()=>()=>{i.current&&(i.current=null)},[]),t.jsxs(x,{...s,onMouseOver:o=>{s.onMouseOver?.(o),c(Date.now())},onMouseOut:o=>{s.onMouseOut?.(o),c(0)},onWheel:o=>{s.onWheel?.(o),c(Date.now())},ref:o=>{i.current=o,r&&(typeof r=="function"?r(o):r.current=o)},children:[!!p&&t.jsx(w,{id:h,children:n.createElement(S,{...b||{},tooltip:p,tooltipPosition:$,parent:i,key:`${m}`,show:!!m,style:T})}),v]})},l=u`
  color: ${e=>e.theme.colors.elementsContentFocus};
  background-color: ${e=>e.theme.colors.elementsLayerActivated};

  ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
`;u`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  padding: 8px;
  border-radius: 50%;
  color: ${e=>e.theme.colors.elementsContentMain};
  transition: all 0.2s ease-out;

  &:hover {
    color: ${e=>e.theme.colors.elementsContentFocus};

    ${e=>e.$hoverThemes?{...e.$hoverThemes}:void 0}
  }

  &:active {
    ${l}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&l}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;const x=f.button.attrs({type:"button"})`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  padding: 8px;
  border-radius: 50%;
  color: ${e=>e.theme.colors.elementsContentMain};
  transition: all 0.2s ease-out;

  &:hover {
    color: ${e=>e.theme.colors.elementsContentFocus};

    ${e=>e.$hoverThemes?{...e.$hoverThemes}:void 0}
  }

  &:active {
    ${l}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&l}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;d.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{$active:{required:!1,tsType:{name:"boolean"},description:""},$activeThemes:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description override active styles"},$hoverThemes:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description override hover styles"},$disableThemes:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description override disabled styles"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const O={title:"ODE Library/Buttons/Tab/IconButton",tags:["autodocs"],component:d,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function C({...e}){const{colors:r}=y();return t.jsxs("div",{style:{padding:20,background:r.container500},children:[t.jsx("a",{target:"blank",href:"https://www.figma.com/design/gNhCiOwsW1zXM0DAiLr7Ck/%F0%9F%A7%AD-Plus-DS?node-id=3280-44423&t=UYSbf1B5mzuwpQK3-4",rel:"noreferrer",children:"design reference"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- default Tab Icon Button"}),t.jsx("br",{}),t.jsx(d,{...e}),t.jsx("div",{style:{height:"80dvw"}})]})}const a={render:C,args:{children:t.jsx(g,{width:20,height:20}),disabled:!1,$active:!1,tooltip:"Resource ⌥1",tooltipPosition:"top",$disableThemes:{backgroundColor:"red"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: TabIconButtonStory,
  args: {
    children: <DmIcon20Add width={20} height={20} />,
    disabled: false,
    $active: false,
    tooltip: "Resource ⌥1",
    tooltipPosition: "top",
    $disableThemes: {
      backgroundColor: "red"
    }
  }
}`,...a.parameters?.docs?.source}}};const A=["IconButton"];export{a as IconButton,A as __namedExportsOrder,O as default};
