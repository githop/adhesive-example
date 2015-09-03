!function(){"use strict";angular.module("gloo",["ngAnimate","ngCookies","ngTouch","ui.router","ngMaterial","ngMessages"]).config(["$mdThemingProvider",function(t){t.definePalette("bloo",{50:"#ebf7fa",100:"#c3e8f0",200:"#9cd9e7",300:"#7accde",400:"#59c0d6",500:"#38b3ce",600:"#319db4",700:"#2a869b",800:"#237081",900:"#1c5a67",A100:"#c3e8f0",A200:"#9cd9e7",A400:"#59c0d6",A700:"#2a869b"}),t.definePalette("accent",{50:"#f0f9ef",100:"#d1ecd0",200:"#b3dfb0",300:"#99d496",400:"#7fc97b",500:"#66be61",600:"#59a655",700:"#4d8f49",800:"#40773d",900:"#335f31",A100:"#d1ecd0",A200:"#b3dfb0",A400:"#7fc97b",A700:"#4d8f49"}),t.definePalette("background",{50:"#f3f3f3",100:"#dcdcdc",200:"#c4c4c4",300:"#b0b0b0",400:"#9d9d9d",500:"#898989",600:"#787878",700:"#676767",800:"#565656",900:"#454545",A100:"#dcdcdc",A200:"#c4c4c4",A400:"#9d9d9d",A700:"#676767"}),t.theme("gloo").primaryPalette("bloo").accentPalette("accent")}])}(),function(){"use strict";function t(t,e,n){function o(){var t={type:"Book",title:"The Martian by Andy Weir",content:"A Mars Survival Story",url:"http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA"};r.push(new n(t))}function i(){return r}function a(){var o=function(t){var e=this;e.opts=m(),e.add=function(e){e.type&&t.hide({data:e})},e.cancel=function(){t.cancel()}};o.$inject=["$mdDialog"];var i={controller:o,controllerAs:"ctrl",templateUrl:"create.tmpl.html",parent:angular.element(document.body),bindToController:!0,clickOutsideToClose:!0};t.show(i).then(function(t){var o=new n(t.data);r.push(o),e.show(e.simple().content(t.data.type+" created!"))})}function d(n){var o=function(){var e=this;e.copy=angular.copy(e.data),e.opts=m(),e.onSelect=function(t){e.copy.type=t},e.update=function(e){t.hide({data:e})},e.cancel=function(){t.cancel()}},i={controller:o,controllerAs:"ctrl",templateUrl:"edit.tmpl.html",parent:angular.element(document.body),locals:{data:n},bindToController:!0,clickOutsideToClose:!0};t.show(i).then(function(t){n.setData(t.data),e.show(e.simple().content(t.data.title+" updated!"))})}function l(t){var n=_.find(r,t);n&&(_.remove(r,n),e.show(e.simple().content("Item Deleted :(")))}var c={},r=[];o(),c.create=a,c.update=d,c.destroy=l,c.getAll=i;var m=function(){var t=["Movie","Book","Website"];return _.map(t,function(t){return t={key:t}})};return c}angular.module("gloo").factory("ThingService",t),t.$inject=["$mdDialog","$mdToast","Resource"]}(),function(){"use strict";function t(){var t=function(t){this.setData(t)};return t.prototype.setData=function(t){var e=this;e.type=t.type,e.title=t.title,e.url=t.url,e.content=t.content},t}angular.module("gloo").factory("Resource",t)}(),function(){"use strict";function t(t){var e=this;e.things=t.getAll(),e.greeting="Hello Gloo!",e.create=function(){t.create()},e.update=function(e){t.update(e)},e.remove=function(e){t.destroy(e)}}angular.module("gloo").controller("GlooCtrl",t),t.$inject=["ThingService"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("gloo").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/gloo/gloo.html",controller:"GlooCtrl",controllerAs:"Gloo"}),e.otherwise("/")}angular.module("gloo").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t){t.debugEnabled(!0)}angular.module("gloo").config(t),t.$inject=["$logProvider"]}(),angular.module("gloo").run(["$templateCache",function(t){t.put("app/gloo/gloo.html",'<div layout-align="center start" md-theme="gloo"><header><md-toolbar><div class="md-toolbar-tools"><h4>Gloo Code Challenge</h4><span flex=""></span><p><a href="http://githop.com" target="_blank">Tom Hopkins</a></p></div></md-toolbar></header><div class="header"><h1>{{Gloo.greeting}}</h1><md-button class="md-fab md-mini" ng-click="Gloo.create()"><md-tooltip>Add Item</md-tooltip><i class="mdi mdi-plus-box"></i></md-button><div ng-if="!Gloo.things.length" class="animate-if">Looks like there is nothing here... <i class="mdi mdi-emoticon-sad mdi-24"></i><br>Add something?</div></div><div class="list-wrapper"><div ng-repeat="thing in Gloo.things" layout="column" class="repeat-item" layout-align="center center"><md-card class="thing-item"><md-card-content><div><i class="mdi mdi-36" ng-class="{ \'mdi-book\': thing.type == \'Book\', \'mdi-movie\': thing.type == \'Movie\', \'mdi-web\': thing.type== \'Website\' }"></i></div><h3>{{thing.title}}</h3><span ng-if="thing.url"><a ng-href="{{thing.url}}" target="_blank"><i class="mdi mdi-link-variant"></i></a></span> <span ng-if="!thing.url"><md-tooltip>No URL</md-tooltip><i class="mdi mdi-link-variant-off"></i></span> <span>{{thing.content}}</span></md-card-content><div class="md-actions"><md-button class="md-raised md-accent" ng-click="Gloo.remove(thing)"><i class="mdi mdi-delete mdi-24"></i></md-button><md-button class="md-raised md-primary" ng-click="Gloo.update(thing)"><i class="mdi mdi-pencil mdi-24"></i></md-button></div></md-card></div></div></div><script type="text/ng-template" id="create.tmpl.html"><md-dialog class="edit-dialog" md-theme="gloo"> <form name="createForm" ng-submit="ctrl.add(ctrl.data)"> <md-toolbar class="md-accent"> <div class="md-toolbar-tools"> <h2>Create</h2> <span flex></span> <md-button class="md-icon-button" ng-click="ctrl.cancel()"> <i class="mdi mdi-close"></i> </md-button> </div> </md-toolbar> <md-dialog-content> <div> <md-input-container> <md-select ng-model="ctrl.data.type" placeholder="Type" name="selectBox" required> <md-option ng-repeat="type in ctrl.opts" value="{{type.key}}">{{type.key}}</md-option> </md-select> <div ng-messages="createForm.selectBox.$error"> <div ng-message="required">Gotta pick a type!</div> </div> </md-input-container> <md-input-container> <label>Title</label> <input type="text" required name="title" ng-model="ctrl.data.title"> <div ng-messages="createForm.title.$error"> <div ng-message="required">Title cannot be blank!</div> </div> </md-input-container> <md-input-container> <label>Content</label> <input type="text" required name="content" ng-model="ctrl.data.content"> <div ng-messages="createForm.content.$error"> <div ng-message="required">Gotta have content!</div> </div> </md-input-container> <md-input-container> <label>url (optional)</label> <input type="url" name="link" ng-model="ctrl.data.url"> <div ng-messages="createForm.link.$error"> <div ng-message="url">Must be a valid URL!</div> </div> </md-input-container> </div> </md-dialog-content> <div class="md-actions" layout="row"> <span flex></span> <md-button class="md-raised md-accent" ng-click="ctrl.cancel()"> exit </md-button> <md-button class="md-raised md-primary" type="submit"> submit </md-button> </div> </form> </md-dialog></script><script type="text/ng-template" id="edit.tmpl.html"><md-dialog class="edit-dialog" md-theme="gloo"> <form name="editForm" ng-submit="ctrl.update(ctrl.copy)"> <md-toolbar> <div class="md-toolbar-tools"> <h2>Edit</h2> <span flex></span> <md-button class="md-icon-button" ng-click="ctrl.cancel()"> <i class="mdi mdi-close"></i> </md-button> </div> </md-toolbar> <md-dialog-content layout="column"> <div> <md-input-container> <md-select ng-model="ctrl.copy.type" placeholder="Type" ng-change="ctrl.onSelect(ctrl.copy.type)" name="editSelect" required> <md-option ng-repeat="type in ctrl.opts" value="{{type.key}}">{{type.key}}</md-option> </md-select> <div ng-messages="editForm.selectBox.$error"> <div ng-message="required">can\'t remote type!</div> </div> </md-input-container> <md-input-container> <label>Title</label> <input type="text" name="title" required ng-model="ctrl.copy.title"> <div ng-messages="editForm.title.$error"> <div ng-message="required">you shouldn\'t remove the whole title!</div> </div> </md-input-container> <md-input-container> <label>Content</label> <input type="text" name="content" required ng-model="ctrl.copy.content"> <div ng-messages="editForm.content.$error"> <div ng-message="required">you should know better by now :)</div> </div> </md-input-container> <md-input-container> <label>url (optional)</label> <input type="url" name="link" ng-model="ctrl.copy.url"> <div ng-messages="editForm.link.$error"> <div ng-message="url">Must be a valid URL!</div> </div> </md-input-container> </div> </md-dialog-content> <div class="md-actions" layout="row"> <span flex></span> <md-button class="md-raised md-accent" ng-click="ctrl.cancel()"> cancel </md-button> <md-button class="md-raised md-primary" type="submit"> save </md-button> </div> </form> </md-dialog></script>')}]);