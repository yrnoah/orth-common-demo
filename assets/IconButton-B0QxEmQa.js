import{r as s,j as p,d as T,l as d}from"./iframe-BY0Ds_wu.js";import{t as f,P as y}from"./Portal-CsufOtEp.js";import{T as b}from"./Tooltip-BVq8jL3O.js";import{u as P}from"./useRefreshPosition-DM-1Nh4A.js";const w=e=>{const{ref:o,tooltip:a,portalID:m=f,tooltipPosition:u="bottom",children:h,tooltipStyle:$,tooltipProps:v,...n}=e,r=s.useRef(null),[c,l]=s.useState(0);return P(()=>l(0)),s.useEffect(()=>()=>{r.current&&(r.current=null)},[]),p.jsxs(S,{...n,onMouseOver:t=>{n.onMouseOver?.(t),l(Date.now())},onMouseOut:t=>{n.onMouseOut?.(t),l(0)},ref:t=>{r.current=t,o&&(typeof o=="function"?o(t):o.current=t)},children:[!!a&&p.jsx(y,{id:m,children:s.createElement(b,{...v||{},tooltip:a,tooltipPosition:u,parent:r,key:`${c}`,show:!!c,style:$})}),h]})},i=d`
  color: ${e=>e.theme.colors.elementsContentFocus};
  background-color: ${e=>e.theme.colors.elementsLayerActivated};

  ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
`;d`
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
    ${i}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&i}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;const S=T.button.attrs({type:"button"})`
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
    ${i}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&i}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;w.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{$active:{required:!1,tsType:{name:"boolean"},description:""},$activeThemes:{required:!1,tsType:{name:"CSSObject"},description:"@description override active styles"},$hoverThemes:{required:!1,tsType:{name:"CSSObject"},description:"@description override hover styles"},$disableThemes:{required:!1,tsType:{name:"CSSObject"},description:"@description override disabled styles"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},portalID:{required:!1,tsType:{name:"string"},description:"@description which portal container to render tooltip"},tooltip:{required:!1,tsType:{name:'TooltipProps["tooltip"]',raw:'TooltipProps["tooltip"]'},description:""},tooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"union",raw:'"tooltip" | "tooltipPosition" | "parent" | "show" | "style"',elements:[{name:"literal",value:'"tooltip"'},{name:"literal",value:'"tooltipPosition"'},{name:"literal",value:'"parent"'},{name:"literal",value:'"show"'},{name:"literal",value:'"style"'}]}],raw:`Omit<
  TooltipProps,
  "tooltip" | "tooltipPosition" | "parent" | "show" | "style"
>`},description:""},tooltipPosition:{required:!1,tsType:{name:'TooltipProps["tooltipPosition"]',raw:'TooltipProps["tooltipPosition"]'},description:"@default bottom"},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{w as I};
