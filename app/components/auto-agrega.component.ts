import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {AutoService} from '../services/auto.service'
import {Auto} from '../models/auto'

@Component({
    selector: 'autos-agrega',
    templateUrl:'app/views/autos-agrega.html',
    providers:[AutoService]
})

export class AutosAgregaComponent implements OnInit {
    public errorMessage : any ;
    public title : string ;
    public auto : Auto ; 

    constructor(
        private _autoService:AutoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = "Crear un registro"
    }

    ngOnInit(){
        this.auto = new Auto("","", null, "");
    }

    onSubmit(){
        console.log(this.auto)
        this._autoService.postAuto(this.auto).subscribe(
            response =>{
                if(!response.saved){
                    alert("Error en el servidor")
                } else {
                    this.auto = response.saved;
                    this._router.navigate(['/auto', response.saved._id]);
                }
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage!=null){
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        );
    }
}

