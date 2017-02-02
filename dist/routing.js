"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var notfound_component_1 = require("./notfound/notfound.component");
var appRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "contact", component: contact_component_1.ContactComponent },
    { path: "**", component: notfound_component_1.NotFoundComponent } // ** = Wildcard Anything else -- order matters
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map