import{j as a}from"./jsx-runtime-94f6e698.js";import{p as o,c as d}from"./styled-components.browser.esm-8c817f58.js";import{c as t}from"./colors-0fffe0c4.js";import{a as p}from"./Dynamic-993557e0.js";import{B as c}from"./styles-86b3dc18.js";import{a as $}from"./DmIcon20Share-4070fa0a.js";import{r as m}from"./index-8db94870.js";import{t as s}from"./typography-05e40c9f.js";const u=e=>{const{currentTheme:r}=p();return a.jsx(g,{$theme:r,...e,children:a.jsx(l,{})})},l=o($)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 300ms ease-out;
`,g=o.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  :hover ${l} {
    transform: rotate(90deg);
    background: ${e=>e.$theme==="plus"?t.addHoveredGradient:t.addHoveredWarm};
  }
  ${c}
`;try{u.displayName="HomeButton",u.__docgenInfo={description:"",displayName:"HomeButton",props:{}}}catch{}const n=m.forwardRef(({element:e,...r},x)=>{const{currentTheme:f}=p();return a.jsx(e,{ref:x,$theme:f,...r})});n.displayName="ThemedButton";const i=m.forwardRef((e,r)=>a.jsx(n,{ref:r,...e,element:B}));i.displayName="IconButton";const y=m.forwardRef((e,r)=>a.jsx(n,{ref:r,...e,element:v}));y.displayName="TextButton";const B=o.div`
  ${c}
  ${s.dymenu_MenuHeadline}
  padding: 0 18px;
  ${e=>_[e.$theme]}
`,D=o(i)`
  ${s.dymenu_MenuTitle}
  width: unset;
  gap: 6px;
`,M=o(i)`
  ${s.dymenu_MenuTitle}
  width: unset;
  gap: 4px;
`,v=o.div`
  ${c}
  ${s.dymenu_MenuHeadline}
  padding: 0 18px;
  ${e=>_[e.$theme]}
`,_={plus:d`
    :hover {
      background: ${t.addHoveredGradient};
    }

    :focus::after,
    &[data-focus="true"]::after {
      border: 3px solid ${t.plus_warmwhite};
    }

    :active,
    &[data-active="true"] {
      background: ${t.addPressedGradient};
    }
  `,minus:d`
    :hover {
      background: ${t.addHoveredWarm};
    }

    :focus::after,
    &[data-focus="true"]::after {
      border: 3px solid ${t.plus_ash};
    }

    :active,
    &[data-active="true"] {
      background-color: ${t.addPressedWarm};
    }
  `,none:""};try{n.displayName="ThemedButton",n.__docgenInfo={description:"",displayName:"ThemedButton",props:{}}}catch{}const h=e=>{const{currentTheme:r}=p();return a.jsx(T,{...e,$theme:r})},T=o.div`
  width: 1.5px;
  height: 28px;
  margin: 6px 0;
  border-radius: 68px;
  ${e=>w[e.$theme]}
`,w={minus:d`
    background-color: ${t.addPressedWarm};
  `,plus:d`
    background-color: ${t.addHoveredBright};
  `,none:""};try{h.displayName="Separator",h.__docgenInfo={description:"",displayName:"Separator",props:{}}}catch{}export{M as D,u as H,i as I,h as S,y as T,D as a,v as b};
//# sourceMappingURL=Separator-635c95da.js.map
