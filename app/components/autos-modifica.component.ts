import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {AutoService} from '../services/auto.service'
import {Auto} from '../models/auto'

@Component({
    selector: 'autos-modifica',
    templateUrl:'app/views/autos-agrega.html',
    providers:[AutoService]
})

export class AutosModificaComponent implements OnInit{
    public errorMessage : any;
    public title : string ;
    public auto : Auto ; 

    constructor(
        private _autoService:AutoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = "Modificar un registro"
    }

    ngOnInit(){
        this.auto = new Auto("","", null ,"");
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
                    this.errorMessage = <any>error;
                    if(this.errorMessage!=null){
                        console.log(this.errorMessage);
                        alert('Error en la peticion');
                    }
                }
            )
        });
    }

    public onSubmit(){
        this._route.params.forEach((params:Params)=>{
            let _id = params['id'];
            this._autoService.putAuto(_id,this.auto).subscribe(
                response=>{

                    if(!response.nuevo){
                        this._router.navigate(['/']);
                    }else{
                        this.auto = response.nuevo;
                        this._router.navigate(['/auto',response.nuevo._id]);
                    }
                },
                error=>{
                    this.errorMessage = <any>error ;
                    if(this.errorMessage!=null){
                        console.log(this.errorMessage);
                        alert('Error en la petición');
                    }
                }
            )
        });
    }

}