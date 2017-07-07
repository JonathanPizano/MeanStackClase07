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
const angular2_modal_1 = require("angular2-modal");
const bootstrap_1 = require("angular2-modal/plugins/bootstrap");
let AutosComponent = class AutosComponent {
    constructor(_autoService, overlay, vcRef, modal, _route, _router) {
        this._autoService = _autoService;
        this.modal = modal;
        this._route = _route;
        this._router = _router;
        overlay.defaultViewContainer = vcRef;
        this.titulo = "Autos Maravilla";
    }
    getAutos() {
        this._autoService.getAutos().subscribe(result => {
            this.autos = result.autos;
            if (!this.autos) {
                alert("Error en el servidor");
            }
        }, error => {
            this.errorMessage = error;
            if (this.errorMessage != null) {
                alert("Error en la petición");
            }
        });
    }
    ngOnInit() {
        this.getAutos();
    }
    onBorrarConfirmacion(_id) {
        this.modal.confirm()
            .size('lg')
            .isBlocking(true)
            .showClose(false)
            .keyboard(27)
            .title('Estas seguro de eliminar el registro?')
            .body('Se eliminara el registro permanentemente')
            .bodyClass('modal-body')
            .okBtn('OK')
            .okBtnClass('btn btn-danger')
            .cancelBtn('Cancelar')
            .cancelBtnClass('btn btn-primary')
            .open()
            .then((resultPromise) => {
            resultPromise.result.then((result) => {
                this.resultado = result;
                console.log("Aceptado");
                this.onBorrar(_id);
            }, () => {
                this.resultado = "Rejected!";
                this.onCancelarConfirm();
            });
        });
    }
    onCancelarConfirm() {
        console.log("Cancelado");
    }
    onBorrar(_id) {
        console.log(_id);
        this._autoService.deleteAuto(_id).subscribe(result => {
            if (!result) {
                alert("Error en el servidor");
            }
            else {
                this.getAutos();
                this._router.navigate(['/']);
            }
        }, error => {
            this.errorMessage = error;
            if (this.errorMessage != null) {
                alert("Error en la petición");
            }
        });
    }
};
AutosComponent = __decorate([
    core_1.Component({
        selector: 'autos',
        templateUrl: 'app/views/autos.html',
        providers: [auto_service_1.AutoService]
    }),
    __metadata("design:paramtypes", [auto_service_1.AutoService,
        angular2_modal_1.Overlay,
        core_1.ViewContainerRef,
        bootstrap_1.Modal,
        router_1.ActivatedRoute,
        router_1.Router])
], AutosComponent);
exports.AutosComponent = AutosComponent;
//# sourceMappingURL=autos.component.js.map