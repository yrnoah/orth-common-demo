import{r as f,c as a,j as s,l as i,d as h}from"./iframe-D12yBJYT.js";import{S as G}from"./IconChecked-QuPbW0WO.js";const t={defaultBG:"transparent",defaultBorder:a.noColor.Grey11,defaultBGHover:"transparent",defaultBorderHover:a.brandColor.Primary8,activeBG:a.brandColor.Primary5,activeBorder:a.brandColor.Primary5,activeBGHover:a.brandColor.Primary8,activeBorderHover:a.brandColor.Primary8,disabledBG:a.noColor.Grey2,disabledBorder:a.noColor.Grey6,focusedOutline:"transparent"},y=({checkIcon:r,uncheckIcon:n,indeterminate:e,indeterminateIcon:v,size:c,onChange:p,innerBoxStyles:B,colorSets:C=t,...o})=>{const[m,$]=f.useState(o.defaultChecked),b=typeof o.checked=="boolean"?o.checked:m,x=f.useMemo(()=>{const l=o.style?o.style:{};return c?{...l,width:c,height:c}:l},[c,o.style]),k=f.useCallback(l=>{o.readOnly||o.disabled||e||(p&&p(l),typeof o.checked!="boolean"&&$(l.target.checked))},[p,o.checked,o.disabled,o.readOnly,e]);return s.jsxs(w,{style:x,checked:b,disabled:o.disabled,readOnly:o.readOnly,indeterminate:e,colorSets:C,size:c,children:[s.jsx("input",{...o,type:"checkbox",onChange:k}),s.jsxs(d,{style:B,children:[!e&&b&&(r||s.jsx(H,{})),!e&&!b&&!!n&&n,e&&!!v&&v]})]})},P=f.memo(y),u=24,d=h.div`
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}  
  ${r=>r.theme.absoluteFillCSS}
  pointer-events: none;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
`,g=i`
  width: 70%;
  height: 70%;
  pointer-events: none;
`,H=h(G)`
  ${g}
`,w=h.div`
  position: relative;
  flex: none;
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}
  width: ${u}px;
  height: ${u}px;
  color: ${r=>r.checked?r.colorSets?.activeIcon||"#fff":"transparent"};

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

  ${({disabled:r,checked:n,colorSets:e})=>r?i`
        ${d} {
          border-color: ${e?.disabledBorder||t.disabledBorder};
          background-color: ${e?.disabledBG||t.disabledBG};
        }
      `:n?i`
        ${d} {
          border-color: ${e?.activeBorder||t.activeBorder};
          background-color: ${e?.activeBG||t.activeBG};
        }

        &:hover {
          ${d} {
            border-color: ${e?.activeBorderHover||t.activeBorderHover};
            background-color: ${e?.activeBGHover||t.activeBGHover};
          }
        }
      `:i`
      ${d} {
        border-color: ${e?.defaultBorder||t.defaultBorder};
        background-color: ${e?.defaultBG||t.defaultBG};
      }

      &:hover {
        ${d} {
          border-color: ${e?.defaultBorderHover||t.defaultBorderHover};
          background-color: ${e?.defaultBGHover||t.defaultBGHover};
        }
      }
    `};

  ${({size:r,colorSets:n})=>{const e=(r||u)/u;return i`
      ${d} {
        outline: ${e}px solid transparent;
        outline-offset: ${e}px;
        border-style: solid;
        border-width: ${e}px;
        border-radius: ${e*2}px;
      }

      input:focus ~ ${d} {
        outline-color: ${n?.focusedOutline||t.focusedOutline};
      }
    `}}
`;y.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:`@default 24
@description width & height`},checkIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"@description replace default checked icon"},uncheckIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},indeterminateIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},innerBoxStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},colorSets:{required:!1,tsType:{name:"CheckboxColorSetsProps"},description:`@description replace default color sets
@example {
      ...defaultCheckboxColorSets,
      activeIcon: "#b9b5ff",
      defaultBG: "#cbfffc",
    }`,defaultValue:{value:`{
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
}`,computed:!1}}}};export{P as C,t as d};
