import{j as t}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{p as y,c as m}from"./styled-components.browser.esm-8c817f58.js";import{I as A}from"./IconChecked-147cf933.js";import{D as G}from"./DmIcon20Deploy-3df39080.js";import{I as N}from"./IconClose-9827f36a.js";import"./_commonjsHelpers-042e6b4d.js";const h=i.forwardRef(({checkIcon:e,indeterminate:a,indeterminateIcon:o,size:n,onChange:l,innerBoxStyles:s,activeBGColor:u,defaultBGColor:$,activeBorderColor:D,defaultBorderColor:O,activeIconColor:q,...r},w)=>{const[V,E]=i.useState(r.defaultChecked),C=typeof r.checked=="boolean"?r.checked:V,j=i.useMemo(()=>{const c=r.style?r.style:{};return n?{...c,width:n,height:n}:c},[n,r.style]),F=i.useCallback(c=>{r.readOnly||r.disabled||a||(l&&l(c),typeof r.checked!="boolean"&&E(c.target.checked))},[l,r.checked,r.disabled,r.readOnly,a]);return t.jsxs(b,{style:j,checked:C,disabled:r.disabled,readOnly:r.readOnly,indeterminate:a,activeBGColor:u,defaultBGColor:$,activeBorderColor:D,defaultBorderColor:O,activeIconColor:q,children:[t.jsxs(d,{style:s,children:[!a&&C&&(e||t.jsx(W,{})),a&&!!o&&o]}),t.jsx("input",{...r,type:"checkbox",ref:w,onChange:F})]})}),S=i.memo(h),d=y.div`
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}
  ${e=>e.theme.absoluteFillCSS}
  pointer-events: none;
  box-sizing: border-box;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  transition: all 0.2s ease;
`,T=m`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,W=y(A)`
  ${T}
`,b=y.div`
  position: relative;
  flex: none;
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}
  width: 20px;
  height: 20px;
  color: ${e=>e.checked?e.activeIconColor||"#fff":"transparent"};

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &[readonly="readonly"],
    &[readonly] {
      cursor: auto;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  ${({disabled:e,checked:a,theme:{colors:o},activeBGColor:n,activeBorderColor:l,defaultBGColor:s,defaultBorderColor:u})=>e?m`
        ${d} {
          border-color: ${u||o.Oxfordblue_100};
          background-color: ${s||o.Oxfordblue_100};
        }
      `:a?m`
        ${d} {
          border-color: ${l||o.Oxfordblue_200};
          background-color: ${n||o.Oxfordblue_200};
        }
      `:m`
      ${d} {
        border-color: ${u||o.Oxfordblue_100};
        background-color: ${s||o.Oxfordblue_100};
      }

      &:hover {
        ${d} {
          border-color: ${l||o.Oxfordblue_200};
          background-color: ${n||o.Oxfordblue_200};
        }
      }
    `}
`;try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"20"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"CSSProperties"}},activeBGColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description replace background color when active",name:"activeBGColor",required:!1,type:{name:"string"}},defaultBGColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description replace default background color",name:"defaultBGColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description replace border color when active",name:"activeBorderColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description replace default border color",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeIconColor:{defaultValue:null,description:"@description replace checked icon color",name:"activeIconColor",required:!1,type:{name:"string"}}}}}catch{}try{d.displayName="InnerBox",d.__docgenInfo={description:"",displayName:"InnerBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="Container",b.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const K={title:"PAAS/Checkbox",tags:["autodocs"],component:S};function B({...e}){return t.jsx(S,{...e})}const p={render:B,args:{size:20,disabled:!1,checked:void 0,activeIconColor:"#fff",defaultBorderColor:"#DCEBF3",defaultBGColor:"#DCEBF3",activeBorderColor:"#457D96",activeBGColor:"#457D96"}},f={render:B,args:{size:20,disabled:!1,indeterminate:!1,defaultChecked:!0,checkIcon:t.jsx(G,{}),indeterminateIcon:t.jsx(N,{})}};var x,k,_;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: CheckboxStory,
  args: {
    size: 20,
    disabled: false,
    checked: undefined,
    activeIconColor: "#fff",
    defaultBorderColor: "#DCEBF3",
    defaultBGColor: "#DCEBF3",
    activeBorderColor: "#457D96",
    activeBGColor: "#457D96"
  }
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var g,v,I;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: CheckboxStory,
  args: {
    size: 20,
    disabled: false,
    indeterminate: false,
    defaultChecked: true,
    checkIcon: <DmIcon20Deploy />,
    indeterminateIcon: <IconClose />
  }
}`,...(I=(v=f.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const L=["Checkbox","CheckboxWithIcon"];export{p as Checkbox,f as CheckboxWithIcon,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Checkbox.stories-3f094f71.js.map
