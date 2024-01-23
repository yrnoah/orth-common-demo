import{j as n}from"./jsx-runtime-94f6e698.js";import{R as l,r as o}from"./index-8db94870.js";import{H as x,P as T}from"./Header-9c0c8e7b.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-spring-web.esm-788c8f7b.js";import"./index-8ce4a492.js";import"./styled-components.browser.esm-6007d051.js";function s({currentTermIndex:e,terms:a}){return n.jsx(x,{currentTermIndex:e,children:a.map((r,c)=>n.jsx(T,{href:r.href??void 0,onClick:r.action,children:r.title},c))})}try{s.displayName="PaasHeader",s.__docgenInfo={description:"",displayName:"PaasHeader",props:{currentTermIndex:{defaultValue:null,description:"@description current active term's index.",name:"currentTermIndex",required:!0,type:{name:"number"}},terms:{defaultValue:null,description:"@description Terms shown in the header.",name:"terms",required:!0,type:{name:"TPaasHeaderTerms[]"}}}}}catch{}const C={title:"PAAS/Header/PaasHeader",component:s},f=e=>{const[a,r]=l.useState(e.currentTermIndex);o.useEffect(()=>r(e.currentTermIndex),[e.currentTermIndex]);const c=o.useMemo(()=>e.terms.map((u,p)=>({title:u.title,action:()=>r(p)})),[e.terms]);return n.jsx("div",{style:{height:600},children:n.jsx(s,{...e,terms:c,currentTermIndex:a})})},t=f.bind({}),h=["Applications","Workspace","Files","Marketplace","Support"];t.args={terms:h.map(e=>({title:e})),currentTermIndex:0};var m,d,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [current, setCurrent] = React.useState(args.currentTermIndex);
  useEffect(() => setCurrent(args.currentTermIndex), [args.currentTermIndex]);
  const ds = useMemo(() => {
    return args.terms.map((t, i) => ({
      title: t.title,
      action: () => setCurrent(i)
    }));
  }, [args.terms]);
  return <div style={{
    height: 600
  }}>
      <RawComponent {...args} terms={ds} currentTermIndex={current} />
    </div>;
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const v=["PaasHeader"];export{t as PaasHeader,v as __namedExportsOrder,C as default};
//# sourceMappingURL=PaasHeader.stories-ae6be27c.js.map
