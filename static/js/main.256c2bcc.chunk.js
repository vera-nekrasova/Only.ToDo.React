(this.webpackJsonpintership=this.webpackJsonpintership||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c(0),d=c.n(n),a=c(7),s=c.n(a),i=c(2),r=c(3),p="todo/add",l="todo/remove",u="todo/edit",j="todo/circle",b="todo/showPopupEdit",O="todo/showPopupAdd",h=function(t){return{type:b,payload:t}},_=function(){return{type:O}},m={setDelCircle:function(){return{type:j}}},x=Object(r.b)((function(t){return{todos:t.todos}}),m)((function(t){var e=t.todos,c=t.setDelCircle;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("span",{className:"header__data",children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(o.jsx)("div",{className:"header__btn",onClick:e.blockBtn?null:function(){return c()},children:e.delCircle?"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c":"\u041f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),k=c(4),f={removeTodo:function(t){return{type:l,payload:t}},showPopupEdit:h},v=Object(r.b)((function(t){return{todos:t.todos}}),f)((function(t){var e=t.todos,c=t.removeTodo,n=t.showPopupEdit;return Object(o.jsx)(o.Fragment,{children:e.todos.length>0?Object(k.a)(e.todos).map((function(t,d){return Object(o.jsxs)("label",{className:"task",children:[Object(o.jsx)("input",{className:"checkbox",type:"checkbox",disabled:!!e.delCircle}),e.delCircle?Object(o.jsx)("span",{className:"task__circle task__circle_del-task",onClick:function(){return c(t.id)}}):Object(o.jsx)("span",{className:"task__circle task__circle_check"}),Object(o.jsx)("span",{className:"task__text",onClick:function(){return n(t.id)},children:t.title})]},d)})):Object(o.jsx)("div",{className:"main__empty-list",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442"})})})),N=c(9),C={showPopupAdd:_,addTodo:function(t){return{type:p,payload:t}}},y=Object(r.b)(null,C)((function(t){var e=t.showPopupAdd,c=t.addTodo,n=d.a.useState(""),a=Object(N.a)(n,2),s=a[0],i=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"popup popup_add-task",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("textarea",{className:"popup__inp popup__inp_add-task",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(t){return i(t.target.value)}}),Object(o.jsxs)("div",{className:"popup__row",children:[Object(o.jsx)("div",{className:"popup__btn-close",onClick:function(){return e()},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(o.jsx)("div",{className:"popup__btn-add",onClick:function(){return c(s)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})})})),w={showPopupEdit:h,editTodo:function(t){return{type:u,payload:t}}},E=Object(r.b)((function(t){return{todos:t.todos}}),w)((function(t){var e=t.todos,c=t.showPopupEdit,n=t.editTodo,a=e.todos.find((function(t){return t.id===e.editTaskId})).title,s=d.a.useState(a),i=Object(N.a)(s,2),r=i[0],p=i[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"popup popup_edit-task",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{className:"popup__inp popup__inp_edit-task",type:"text",value:r,onChange:function(t){return p(t.target.value)}}),Object(o.jsxs)("div",{className:"popup__row",children:[Object(o.jsx)("div",{className:"popup__btn-close",onClick:function(){return c()},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(o.jsx)("div",{className:"popup__btn-save",onClick:function(){return n(r)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})})})),g={showPopupAdd:_},A=Object(r.b)((function(t){var e=t.todos,c=t.popupEdit,o=t.popupAdd;return Object(i.a)(Object(i.a)(Object(i.a)({},e),c),o)}),g)((function(t){var e=t.popupEdit,c=t.popupAdd,n=t.showPopupAdd,d="";return e?d=Object(o.jsx)(E,{}):c&&(d=Object(o.jsx)(y,{})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(x,{}),Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(v,{}),Object(o.jsx)("div",{className:"btn-add",onClick:function(){return n()},children:"+"})]})]}),d]})})),B=(c(26),c(5)),P={todos:[{id:1,title:"\u041f\u0440\u043e\u043f\u044b\u043b\u0435\u0441\u043e\u0441\u0438\u0442\u044c"},{id:2,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0448\u043a\u0443"}],delCircle:!1,popupEdit:!1,popupAdd:!1,unicID:2,editTaskId:"",blockBtn:!1},T=Object(B.b)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return""!==e.payload.trim()?Object(i.a)(Object(i.a)({},t),{},{todos:[].concat(Object(k.a)(t.todos),[{id:t.unicID+1,title:e.payload}]),popupAdd:!1,unicID:t.unicID+1,blockBtn:!1}):t;case u:return""!==e.payload.trim()?(Object(k.a)(t.todos).find((function(e){return e.id===t.editTaskId})).title=e.payload,Object(i.a)(Object(i.a)({},t),{},{todos:Object(k.a)(t.todos),popupEdit:!1,delCircle:!1,blockBtn:!1})):t;case l:var c=Object(k.a)(t.todos).filter((function(t){return t.id!==e.payload})),o=!1;return 1===t.todos.length&&(o=!0),Object(i.a)(Object(i.a)({},t),{},{todos:c,blockBtn:o,delCircle:!o});case j:return t.delCircle?Object(i.a)(Object(i.a)({},t),{},{delCircle:!1}):Object(i.a)(Object(i.a)({},t),{},{delCircle:!0});case b:return t.delCircle&&!t.popupEdit?Object(i.a)(Object(i.a)({},t),{},{popupEdit:!0,editTaskId:e.payload,blockBtn:!0}):t.popupEdit?Object(i.a)(Object(i.a)({},t),{},{popupEdit:!1,blockBtn:!1}):t;case O:return t.popupAdd?Object(i.a)(Object(i.a)({},t),{},{popupAdd:!1,blockBtn:!1}):Object(i.a)(Object(i.a)({},t),{},{popupAdd:!0,blockBtn:!0});default:return t}}}),I=Object(B.c)(T);s.a.render(Object(o.jsx)(r.a,{store:I,children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.256c2bcc.chunk.js.map