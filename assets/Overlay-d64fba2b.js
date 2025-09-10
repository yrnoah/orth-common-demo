import{j as m,a}from"./jsx-runtime-a888423b.js";import{r as l}from"./index-8db94870.js";import{p,c as v}from"./styled-components.browser.esm-6dd904cc.js";import{u as b}from"./useCurrent-3439251d.js";import{I as w}from"./IconCheckSmall-fd51d182.js";const O=136,$=24,N={width:O,height:$},R=(e,r)=>{if(r){if(typeof r=="function"){r(e);return}r&&"current"in r&&(r.current=e)}},h=l.memo(e=>{const{options:r,disabled:y,onSelect:o,resetText:c,selected:u,visible:f,_ref:_}=e,n=l.useRef({}),i=b(u);return l.useEffect(()=>{var t;f&&i.current&&n.current[i.current]&&((t=n.current[i.current])==null||t.scrollIntoView())},[i,n,f]),!r||y?null:m(d,{ref:_,onScroll:t=>{t.stopPropagation(),t.preventDefault()},children:[!!c&&a(s,{onClick:()=>{o&&o(null)},children:c}),r.map(t=>m(s,{ref:g=>{n.current[t.key]=g},$active:t.key===u,onClick:()=>{o&&o(t)},children:[a(x,{}),a("span",{children:t.text??t.key})]},t.key))]})}),x=p(w)`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.colors.textInput.default};
  position: absolute;
  left: 12px;
  top: 8px;
  opacity: 0;
  pointer-events: none;
`,s=p.li`
  ${e=>e.theme.flex.row}
  width: 100%;
  padding: 8px 12px 8px 36px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  user-select: none;
  word-break: break-all;

  ${({$active:e})=>e&&v`
      ${x} {
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
`;try{h.displayName="Overlay",h.__docgenInfo={description:"",displayName:"Overlay",props:{selected:{defaultValue:null,description:"@description",name:"selected",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"BaseOption[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(item: BaseOption) => void"}},resetText:{defaultValue:null,description:"@description if set, options will inset one item with text provided to reset selected",name:"resetText",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},_ref:{defaultValue:null,description:"",name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLUListElement>"}}}}}catch{}try{s.displayName="Option",s.__docgenInfo={description:"",displayName:"Option",props:{}}}catch{}try{d.displayName="OptionsWrapper",d.__docgenInfo={description:"",displayName:"OptionsWrapper",props:{}}}catch{}export{h as O,O as a,$ as b,R as c,N as d};
//# sourceMappingURL=Overlay-d64fba2b.js.map
