(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),u=n.n(c),o=n(2),i=function(e){var t=e.name,n=e.number;return r.a.createElement("span",{id:"person"}," ",t," : ",n)},l=function(e){var t=e.collection,n=Object(a.useState)([]),c=Object(o.a)(n,2),u=c[0],l=c[1],m=Object(a.useState)(""),d=Object(o.a)(m,2),s=d[0],f=d[1];return r.a.createElement("div",{className:"search"},r.a.createElement("form",{id:"searchForm"},r.a.createElement("label",{className:"labelFilter middleText"}," Filter shown with: "),r.a.createElement("input",{id:"inputBox",value:s,required:!0,onChange:function(e){e.preventDefault(),f(e.target.value),""!==e.target.value.trim()?l(t.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}))):l([])},placeholder:"enter text..."})),r.a.createElement("ul",null,u.map((function(e){return r.a.createElement("li",{key:e.number}," ",r.a.createElement(i,{name:e.name,number:e.number})," ")}))))},m=n(3),d=n.n(m),s="/api/persons",f=function(){return d.a.get(s)},b=function(e){return d.a.post(s,e)},h=function(e){return d.a.delete("".concat(s,"/").concat(e))},p=function(e,t){return d.a.put("".concat(s,"/").concat(e),t)},v=function(e){var t=e.text;return null==t?null:r.a.createElement("div",{className:"notification"},t)},E=function(e){var t=e.text,n=e.handler;return r.a.createElement("button",{id:"deleteButton",onClick:n},t)},N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),d=m[0],s=m[1],N=Object(a.useState)(""),g=Object(o.a)(N,2),w=g[0],C=g[1],j=Object(a.useState)(null),O=Object(o.a)(j,2),k=O[0],x=O[1];Object(a.useEffect)((function(){document.title="Phonebook App",f().then((function(e){c(e.data)})).catch((function(e){x("Error happened while retrieving the Data"),setTimeout((function(){return x(null)}))}))}),[]);return r.a.createElement("div",{className:"main"},r.a.createElement("h2",{className:"mainHeading"},"Phonebook"),r.a.createElement(v,{text:k}),r.a.createElement(l,{collection:n}),r.a.createElement("h2",{className:"heading"},"Add New Contact"),r.a.createElement("form",{className:"newContactForm",onSubmit:function(e){if(e.preventDefault(),n.some((function(e){return e.name===d}))){if(!window.confirm("".concat(d," is already present in the phonebook, replace the old number with a new one?")))return;var t=n.find((function(e){return e.name===d}));p(t.id,{name:d,number:w}).then((function(e){var a=n.filter((function(e){return e.id!==t.id}));c(a.concat(e.data)),x("updated ".concat(d)),setTimeout((function(){return x(null)}),2e3)})).catch((function(){x("Note has already been removed"),setTimeout((function(){return x(null)}),2e3)}))}else b({name:d,number:w}).then((function(e){c(n.concat(e.data)),x("added ".concat(d)),setTimeout((function(){return x(null)}),2e3)})).catch((function(e){x("Error!! Contact not saved. Please try again later!"),setTimeout((function(){return x(null)}),2e3)}));s(""),C("")}},r.a.createElement("div",{id:"equalPartitionDiv"},r.a.createElement("div",{className:"line1"},r.a.createElement("label",{className:"nameLabel middleText"}," Name: ")," ",r.a.createElement("input",{id:"nameInput",required:!0,value:d,onChange:function(e){e.preventDefault(),s(e.target.value)},placeholder:"Name"})),r.a.createElement("div",{className:"line2"},r.a.createElement("label",{className:"numberLabel middleText"}," Contact: ")," ",r.a.createElement("input",{id:"numberInput",required:!0,value:w,onChange:function(e){e.preventDefault(),C(e.target.value)},placeholder:"Number/Email"}))),r.a.createElement("div",{id:"submitButtonDiv"},r.a.createElement("button",{id:"submitButton",type:"submit"},"Save Contact"))),r.a.createElement("h2",{className:"heading"},"Saved Contacts"),r.a.createElement("div",{className:"contacts"},n.map((function(e){return r.a.createElement("li",{id:"singleContact",key:e.id}," ",r.a.createElement(i,{name:e.name,number:e.number}),r.a.createElement(E,{text:"Delete",handler:function(){return t=e.id,void(window.confirm("would you like to delete ".concat(n.find((function(e){return e.id===t})).name))&&h(t).then((function(){return c(n.filter((function(e){return e.id!==t})))})).then((function(){x("Contact deleted"),setTimeout((function(){return x(null)}),2e3)})).catch((function(e){x("Note has already been removed"),setTimeout((function(){return x(null)}),2e3)})));var t}})," ")}))))};n(36);u.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cb2e16b4.chunk.js.map