import{j as t}from"./jsx-runtime-94f6e698.js";import{r as x}from"./index-8db94870.js";import{p as o,c as O,t as N}from"./styled-components.browser.esm-8c817f58.js";import{r as k}from"./index-8ce4a492.js";import{f as R}from"./commons-26f23e02.js";import{t as C,s as Y}from"./typography-05e40c9f.js";import{u as B}from"./useEffectOnce-29e89586.js";import{u as D}from"./useClickAway-7b3ab22c.js";import{D as G}from"./DmIcon12Right-630a0046.js";import{D as E}from"./DmIconLargeSsp-4794a515.js";import{D as K,I as J,a as Q,b as X,c as Z}from"./IconTreeToTop-2ca854a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./util-051783c3.js";var f=(e=>(e[e.Empty=-2]="Empty",e[e.Title=-1]="Title",e))(f||{}),M=(e=>(e[e.Empty=-1]="Empty",e))(M||{});const L=x.createContext({currentSelectedItem:-1,currentEditItem:-2,setCurrentSelectedItem:()=>{},setCurrentEditItem:()=>{},handleRename:()=>()=>{}}),W=()=>x.useContext(L),ee=o.div`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 16px 16px 12px;
  display: flex;
  align-items: center;
  ${C.dymenu_MenuHeadline}
  border-bottom: 1px solid ${({theme:e})=>e.colors.addHoveredWarm};
  margin-bottom: 2px;
`,te=o.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  margin-left: 12px;
`,re=o.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  margin-left: 8px;
`,A=o.input`
  margin-left: 6px;
  outline: none;
  ${C.dymenu_MenuHeadline}
  box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.Clausblue_200} inset;
  border: none;
  padding: 4px 6px;
  display: flex;
  width: calc(100% - 24px);
  align-items: center;
  height: 26px;
  border-radius: 5px;
  box-sizing: border-box;
`,ne=o(A)`
  margin-left: 2px;
`,oe=o.div`
  ${e=>e.selected?O`
          background: ${e.theme.colors.noColor.Grey2};

          .selected {
            background: ${e.theme.colors.baseColor.Blue1};
          }
        `:void 0}
`,ie=o.div`
  position: absolute;
  left: 10px;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  display: flex;
  ${e=>e.$rotate?"transform: rotate(90deg);":""}
  transition: transform 300ms ease-out;
  ${({theme:e})=>e.flexCSS.center}
  cursor: pointer;
`,se=o.div`
  width: 24px;
  height: 24px;
  border-radius: 7px;
  display: flex;
  flex-shrink: 0;
  ${({theme:e})=>e.flexCSS.center}
`,ae=o.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  padding-left: ${e=>e.left}px;
  ${C.dymenu_MenuHeadline}

  :hover {
    box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.Clausblue_200} inset;
  }
`;o.div`
  overflow: hidden;
