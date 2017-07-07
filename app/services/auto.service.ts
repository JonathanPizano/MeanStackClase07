//Objeto que nos permite inyectar el servicio en distintas clases 
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
//Para el consumo de servicios Rest
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Auto} from '../models/Auto';

@Injectable()
export class AutoService{
    public url:string;

    constructor(private _http:Http){
        this.url = 'http://localhost:7070/api/';
    }

    getAutos(){
        return this._http.get(this.url+'/autos')
        .map(res=>res.json());
    }

    getAuto(id:string){
        return this._http.get(this.url + 'auto/' + id)
        .map(res => res.json());
    }

    postAuto(auto:Auto){
        let params = JSON.stringify(auto);
        let headers = new Headers();
        headers.append(
            'Content-Type','application/json'
        );
        return this._http.post(
            this.url+"auto",
            params,
            {headers:headers}
        ).map(res=>res.json());
    }
    putAuto(id:string, auto:Auto){
        let params = JSON.stringify(auto);
        let headers = new Headers();
        headers.append('Content-Type','application/json');
            return this._http.put(this.url+"auto/"+id, params, {headers:headers})
            .map(res=>res.json());
    }

    deleteAuto(id:string){
        return this._http.delete(this.url+'auto/'+id)
        .map(res=>res.json)
    }

}