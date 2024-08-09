import{j as t}from"./jsx-runtime-94f6e698.js";import{r as x}from"./index-8db94870.js";import{c as g,p as i,t as B}from"./styled-components.browser.esm-655d472d.js";import{r as $}from"./index-8ce4a492.js";import{f as G}from"./commons-2a828b44.js";import{u as M,a as H}from"./useEffectOnce-838fab99.js";import{D as K,a as J,I as Q,b as X,c as Z,d as ee}from"./IconTreeToTop-79ea5bb6.js";import{D as E}from"./DmIconLargeSsp-4794a515.js";import"./_commonjsHelpers-042e6b4d.js";import"./util-051783c3.js";const te={floatingLight:"0px 2px 10px rgba(122, 111, 101, 0.35)",floatingDark:"0px 3px 20px -2px rgba(5, 18, 27, 0.35)",arrowFloating:"0px 7px 3px rgba(140, 67, 0, 0.35)"},D=g`
  font-family: "Be Vietnam Pro", "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0;
`,re=g`
  ${D}
  font-weight: 500;
`,ne=g`
  ${D}
  font-weight: 400;
`,L=g`
  font-family: "Be Vietnam Pro", "Helvetica Neue", sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0;
`,ie=g`
  ${L}
  font-weight: 600;
  text-align: center;
`,C={dymenu_MenuHeadline:re,dymenu_MenuTitle:ne,dymenu_MenuBody:L,dymenu_MenuBtnText:ie};var f=(e=>(e[e.Empty=-2]="Empty",e[e.Title=-1]="Title",e))(f||{}),P=(e=>(e[e.Empty=-1]="Empty",e))(P||{});const W=x.createContext({currentSelectedItem:-1,currentEditItem:-2,setCurrentSelectedItem:()=>{},setCurrentEditItem:()=>{},handleRename:()=>()=>{}}),A=()=>x.useContext(W),oe=i.div`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 16px 16px 12px;
  display: flex;
  align-items: center;
  ${C.dymenu_MenuHeadline}
  border-bottom: 1px solid ${({theme:e})=>e.colors.addHoveredWarm};
  margin-bottom: 2px;
`,se=i.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  margin-left: 12px;
`,ae=i.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  margin-left: 8px;
`,F=i.input`
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
`,le=i(F)`
  margin-left: 2px;
`,ue=i.div`
  ${e=>e.selected?g`
          background: ${e.theme.colors.noColor.Grey2};

          .selected {
            background: ${e.theme.colors.baseColor.Blue1};
          }
        `:void 0}
`,ce=i.div`
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
`,de=i.div`
  width: 24px;
  height: 24px;
  border-radius: 7px;
  display: flex;
  flex-shrink: 0;
  ${({theme:e})=>e.flexCSS.center}
`,pe=i.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  padding-left: ${e=>e.left}px;
  ${C.dymenu_MenuHeadline}

  :hover {
    box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.Clausblue_200} inset;
  }
`;i.div`
  overflow: hidden;
