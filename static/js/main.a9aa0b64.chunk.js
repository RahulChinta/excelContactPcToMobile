(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{11:function(e,t,n){e.exports={input:"Checkbox_input__1vlLz",list:"Checkbox_list__1WB-U"}},13:function(e,t){},16:function(e,t,n){e.exports={buttons:"Button_buttons__1F4Il"}},17:function(e,t,n){e.exports={container:"CheckboxList_container__EIXWD"}},24:function(e,t,n){},30:function(e,t){},31:function(e,t){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(14),r=n.n(a),s=(n(24),n(19)),o=n(9),l=n(18),u=n(3),d=n(10),b=n(15),j=n.n(b),h=n(11),f=n.n(h),x=n(0),O=function(e){return Object(x.jsxs)("li",{className:f.a.list,children:[Object(x.jsx)("input",{className:f.a.input,type:"checkbox",onClick:e.onClickHandler,checked:e.isChecked,value:e.value,id:e.id}),Object(x.jsx)("label",{children:e.value})]})},v=n(16),p=n.n(v),k=function(e){return Object(x.jsx)("button",{type:e.type||"button",onClick:e.onButtonClick,className:p.a.buttons,children:e.value})},m=n(17),C=n.n(m),y=function(e){var t=function(t){var n=t.target,c=n.checked,i=n.value,a=e.checkboxList.find((function(e){return e.name===i}));a&&(a.isChecked=c)},n=function(t){var n=t.target,c=n.checked,i=n.id,a=e.checkboxList.find((function(e){return"checkbox_".concat(e.id)===i}));a&&(a.isMobileNumber=c)},c=e.checkboxList.map((function(e,c){return Object(x.jsxs)("div",{className:C.a.container,children:[Object(x.jsx)(O,{id:e.id,value:e.name,onClickHandler:t},e.id),Object(x.jsx)(O,{id:"checkbox_".concat(e.id),value:"Add as Contact",onClickHandler:n},"checkbox_".concat(e.id))]},c)}));return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Choose column to display"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("ul",{children:c}),Object(x.jsx)(k,{onButtonClick:function(){var t=e.checkboxList.filter((function(e){return e.isChecked}));e.submitList(t)},type:"button",value:"Start Now"})]})]})},g=function(e){var t,n,i=Object(c.useState)(0),a=Object(u.a)(i,2),r=a[0],s=a[1],o=null===(t=e.data[0])||void 0===t||null===(n=t.data)||void 0===n?void 0:n.length,l=e.data.map((function(e,t){var n=Object(x.jsx)("h1",{children:e.data[r]},t);return e.isMobileNumber&&(n=Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:e.data[r]}),Object(x.jsx)("a",{href:"tel:".concat(e.data[r]),children:"Call Now"})]},t)),n}));return Object(x.jsxs)("div",{children:[l,0!==r&&Object(x.jsx)(k,{onButtonClick:function(){return s((function(e){return e-1}))},type:"button",value:"Previous"}),r!==o-1&&Object(x.jsx)(k,{onButtonClick:function(){return s((function(e){return e+1}))},type:"button",value:"Next"})]})};n(53);var _=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)("Click Here..."),r=Object(u.a)(a,2),b=r[0],h=r[1],f=Object(c.useState)(!1),O=Object(u.a)(f,2),v=O[0],p=O[1],m=Object(c.useState)([]),C=Object(u.a)(m,2),_=C[0],N=C[1],B=Object(c.useState)([]),S=Object(u.a)(B,2),L=S[0],A=S[1],F=Object(c.useRef)();return Object(c.useEffect)((function(){if(n&&n.length>0){var e=Object(l.a)(n[0]).map((function(e,t){return{name:e,isChecked:!1,id:t,isMobileNumber:!1}}));N(e)}}),[n]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App-header",children:"PC to Mobile Calling APP"}),!n&&Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Chooese a excel file to read contact numbers"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"files",children:[Object(x.jsx)("input",{type:"file",id:"fileUpload",ref:F,accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",style:{display:"none"},onChange:function(e){var t=e.target.files;p(!1),t.length>0&&h(t[0].name)}}),v&&Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(j.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}),Object(x.jsx)("p",{children:"Loading, Please wait..."})]}),!v&&Object(x.jsx)("label",{htmlFor:"fileUpload",id:"fileUploadLabel",onClick:function(){p(!0),F.current.click()},children:b}),Object(x.jsx)(k,{onButtonClick:function(){var e,t=null===(e=F.current.files)||void 0===e?void 0:e[0];if(t){var n=new FileReader,c=n.readAsBinaryString;n.onload=function(e){var t=e.target.result,n=d.read(t,{type:c?"binary":"array"}),a=n.SheetNames[0],r=n.Sheets[a];console.log(c,n);var s=d.utils.sheet_to_json(r,{header:1});i(s)},c?n.readAsBinaryString(t):n.readAsArrayBuffer(t)}},type:"button",value:"Upload"})]})]}),Object(x.jsxs)("div",{children:[0===L.length&&_.length>0&&Object(x.jsx)(y,{checkboxList:_,submitList:function(e){var t,c=[],i=Object(o.a)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value,r=Object(s.a)({},a);r.data=[],c.push(r)}}catch(j){i.e(j)}finally{i.f()}for(var l=1;l<n.length;l++){var u,d=Object(o.a)(c);try{for(d.s();!(u=d.n()).done;){var b=u.value;b.data.push(n[l][b.id])}}catch(j){d.e(j)}finally{d.f()}}A(c)}}),L.length>0&&Object(x.jsx)(g,{data:L})]})]})};r.a.render(Object(x.jsx)(i.a.Fragment,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.a9aa0b64.chunk.js.map