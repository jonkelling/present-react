webpackJsonp([1],{"/CF7":function(n,e,t){n.exports=t.p+"most_contributors.b60b6be8.png"},0:function(n,e,t){t("+prg"),n.exports=t("lVK7")},"1qzx":function(n,e){},"5Azo":function(n,e,t){n.exports=t.p+"react.84287d09.svg"},"5oIz":function(n,e,t){n.exports=t.p+"tech.e2d0a200.png"},"8gg1":function(n,e,t){n.exports=t.p+"redux.59c46753.png"},"9Et6":function(n,e,t){n.exports=t.p+"redux-flow1.60760053.png"},SLKC:function(n,e,t){n.exports=t.p+"redux-react.1c1a05a5.png"},"Ue/Q":function(n,e){},Ufgf:function(n,e,t){"use strict";t.d(e,"a",function(){return w});var o,r=t("Xxa5"),a=t.n(r),i=t("GiK3"),s=t.n(i),c=t("8gNY"),l=(t.n(c),t("J+ax")),p=t.n(l),u=t("1qzx"),f=(t.n(u),t("etrI")),m=t.n(f),d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},h=((o=["",""]).raw=["",""],o);function b(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,t){return function o(r,a){try{var i=e[r](a),s=i.value}catch(n){return void t(n)}if(!i.done)return Promise.resolve(s).then(function(n){o("next",n)},function(n){o("throw",n)});n(s)}("next")})}}var g=s.a.createElement("div",null,"Loading..."),w=function(n){function e(t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,n.call(this,t));return o.state={content:"",images:""},o}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.componentDidMount=function(){var n=b(a.a.mark(function n(){var e=this;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:setInterval(b(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.reloadContent();case 2:case"end":return n.stop()}},n,e)})),1e3);case 1:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),e.prototype.reloadContent=function(){var n=b(a.a.mark(function n(){var e,o,r,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=void 0,window.location.hostname.includes("github.io")){n.next=10;break}return n.next=4,fetch("/api/presentation");case 4:return o=n.sent,n.next=7,o.text();case 7:e=n.sent,n.next=11;break;case 10:e=m.a;case 11:if(r=[{id:"react",url:t("si6N")},{id:"redux",url:t("8gg1")},{id:"redux-react",url:t("SLKC")},{id:"most-popular-languages",url:t("qGEa")},{id:"most-contributors",url:t("/CF7")},{id:"tech",url:t("5oIz")},{id:"redux-flow1",url:t("9Et6")}].map(function(n){return"["+n.id+"]: "+n.url}).join("\n"),e=(r+"\n\n"+e).replace(/^-{3}$/gm,"\n---\n\n"+r+"\n"),i=e.split(/^(?=#\s)/m).map(function(n){return n.split(/(?:^(?=(?:```|#{2,}\s+)\w+)|[\r\n]^```$)/m)}),e!==this.state.content){n.next=16;break}return n.abrupt("return");case 16:this.setState({content:e,steps:i,images:r});case 17:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),e.prototype.render=function(){if(""===this.state.content)return g;var n=p()({primary:"rgb(14, 39, 56)",secondary:"white",tertiary:"white",quarternary:"white"},{}),e=d({},n,{screen:d({},n.screen,{global:d({},n.screen.global,{p:{color:"white !important"},h3:{color:"white"},h4:{color:"white"},h5:{color:"white"},h6:{color:"white"},a:{color:"lightblue","text-decoration":"none"}})})});return s.a.createElement(c.Deck,{theme:e,transition:["zoom","slide"],transitionDuration:600},Object(c.MarkdownSlides)(h,this.state.content))},e}(s.a.Component)},cilB:function(n,e){},etrI:function(n,e){n.exports="# &nbsp; React &nbsp;&nbsp;+&nbsp;&nbsp; Redux\n\n| | |\n| - | - |\n| A library for creating user interfaces | A predictable state container\n\n![][redux-react]\n\n\n---\n\n# Overview\n\n-----\n\n| __Part 1__ | __Part 2__ | __Part 3__ |\n|:---------- |:---------- |:---------- |\n| &cir;&nbsp; What is React? | &cir;&nbsp; Unit Testing | &cir;&nbsp; What is Redux?\n| &cir;&nbsp; Why use it? | | &cir;&nbsp; State is your friend\n| &cir;&nbsp; Let's code! | | &cir;&nbsp; More coding!\n\n---\n\n# Who's Using It?\n\n[yahoo.com]: http://yahoo.com\n[facebook.com]: http://facebook.com\n[office.com]: http://office.com\n[outlook.office365.com]: http://outlook.office365.com\n[walmart.com]: http://walmart.com\n[walmart-article]: https://www.informationweek.com/devops/programming-languages/walmart-agility-enabled-with-reactjs-nodejs/d/d-id/1328676?\n\n&nbsp;\n\n| | |\n| -:| - |:-\n| [yahoo.com][yahoo.com] | &nbsp;&nbsp;&nbsp; | News + other areas\n| [facebook.com][facebook.com] | | Because obviously\n| [office.com][office.com] | | Office 365\n| [outlook.office365.com][outlook.office365.com] | | MS likes React\n| [walmart.com][walmart.com] | | [(article)][walmart-article]\n\n---\n\n# Why?\n\n\x3c!-- {{ x: step * 1200 * 1 }} --\x3e\n\n-----\n\nCross Platform\n\nCommunity Support\n\nUnidirectional Data Flow\n\nExcellent for Small, Medium, or Large Applications\n\n\n\n---\n\n![https://www.otssolutions.com/blog/wp-content/uploads/react-native-for-cross-platform-mobile-app-development.jpg](https://www.otssolutions.com/blog/wp-content/uploads/react-native-for-cross-platform-mobile-app-development.jpg)\n\n---\n\n![https://cdn.images.dailystar.co.uk/dynamic/184/photos/222000/620x/Oculus-Rift-Vr-Headset-Facebook-data-505708.jpg](https://cdn.images.dailystar.co.uk/dynamic/184/photos/222000/620x/Oculus-Rift-Vr-Headset-Facebook-data-505708.jpg)\n\n---\n\n![https://zgab33vy595fw5zq-zippykid.netdna-ssl.com/wp-content/uploads/2017/03/ChangesinDemand.png](https://zgab33vy595fw5zq-zippykid.netdna-ssl.com/wp-content/uploads/2017/03/ChangesinDemand.png)\n\n---\n\n__The fifteen most popular languages on GitHub__\n\n![Picture][most-popular-languages]\n\nby opened pull request\n\n---\n\n__Projects with the most contributors__\n\n![Most Contribtors][most-contributors]\n\n---\n\n![Tech][tech]\n\n-----\n\n| |\n| - | - | - | - | - |\n| React | Redux | | NodeJS | Babel\n| Jest | VS Code | Wallaby | MaterialUI | Webpack\n\n---\n\n# UFO Sightings\n\n-----\n\n| Components | |\n|:---------- \n\n- List\n- Filter by shape, state, etc.\n- Sighting of the day (ticker, react-truncate)\n- Tabbed Display (opened items)\n- Ratings\n- Filter by Rating\n\n---\n\n# Museums\n\n-----\n\n| Components | |\n|:----------\n\n- List\n- Detail\n- Filter by State\n- Find nearest museum\n\n\n---\n\n# TED Talks\n\n-----\n\n| Components | |\n|:----------\n\n- Word cloud ([react-tag-cloud](https://www.npmjs.com/package/react-tag-cloud))\n- Posts with tag lookup (table)\n- Event Quick Detail\n- Full Transcript\n- Ratings\n- Related Talks\n- Formatted Duration\n- Formatted Date\n\n\n---\n\n# A few packages for convenience\n\nlinq\n```js\nimport Enumerable from 'linq';\nEnumerable.from(someArray)\n    .where(x => x.someProp === 'someValue')\n    .select(x => ({...x}))\n    .toArray();\n```\n\n-----\n\nreact-overflow-ellipsis\n```js\nimport OverflowEllipsis from 'react-overflow-ellipsis'\n<OverflowEllipsis>{longText}</OverflowEllipsis>\n```\n\n\n---\n\n# Best Practices\n\n- If it can be calculated, it should be (see: [identify state](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state))\n- Calculations and conditionals should happen in render.\n- Keep components small, simple.\n\n---\n\n![Redux Flow][redux-flow1]\n\n---\n\n# Resources\n\n- [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)\n- [React Architecture and Best Practices](https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md)\n- [Clean Code vs. Dirty Code: React Best Practices](http://americanexpress.io/clean-code-dirty-code/)\n\n"},lVK7:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("cilB"),r=(t.n(o),t("GiK3")),a=t.n(r),i=t("O27J"),s=(t.n(i),t("pnOm"));Object(i.render)(a.a.createElement(s.a,null),document.querySelector("#app"))},pnOm:function(n,e,t){"use strict";var o=t("Ue/Q"),r=(t.n(o),t("GiK3")),a=t.n(r),i=t("Ufgf");var s=a.a.createElement("div",{className:"App-heading App-flex"},a.a.createElement("h2",null,"Welcome to ",a.a.createElement("span",{className:"App-react"},"React"))),c=a.a.createElement(i.a,null),l=function(n){function e(t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,n.call(this,t));return o.state={showPresentation:!0},o}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.render=function(){var n=this,e=a.a.createElement("div",{className:"App"},s,a.a.createElement("div",{className:"App-instructions App-flex"},a.a.createElement("img",{className:"App-logo",src:t("5Azo")}),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){return n.setState({showPresentation:!0})},style:{fontSize:"xx-large"}},"Start Presentation"))));return this.state.showPresentation?c:e},e}(r.Component);e.a=l},qGEa:function(n,e,t){n.exports=t.p+"most_popular_programming_languages.c16672e1.png"},si6N:function(n,e,t){n.exports=t.p+"react.8c0e654e.png"}},[0]);
//# sourceMappingURL=app.402085f4.js.map