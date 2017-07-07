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
const auto_1 = require("../models/auto");
let AutosAgregaComponent = class AutosAgregaComponent {
    constructor(_autoService, _route, _router) {
        this._autoService = _autoService;
        this._route = _route;
        this._router = _router;
        this.title = "Crear un registro";
    }
    ngOnInit() {
        this.auto = new auto_1.Auto("", "", null, "");
    }
    onSubmit() {
        console.log(this.auto);
        this._autoService.postAuto(this.auto).subscribe(response => {
            if (!response.saved) {
                alert("Error en el servidor");
            }
            else {
                this.auto = response.saved;
                this._router.navigate(['/auto', response.saved._id]);
            }
        }, error => {
            this.errorMessage = error;
            if (this.errorMessage != null) {
                console.log(this.errorMessage);
                alert('Error en la petición');
            }
        });
    }
};
AutosAgregaComponent = __decorate([
    core_1.Component({
        selector: 'autos-agrega',
        templateUrl: 'app/views/autos-agrega.html',
        providers: [auto_service_1.AutoService]
    }),
    __metadata("design:paramtypes", [auto_service_1.AutoService,
        router_1.ActivatedRoute,
        router_1.Router])
], AutosAgregaComponent);
exports.AutosAgregaComponent = AutosAgregaComponent;
//# sourceMappingURL=auto-agrega.component.js.map