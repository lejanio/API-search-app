(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{55:function(e,n,t){"use strict";t.r(n);var i,r,a,o,c,s,d,l,b,u,m,h,p,f,j=t(0),g=t.n(j),O=t(21),x=t.n(O),y=t(5),w=t(22),v=t.n(w),k=t(23),q=t(24),S=t(29),z=t(28),C=t(2),E=t(3),L=E.b.input(i||(i=Object(C.a)(["\n  display: flex;\n  width: 50%;\n  min-width: 12em;\n  max-width: 32em;\n  padding: 1.25em;\n  font-size: 1.25rem;\n  border: 0;\n  border-radius: 10px;\n  outline: none;\n\n  &:focus {\n    box-shadow: rgba(253, 145, 145, 249) 1px 1px 16px;\n  }"]))),V=t(1),F=function(e){Object(S.a)(t,e);var n=Object(z.a)(t);function t(e){var i;return Object(k.a)(this,t),(i=n.call(this,e)).onChange=function(e){i.setState({searchValue:e}),i.props.getFilterValue(e)},i.state={searchValue:""},i}return Object(q.a)(t,[{key:"render",value:function(){var e=this;return Object(V.jsx)(L,{type:"text",value:this.state.searchValue,placeholder:"Search products...",onChange:function(n){return e.onChange(n.target.value)}})}}]),t}(j.Component),M=t.p+"static/media/spinner.11d9cde8.gif",T=E.b.div(r||(r=Object(C.a)(["\n  display: grid;\n  margin: 2.5em auto;\n  border-radius: 5px;\n"]))),B=E.b.div(a||(a=Object(C.a)(["\n  margin: 0 0 2.5em 0;\n  padding: ",";\n  background-color: ",";\n"])),(function(e){return e.padding}),(function(e){return e.bg})),J=E.b.div(o||(o=Object(C.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));\n  gap: 1.5rem;\n  justify-content: center;\n  width: 80%;\n  margin: 0 auto;\n"]))),P=E.b.div(c||(c=Object(C.a)(["\n  display: grid;\n  grid-template-rows: 7rem 1fr 8rem 4rem;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  max-width: 25em;\n  box-shadow: rgba(16, 16, 16, 0.36) 0 2px 8px 0;;\n  overflow: hidden;\n  transition: 0.2s;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:active {\n    box-shadow: rgba(253, 145, 145, 249) -1px 1px 16px;\n    transform: scale(0.98);\n  }\n"]))),R=E.b.h2(s||(s=Object(C.a)(["\n  font-family: 'Oswald', sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.2em;\n  padding: 0.5em 1.5em 0.5em 0.75em;\n  \n  @media (min-width: 600px) {\n    font-size: 1.25rem;\n  }\n"]))),U=E.b.div(d||(d=Object(C.a)(["\n  display: flex;\n  height: 22em;\n  padding: 1em;\n  border-top: 0.25rem solid floralwhite;\n  border-bottom: 0.25rem solid floralwhite;\n"]))),H=E.b.img(l||(l=Object(C.a)(["\n  height: 100%;\n  width: 100%;\n  transition: transform 0.3s;\n  object-fit: contain;\n"]))),I=E.b.p(b||(b=Object(C.a)(["\n  display: flex;\n  font-size: 0.65rem;\n  padding: 0.325em 0.65em 0.325em 0.65em;\n\n  @media (min-width: 600px) {\n    font-size: 0.75rem;\n  }\n"]))),A=E.b.div(u||(u=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.65em 0.65em 0.325em 0.65em;\n  border-top: 0.25rem solid floralwhite;\n\n  @media (min-width: 600px) {\n    font-size: 1.25rem;\n  }\n"]))),D=E.b.img(m||(m=Object(C.a)(["\n  height: ",";\n"])),(function(e){return e.height})),G=E.b.div(h||(h=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),K=function(){var e=Object(j.useState)([]),n=Object(y.a)(e,2),t=n[0],i=n[1],r=Object(j.useState)([]),a=Object(y.a)(r,2),o=a[0],c=a[1],s=Object(j.useState)(""),d=Object(y.a)(s,2),l=d[0],b=d[1],u=Object(j.useState)(!1),m=Object(y.a)(u,2),h=m[0],p=m[1];return Object(j.useEffect)((function(){p(!0),v()({method:"get",baseURL:"https://fakestoreapi.com",url:"/products/category/electronics"}).then((function(e){i(e.data)})).catch((function(e){throw new Error(e)})).finally((function(){return p(!1)}))}),[]),Object(j.useEffect)((function(){var e=setTimeout((function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())}));c(e)}),1500);return function(){return clearTimeout(e)}}),[l]),Object(V.jsxs)(T,{children:[Object(V.jsx)(B,{padding:"2em 0",bg:"#F5E9E2",children:Object(V.jsx)(G,{children:Object(V.jsx)(F,{getFilterValue:function(e){b(e)}})})}),h&&Object(V.jsx)(G,{children:Object(V.jsx)(D,{src:M,alt:"Loading...",height:"150px"})}),Object(V.jsx)(B,{children:Object(V.jsx)(G,{children:0===o.length&&l.length>0&&Object(V.jsx)("div",{children:"The search returned no specific results. Please, try again"})})}),Object(V.jsx)(J,{children:(o.length>0?o:t).map((function(e){return Object(V.jsxs)(P,{children:[Object(V.jsx)(R,{children:e.title}),Object(V.jsx)(U,{children:Object(V.jsx)(H,{src:e.image,alt:"product"})}),Object(V.jsx)(I,{children:e.description}),Object(V.jsxs)(A,{children:["Price: EUR"," ",e.price]})]},e.id)}))})]})},N=Object(E.a)(p||(p=Object(C.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&family=Oswald:wght@200;600&display=swap');\n\n// CSS reset\n\n* {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-family: 'Montserrat', sans-serif;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),Q=t.p+"static/media/logo.323a16fc.png",W=function(){return Object(V.jsx)("div",{children:Object(V.jsx)(D,{src:Q,alt:"logo",height:"150px"})})},X=E.b.div(f||(f=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 4em 1em;\n  background-color: #0B0014;\n"]))),Y=function(e){var n=e.children;return Object(V.jsxs)(X,{children:[Object(V.jsx)(W,{}),n]})},Z=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(N,{}),Object(V.jsx)(Y,{}),Object(V.jsx)(K,{})]})};x.a.render(Object(V.jsx)(g.a.StrictMode,{children:Object(V.jsx)(Z,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.654c730b.chunk.js.map