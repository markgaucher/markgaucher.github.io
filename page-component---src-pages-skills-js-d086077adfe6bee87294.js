webpackJsonp([0xa6af4b0d9eb7b000],{"./src/components/ProgressBar.jsx":function(e,r,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function o(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(r,t,s){return t&&e(r.prototype,t),s&&e(r,s),r}}(),l=t("./node_modules/react/react.js"),c=s(l),u=t("./node_modules/gatsby-link/index.js");s(u);t("./src/components/ProgressBar.scss");var d=5,p=function(e){function r(e){n(this,r);var t=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={progress:0},t}return o(r,e),i(r,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({progress:e.props.experience/d*100})},1)}},{key:"render",value:function(){var e=this.props,r=e.description,t=e.name;return c.default.createElement("div",{className:"progress-bar"},c.default.createElement("div",{className:"progress-bar__name"},t," ",c.default.createElement("span",{className:"progress-bar__description"},r)),c.default.createElement("div",{className:"progress-bar__content"},c.default.createElement("div",{className:"progress-bar__progress",style:{width:this.state.progress+"%"}})))}}]),r}(c.default.PureComponent);p.defaultProps={name:"Name",experience:2.5},r.default=p,e.exports=r.default},"./src/components/ProgressBar.scss":function(e,r){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mark/Sites/Personal/markgaucher/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mark/Sites/Personal/markgaucher/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mark/Sites/Personal/markgaucher/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mark/Sites/Personal/markgaucher/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/mark/Sites/Personal/markgaucher/node_modules/babel-preset-env/lib/index.js","/Users/mark/Sites/Personal/markgaucher/node_modules/babel-preset-stage-0/lib/index.js","/Users/mark/Sites/Personal/markgaucher/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/skills.js':function(e,r,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},a=t("./node_modules/react/react.js"),o=s(a),i=t("./node_modules/gatsby-link/index.js"),l=(s(i),t("./src/components/ProgressBar.jsx")),c=s(l),u=function(e){var r=e.items;return o.default.createElement("div",{className:"page"},o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis libero vero, dolor optio quibusdam ipsa nostrum expedita fugit quam necessitatibus amet, sequi repellendus accusantium adipisci asperiores facere. Asperiores, quis libero."),o.default.createElement("br",null),r.map(function(e){return o.default.createElement(c.default,n({key:e.name},e))}))};u.defaultProps={items:[{name:"HTML",description:"Senior",experience:5},{name:"CSS (Sass)",description:"Senior",experience:5},{name:"React.js",description:"Senior",experience:4},{name:"React Native",description:"Intermediate",experience:3.5},{name:"Node.js",description:"Intermediate",experience:2.5},{name:"PostgreSQL",description:"Junior",experience:2},{name:"MongoDB",description:"Intermediate",experience:2.5},{name:"GraphQL",description:"Intermediate",experience:3}]},r.default=u,e.exports=r.default}});
//# sourceMappingURL=page-component---src-pages-skills-js-d086077adfe6bee87294.js.map