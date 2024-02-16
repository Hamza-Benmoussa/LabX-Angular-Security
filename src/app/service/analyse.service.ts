import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MaterialEchan} from "../entity/MaterialEchan";
import {Analyse} from "../entity/Analyse";
import {AnalyseRequest} from "../entity/AnalyseRequest";

const baseUrl="http://localhost:8088/api/analyses"
@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http : HttpClient) { }

  getAnalyses(): Observable<Analyse[]> {
    return this.http.get<Analyse[]>(baseUrl);
  }

  getAnalyseById(id :number) : Observable<Analyse>{
    return this.http.get<Analyse>(`${baseUrl}/${id}`);
  }
  updateAnalyse(id : number , analyse : AnalyseRequest):Observable<AnalyseRequest>{
    return this.http.put<AnalyseRequest>(`${baseUrl}/update/${id}`,analyse);
  }

  planification() {}
  deleteAnalyse(id:number) :Observable<Analyse>{
    return this.http.delete<Analyse>(`${baseUrl}/${id}`);
  }


}
