"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('../hero/heroes.component');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var hero_detail_component_1 = require('../hero/hero-detail.component');
var appRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map