import{l as p,r as i,j as r,d as b,n as R}from"./iframe-AucjWJ36.js";import{t as y,P as $}from"./Portal-Cf1ZhHdQ.js";import{T as g}from"./Tooltip-BoRZpxw0.js";import{u as P}from"./useRefreshPosition-CadW4XDp.js";import{S as B}from"./DmIcon20Add-BS5eAE2G.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";import"./TooltipPoint-DGS_NNig.js";const v=p`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  ${e=>e.theme.fonts.Default}
  line-height: 16px;
  border-radius: 4px;
  gap: 4px;
  padding: 8px;
  transition: all ${e=>e.theme.animation.duration};
  position: relative;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    pointer-events: none;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 3px;
    transition: all ${e=>e.theme.animation.duration};
  }
`,q=p`
  ${v}
  color: ${e=>e.theme.colors.elementsContentMain};
  background-color: ${e=>e.theme.colors.elementsBackground};
  border: 1px solid ${e=>e.theme.colors.elementsDivider};
  outline: 1px solid transparent;
  
  &:hover {
    background-color: ${e=>e.theme.colors.elementsBackgroundAlt};
  }

  &:active {
    background-color: ${e=>e.theme.colors.elementsBackgroundAlt};
    border-color: ${e=>e.theme.colors.elementsContentFocus};
    outline-color: ${e=>e.theme.colors.elementsContentFocus};

    &::after {
      border-color: ${e=>e.theme.colors.elementsBackground};
    }
  }

  ${e=>e.$active&&p`
      background-color: ${o=>o.theme.colors.elementsBackgroundAlt};
      border-color: ${o=>o.theme.colors.elementsContentFocus};
      outline-color: ${o=>o.theme.colors.elementsContentFocus};
    `}

  &:disabled {
    opacity: 0.3;
    background-color: ${e=>e.theme.colors.elementsBackground};
    border-color: ${e=>e.theme.colors.elementsDivider};
    outline-color: transparent;
    cursor: not-allowed;

    &::after {
      border-color: transparent;
    }
  }
`,j=p`
  ${v}
  color: ${e=>e.theme.colors.elementsContentMain};
  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.elementsDivider};
  outline: 1px solid transparent;
  
  &:hover {
    background-color: ${e=>e.theme.colors.elementsBackgroundAlt};
  }

  &:active {
    background-color: ${e=>e.theme.colors.elementsBackgroundAlt};
    border-color: ${e=>e.theme.colors.elementsContentFocus};
    outline-color: ${e=>e.theme.colors.elementsContentFocus};

    &::after {
      border-color: ${e=>e.theme.colors.elementsBackground};
    }
  }

  ${e=>e.$active&&p`
      background-color: ${o=>o.theme.colors.elementsBackgroundAlt};
      border-color: ${o=>o.theme.colors.elementsContentFocus};
      outline-color: ${o=>o.theme.colors.elementsContentFocus};
    `}

  &:disabled {
    opacity: 0.3;
    background-color: transparent;
    border-color: ${e=>e.theme.colors.elementsDivider};
    outline-color: transparent;
    cursor: not-allowed;

    &::after {
      border-color: transparent;
    }
  }
`,F=p`
  ${v}
  color: ${e=>e.theme.colors.elementsHintDanger};
  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.elementsHintDanger};
  outline: 1px solid transparent;
  
  &:hover {
    background-color: ${e=>e.theme.colors.elementsBackgroundAltDanger};
  }

  &:active {
    background-color: ${e=>e.theme.colors.elementsBackgroundAltDanger};
    border-color: ${e=>e.theme.colors.elementsHintDanger};
    outline-color: ${e=>e.theme.colors.elementsHintDanger};

    &::after {
      border-color: ${e=>e.theme.colors.elementsBackground};
    }
  }

  ${e=>e.$active&&p`
      background-color: ${o=>o.theme.colors.elementsBackgroundAltDanger};
      border-color: ${o=>o.theme.colors.elementsHintDanger};
      outline-color: ${o=>o.theme.colors.elementsHintDanger};
    `}

  &:disabled {
    opacity: 0.3;
    background-color: transparent;
    border-color: ${e=>e.theme.colors.elementsHintDanger};
    outline-color: transparent;
    cursor: not-allowed;

    &::after {
      border-color: transparent;
    }
  }
`,O=p`
  ${v}
  color: ${e=>e.theme.colors.elementsContentInverse};
  background-color: ${e=>e.theme.colors.elementsContentMain};
  border: 1px solid ${e=>e.theme.colors.elementsContentMain};
  outline: 1px solid transparent;

  &::before {
    content: "";
    display: block;
    position: absolute;
    pointer-events: none;
    inset: 0;
    background-color: transparent;
    border-radius: 4px;
    transition: all ${e=>e.theme.animation.duration};
  }
  
  &:hover {
    &::before {
      background-color: rgba(255, 255, 255, 0.08);
    }
  }

  &:active {
    background-color: ${e=>e.theme.colors.elementsContentMain};
    border-color: ${e=>e.theme.colors.elementsContentFocus};
    outline-color: ${e=>e.theme.colors.elementsContentFocus};

    &::after {
      border-color: ${e=>e.theme.colors.elementsContentInverse};
    }

    &::before {
      inset: 2px;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.08);
    }
  }

  ${e=>e.$active&&p`
      background-color: ${o=>o.theme.colors.elementsContentMain};
      border-color: ${o=>o.theme.colors.elementsContentFocus};
      outline-color: ${o=>o.theme.colors.elementsContentFocus};

      &::after {
        border-color: ${o=>o.theme.colors.elementsContentInverse};
      }
    `}

  &:disabled {
    opacity: 0.3;
    background-color: ${e=>e.theme.colors.elementsContentMain};
    border-color: ${e=>e.theme.colors.elementsContentMain};
    outline-color: transparent;
    cursor: not-allowed;

    &::after {
      border-color: transparent;
    }

    &::before {
      background-color: transparent;
    }
  }
`,M=p`
  ${v}
  color: ${e=>e.theme.colors.textContrast600};
  background-color: ${e=>e.theme.colors.accentPrimaryEnabled};
  border: 1px solid ${e=>e.theme.colors.accentPrimaryEnabled};
  outline: 1px solid transparent;
  
  &:hover {
   background-color: ${e=>e.theme.colors.accentPrimaryHovered};
   border-color: ${e=>e.theme.colors.accentPrimaryHovered};
  }

  &:active {
    background-color: ${e=>e.theme.colors.accentPrimaryHovered};
    border-color: ${e=>e.theme.colors.elementsContentFocus};
    outline-color: ${e=>e.theme.colors.elementsContentFocus};

    &::after {
      border-color: ${e=>e.theme.colors.elementsContentInverse};
    }
  }

  ${e=>e.$active&&p`
      background-color: ${o=>o.theme.colors.accentPrimaryEnabled};
      border-color: ${o=>o.theme.colors.elementsContentFocus};
      outline-color: ${o=>o.theme.colors.elementsContentFocus};

      &::after {
        border-color: ${o=>o.theme.colors.elementsContentInverse};
      }
    `}

  &:disabled {
    opacity: 0.3;
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: ${e=>e.theme.colors.elementsBackground};
    border-color: ${e=>e.theme.colors.elementsBackground};
    outline-color: transparent;
    cursor: not-allowed;

    &::after {
      border-color: transparent;
    }
  }
`,I=p`
  ${v}
  color: ${e=>e.theme.colors.textContrast600};
  background-color: ${e=>e.theme.colors.accentDangerEnabled};
  border: 1px solid ${e=>e.theme.colors.accentDangerEnabled};
  outline: 1px solid transparent;
  
  &:hover {
   background-color: ${e=>e.theme.colors.accentDangerHovered};
   border-color: ${e=>e.theme.colors.accentDangerHovered};
  }

  &:active {
    background-color: ${e=>e.theme.colors.accentDangerHovered};
    border-color: ${e=>e.theme.colors.elementsContentFocus};
    outline-color: ${e=>e.theme.colors.elementsContentFocus};

    &::after {
      border-color: ${e=>e.theme.colors.elementsContentInverse};
    }
  }

  ${e=>e.$active&&p`
      background-color: ${o=>o.theme.colors.accentDangerEnabled};
      border-color: ${o=>o.theme.colors.elementsContentFocus};
      outline-color: ${o=>o.theme.colors.elementsContentFocus};

      &::after {
        border-color: ${o=>o.theme.colors.elementsContentInverse};
      }
    `}

  &:disabled {
    opacity: 0.3;
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: ${e=>e.theme.colors.elementsBackground};
    border-color: ${e=>e.theme.colors.elementsBackground};
    outline-color: transparent;
    cursor: not-allowed;

    &::after {
      border-color: transparent;
    }
  }
`,T=e=>{const{ref:o,tooltip:l,portalID:d=y,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:f,...n}=e,a=i.useRef(null),[c,s]=i.useState(0);return P(()=>s(0)),r.jsxs(H,{...n,onMouseOver:t=>{n.onMouseOver?.(t),s(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),s(0)},ref:t=>{a.current=t,o&&typeof o!="string"&&(typeof o=="function"?o(t):o.current=t)},children:[!!l&&r.jsx($,{id:d,children:i.createElement(g,{...f||{},tooltip:l,tooltipPosition:u,parent:a,key:`${c}`,show:!!c,style:h})}),m]})},_={type:"button"},H=b.button.attrs(_)`
  ${q}
`;T.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const x=e=>{const{ref:o,tooltip:l,portalID:d=y,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:f,...n}=e,a=i.useRef(null),[c,s]=i.useState(0);return P(()=>s(0)),r.jsxs(N,{...n,onMouseOver:t=>{n.onMouseOver?.(t),s(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),s(0)},ref:t=>{a.current=t,o&&typeof o!="string"&&(typeof o=="function"?o(t):o.current=t)},children:[!!l&&r.jsx($,{id:d,children:i.createElement(g,{...f||{},tooltip:l,tooltipPosition:u,parent:a,key:`${c}`,show:!!c,style:h})}),m]})},A={type:"button"},N=b.button.attrs(A)`
  ${j}
`;x.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const S=e=>{const{ref:o,tooltip:l,portalID:d=y,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:f,...n}=e,a=i.useRef(null),[c,s]=i.useState(0);return P(()=>s(0)),r.jsxs(K,{...n,onMouseOver:t=>{n.onMouseOver?.(t),s(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),s(0)},ref:t=>{a.current=t,o&&typeof o!="string"&&(typeof o=="function"?o(t):o.current=t)},children:[!!l&&r.jsx($,{id:d,children:i.createElement(g,{...f||{},tooltip:l,tooltipPosition:u,parent:a,key:`${c}`,show:!!c,style:h})}),m]})},E={type:"button"},K=b.button.attrs(E)`
  ${F}
`;S.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const C=e=>{const{ref:o,tooltip:l,portalID:d=y,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:f,...n}=e,a=i.useRef(null),[c,s]=i.useState(0);return P(()=>s(0)),r.jsxs(G,{...n,onMouseOver:t=>{n.onMouseOver?.(t),s(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),s(0)},ref:t=>{a.current=t,o&&typeof o!="string"&&(typeof o=="function"?o(t):o.current=t)},children:[!!l&&r.jsx($,{id:d,children:i.createElement(g,{...f||{},tooltip:l,tooltipPosition:u,parent:a,key:`${c}`,show:!!c,style:h})}),m]})},L={type:"button"},G=b.button.attrs(L)`
  ${O}
`;C.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const k=e=>{const{ref:o,tooltip:l,portalID:d=y,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:f,...n}=e,a=i.useRef(null),[c,s]=i.useState(0);return P(()=>s(0)),r.jsxs(U,{...n,onMouseOver:t=>{n.onMouseOver?.(t),s(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),s(0)},ref:t=>{a.current=t,o&&typeof o!="string"&&(typeof o=="function"?o(t):o.current=t)},children:[!!l&&r.jsx($,{id:d,children:i.createElement(g,{...f||{},tooltip:l,tooltipPosition:u,parent:a,key:`${c}`,show:!!c,style:h})}),m]})},Q={type:"button"},U=b.button.attrs(Q)`
  ${M}
`;k.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const D=e=>{const{ref:o,tooltip:l,portalID:d=y,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:f,...n}=e,a=i.useRef(null),[c,s]=i.useState(0);return P(()=>s(0)),r.jsxs(W,{...n,onMouseOver:t=>{n.onMouseOver?.(t),s(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),s(0)},ref:t=>{a.current=t,o&&typeof o!="string"&&(typeof o=="function"?o(t):o.current=t)},children:[!!l&&r.jsx($,{id:d,children:i.createElement(g,{...f||{},tooltip:l,tooltipPosition:u,parent:a,key:`${c}`,show:!!c,style:h})}),m]})},V={type:"button"},W=b.button.attrs(V)`
  ${I}
`;D.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const se={title:"ODE Library/Buttons/Button",tags:["autodocs"],component:T,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function z({...e}){const{colors:o}=R(),{style:l,...d}=e;return r.jsxs("div",{style:{padding:20,background:o.container500},children:[r.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",rel:"noreferrer",children:"design reference"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- default Button"}),r.jsx("br",{}),r.jsx(T,{...e}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Outline"}),r.jsx("br",{}),r.jsx(x,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Outline-Danger"}),r.jsx("br",{}),r.jsx(S,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Dark"}),r.jsx("br",{}),r.jsx(C,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Default-Brand"}),r.jsx("br",{}),r.jsx(k,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Default-Danger"}),r.jsx("br",{}),r.jsx(D,{...e}),r.jsx("div",{style:{height:"80dvw"}})]})}const w={render:z,args:{style:{},children:r.jsxs(r.Fragment,{children:[r.jsx(B,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    style: {},
    children: <>
        <DmIcon20Add width={20} height={20} /> Label text
      </>,
    disabled: false,
    $active: false,
    tooltip: "notification"
  }
}`,...w.parameters?.docs?.source}}};const le=["Button"];export{w as Button,le as __namedExportsOrder,se as default};
