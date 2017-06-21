import { Injectable } from "@angular/core";
import { MainConfig } from "../config/main.config";
import { Headers, Http } from "@angular/http";


@Injectable()
export class MainService {


    constructor(private http: Http){}
    
    makeCall(payload){
        return this.http.post(MainConfig.apiUrl, {"reply": payload});
    
    }

}