`;const le=22;function w({id:e,leaves:r,layer:n=1,...i}){const{currentEditItem:p,setCurrentEditItem:m,currentSelectedItem:l,setCurrentSelectedItem:s,handleRename:u}=W(),[h,g]=x.useState(!1),c=!!(r!=null&&r.length);return t.jsxs(oe,{selected:l===e,children:[t.jsx(ue,{className:l===e?"selected":"",expand:h,setExpand:g,...i,left:n*le,editing:p===e,hasChild:c,onClick:()=>{s==null||s(e)},onDoubleClick:()=>m==null?void 0:m(e),handleRename:u==null?void 0:u(e)}),h&&(r==null?void 0:r.map(({type:a,item:d,children:y})=>t.jsx(w,{...d,type:a,leaves:y,layer:n+1},d.id)))]})}function ue({className:e,expand:r,setExpand:n,left:i,hasChild:p,type:m,icon:l,name:s,editing:u,onClick:h,onDoubleClick:g,handleRename:c}){const a=x.useRef(null);return B(()=>{var d,y;u&&((d=a.current)==null||d.focus(),(y=a.current)==null||y.select())}),D(a,()=>{u&&a.current&&(c==null||c(a.current.value))}),t.jsxs(ae,{className:e,left:i+16,onClick:h,children:[p&&t.jsx(ie,{$rotate:r,onClick:()=>n(!r),children:t.jsx(G,{width:10,height:10})}),t.jsx(H,{type:m,icon:l}),u?t.jsx(ne,{ref:a,defaultValue:s,onKeyUp:d=>{switch(d.key){case"Enter":u&&a.current&&(c==null||c(a.current.value));return;case"Escape":u&&(c==null||c(s));return;default:return}}}):t.jsx(re,{onDoubleClick:g,children:s})]})}function H({type:e,icon:r}){const{colors:n}=N();return t.jsxs(se,{children:[!!r&&r,!r&&e==="group"&&t.jsx(E,{width:20,height:12,color:n.Neutral_400}),!r&&e==="ssp"&&t.jsx(E,{width:20,height:12,color:n.Neutral_400}),!r&&e==="fmu"&&t.jsx(K,{width:21,height:14,color:n.Neutral_400}),!r&&e==="input"&&t.jsx(J,{width:16,height:16,color:n.Neutral_400}),!r&&e==="output"&&t.jsx(Q,{width:16,height:16,color:n.Neutral_400})]})}const _=({name:e,icon:r,handleRenameSSP:n})=>{const i=x.useRef(null),{currentEditItem:p,setCurrentEditItem:m}=W();return B(()=>{var l,s;p===f.Title&&((l=i.current)==null||l.focus(),(s=i.current)==null||s.select())}),D(i,()=>{var l;p===f.Title&&n(((l=i.current)==null?void 0:l.value)??"NamingError")}),t.jsxs(ee,{onDoubleClick:()=>m==null?void 0:m(f.Title),children:[t.jsx(H,{type:"ssp",icon:r}),p===f.Title?t.jsx(A,{ref:i,defaultValue:e,onKeyUp:l=>{var s,u;switch(l.key){case"Enter":p===f.Title&&((s=i.current)!=null&&s.value)&&n((u=i.current)==null?void 0:u.value);return;case"Escape":p===f.Title&&n(e);return;default:return}}}):t.jsx(te,{children:e})]})};try{w.displayName="Item",w.__docgenInfo={description:"",displayName:"Item",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"SystemIdType"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},layer:{defaultValue:{value:"1"},description:"",name:"layer",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"group"'},{value:'"input"'},{value:'"output"'},{value:'"ssp"'},{value:'"fmu"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},leaves:{defaultValue:null,description:"",name:"leaves",required:!1,type:{name:"ITreeItem[]"}}}}}catch{}try{_.displayName="Title",_.__docgenInfo={description:"",displayName:"Title",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},handleRenameSSP:{defaultValue:null,description:"",name:"handleRenameSSP",required:!0,type:{name:"(title: string) => void"}}}}}catch{}function S({hidden:e,initialHide:r,sspTitle:n,data:i,editTitle:p,handleRenameSSP:m,handleRenameItem:l,currentSelectedItem:s,setCurrentSelectedItem:u,showBackIcon:h,backIconLabel:g,handleClickBackButton:c,style:a}){const[d,y]=x.useState(r),[F,T]=x.useState(p?f.Title:f.Empty),P=x.useRef(null),{colors:U}=N(),j=()=>T(f.Empty);return t.jsxs(L.Provider,{value:{currentEditItem:F,setCurrentEditItem:T,currentSelectedItem:s,setCurrentSelectedItem:u,handleRename:I=>v=>{j(),l(I)(v)}},children:[k.createPortal(t.jsx(ce,{revert:d,onClick:()=>y(!d),hidden:e,children:t.jsx(X,{width:12,height:12,color:U.Neutral_300})}),document.body),!e&&h&&k.createPortal(t.jsx(me,{onClick:c,style:{top:d?"calc(50% - 10px)":a==null?void 0:a.top,left:d?"50px":"20%"},children:t.jsxs(fe,{hoverable:d,children:[t.jsx(he,{children:g}),t.jsx(xe,{})]})}),document.body),!e&&t.jsxs(pe,{hide:d,style:a,ref:P,children:[t.jsx(_,{name:n,handleRenameSSP:I=>{m(I),j()}}),t.jsx(de,{children:i.map(({type:I,item:v,children:z},ve)=>t.jsx(w,{id:v.id,type:I,name:v.name,leaves:z},v.id))})]})]})}const de=o.div`
  overflow-y: scroll;
  height: calc(100% - 52px);
  border-radius: 0 0 16px 16px;

  ::-webkit-scrollbar {
    display: none;
  }
