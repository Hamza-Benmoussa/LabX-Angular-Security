import { Component, OnInit } from '@angular/core';
import {AnalyseService} from "../../service/analyse.service";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  analyses=[];
  constructor(private serviceAnalyse : AnalyseService) { }

  ngOnInit(): void {
    this.getAnalyses();
  }
  getAnalyses(){
    this.serviceAnalyse.getAnalyses().subscribe((res) =>{
      console.log(res)
      this.analyses = res;
    })
  }

  deleteAnalyse(id : number){
    this.serviceAnalyse.deleteAnalyse(id).subscribe((res) =>{
      this.getAnalyses();
    })
  }

}
