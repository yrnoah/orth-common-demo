import{j as t}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{p as y,c as f}from"./styled-components.browser.esm-8c817f58.js";import{I as A}from"./IconChecked-147cf933.js";import{D as G}from"./DmIcon20Deploy-3df39080.js";import{I as N}from"./IconClose-9827f36a.js";import"./_commonjsHelpers-042e6b4d.js";const h=i.forwardRef(({checkIcon:e,indeterminate:a,indeterminateIcon:o,size:n,onChange:d,innerBoxStyles:s,activeBGColor:u,defaultBGColor:$,activeBorderColor:D,defaultBorderColor:q,activeIconColor:w,...r},V)=>{const[E,j]=i.useState(r.defaultChecked),b=typeof r.checked=="boolean"?r.checked:E,P=i.useMemo(()=>{const c=r.style?r.style:{};return n?{...c,width:n,height:n}:c},[n,r.style]),F=i.useCallback(c=>{r.readOnly||r.disabled||a||(d&&d(c),typeof r.checked!="boolean"&&j(c.target.checked))},[d,r.checked,r.disabled,r.readOnly,a]);return t.jsxs(C,{style:P,checked:b,disabled:r.disabled,readOnly:r.readOnly,indeterminate:a,activeBGColor:u,defaultBGColor:$,activeBorderColor:D,defaultBorderColor:q,activeIconColor:w,children:[t.jsxs(l,{style:s,children:[!a&&b&&(e||t.jsx(W,{})),a&&!!o&&o]}),t.jsx("input",{...r,type:"checkbox",ref:V,onChange:F})]})}),_=i.memo(h),l=y.div`
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}
  ${e=>e.theme.absoluteFillCSS}
  pointer-events: none;
  box-sizing: border-box;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  transition: all 0.2s ease;
`,T=f`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,W=y(A)`
  ${T}
`,C=y.div`
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

  ${({disabled:e,checked:a,theme:{colors:o},activeBGColor:n,activeBorderColor:d,defaultBGColor:s,defaultBorderColor:u})=>e?f`
        ${l} {
          border-color: ${u||o.baseColor.Blue1};
          background-color: ${s||o.baseColor.Blue1};
        }
      `:a?f`
        ${l} {
          border-color: ${d||o.brandColor.Primary7};
          background-color: ${n||o.brandColor.Primary7};
        }
      `:f`
      ${l} {
        border-color: ${u||o.baseColor.Blue1};
        background-color: ${s||o.baseColor.Blue1};
      }

      &:hover {
        ${l} {
          border-color: ${d||o.brandColor.Primary7};
          background-color: ${n||o.brandColor.Primary7};
        }
      }
    `}
`;try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"20"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"CSSProperties"}},activeBGColor:{defaultValue:{value:"brandColor.Primary7 #457D96"},description:"@description replace background color when active",name:"activeBGColor",required:!1,type:{name:"string"}},defaultBGColor:{defaultValue:{value:"baseColor.Blue1 #DCEBF3"},description:"@description replace default background color",name:"defaultBGColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"brandColor.Primary7 #457D96"},description:"@description replace border color when active",name:"activeBorderColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"baseColor.Blue1 #DCEBF3"},description:"@description replace default border color",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeIconColor:{defaultValue:null,description:"@description replace checked icon color",name:"activeIconColor",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="InnerBox",l.__docgenInfo={description:"",displayName:"InnerBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="Container",C.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const K={title:"PAAS/Checkbox",tags:["autodocs"],component:_};function S({...e}){return t.jsx(_,{...e})}const p={render:S,args:{size:20,disabled:!1,checked:void 0,activeIconColor:"#fff",defaultBorderColor:"#DCEBF3",defaultBGColor:"#DCEBF3",activeBorderColor:"#457D96",activeBGColor:"#457D96"}},m={render:S,args:{size:20,disabled:!1,indeterminate:!1,defaultChecked:!0,checkIcon:t.jsx(G,{}),indeterminateIcon:t.jsx(N,{})}};var k,x,g;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(x=p.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,B,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: CheckboxStory,
  args: {
    size: 20,
    disabled: false,
    indeterminate: false,
    defaultChecked: true,
    checkIcon: <DmIcon20Deploy />,
    indeterminateIcon: <IconClose />
  }
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const L=["Checkbox","CheckboxWithIcon"];export{p as Checkbox,m as CheckboxWithIcon,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Checkbox.stories-b87f29dc.js.map
