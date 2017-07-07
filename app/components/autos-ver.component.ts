import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {AutoService} from '../services/auto.service'
import {Auto} from '../models/auto'

@Component({
    selector: 'autos-ver',
    templateUrl:'app/views/autos-ver.html',
    providers:[AutoService]
})

export class AutosVerComponent implements OnInit{
    public mensajeError: string;
    public auto:Auto;

    constructor(
        private _autoService:AutoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){

    }
    ngOnInit(){
        this.getAuto();
    }

    getAuto(){
        this._route.params.forEach((params:Params)=>{
            let _id = params['id'];
            this._autoService.getAuto(_id).subscribe(
                response=>{
                    this.auto = response.auto;
                    if(!this.auto){
                        this._router.navigate(['/']);
                    }
                },
                error=>{
                    this.mensajeError = <any>error;
                    if(this.mensajeError!=null){
                        console.log(this.mensajeError);
                        alert('Error en la peticion');
                    }
                }
            )
        });
    }
}