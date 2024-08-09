import{j as t}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{S as _}from"./SegmentedButton-0cbcd1d1.js";import{p as G,c as p}from"./styled-components.browser.esm-655d472d.js";import"./_commonjsHelpers-042e6b4d.js";const a=s.forwardRef((e,r)=>{const{option:i,$instance:o=!1,$size:y="medium",active:d,disabled:l=!1,onActiveChange:m,...j}=e,[B,z]=s.useState(()=>typeof d=="string"?d:""),h=typeof d=="string"?d:B;return t.jsx(E,{...j,$size:y,disabled:l,ref:r,children:i.map(n=>{var v;const g=h===n.key,f={$size:y,$instance:o};return l&&(f.disabled=!0),l&&!g&&(f.style={...((v=n.properties)==null?void 0:v.style)||{},backgroundColor:"transparent"}),s.createElement(_,{...n.properties,...f,$active:g,onClick:x=>{var u,b;l||h!==n.key&&((b=(u=n.properties)==null?void 0:u.onClick)==null||b.call(u,x),m==null||m(n.key,x),z(n.key))},key:n.key})})})}),E=G.div`
  ${e=>e.theme.flex.row}
  width: fit-content;
  overflow: hidden;
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
  ${({$size:e,theme:r})=>e==="large"?p`
        padding: 4px;
        border-radius: ${r.radius.s}px;
      `:p`
      padding: 2px;
      border-radius: ${r.radius.xxxs}px;
    `}

  ${({disabled:e})=>e?p`
        background-color: transparent;
      `:p``}
`;try{a.displayName="SegmentedButtonGroup",a.__docgenInfo={description:"",displayName:"SegmentedButtonGroup",props:{option:{defaultValue:null,description:"@description button array",name:"option",required:!0,type:{name:"SegmentedButtonGroupOption[]"}},active:{defaultValue:null,description:"@description option.key | option.key array",name:"active",required:!1,type:{name:"string"}},onActiveChange:{defaultValue:null,description:"",name:"onActiveChange",required:!1,type:{name:"((activeKey: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},$instance:{defaultValue:{value:"false"},description:`@description override single button $instance;
when true: width=fit-content | min-width=unset
when false width=auto | min-width=64`,name:"$instance",required:!1,type:{name:"boolean"}},$size:{defaultValue:{value:"medium"},description:`@description override single button $size;
small: min-height=32, horizontal-padding=6 | medium: min-height=36, horizontal-padding=12`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"@description override single button disable;",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const k=[{key:"1",properties:{children:"1"}},{key:"2",properties:{children:"2"}},{key:"3",properties:{children:"3"}}],A=[{key:"1",properties:{children:"true",style:{flex:1}}},{key:"2",properties:{children:"false",style:{flex:1}}},{key:"3",properties:{children:"others",style:{flex:2}}}],N={title:"ODE Library/Buttons/SegmentedButtonGroup",tags:["autodocs"],component:a,argTypes:{$size:{control:"select",options:["medium","small","large"]},theme:{table:{disable:!0}}}};function C({...e}){const[r,i]=s.useState(e.active);return s.useEffect(()=>i(e.active||""),[e.active]),t.jsxs("div",{children:[t.jsx("h4",{children:"- default SegmentedButton Group"}),t.jsx("br",{}),t.jsx(a,{...e,active:r,option:e.option||[],onActiveChange:o=>i(o)}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- controlled size (option.properties.style.flex = number) "}),t.jsx("h4",{children:'- container style: width: "50vw", height: 80; item style: flex: 1 1 2'}),t.jsx("br",{}),t.jsx(a,{...e,active:r,option:A||[],style:{width:"50vw",height:80},onActiveChange:o=>i(o)})]})}const c={render:C,args:{active:k[1].key,disabled:!1,$instance:!1,option:k,$size:"medium"}};var $,S,w;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: SegmentedButtonGroupStory,
  args: {
    active: option[1].key,
    disabled: false,
    $instance: false,
    option,
    $size: "medium"
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const P=["SegmentedButtonGroup"];export{c as SegmentedButtonGroup,P as __namedExportsOrder,N as default};
//# sourceMappingURL=SegmentedButtonGroup.stories-e51d97bb.js.map
