import{j as f}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{p as h,c as u}from"./styled-components.browser.esm-655d472d.js";import{c as t}from"./colors-5a178381.js";import{I as _}from"./IconChecked-147cf933.js";const d={defaultBG:"transparent",defaultBorder:t.noColor.Grey11,defaultBGHover:"transparent",defaultBorderHover:t.brandColor.Primary8,activeBG:t.brandColor.Primary5,activeBorder:t.brandColor.Primary5,activeBGHover:t.brandColor.Primary8,activeBorderHover:t.brandColor.Primary8,disabledBG:t.noColor.Grey2,disabledBorder:t.noColor.Grey6,focusedOutline:"transparent"},m=c.forwardRef(({checkIcon:r,indeterminate:n,indeterminateIcon:e,size:i,onChange:s,innerBoxStyles:v,colorSets:B=d,...a},C)=>{const[$,x]=c.useState(a.defaultChecked),b=typeof a.checked=="boolean"?a.checked:$,k=c.useMemo(()=>{const l=a.style?a.style:{};return i?{...l,width:i,height:i}:l},[i,a.style]),G=c.useCallback(l=>{a.readOnly||a.disabled||n||(s&&s(l),typeof a.checked!="boolean"&&x(l.target.checked))},[s,a.checked,a.disabled,a.readOnly,n]);return f.jsxs(y,{style:k,checked:b,disabled:a.disabled,readOnly:a.readOnly,indeterminate:n,colorSets:B,size:i,children:[f.jsx("input",{...a,type:"checkbox",ref:C,onChange:G}),f.jsxs(o,{style:v,children:[!n&&b&&(r||f.jsx(w,{})),n&&!!e&&e]})]})}),O=c.memo(m),p=24,o=h.div`
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}  
  ${r=>r.theme.absoluteFillCSS}
  pointer-events: none;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
`,g=u`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,w=h(_)`
  ${g}
`,y=h.div`
  position: relative;
  flex: none;
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}
  width: ${p}px;
  height: ${p}px;
  color: ${r=>{var n;return r.checked?((n=r.colorSets)==null?void 0:n.activeIcon)||"#fff":"transparent"}};

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

  ${({disabled:r,checked:n,colorSets:e})=>r?u`
        ${o} {
          border-color: ${(e==null?void 0:e.disabledBorder)||d.disabledBorder};
          background-color: ${(e==null?void 0:e.disabledBG)||d.disabledBG};
        }
      `:n?u`
        ${o} {
          border-color: ${(e==null?void 0:e.activeBorder)||d.activeBorder};
          background-color: ${(e==null?void 0:e.activeBG)||d.activeBG};
        }

        &:hover {
          ${o} {
            border-color: ${(e==null?void 0:e.activeBorderHover)||d.activeBorderHover};
            background-color: ${(e==null?void 0:e.activeBGHover)||d.activeBGHover};
          }
        }
      `:u`
      ${o} {
        border-color: ${(e==null?void 0:e.defaultBorder)||d.defaultBorder};
        background-color: ${(e==null?void 0:e.defaultBG)||d.defaultBG};
      }

      &:hover {
        ${o} {
          border-color: ${(e==null?void 0:e.defaultBorderHover)||d.defaultBorderHover};
          background-color: ${(e==null?void 0:e.defaultBGHover)||d.defaultBGHover};
        }
      }
    `};

  ${({size:r,colorSets:n})=>{const e=(r||p)/p;return u`
      ${o} {
        outline: ${e}px solid transparent;
        outline-offset: ${e}px;
        border-style: solid;
        border-width: ${e}px;
        border-radius: ${e*2}px;
      }

      input:focus ~ ${o} {
        outline-color: ${(n==null?void 0:n.focusedOutline)||d.focusedOutline};
      }
    `}}
`;try{m.displayName="Checkbox",m.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"@description width & height",name:"size",required:!1,type:{name:"number"}},checkIcon:{defaultValue:null,description:"@description replace default checked icon",name:"checkIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},innerBoxStyles:{defaultValue:null,description:"",name:"innerBoxStyles",required:!1,type:{name:"CSSProperties"}},colorSets:{defaultValue:{value:`{
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
}`,name:"colorSets",required:!1,type:{name:"CheckboxColorSetsProps"}}}}}catch{}try{o.displayName="InnerBox",o.__docgenInfo={description:"",displayName:"InnerBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="Container",y.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{O as C,d};
//# sourceMappingURL=Checkbox-277e1a82.js.map
