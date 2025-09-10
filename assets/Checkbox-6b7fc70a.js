import{j as B,a as v}from"./jsx-runtime-a888423b.js";import{r as c}from"./index-8db94870.js";import{p as b,c as u}from"./styled-components.browser.esm-6dd904cc.js";import{c as t}from"./colors-1c1355f0.js";import{I as H}from"./IconChecked-80c233fc.js";const n={defaultBG:"transparent",defaultBorder:t.noColor.Grey11,defaultBGHover:"transparent",defaultBorderHover:t.brandColor.Primary8,activeBG:t.brandColor.Primary5,activeBorder:t.brandColor.Primary5,activeBGHover:t.brandColor.Primary8,activeBorderHover:t.brandColor.Primary8,disabledBG:t.noColor.Grey2,disabledBorder:t.noColor.Grey6,focusedOutline:"transparent"},h=c.forwardRef(({checkIcon:r,uncheckIcon:d,indeterminate:e,indeterminateIcon:m,size:i,onChange:f,innerBoxStyles:C,colorSets:$=n,...a},k)=>{const[x,G]=c.useState(a.defaultChecked),s=typeof a.checked=="boolean"?a.checked:x,_=c.useMemo(()=>{const l=a.style?a.style:{};return i?{...l,width:i,height:i}:l},[i,a.style]),g=c.useCallback(l=>{a.readOnly||a.disabled||e||(f&&f(l),typeof a.checked!="boolean"&&G(l.target.checked))},[f,a.checked,a.disabled,a.readOnly,e]);return B(y,{style:_,checked:s,disabled:a.disabled,readOnly:a.readOnly,indeterminate:e,colorSets:$,size:i,children:[v("input",{...a,type:"checkbox",ref:k,onChange:g}),B(o,{style:C,children:[!e&&s&&(r||v(w,{})),!e&&!s&&!!d&&d,e&&!!m&&m]})]})}),N=c.memo(h),p=24,o=b.div`
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}  
  ${r=>r.theme.absoluteFillCSS}
  pointer-events: none;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
`,I=u`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,w=b(H)`
  ${I}
`,y=b.div`
  position: relative;
  flex: none;
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}
  width: ${p}px;
  height: ${p}px;
  color: ${r=>{var d;return r.checked?((d=r.colorSets)==null?void 0:d.activeIcon)||"#fff":"transparent"}};

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

  ${({disabled:r,checked:d,colorSets:e})=>r?u`
        ${o} {
          border-color: ${(e==null?void 0:e.disabledBorder)||n.disabledBorder};
          background-color: ${(e==null?void 0:e.disabledBG)||n.disabledBG};
        }
      `:d?u`
        ${o} {
          border-color: ${(e==null?void 0:e.activeBorder)||n.activeBorder};
          background-color: ${(e==null?void 0:e.activeBG)||n.activeBG};
        }

        &:hover {
          ${o} {
            border-color: ${(e==null?void 0:e.activeBorderHover)||n.activeBorderHover};
            background-color: ${(e==null?void 0:e.activeBGHover)||n.activeBGHover};
          }
        }
      `:u`
      ${o} {
        border-color: ${(e==null?void 0:e.defaultBorder)||n.defaultBorder};
        background-color: ${(e==null?void 0:e.defaultBG)||n.defaultBG};
      }

      &:hover {
        ${o} {
          border-color: ${(e==null?void 0:e.defaultBorderHover)||n.defaultBorderHover};
          background-color: ${(e==null?void 0:e.defaultBGHover)||n.defaultBGHover};
        }
      }
    `};

  ${({size:r,colorSets:d})=>{const e=(r||p)/p;return u`
      ${o} {
        outline: ${e}px solid transparent;
        outline-offset: ${e}px;
        border-style: solid;
        border-width: ${e}px;
        border-radius: ${e*2}px;
      }

      input:focus ~ ${o} {
        outline-color: ${(d==null?void 0:d.focusedOutline)||n.focusedOutline};
      }
    `}}
`;try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"React.ReactElement"}},uncheckIcon:{defaultValue:null,description:"",name:"uncheckIcon",required:!1,type:{name:"React.ReactElement"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"React.ReactElement"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"React.CSSProperties"}},colorSets:{defaultValue:{value:`{
  defaultBG: "transparent",
  defaultBorder: colors.noColor.Grey11,
  defaultBGHover: "transparent",
  defaultBorderHover: colors.brandColor.Primary8,
  activeBG: colors.brandColor.Primary5,
  activeBorder: colors.brandColor.Primary5,
  activeBGHover: colors.brandColor.Primary8,
  activeBorderHover: colors.brandColor.Primary8,
  disabledBG: colors.noColor.Grey2,
  disabledBorder: colors.noColor.Grey6,
  focusedOutline: "transparent",
}`},description:`@description replace default color sets
@example {
...defaultCheckboxColorSets,
activeIcon: "#b9b5ff",
defaultBG: "#cbfffc",
}`,name:"colorSets",required:!1,type:{name:"CheckboxColorSetsProps"}}}}}catch{}try{o.displayName="InnerBox",o.__docgenInfo={description:"",displayName:"InnerBox",props:{}}}catch{}try{y.displayName="Container",y.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}export{N as C,n as d};
//# sourceMappingURL=Checkbox-6b7fc70a.js.map
