import{j as o}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{p,c as g}from"./styled-components.browser.esm-6dd904cc.js";import{u as v}from"./useCurrent-3439251d.js";import{I as b}from"./IconCheckSmall-4add6247.js";const w=136,V=24,W={width:w,height:V},j=(e,r)=>{if(r){if(typeof r=="function"){r(e);return}r&&"current"in r&&(r.current=e)}},m=s.memo(e=>{const{options:r,disabled:x,onSelect:n,resetText:u,selected:c,visible:f,_ref:y}=e,a=s.useRef({}),i=v(c);return s.useEffect(()=>{var t;f&&i.current&&a.current[i.current]&&((t=a.current[i.current])==null||t.scrollIntoView())},[i,a,f]),!r||x?null:o.jsxs(d,{ref:y,onScroll:t=>{t.stopPropagation(),t.preventDefault()},children:[!!u&&o.jsx(l,{onClick:()=>{n&&n(null)},children:u}),r.map(t=>o.jsxs(l,{ref:_=>{a.current[t.key]=_},$active:t.key===c,onClick:()=>{n&&n(t)},children:[o.jsx(h,{}),o.jsx("span",{children:t.text??t.key})]},t.key))]})}),h=p(b)`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.colors.textInput.default};
  position: absolute;
  left: 12px;
  top: 8px;
  opacity: 0;
  pointer-events: none;
`,l=p.li`
  ${e=>e.theme.flex.row}
  width: 100%;
  padding: 8px 12px 8px 36px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  user-select: none;
  word-break: break-all;

  ${({$active:e})=>e&&g`
      ${h} {
        opacity: 1;
      }
    `}

  &:hover {
    background-color: ${e=>e.theme.colors.button.hovered};
  }
`,d=p.ul`
  padding: 0;
  margin: ${e=>e.theme.padding.xxxxs}px 0;
  list-style: none;
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.textInput.default};
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  ${e=>e.theme.scrollbar}
  border-radius: ${e=>e.theme.radius.xxxxs}px;
  border: 1px solid ${e=>e.theme.colors.button.hovered};
  background-color: #fff;
`;try{m.displayName="Overlay",m.__docgenInfo={description:"",displayName:"Overlay",props:{selected:{defaultValue:null,description:"@description",name:"selected",required:!1,type:{name:"string | null"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"BaseOption[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: BaseOption | null) => void)"}},resetText:{defaultValue:null,description:"@description if set, options will inset one item with text provided to reset selected",name:"resetText",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},_ref:{defaultValue:null,description:"",name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLUListElement>"}}}}}catch{}try{l.displayName="Option",l.__docgenInfo={description:"",displayName:"Option",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="OptionsWrapper",d.__docgenInfo={description:"",displayName:"OptionsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{m as O,w as a,V as b,j as c,W as d};
//# sourceMappingURL=Overlay-3a37e5a2.js.map
