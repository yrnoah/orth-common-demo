import{n as d,j as n,d as c,m as p,l as a}from"./iframe-BY0Ds_wu.js";import{S as u}from"./DmIcon20Add-B6qWdyw7.js";import"./preload-helper-D9Z9MdNV.js";const m=e=>{const{colors:r}=d(),{$size:i=16,$fillColor:t=r.elementsContentFocus,...o}=e;return n.jsxs(f,{...o,width:i+1,height:i,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"5.16699",cy:"4.6665",r:"2",fill:t}),n.jsx("ellipse",{cx:"11.834",cy:"4.6665",rx:"2",ry:"2",fill:t}),n.jsx("ellipse",{cx:"11.834",cy:"4.6665",rx:"2",ry:"2",fill:"white",fillOpacity:"0.56"}),n.jsx("circle",{cx:"11.834",cy:"11.333",r:"2",fill:t}),n.jsx("circle",{cx:"11.834",cy:"11.333",r:"2",fill:"white",fillOpacity:"0.32"}),n.jsx("ellipse",{cx:"5.16699",cy:"11.333",rx:"2",ry:"2",fill:t}),n.jsx("ellipse",{cx:"5.16699",cy:"11.333",rx:"2",ry:"2",fill:"white",fillOpacity:"0.16"})]})},g=p`
  0% {
    transform: rotate(0deg);
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    animation-delay: 1ms;
  }
  50% {
    transform: rotate(180deg);
    animation-duration: 600ms;
    animation-timing-function: cubic-bezier(0, 0.5, 0.28, 1);
    animation-delay: 1ms;
  }
  100% {
    transform: rotate(360deg);
    animation-duration: 0ms;
    animation-delay: 1ms;
  }
`,f=c.svg`
  animation: ${g} 1s linear infinite;
`;m.__docgenInfo={description:"",methods:[],displayName:"DotLoading",props:{$size:{required:!1,tsType:{name:"number"},description:"@default 16px"},$fillColor:{required:!1,tsType:{name:"string"},description:"@default theme.colors.elementsContentFocus"}}};function s(e){const{children:r,loadingIconProps:i,...t}=e;let o=r;return e.$loading&&(o=n.jsx(m,{...i})),n.jsx(h,{...t,children:o})}const h=c.div.attrs({role:"option"})`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.fonts.Compact}
  align-items: center;
  gap: 6px;
  width: max-content;
  background-color: ${e=>e.theme.colors.elementsBackground};
  border: 1px solid transparent;
  color: ${e=>e.$type==="danger"?e.theme.colors.elementsHintDanger:e.theme.colors.elementsContentMain};
  transition: all ${e=>e.theme.animation.duration};
  user-select: none;

  ${({$size:e="medium"})=>{let r=40,i="0 16px";return e==="small"&&(r=32,i="0 8px"),a`
      min-height: ${r}px;
      padding: ${i};
    `}}

  &:hover {
    background-color: ${e=>e.theme.colors.elementsBackgroundAlt};
  }

  &:active {
    border-color: ${e=>e.theme.colors.elementsContentFocus};
  }

  ${({disabled:e,$active:r,$type:i,theme:{colors:t}})=>{const o=i==="danger";if(e)return a`
        opacity: 0.3;
        cursor: not-allowed;

        &:hover {
          background-color: ${t.elementsBackground};
        }

        &:active {
          border-color: transparent;
        }
      `;if(r)return a`
        border-color: ${o?t.elementsHintDanger:t.elementsContentFocus};

        &:hover {
          background-color: ${o?t.elementsBackgroundAltDanger:t.elementsBackgroundAlt};
        }

        &:active {
          border-color: ${o?t.elementsHintDanger:t.elementsContentFocus};
        }
      `;if(o)return a`
        &:hover {
          background-color: ${t.elementsBackgroundAltDanger};
        }

        &:active {
          border-color: ${t.elementsHintDanger};
        }
      `}}
`;s.__docgenInfo={description:"@description default is one line option with flex row and center, if needs to render multiple line text, control children node outside of the component",methods:[],displayName:"Option",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},$active:{required:!1,tsType:{name:"boolean"},description:""},$size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"@default medium"},$loading:{required:!1,tsType:{name:"boolean"},description:""},$type:{required:!1,tsType:{name:"union",raw:'"danger" | (string & {})',elements:[{name:"literal",value:'"danger"'},{name:"unknown"}]},description:""},loadingIconProps:{required:!1,tsType:{name:"DotLoadingProps"},description:""}}};const v={title:"ODE Library/Options",tags:["autodocs"],component:s,argTypes:{$size:{control:"select",options:["medium","small"]},$type:{control:"select",options:["danger","default"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function x({...e}){const{colors:r}=d();return n.jsxs("div",{style:{padding:20,background:r.container500},children:[n.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=588-3753&t=a5ifTQ3AbCjvhtpa-4",rel:"noreferrer",children:"design reference"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("h4",{children:"- default Option"}),n.jsx("br",{}),n.jsx(s,{...e})]})}const l={render:x,args:{children:n.jsxs(n.Fragment,{children:[n.jsx(u,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,$loading:!1,loadingIconProps:{$size:16,$fillColor:"orange"},$size:"medium",$type:"danger"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: OptionStory,
  args: {
    children: <>
        <DmIcon20Add width={20} height={20} /> Label text
      </>,
    disabled: false,
    $active: false,
    $loading: false,
    loadingIconProps: {
      $size: 16,
      $fillColor: "orange"
    },
    $size: "medium",
    $type: "danger"
  }
}`,...l.parameters?.docs?.source}}};const j=["OptionDefault"];export{l as OptionDefault,j as __namedExportsOrder,v as default};