`,ce=o.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 6px;
  z-index: 10;
  display: flex;
  ${R.center};
  transition: background 150ms linear;

  :hover {
    background: ${({theme:e})=>e.colors.noColor.Grey2};
  }

  svg {
    transition: all 300ms ease-out;
    transform: ${e=>e.revert?"rotate(-180deg)":""};
  }
`,pe=o.div`
  position: absolute;
  top: 50%;
  left: ${e=>e.hide?"-25%":"52px"};
  transition: left 450ms ease-in-out;
  transform: translateY(-50%);
  height: 87.5%;
  min-width: 15%;
  max-width: 22%;
  box-shadow: ${Y.floatingLight};
  border-radius: 16px;
  background: white;
`,me=o.div`
  position: absolute;
  overflow: hidden;
  ${e=>e.theme.fonts["Body-Medium/Bold"]}
  color: black;
`,fe=o.div`
  position: relative;
  right: calc(100% - 20px);
  transition: right 150ms ease-out;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  ${e=>e.hoverable?":hover { right: 0px; }":""}
`,xe=o(Z)`
  width: 20px;
  height: 20px;
`,he=o.span`
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
`;try{S.displayName="FileTree",S.__docgenInfo={description:"",displayName:"FileTree",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},initialHide:{defaultValue:null,description:"",name:"initialHide",required:!0,type:{name:"boolean"}},sspTitle:{defaultValue:null,description:"",name:"sspTitle",required:!0,type:{name:"string"}},editTitle:{defaultValue:null,description:"",name:"editTitle",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ITreeItem[]"}},currentSelectedItem:{defaultValue:null,description:"",name:"currentSelectedItem",required:!0,type:{name:"SystemIdType"}},setCurrentSelectedItem:{defaultValue:null,description:"",name:"setCurrentSelectedItem",required:!0,type:{name:"(id: SystemIdType) => void"}},handleRenameSSP:{defaultValue:null,description:"",name:"handleRenameSSP",required:!0,type:{name:"(title: string) => void"}},handleRenameItem:{defaultValue:null,description:"",name:"handleRenameItem",required:!0,type:{name:"(id: SystemIdType) => (title: string) => void"}},showBackIcon:{defaultValue:null,description:"",name:"showBackIcon",required:!0,type:{name:"boolean"}},backIconLabel:{defaultValue:null,description:"",name:"backIconLabel",required:!0,type:{name:"string"}},handleClickBackButton:{defaultValue:null,description:"",name:"handleClickBackButton",required:!0,type:{name:"MouseEventHandler<Element>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Be={title:"PAAS/SystemBuilder/FileTree",component:S},ye=()=>{const[e,r]=x.useState(M.Empty),[n,i]=x.useState("MySystem");return t.jsx(ge,{children:t.jsx(S,{sspTitle:n,data:Ie,currentSelectedItem:e,setCurrentSelectedItem:r,handleRenameSSP:i,handleRenameItem:()=>()=>{},initialHide:!1,showBackIcon:!0,backIconLabel:"A Long Name Icon",handleClickBackButton:()=>{}})})},b={render:()=>t.jsx(ye,{})},ge=o.div`
  position: relative;
  width: 800px;
  height: 520px;
  display: flex;
  ${e=>e.theme.flexCSS.center}
`,Ie=[{type:"ssp",item:{id:1,name:"MySystem",system_type:2,description:"A",version:"2.0"},children:[{type:"fmu",item:{id:101,name:"FMU 1",system_type:3,description:"A",version:"2.0"}},{type:"fmu",item:{id:102,name:"FMU 2",system_type:3,description:"A",version:"2.0"}}]},{type:"group",item:{id:2,name:"MySystem",system_type:2,description:"A",version:"2.0"}}];var $,V,q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Component />
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const De=["FileTree"];export{b as FileTree,De as __namedExportsOrder,Be as default};
//# sourceMappingURL=NewNavigator.stories-12ef7f07.js.map
