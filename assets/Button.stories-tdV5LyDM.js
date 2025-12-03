import{l as d,r as i,j as r,d as f,n as R}from"./iframe-BY0Ds_wu.js";import{t as x,P as b}from"./Portal-CsufOtEp.js";import{T as v}from"./Tooltip-BVq8jL3O.js";import{u as y}from"./useRefreshPosition-DM-1Nh4A.js";import{S as q}from"./DmIcon20Add-B6qWdyw7.js";import"./preload-helper-D9Z9MdNV.js";import"./index-1WFH_otD.js";import"./index-jXhlw_Vl.js";import"./TooltipPoint-CBgdh05o.js";const $=d`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  ${e=>e.theme.fonts.Default}
  line-height: 16px;
  border-radius: 4px;
  gap: 4px;
  padding: 15px;
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

  ${({$size:e="default"})=>{switch(e){default:case"default":return;case"small":return d`padding: 7px;`;case"medium":return d`padding: 11px;`;case"large":return d`padding: 14px 15px 32px;`;case"extra-large":return d`padding: 14px 15px 48px;`}}}
`,B=d`
  ${$}
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

  ${e=>e.$active&&d`
      background-color: ${t=>t.theme.colors.elementsBackgroundAlt};
      border-color: ${t=>t.theme.colors.elementsContentFocus};
      outline-color: ${t=>t.theme.colors.elementsContentFocus};
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
`,j=d`
  ${$}
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

  ${e=>e.$active&&d`
      background-color: ${t=>t.theme.colors.elementsBackgroundAlt};
      border-color: ${t=>t.theme.colors.elementsContentFocus};
      outline-color: ${t=>t.theme.colors.elementsContentFocus};
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
`,F=d`
  ${$}
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

  ${e=>e.$active&&d`
      background-color: ${t=>t.theme.colors.elementsBackgroundAltDanger};
      border-color: ${t=>t.theme.colors.elementsHintDanger};
      outline-color: ${t=>t.theme.colors.elementsHintDanger};
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
`,O=d`
  ${$}
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

  ${e=>e.$active&&d`
      background-color: ${t=>t.theme.colors.elementsContentMain};
      border-color: ${t=>t.theme.colors.elementsContentFocus};
      outline-color: ${t=>t.theme.colors.elementsContentFocus};

      &::after {
        border-color: ${t=>t.theme.colors.elementsContentInverse};
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
`,M=d`
  ${$}
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

  ${e=>e.$active&&d`
      background-color: ${t=>t.theme.colors.accentPrimaryEnabled};
      border-color: ${t=>t.theme.colors.elementsContentFocus};
      outline-color: ${t=>t.theme.colors.elementsContentFocus};

      &::after {
        border-color: ${t=>t.theme.colors.elementsContentInverse};
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
`,I=d`
  ${$}
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

  ${e=>e.$active&&d`
      background-color: ${t=>t.theme.colors.accentDangerEnabled};
      border-color: ${t=>t.theme.colors.elementsContentFocus};
      outline-color: ${t=>t.theme.colors.elementsContentFocus};

      &::after {
        border-color: ${t=>t.theme.colors.elementsContentInverse};
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
`,w=e=>{const{ref:t,tooltip:a,portalID:c=x,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:g,...n}=e,s=i.useRef(null),[p,l]=i.useState(0);return y(()=>l(0)),r.jsxs(H,{...n,onMouseOver:o=>{n.onMouseOver?.(o),l(Date.now())},onMouseOut:o=>{n.onMouseOut?.(o),l(0)},ref:o=>{s.current=o,t&&typeof t!="string"&&(typeof t=="function"?t(o):t.current=o)},children:[!!a&&r.jsx(b,{id:c,children:i.createElement(v,{...g||{},tooltip:a,tooltipPosition:u,parent:s,key:`${p}`,show:!!p,style:h})}),m]})},_={type:"button"},H=f.button.attrs(_)`
  ${B}
`;w.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},$size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "medium" | "large" | "extra-large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extra-large"'}]},description:`@description apply different padding to button with size config
@default default
@value default padding: 7px 11px -> height 48px
@value small padding: 7px 11px -> height 32px
@value medium padding: px 11px -> height 40px
@value large padding: px 11px -> height 64px
@value \`extra-large\` padding: px 11px -> height 80px`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const T=e=>{const{ref:t,tooltip:a,portalID:c=x,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:g,...n}=e,s=i.useRef(null),[p,l]=i.useState(0);return y(()=>l(0)),r.jsxs(N,{...n,onMouseOver:o=>{n.onMouseOver?.(o),l(Date.now())},onMouseOut:o=>{n.onMouseOut?.(o),l(0)},ref:o=>{s.current=o,t&&typeof t!="string"&&(typeof t=="function"?t(o):t.current=o)},children:[!!a&&r.jsx(b,{id:c,children:i.createElement(v,{...g||{},tooltip:a,tooltipPosition:u,parent:s,key:`${p}`,show:!!p,style:h})}),m]})},A={type:"button"},N=f.button.attrs(A)`
  ${j}
`;T.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},$size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "medium" | "large" | "extra-large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extra-large"'}]},description:`@description apply different padding to button with size config
@default default
@value default padding: 7px 11px -> height 48px
@value small padding: 7px 11px -> height 32px
@value medium padding: px 11px -> height 40px
@value large padding: px 11px -> height 64px
@value \`extra-large\` padding: px 11px -> height 80px`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const S=e=>{const{ref:t,tooltip:a,portalID:c=x,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:g,...n}=e,s=i.useRef(null),[p,l]=i.useState(0);return y(()=>l(0)),r.jsxs(E,{...n,onMouseOver:o=>{n.onMouseOver?.(o),l(Date.now())},onMouseOut:o=>{n.onMouseOut?.(o),l(0)},ref:o=>{s.current=o,t&&typeof t!="string"&&(typeof t=="function"?t(o):t.current=o)},children:[!!a&&r.jsx(b,{id:c,children:i.createElement(v,{...g||{},tooltip:a,tooltipPosition:u,parent:s,key:`${p}`,show:!!p,style:h})}),m]})},z={type:"button"},E=f.button.attrs(z)`
  ${F}
`;S.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},$size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "medium" | "large" | "extra-large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extra-large"'}]},description:`@description apply different padding to button with size config
@default default
@value default padding: 7px 11px -> height 48px
@value small padding: 7px 11px -> height 32px
@value medium padding: px 11px -> height 40px
@value large padding: px 11px -> height 64px
@value \`extra-large\` padding: px 11px -> height 80px`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const C=e=>{const{ref:t,tooltip:a,portalID:c=x,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:g,...n}=e,s=i.useRef(null),[p,l]=i.useState(0);return y(()=>l(0)),r.jsxs(L,{...n,onMouseOver:o=>{n.onMouseOver?.(o),l(Date.now())},onMouseOut:o=>{n.onMouseOut?.(o),l(0)},ref:o=>{s.current=o,t&&typeof t!="string"&&(typeof t=="function"?t(o):t.current=o)},children:[!!a&&r.jsx(b,{id:c,children:i.createElement(v,{...g||{},tooltip:a,tooltipPosition:u,parent:s,key:`${p}`,show:!!p,style:h})}),m]})},K={type:"button"},L=f.button.attrs(K)`
  ${O}
`;C.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},$size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "medium" | "large" | "extra-large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extra-large"'}]},description:`@description apply different padding to button with size config
@default default
@value default padding: 7px 11px -> height 48px
@value small padding: 7px 11px -> height 32px
@value medium padding: px 11px -> height 40px
@value large padding: px 11px -> height 64px
@value \`extra-large\` padding: px 11px -> height 80px`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const k=e=>{const{ref:t,tooltip:a,portalID:c=x,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:g,...n}=e,s=i.useRef(null),[p,l]=i.useState(0);return y(()=>l(0)),r.jsxs(Q,{...n,onMouseOver:o=>{n.onMouseOver?.(o),l(Date.now())},onMouseOut:o=>{n.onMouseOut?.(o),l(0)},ref:o=>{s.current=o,t&&typeof t!="string"&&(typeof t=="function"?t(o):t.current=o)},children:[!!a&&r.jsx(b,{id:c,children:i.createElement(v,{...g||{},tooltip:a,tooltipPosition:u,parent:s,key:`${p}`,show:!!p,style:h})}),m]})},G={type:"button"},Q=f.button.attrs(G)`
  ${M}
`;k.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},$size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "medium" | "large" | "extra-large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extra-large"'}]},description:`@description apply different padding to button with size config
@default default
@value default padding: 7px 11px -> height 48px
@value small padding: 7px 11px -> height 32px
@value medium padding: px 11px -> height 40px
@value large padding: px 11px -> height 64px
@value \`extra-large\` padding: px 11px -> height 80px`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const D=e=>{const{ref:t,tooltip:a,portalID:c=x,tooltipPosition:u="top",children:m,tooltipStyle:h,tooltipProps:g,...n}=e,s=i.useRef(null),[p,l]=i.useState(0);return y(()=>l(0)),r.jsxs(V,{...n,onMouseOver:o=>{n.onMouseOver?.(o),l(Date.now())},onMouseOut:o=>{n.onMouseOut?.(o),l(0)},ref:o=>{s.current=o,t&&typeof t!="string"&&(typeof t=="function"?t(o):t.current=o)},children:[!!a&&r.jsx(b,{id:c,children:i.createElement(v,{...g||{},tooltip:a,tooltipPosition:u,parent:s,key:`${p}`,show:!!p,style:h})}),m]})},U={type:"button"},V=f.button.attrs(U)`
  ${I}
`;D.__docgenInfo={description:"@design https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",methods:[],displayName:"Button",props:{$active:{required:!1,tsType:{name:"boolean"},description:"@description focused"},$size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "medium" | "large" | "extra-large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extra-large"'}]},description:`@description apply different padding to button with size config
@default default
@value default padding: 7px 11px -> height 48px
@value small padding: 7px 11px -> height 32px
@value medium padding: px 11px -> height 40px
@value large padding: px 11px -> height 64px
@value \`extra-large\` padding: px 11px -> height 80px`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const le={title:"ODE Library/Buttons/Button",tags:["autodocs"],component:w,argTypes:{$size:{control:"select",options:["default","small","medium","large","extra-large"]},tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function W({...e}){const{colors:t}=R(),{style:a,...c}=e;return r.jsxs("div",{style:{padding:20,background:t.container500},children:[r.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=502-11076&t=gPT900RWp0M6rQcC-4",rel:"noreferrer",children:"design reference"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- default Button"}),r.jsx("br",{}),r.jsx(w,{...e}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Outline"}),r.jsx("br",{}),r.jsx(T,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Outline-Danger"}),r.jsx("br",{}),r.jsx(S,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Dark"}),r.jsx("br",{}),r.jsx(C,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Default-Brand"}),r.jsx("br",{}),r.jsx(k,{...e}),r.jsx("br",{}),r.jsx("h4",{children:"- Button/Default-Danger"}),r.jsx("br",{}),r.jsx(D,{...e}),r.jsx("div",{style:{height:"80dvw"}})]})}const P={render:W,args:{style:{},children:r.jsxs(r.Fragment,{children:[r.jsx(q,{width:16,height:16})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification",$size:"default"}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    style: {},
    children: <>
        <DmIcon20Add width={16} height={16} /> Label text
      </>,
    disabled: false,
    $active: false,
    tooltip: "notification",
    $size: "default"
  }
}`,...P.parameters?.docs?.source}}};const ae=["Button"];export{P as Button,ae as __namedExportsOrder,le as default};