`;const me=22;function _({id:e,leaves:r,layer:n=1,...o}){const{currentEditItem:p,setCurrentEditItem:m,currentSelectedItem:l,setCurrentSelectedItem:s,handleRename:u}=A(),[h,I]=x.useState(!1),d=!!(r!=null&&r.length);return t.jsxs(ue,{selected:l===e,children:[t.jsx(fe,{className:l===e?"selected":"",expand:h,setExpand:I,...o,left:n*me,editing:p===e,hasChild:d,onClick:()=>{s==null||s(e)},onDoubleClick:()=>m==null?void 0:m(e),handleRename:u==null?void 0:u(e)}),h&&(r==null?void 0:r.map(({type:a,item:c,children:y})=>t.jsx(_,{...c,type:a,leaves:y,layer:n+1},c.id)))]})}function fe({className:e,expand:r,setExpand:n,left:o,hasChild:p,type:m,icon:l,name:s,editing:u,onClick:h,onDoubleClick:I,handleRename:d}){const a=x.useRef(null);return M(()=>{var c,y;u&&((c=a.current)==null||c.focus(),(y=a.current)==null||y.select())}),H(a,()=>{u&&a.current&&(d==null||d(a.current.value))}),t.jsxs(pe,{className:e,left:o+16,onClick:h,children:[p&&t.jsx(ce,{$rotate:r,onClick:()=>n(!r),children:t.jsx(K,{width:10,height:10})}),t.jsx(z,{type:m,icon:l}),u?t.jsx(le,{ref:a,defaultValue:s,onKeyUp:c=>{switch(c.key){case"Enter":u&&a.current&&(d==null||d(a.current.value));return;case"Escape":u&&(d==null||d(s));return;default:return}}}):t.jsx(ae,{onDoubleClick:I,children:s})]})}function z({type:e,icon:r}){const{colors:n}=B();return t.jsxs(de,{children:[!!r&&r,!r&&e==="group"&&t.jsx(E,{width:20,height:12,color:n.Neutral_400}),!r&&e==="ssp"&&t.jsx(E,{width:20,height:12,color:n.Neutral_400}),!r&&e==="fmu"&&t.jsx(J,{width:21,height:14,color:n.Neutral_400}),!r&&e==="input"&&t.jsx(Q,{width:16,height:16,color:n.Neutral_400}),!r&&e==="output"&&t.jsx(X,{width:16,height:16,color:n.Neutral_400})]})}const T=({name:e,icon:r,handleRenameSSP:n})=>{const o=x.useRef(null),{currentEditItem:p,setCurrentEditItem:m}=A();return M(()=>{var l,s;p===f.Title&&((l=o.current)==null||l.focus(),(s=o.current)==null||s.select())}),H(o,()=>{var l;p===f.Title&&n(((l=o.current)==null?void 0:l.value)??"NamingError")}),t.jsxs(oe,{onDoubleClick:()=>m==null?void 0:m(f.Title),children:[t.jsx(z,{type:"ssp",icon:r}),p===f.Title?t.jsx(F,{ref:o,defaultValue:e,onKeyUp:l=>{var s,u;switch(l.key){case"Enter":p===f.Title&&((s=o.current)!=null&&s.value)&&n((u=o.current)==null?void 0:u.value);return;case"Escape":p===f.Title&&n(e);return;default:return}}}):t.jsx(se,{children:e})]})};try{_.displayName="Item",_.__docgenInfo={description:"",displayName:"Item",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"SystemIdType"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},layer:{defaultValue:{value:"1"},description:"",name:"layer",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"group"'},{value:'"input"'},{value:'"output"'},{value:'"ssp"'},{value:'"fmu"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},leaves:{defaultValue:null,description:"",name:"leaves",required:!1,type:{name:"ITreeItem[]"}}}}}catch{}try{T.displayName="Title",T.__docgenInfo={description:"",displayName:"Title",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},handleRenameSSP:{defaultValue:null,description:"",name:"handleRenameSSP",required:!0,type:{name:"(title: string) => void"}}}}}catch{}function S({hidden:e,initialHide:r,sspTitle:n,data:o,editTitle:p,handleRenameSSP:m,handleRenameItem:l,currentSelectedItem:s,setCurrentSelectedItem:u,showBackIcon:h,backIconLabel:I,handleClickBackButton:d,style:a}){const[c,y]=x.useState(r),[U,j]=x.useState(p?f.Title:f.Empty),O=x.useRef(null),{colors:R}=B(),k=()=>j(f.Empty);return t.jsxs(W.Provider,{value:{currentEditItem:U,setCurrentEditItem:j,currentSelectedItem:s,setCurrentSelectedItem:u,handleRename:v=>b=>{k(),l(v)(b)}},children:[$.createPortal(t.jsx(he,{revert:c,onClick:()=>y(!c),hidden:e,children:t.jsx(Z,{width:12,height:12,color:R.Neutral_300})}),document.body),!e&&h&&$.createPortal(t.jsx(ge,{onClick:d,style:{top:c?"calc(50% - 10px)":a==null?void 0:a.top,left:c?"50px":"20%"},children:t.jsxs(Ie,{hoverable:c,children:[t.jsx(be,{children:I}),t.jsx(ve,{})]})}),document.body),!e&&t.jsxs(ye,{hide:c,style:a,ref:O,children:[t.jsx(T,{name:n,handleRenameSSP:v=>{m(v),k()}}),t.jsx(xe,{children:o.map(({type:v,item:b,children:Y},Te)=>t.jsx(_,{id:b.id,type:v,name:b.name,leaves:Y},b.id))})]})]})}const xe=i.div`
  overflow-y: scroll;
  height: calc(100% - 52px);
  border-radius: 0 0 16px 16px;

  ::-webkit-scrollbar {
    display: none;
  }
