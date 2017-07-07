"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Carga de modulos, componentes, directivas y el componente principal
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const autos_component_1 = require("./components/autos.component");
const auto_agrega_component_1 = require("./components/auto-agrega.component");
const autos_modifica_component_1 = require("./components/autos-modifica.component");
const angular2_modal_1 = require("angular2-modal");
const bootstrap_1 = require("angular2-modal/plugins/bootstrap");
const MODAL_PROVIDERS = [
    bootstrap_1.Modal,
    angular2_modal_1.Overlay,
    { provide: angular2_modal_1.OverlayRenderer, useClass: angular2_modal_1.DOMOverlayRenderer }
];
//Peticiones HTTP y Parseo de Objetos JSON
const http_1 = require("@angular/http");
const autos_ver_component_1 = require("./components/autos-ver.component");
const app_routing_1 = require("./app.routing");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_1.routing,
            angular2_modal_1.ModalModule,
            bootstrap_1.BootstrapModalModule],
        declarations: [app_component_1.AppComponent,
            autos_component_1.AutosComponent,
            autos_ver_component_1.AutosVerComponent,
            auto_agrega_component_1.AutosAgregaComponent,
            autos_modifica_component_1.AutosModificaComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            MODAL_PROVIDERS
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map