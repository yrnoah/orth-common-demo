import{r as c,j as e,d as x,l as u,n as g}from"./iframe-AucjWJ36.js";import{t as w,P as v}from"./Portal-Cf1ZhHdQ.js";import{T as P}from"./Tooltip-BoRZpxw0.js";import{u as S}from"./useRefreshPosition-CadW4XDp.js";import{S as T}from"./DmIcon20Add-BS5eAE2G.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";import"./TooltipPoint-DGS_NNig.js";const r=t=>{const{ref:o,tooltip:s,portalID:l=w,tooltipPosition:f="bottom",children:h,tooltipStyle:b,tooltipProps:y,...a}=t,d=c.useRef(null),[m,p]=c.useState(0);return S(()=>p(0)),e.jsxs(j,{...a,onMouseOver:n=>{a.onMouseOver?.(n),p(Date.now())},onMouseOut:n=>{a.onMouseOut?.(n),p(0)},ref:n=>{d.current=n,o&&typeof o!="string"&&(typeof o=="function"?o(n):o.current=n)},children:[!!s&&e.jsx(v,{id:l,children:c.createElement(P,{...y||{},tooltip:s,tooltipPosition:f,parent:d,key:`${m}`,show:!!m,style:b})}),h]})},$=u`
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

  ${t=>t.$active&&u`
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
`,j=x.button.attrs({type:"button"})`
  ${$}
`;r.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",methods:[],displayName:"LabelButton",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const k={title:"ODE Library/Buttons/LabelButton",tags:["autodocs"],component:r,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function L({...t}){const{colors:o}=g(),{style:s,...l}=t;return e.jsxs("div",{style:{padding:20,background:o.container500},children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default Label Button"}),e.jsx("br",{}),e.jsx(r,{...l}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- Label Button with styles"}),e.jsx(r,{...t}),e.jsx("div",{style:{height:"80dvw"}})]})}const i={render:L,args:{style:{position:"absolute",left:"90%",top:200},children:e.jsxs(e.Fragment,{children:[e.jsx(T,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: LabelButtonStory,
  args: {
    style: {
      position: "absolute",
      left: "90%",
      top: 200
    },
    children: <>
        <DmIcon20Add width={20} height={20} /> Label text
      </>,
    disabled: false,
    $active: false,
    tooltip: "notification"
  }
}`,...i.parameters?.docs?.source}}};const A=["LabelButton"];export{i as LabelButton,A as __namedExportsOrder,k as default};