`,he=i.div`
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
  ${G.center};
  transition: background 150ms linear;

  :hover {
    background: ${({theme:e})=>e.colors.noColor.Grey2};
  }

  svg {
    transition: all 300ms ease-out;
    transform: ${e=>e.revert?"rotate(-180deg)":""};
  }
`,ye=i.div`
  position: absolute;
  top: 50%;
  left: ${e=>e.hide?"-25%":"52px"};
  transition: left 450ms ease-in-out;
  transform: translateY(-50%);
  height: 87.5%;
  min-width: 15%;
  max-width: 22%;
  box-shadow: ${te.floatingLight};
  border-radius: 16px;
  background: white;
`,ge=i.div`
  position: absolute;
  overflow: hidden;
  ${e=>e.theme.fonts["Body-Medium/Bold"]}
  color: black;
`,Ie=i.div`
  position: relative;
  right: calc(100% - 20px);
  transition: right 150ms ease-out;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  ${e=>e.hoverable?":hover { right: 0px; }":""}
`,ve=i(ee)`
  width: 20px;
  height: 20px;
`,be=i.span`
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
`;try{S.displayName="FileTree",S.__docgenInfo={description:"",displayName:"FileTree",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},initialHide:{defaultValue:null,description:"",name:"initialHide",required:!0,type:{name:"boolean"}},sspTitle:{defaultValue:null,description:"",name:"sspTitle",required:!0,type:{name:"string"}},editTitle:{defaultValue:null,description:"",name:"editTitle",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ITreeItem[]"}},currentSelectedItem:{defaultValue:null,description:"",name:"currentSelectedItem",required:!0,type:{name:"SystemIdType"}},setCurrentSelectedItem:{defaultValue:null,description:"",name:"setCurrentSelectedItem",required:!0,type:{name:"(id: SystemIdType) => void"}},handleRenameSSP:{defaultValue:null,description:"",name:"handleRenameSSP",required:!0,type:{name:"(title: string) => void"}},handleRenameItem:{defaultValue:null,description:"",name:"handleRenameItem",required:!0,type:{name:"(id: SystemIdType) => (title: string) => void"}},showBackIcon:{defaultValue:null,description:"",name:"showBackIcon",required:!0,type:{name:"boolean"}},backIconLabel:{defaultValue:null,description:"",name:"backIconLabel",required:!0,type:{name:"string"}},handleClickBackButton:{defaultValue:null,description:"",name:"handleClickBackButton",required:!0,type:{name:"MouseEventHandler<Element>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const He={title:"PAAS/SystemBuilder/FileTree",component:S},we=()=>{const[e,r]=x.useState(P.Empty),[n,o]=x.useState("MySystem");return t.jsx(_e,{children:t.jsx(S,{sspTitle:n,data:Se,currentSelectedItem:e,setCurrentSelectedItem:r,handleRenameSSP:o,handleRenameItem:()=>()=>{},initialHide:!1,showBackIcon:!0,backIconLabel:"A Long Name Icon",handleClickBackButton:()=>{}})})},w={render:()=>t.jsx(we,{})},_e=i.div`
  position: relative;
  width: 800px;
  height: 520px;
  display: flex;
  ${e=>e.theme.flexCSS.center}
`,Se=[{type:"ssp",item:{id:1,name:"MySystem",system_type:2,description:"A",version:"2.0"},children:[{type:"fmu",item:{id:101,name:"FMU 1",system_type:3,description:"A",version:"2.0"}},{type:"fmu",item:{id:102,name:"FMU 2",system_type:3,description:"A",version:"2.0"}}]},{type:"group",item:{id:2,name:"MySystem",system_type:2,description:"A",version:"2.0"}}];var V,q,N;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Component />
}`,...(N=(q=w.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const De=["FileTree"];export{w as FileTree,De as __namedExportsOrder,He as default};
//# sourceMappingURL=NewNavigator.stories-8d33ef6f.js.map
