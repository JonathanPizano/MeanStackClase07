"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auto_service_1 = require("../services/auto.service");
let AutosVerComponent = class AutosVerComponent {
    constructor(_autoService, _route, _router) {
        this._autoService = _autoService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.getAuto();
    }
    getAuto() {
        this._route.params.forEach((params) => {
            let _id = params['id'];
            this._autoService.getAuto(_id).subscribe(response => {
                this.auto = response.auto;
                if (!this.auto) {
                    this._router.navigate(['/']);
                }
            }, error => {
                this.mensajeError = error;
                if (this.mensajeError != null) {
                    console.log(this.mensajeError);
                    alert('Error en la peticion');
                }
            });
        });
    }
};
AutosVerComponent = __decorate([
    core_1.Component({
        selector: 'autos-ver',
        templateUrl: 'app/views/autos-ver.html',
        providers: [auto_service_1.AutoService]
    }),
    __metadata("design:paramtypes", [auto_service_1.AutoService,
        router_1.ActivatedRoute,
        router_1.Router])
], AutosVerComponent);
exports.AutosVerComponent = AutosVerComponent;
//# sourceMappingURL=autos-ver.component.js.map