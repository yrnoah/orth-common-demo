import{j as f}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{p as b,c as u}from"./styled-components.browser.esm-6dd904cc.js";import{c as t}from"./colors-1c1355f0.js";import{I as _}from"./IconChecked-147cf933.js";const n={defaultBG:"transparent",defaultBorder:t.noColor.Grey11,defaultBGHover:"transparent",defaultBorderHover:t.brandColor.Primary8,activeBG:t.brandColor.Primary5,activeBorder:t.brandColor.Primary5,activeBGHover:t.brandColor.Primary8,activeBorderHover:t.brandColor.Primary8,disabledBG:t.noColor.Grey2,disabledBorder:t.noColor.Grey6,focusedOutline:"transparent"},y=c.forwardRef(({checkIcon:r,uncheckIcon:d,indeterminate:e,indeterminateIcon:v,size:i,onChange:p,innerBoxStyles:B,colorSets:C=n,...a},$)=>{const[x,k]=c.useState(a.defaultChecked),m=typeof a.checked=="boolean"?a.checked:x,g=c.useMemo(()=>{const l=a.style?a.style:{};return i?{...l,width:i,height:i}:l},[i,a.style]),G=c.useCallback(l=>{a.readOnly||a.disabled||e||(p&&p(l),typeof a.checked!="boolean"&&k(l.target.checked))},[p,a.checked,a.disabled,a.readOnly,e]);return f.jsxs(h,{style:g,checked:m,disabled:a.disabled,readOnly:a.readOnly,indeterminate:e,colorSets:C,size:i,children:[f.jsx("input",{...a,type:"checkbox",ref:$,onChange:G}),f.jsxs(o,{style:B,children:[!e&&m&&(r||f.jsx(H,{})),!e&&!m&&!!d&&d,e&&!!v&&v]})]})}),O=c.memo(y),s=24,o=b.div`
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}  
  ${r=>r.theme.absoluteFillCSS}
  pointer-events: none;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
`,w=u`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,H=b(_)`
  ${w}
`,h=b.div`
  position: relative;
  flex: none;
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}
  width: ${s}px;
  height: ${s}px;
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

  ${({size:r,colorSets:d})=>{const e=(r||s)/s;return u`
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
`;try{y.displayName="Checkbox",y.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},uncheckIcon:{defaultValue:null,description:"",name:"uncheckIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"CSSProperties"}},colorSets:{defaultValue:{value:`{
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
}`,name:"colorSets",required:!1,type:{name:"CheckboxColorSetsProps"}}}}}catch{}try{o.displayName="InnerBox",o.__docgenInfo={description:"",displayName:"InnerBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="Container",h.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{O as C,n as d};
//# sourceMappingURL=Checkbox-be45dc65.js.map
