import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AutoService} from '../services/auto.service';
import {Auto} from '../models/auto';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'autos',
    templateUrl:'app/views/autos.html',
    providers:[AutoService]
})

export class AutosComponent implements OnInit{
    public titulo:string;
    public errorMessage;
    public autos: Auto[];

    public container: any;
    resultado: any;

    constructor(
        private _autoService:AutoService,
        overlay:Overlay,
        vcRef: ViewContainerRef,
        public modal: Modal,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        overlay.defaultViewContainer = vcRef;
        this.titulo = "Autos Maravilla"
    }

    getAutos(){
        this._autoService.getAutos().subscribe(
            result=>{
                this.autos = result.autos;
                if(!this.autos){
                    alert("Error en el servidor")
                }
            },
            error=>{
                this.errorMessage = <any>error;
                if(this.errorMessage!=null){
                    alert("Error en la petición")
                }
            });
    }
    ngOnInit(){
        this.getAutos();
    }

    onBorrarConfirmacion(_id){
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
        .then((resultPromise)=>{
            resultPromise.result.then(
                (result) =>{
                    this.resultado = result;
                    console.log("Aceptado")
                    this.onBorrar(_id)
                },
                ()=>{
                    this.resultado = "Rejected!"
                    this.onCancelarConfirm()
                }
            );
        });
    }

    onCancelarConfirm(){
        console.log("Cancelado")
    }

    onBorrar(_id){
        console.log(_id)
        this._autoService.deleteAuto(_id).subscribe(
            result=>{
                if(!result){
                    alert("Error en el servidor")
                } else {
                    this.getAutos();
                    this._router.navigate(['/']);
                }
            },
            error=>{
                this.errorMessage = <any>error;
                if(this.errorMessage!=null){
                    alert("Error en la petición")
                }
            });
    }

}