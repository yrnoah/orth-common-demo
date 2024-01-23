import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{s as b,A as m}from"./styled-components.browser.esm-6007d051.js";import{I as F}from"./IconChecked-147cf933.js";import{D as A}from"./DmIcon20Deploy-3df39080.js";import{I as R}from"./IconClose-9827f36a.js";import"./_commonjsHelpers-042e6b4d.js";const h=c.forwardRef(({checkIcon:e,indeterminate:o,indeterminateIcon:n,size:a,onChange:d,innerBoxStyles:s,activeBGColor:u,defaultBGColor:q,activeBorderColor:V,defaultBorderColor:D,activeIconColor:E,...r},O)=>{const[$,w]=c.useState(r.defaultChecked),C=typeof r.checked=="boolean"?r.checked:$,j=c.useMemo(()=>{const i=r.style?r.style:{};return a?{...i,width:a,height:a}:i},[a,r.style]),G=c.useCallback(i=>{r.readOnly||r.disabled||o||(d&&d(i),typeof r.checked!="boolean"&&w(i.target.checked))},[d,r.checked,r.disabled,r.readOnly,o]);return t.jsxs(y,{style:j,checked:C,disabled:r.disabled,readOnly:r.readOnly,indeterminate:o,activeBGColor:u,defaultBGColor:q,activeBorderColor:V,defaultBorderColor:D,activeIconColor:E,children:[t.jsxs(l,{style:s,children:[!o&&C&&(e||t.jsx(N,{})),o&&!!n&&n]}),t.jsx("input",{...r,type:"checkbox",ref:O,onChange:G})]})}),I=c.memo(h),l=b.div`
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}
  ${e=>e.theme.absoluteFillCSS}
  pointer-events: none;
  box-sizing: border-box;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  transition: all 0.2s ease;
`,z=m`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,N=b(F)`
  ${z}
`,y=b.div`
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

  ${({disabled:e,checked:o,theme:{colors:n},activeBGColor:a,activeBorderColor:d,defaultBGColor:s,defaultBorderColor:u})=>e?m`
        ${l} {
          border-color: ${u||n.Oxfordblue_100};
          background-color: ${s||n.Oxfordblue_100};
        }
      `:o?m`
        ${l} {
          border-color: ${d||n.Oxfordblue_200};
          background-color: ${a||n.Oxfordblue_200};
        }
      `:m`
      ${l} {
        border-color: ${u||n.Oxfordblue_100};
        background-color: ${s||n.Oxfordblue_100};
      }

      &:hover {
        ${l} {
          border-color: ${d||n.Oxfordblue_200};
          background-color: ${a||n.Oxfordblue_200};
        }
      }
    `}
`;try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"20"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"CSSProperties"}},activeBGColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description replace background color when active",name:"activeBGColor",required:!1,type:{name:"string"}},defaultBGColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description replace default background color",name:"defaultBGColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description replace border color when active",name:"activeBorderColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description replace default border color",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeIconColor:{defaultValue:null,description:"@description replace checked icon color",name:"activeIconColor",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="InnerBox",l.__docgenInfo={description:"",displayName:"InnerBox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{y.displayName="Container",y.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:{value:"20"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},defaultBGColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description replace default background color",name:"defaultBGColor",required:!1,type:{name:"string"}},activeBGColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description replace background color when active",name:"activeBGColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"Oxfordblue_100 #DCEBF3"},description:"@description replace default border color",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"Oxfordblue_200 #457D96"},description:"@description replace border color when active",name:"activeBorderColor",required:!1,type:{name:"string"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"CSSProperties"}},activeIconColor:{defaultValue:null,description:"@description replace checked icon color",name:"activeIconColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const W={title:"PAAS/Checkbox",tags:["autodocs"],component:I};function S({...e}){return t.jsx(I,{...e})}const f={render:S,args:{size:20,disabled:!1,checked:void 0,activeIconColor:"#fff",defaultBorderColor:"#DCEBF3",defaultBGColor:"#DCEBF3",activeBorderColor:"#457D96",activeBGColor:"#457D96"}},p={render:S,args:{size:20,disabled:!1,indeterminate:!1,defaultChecked:!0,checkIcon:t.jsx(A,{}),indeterminateIcon:t.jsx(R,{})}};var x,k,g;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(k=f.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var v,_,B;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: CheckboxStory,
  args: {
    size: 20,
    disabled: false,
    indeterminate: false,
    defaultChecked: true,
    checkIcon: <DmIcon20Deploy />,
    indeterminateIcon: <IconClose />
  }
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const K=["Checkbox","CheckboxWithIcon"];export{f as Checkbox,p as CheckboxWithIcon,K as __namedExportsOrder,W as default};
//# sourceMappingURL=Checkbox.stories-0b4d43ce.js.map
