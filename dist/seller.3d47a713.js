parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"pHua":[function(require,module,exports) {
var e=this;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}function i(e,a){return!a||"object"!==t(a)&&"function"!=typeof a?s(e):a}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=[{from:"Saamer Mansoor",address:"i@codepen.io",time:"2016-10-07 15:35:14",message:"I live in Toronto, ON. I reviewed the financials, the required documents and the documents that you will provide. I would like to purchase 10 shares of the Single-family rental home for a total of $10,000. I look forward to hearing back from you",subject:"Single-family rental home",tag:"inbox",read:"false"},{from:"Barack Obama",address:"barack@obama.com",time:"2016-05-09 14:23:54",message:"I heard about your awesome website, and I'm excited to purchase some shares. Please accept my request for 200 shares in exchange for 125,000",subject:"Luxury Home-Big Family",tag:"inbox",read:"true"},{from:"Christopher Medina",address:"dolor@luctusutpellentesque.net",time:"2015-07-03 21:48:27",message:"Woops, that last pull request messed up the csproj. Mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",subject:"Broken PR?",tag:"inbox",read:"false"},{from:"Wylie Roberson",address:"mi@utnisi.edu",time:"2016-01-08 18:39:34",message:"Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices",subject:"Learn latin in 10 days!",tag:"deleted",read:"true"},{from:"Slack HQ",address:"fishbowl@slack.com",time:"2015-07-21 09:47:57",message:"Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",subject:"Join the Fishbowl Team",tag:"inbox",read:"true"},{from:"Ray Lamb",address:"ut.erat.Sed@volutpatNulla.co.uk",time:"2016-01-08 10:14:40",message:"Trepalium is going on tour! Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris",subject:"Concert tickets on sale",tag:"inbox",read:"false"},{from:"StackOverflow",address:"non@semmolestie.com",time:"2016-06-29 15:39:06",message:"You're almost done! Finish registering your account, and you'll be able to demand answers from random people that are smarter than you. Cum sociis natoque penatibus et magnis dis parturient",subject:"Verify your StackOverflow account",tag:"inbox",read:"true"},{from:"Wylie Roberson",address:"mi@utnisi.edu",time:"2016-01-08 18:39:34",message:"Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices",subject:"Learn latin in 10 days!",tag:"deleted",read:"true"},{from:"Slack HQ",address:"fishbowl@slack.com",time:"2015-07-21 09:47:57",message:"Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",subject:"Join the Fishbowl Team",tag:"inbox",read:"true"}],d=function(e){var t=(e=e.split(" ")[0]).split("-"),a=u[0];return"".concat(a," ").concat(t[2],", ").concat(t[0])},f=function(e){var t=e.split(" ")[1].split(":");return"".concat(t[0],":").concat(t[1])},b=function(e){function t(e){var n;a(this,t);var r=(n=i(this,c(t).call(this,e))).props.emails,s=0,l=!0,o=!1,u=void 0;try{for(var m,d=r[Symbol.iterator]();!(l=(m=d.next()).done);l=!0){m.value.id=s++}}catch(f){o=!0,u=f}finally{try{l||null==d.return||d.return()}finally{if(o)throw u}}return n.state={selectedEmailId:0,currentSection:"inbox",emails:r},n}return l(t,React.Component),r(t,[{key:"openEmail",value:function(e){var t=this.state.emails,a=t.findIndex(function(t){return t.id===e});t[a].read="true",this.setState({selectedEmailId:e,emails:t})}},{key:"deleteMessage",value:function(e){var t=this.state.emails,a=t.findIndex(function(t){return t.id===e});t[a].tag="deleted";var n="",r=!0,i=!1,s=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var o=c.value;if(o.tag===this.state.currentSection){n=o.id;break}}}catch(u){i=!0,s=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw s}}this.setState({emails:t,selectedEmailId:n})}},{key:"setSidebarSection",value:function(e){var t=this.state.selectedEmailId;e!==this.state.currentSection&&(t=""),this.setState({currentSection:e,selectedEmailId:t})}},{key:"render",value:function(){var e=this,t=this.state.emails.find(function(t){return t.id===e.state.selectedEmailId});return React.createElement("div",null,React.createElement(p,{emails:this.props.emails,setSidebarSection:function(t){e.setSidebarSection(t)}}),React.createElement("div",{className:"inbox-container"},React.createElement(y,{emails:this.state.emails.filter(function(t){return t.tag===e.state.currentSection}),onEmailSelected:function(t){e.openEmail(t)},selectedEmailId:this.state.selectedEmailId,currentSection:this.state.currentSection}),React.createElement(v,{email:t,onDelete:function(t){e.deleteMessage(t)}})))}}]),t}(),p=function(t){var a=t.emails,n=t.setSidebarSection,r=a.reduce(function(e,t){return"true"!==t.read?e+1:e}.bind(e),0),i=a.reduce(function(e,t){return"deleted"===t.tag?e+1:e}.bind(e),0);return React.createElement("div",{id:"sidebar"},React.createElement("div",{className:"sidebar__compose"},React.createElement("a",{href:"#",className:"btn compose"},"Compose ",React.createElement("span",{className:"fa fa-pencil"}))),React.createElement("ul",{className:"sidebar__inboxes"},React.createElement("li",{onClick:function(){n("inbox")}},React.createElement("a",null,React.createElement("span",{className:"fa fa-inbox"})," Inbox",React.createElement("span",{className:"item-count"},r))),React.createElement("li",{onClick:function(){n("sent")}},React.createElement("a",null,React.createElement("span",{className:"fa fa-paper-plane"})," Sent",React.createElement("span",{className:"item-count"},"0"))),React.createElement("li",{onClick:function(){n("drafts")}},React.createElement("a",null,React.createElement("span",{className:"fa fa-pencil-square-o"})," Drafts",React.createElement("span",{className:"item-count"},"0"))),React.createElement("li",{onClick:function(){n("deleted")}},React.createElement("a",null,React.createElement("span",{className:"fa fa-trash-o"})," Trash",React.createElement("span",{className:"item-count"},i)))))},h=function(e){var t=e.email,a=e.onEmailClicked,n="email-item";return e.selected&&(n+=" selected"),React.createElement("div",{onClick:function(){a(t.id)},className:n},React.createElement("div",{className:"email-item__unread-dot","data-read":t.read}),React.createElement("div",{className:"email-item__subject truncate"},t.subject),React.createElement("div",{className:"email-item__details"},React.createElement("span",{className:"email-item__from truncate"},t.from),React.createElement("span",{className:"email-item__time truncate"},d(t.time))))},v=function(e){var t=e.email;e.onDelete;if(!t)return React.createElement("div",{className:"email-content empty"});var a="".concat(d(t.time)," · ").concat(f(t.time));return React.createElement("div",{className:"email-content"},React.createElement("div",{className:"email-content__header"},React.createElement("h3",{className:"email-content__subject"},t.subject),React.createElement("button",{className:"button button--inbox js-modalBtn"},"Accept proposal"),React.createElement("button",{className:"button button--inbox button--secondary"},"Reject proposal"),React.createElement("div",{className:"email-content__time"},a),React.createElement("div",{className:"email-content__from"},t.from)),React.createElement("div",{className:"email-content__message"},t.message))},y=function(e){var t=e.emails,a=e.onEmailSelected,n=e.selectedEmailId;return 0===t.length?React.createElement("div",{className:"email-list empty"},"Nothing to see here, great job!"):React.createElement("div",{className:"email-list"},t.map(function(e){return React.createElement(h,{onEmailClicked:function(e){a(e)},email:e,selected:n===e.id})}))};React.render(React.createElement(b,{emails:m}),document.getElementById("inbox"));
},{}]},{},["pHua"], null)
//# sourceMappingURL=seller.3d47a713.map