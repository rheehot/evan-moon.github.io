(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0XPj":function(e,t,a){var n=a("eUgh"),r=a("s+kx"),o=a("EA7m"),l=a("XzbM"),i=o((function(e){var t=n(e,l);return t.length&&t[0]===e[0]?r(t):[]}));e.exports=i},"3L66":function(e,t,a){var n=a("MMmD"),r=a("ExA7");e.exports=function(e){return r(e)&&n(e)}},"88Gu":function(e,t,a){a("1dPr");var n=Date.now;e.exports=function(e){var t=0,a=0;return function(){var r=n(),o=16-(r-a);if(a=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},EA7m:function(e,t,a){var n=a("zZ0H"),r=a("Ioao"),o=a("wclG");e.exports=function(e,t){return o(r(e,t,n),e+"")}},Ioao:function(e,t,a){var n=a("heNW"),r=Math.max;e.exports=function(e,t,a){return t=r(void 0===t?e.length-1:t,0),function(){for(var o=arguments,l=-1,i=r(o.length-t,0),c=Array(i);++l<i;)c[l]=o[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=o[l];return s[t]=a(c),n(e,this,s)}}},O0oS:function(e,t,a){var n=a("Cwc5"),r=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=r},XzbM:function(e,t,a){var n=a("3L66");e.exports=function(e){return n(e)?e:[]}},cvCv:function(e,t){e.exports=function(e){return function(){return e}}},heNW:function(e,t){e.exports=function(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}},pFRH:function(e,t,a){var n=a("cvCv"),r=a("O0oS"),o=a("zZ0H"),l=r?function(e,t){return r(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:o;e.exports=l},"s+kx":function(e,t,a){var n=a("1hJj"),r=a("jbM+"),o=a("Xt/L"),l=a("eUgh"),i=a("sEf8"),c=a("xYSL"),s=Math.min;e.exports=function(e,t,a){for(var u=a?o:r,m=e[0].length,p=e.length,g=p,f=Array(p),d=1/0,h=[];g--;){var v=e[g];g&&t&&(v=l(v,i(t))),d=s(v.length,d),f[g]=!a&&(t||m>=120&&v.length>=120)?new n(g&&v):void 0}v=e[0];var b=-1,x=f[0];e:for(;++b<m&&h.length<d;){var y=v[b],E=t?t(y):y;if(y=a||0!==y?y:0,!(x?c(x,E):u(h,E,a))){for(g=p;--g;){var k=f[g];if(!(k?c(k,E):u(e[g],E,a)))continue e}x&&x.push(E),h.push(y)}}return h}},uG8V:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return V}));var n=a("q1tI"),r=a.n(n),o=a("R/WZ"),l=a("hlFM"),i=a("mpeT"),c=a("1Yd/"),s=a("30+C"),u=a("oa/T"),m=a("tRbT"),p=a("9jPY"),g=a("wb2y"),f=a("N1om"),d=a.n(f),h=a("Wbzz"),v=Object(o.a)((function(e){var t=e.spacing,a=e.palette,n=e.typography;return{root:{marginBottom:t(5)},info:{color:a.grey[500]},time:{fontSize:n.caption.fontSize,marginRight:t(1)},categoryLink:{color:"inherit",textDecoration:"none",fontSize:n.caption.fontSize,"&:hover":{color:a.primary.main}},title:{fontSize:n.h5.fontSize,margin:t(1)+"px 0 "+t(3)+"px"}}})),b=function(e){var t=e.title,a=e.date,o=e.categories,i=v();return r.a.createElement("header",{className:i.root},r.a.createElement(l.a,{className:i.info},r.a.createElement("time",{className:i.time},a),r.a.createElement("span",null,o.map((function(e,t){return r.a.createElement(n.Fragment,{key:t},r.a.createElement(h.Link,{className:i.categoryLink,to:"/categories/"+d()(e)},e.toUpperCase()),t!==o.length-1&&" / ")})))),r.a.createElement("h1",{className:i.title},t),r.a.createElement(g.a,null))},x=Object(o.a)((function(e){var t=e.shape,a=e.shadows,n=e.palette,r=e.spacing,o=e.typography;return{root:{lineHeight:1.8,color:n.grey[800],"& h2, & h3, &, h4":{color:"#000000"},"& h2":{margin:r(4)+"px 0 "+r(2)+"px"},"& h3":{margin:r(3.5)+"px 0 "+r(2)+"px"},"& h4":{margin:r(3)+"px 0 "+r(2)+"px"},"& h5":{fontSize:o.body1.fontSize},"& a":{color:n.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& small":{fontSize:o.caption.fontSize},"& hr":{backgroundColor:n.grey[300],height:1,border:"none",display:"block",margin:r(3)+"px 0"},"& blockquote":{backgroundColor:n.grey[200],borderLeft:"5px solid "+n.grey[400],padding:r(2.5)+"px "+r(2.8)+"px",margin:r(3)+"px 0",textAlign:"left"},"& span.gatsby-resp-image-wrapper":{borderRadius:t.borderRadius,overflow:"hidden",margin:r(5)+"px 0 "+r(2)+"px","& + small":{display:"block",color:n.grey[700],marginBottom:r(5)+"px"}},"& table":{width:"100%",boxShadow:a[1],"& thead":{backgroundColor:n.grey[100]},"& td, & th":{padding:r(1)+"px "+r(1.5)+"px",textAlign:"left",border:"none",'&[align="center"]':{textAlign:"center"}}},"& span.katex":{fontSize:o.body1.fontSize},"& span.katex-display":{margin:r(4)+"px 0","& span.katex":{fontSize:o.h6.fontSize}}}}})),y=function(e){var t=e.html,a=x();return r.a.createElement("div",{className:a.root,dangerouslySetInnerHTML:{__html:t}})},E=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("3nLz"),a("zGcK"),a("BFev")),k=a("0XPj"),w=a.n(k),O=a("kKAo"),S=a("ofer"),j=a("uXd4"),z=a("NHwv");var N=Object(o.a)((function(e){var t=e.spacing;return{root:{padding:t(2)},title:{marginBottom:t(2)}}})),L=function(e){var t=e.tags,a=e.currentPost,o=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["tags","currentPost"]),i=N(),c=Object(E.a)(),s=Object(n.useMemo)((function(){return c.filter((function(e){return e.frontmatter.title!==a.frontmatter.title})).filter((function(e){return e.fields.lang===a.fields.lang})).map((function(e){var a;return{post:e,tags:w()(null!==(a=e.frontmatter.tags)&&void 0!==a?a:[],t)}})).filter((function(e){return e.tags.length>0})).sort((function(e,t){return t.tags.length-e.tags.length})).map((function(e){return e.post})).slice(0,5)}),[a,c,t]),u=Object(n.useCallback)((function(e){Object(z.a)(e,"관련 포스팅 클릭")}),[]);return 0===s.length?null:r.a.createElement(O.a,Object.assign({className:i.root},o),r.a.createElement(S.a,{variant:"h6",className:i.title},"관련 포스팅 보러가기"),r.a.createElement(l.a,null,s.map((function(e){var t,a,n,o,l,i;return r.a.createElement(j.a,{key:e.fields.path,thumbnail:null!==(t=null===(a=e.frontmatter.thumbnail)||void 0===a||null===(n=a.childImageSharp)||void 0===n||null===(o=n.fixed)||void 0===o?void 0:o.src)&&void 0!==t?t:"",title:null!==(l=e.frontmatter.title)&&void 0!==l?l:"",date:e.frontmatter.date,path:null!==(i=e.fields.path)&&void 0!==i?i:"/",categories:e.frontmatter.categories,onClick:u})}))))},C=(a("sc67"),a("4DPX"),a("17x9")),P=a.n(C);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,l=void 0===o?24:o,i=M(e,["color","size"]);return r.a.createElement("svg",I({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.a.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),r.a.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));R.propTypes={color:P.a.string,size:P.a.oneOfType([P.a.string,P.a.number])},R.displayName="Tag";var W=R,T=a("Z3vd"),A={ko:"한국어",en:"English"},D=function(e){var t=e.lang,a=Object(n.useMemo)((function(){return{ko:r.a.createElement("span",{role:"img","aria-label":"ko"},"🇰🇷"),en:r.a.createElement("span",{role:"img","aria-label":"en"},"🇬🇧")}}),[]);return r.a.createElement(r.a.Fragment,null,a[t])},H=Object(o.a)({noStyle:{margin:0,padding:0,listStyle:"none",textDecoration:"none"}}),F=function(e){var t=e.otherLangPosts,a=H(),o=Object(n.useCallback)((function(e){Object(z.a)(e,"언어 변환 클릭")}),[]);return r.a.createElement(l.a,null,r.a.createElement("ul",{className:a.noStyle},t.map((function(e){var t=e.fields;return r.a.createElement("li",{className:a.noStyle,key:t.path},r.a.createElement(h.Link,{to:t.path,className:a.noStyle,onClick:function(){return o(t.path)}},r.a.createElement(T.a,{variant:"outlined",size:"large"},r.a.createElement(D,{lang:t.lang}),A[t.lang])))}))))},B=Object(o.a)((function(e){return{thumbnail:{paddingTop:"42.8%",display:"block",position:"relative","& img":{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",objectFit:"cover",margin:0}},languages:{margin:e.spacing(4)+"px 0"},relatedPosts:{marginTop:e.spacing(4)},tagWrapper:{margin:0,padding:0,marginTop:e.spacing(4)},tags:{listStyle:"none",margin:0,padding:0}}})),G=function(e){var t,a,n=e.post,o=e.otherLangPosts,i=n.frontmatter,c=i.title,g=i.date,f=i.categories,d=i.tags,h=i.thumbnail,v=n.html,x=B();return r.a.createElement(s.a,null,h&&r.a.createElement("div",{className:x.thumbnail},r.a.createElement("img",{src:null==h||null===(t=h.childImageSharp)||void 0===t||null===(a=t.fluid)||void 0===a?void 0:a.src,alt:c,title:c})),r.a.createElement(u.a,{component:"article"},r.a.createElement(b,{title:null!=c?c:"",date:g,categories:null!=f?f:[]}),o.length>0&&r.a.createElement(l.a,{className:x.languages},r.a.createElement(F,{otherLangPosts:o})),r.a.createElement(y,{html:null!=v?v:""}),r.a.createElement("section",{className:x.relatedPosts},r.a.createElement(L,{tags:null!=d?d:[],currentPost:n})),d&&r.a.createElement(m.a,{container:!0,className:x.tagWrapper,component:"ul",spacing:1},r.a.createElement(m.a,{item:!0,component:"li",className:x.tags},r.a.createElement(W,null)),d.map((function(e,t){return r.a.createElement(m.a,{item:!0,component:"li",key:t,className:x.tags},r.a.createElement(p.a,{label:e,size:"small"}))})))))},X=a("5ZT3"),Z=a("wzLy"),q=Object(o.a)((function(e){var t=e.spacing,a=e.typography,n=e.shape,r=e.palette;return{root:{"& ul":{padding:0,margin:0},"& li":{padding:0,margin:0,listStyle:"none","& p":{margin:0},"& a":{display:"block",padding:t(1)+"px "+t(1.5)+"px "+t(1)+"px "+t(.75)+"px",marginLeft:t(.75),color:r.grey[800],textDecoration:"none",fontSize:a.caption.fontSize,borderRadius:n.borderRadius,"&:hover":{backgroundColor:r.grey[100]}}},"& li ul":{margin:"0 0 "+t(1.5)+"px "+t(1.5)+"px",borderLeft:"1px solid "+r.grey[200]}}}})),U=function(e){var t=e.tocHtml,a=q();return r.a.createElement(Z.a,{title:"카탈로그"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},className:a.root}))},_=(a("y7hu"),a("lFIR")),J=Object(o.a)((function(e){var t,a=e.spacing,n=e.breakpoints,r=e.palette;return{root:{flexWrap:"wrap",justifyContent:"space-between"},navCard:(t={width:"100%",marginBottom:a(2)},t[n.up("lg")]={width:"auto",marginBottom:0},t),prev:{textAlign:"right"},link:{color:r.grey[600],textDecoration:"none"}}})),Y=function(e){var t,a,n=e.prev,o=e.next,i=J();return r.a.createElement(l.a,{component:"nav",display:"flex",className:i.root},o?r.a.createElement(s.a,{className:i.navCard},r.a.createElement(h.Link,{to:null!==(t=o.fields.path)&&void 0!==t?t:"/",rel:"next",className:i.link},r.a.createElement(_.a,null,r.a.createElement(u.a,null,r.a.createElement("span",{role:"img","aria-label":"previous"},"👈")," ",o.frontmatter.title)))):r.a.createElement("div",null),n?r.a.createElement(s.a,{className:i.navCard+" "+i.prev},r.a.createElement(h.Link,{to:null!==(a=n.fields.path)&&void 0!==a?a:"/",rel:"prev",className:i.link},r.a.createElement(_.a,null,r.a.createElement(u.a,null,n.frontmatter.title," ",r.a.createElement("span",{role:"img","aria-label":"next"},"👉"))))):r.a.createElement("div",null))},K=Object(o.a)((function(e){var t=e.spacing;return{tocWrapper:{marginBottom:t(2)},postCardWrapper:{marginBottom:t(4)}}})),V=(t.default=function(e){var t,a,n,o=e.data,s=e.pageContext,u=K(),m=o.markdownRemark,p=o.allMarkdownRemark.edges,g=m.tableOfContents,f=m.frontmatter,d=m.excerpt,h=m.fields.lang,v=s.previous,b=s.next,x=null===(t=f.thumbnail)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.fluid;return r.a.createElement(i.a,{right:r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:u.tocWrapper,display:{xs:"none",lg:"block"}},r.a.createElement(U,{tocHtml:null!=g?g:""})),r.a.createElement(l.a,null,r.a.createElement(X.a,null))),rightSticky:!0},r.a.createElement(c.a,{title:f.title,description:null!==(n=f.description)&&void 0!==n?n:d,image:null==x?void 0:x.src,lang:h}),r.a.createElement(l.a,{className:u.postCardWrapper},r.a.createElement(G,{post:m,otherLangPosts:p.map((function(e){return e.node}))})),r.a.createElement(Y,{prev:v,next:b}))},"531458958")},wb2y:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),l=(a("17x9"),a("iuhU")),i=a("H2TA"),c=a("ye/S"),s=o.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,c=e.classes,s=e.className,u=e.component,m=void 0===u?"hr":u,p=e.flexItem,g=void 0!==p&&p,f=e.light,d=void 0!==f&&f,h=e.orientation,v=void 0===h?"horizontal":h,b=e.role,x=void 0===b?"hr"!==m?"separator":void 0:b,y=e.variant,E=void 0===y?"fullWidth":y,k=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(m,Object(n.a)({className:Object(l.a)(c.root,s,"fullWidth"!==E&&c[E],i&&c.absolute,g&&c.flexItem,d&&c.light,"vertical"===v&&c.vertical),role:x,ref:t},k))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},wclG:function(e,t,a){var n=a("pFRH"),r=a("88Gu")(n);e.exports=r}}]);
//# sourceMappingURL=component---src-templates-post-tsx-020a9dbf84d9a752d211.js.map