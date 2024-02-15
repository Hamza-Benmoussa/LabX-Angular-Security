import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-analyse',
  templateUrl: './update-analyse.component.html',
  styleUrls: ['./update-analyse.component.css']
})
export class UpdateAnalyseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { Echantillon } from "../../../entity/Echantillon";
// import { Utilisateur } from "../../../entity/Utilisateur";
// import { StatusAnalyse } from "../../../entity/StatusAnalyse";
// import { TypeAnalyse } from "../../../entity/TypeAnalyse";
// import { UtilisateurService } from "../../../service/utilisateur.service";
// import { ActivatedRoute, Router } from "@angular/router";
// import { TypeanalyseService } from "../../../service/typeanalyse.service";
// import { AnalyseService } from "../../../service/analyse.service";
// import { AnalyseRequest } from "../../../entity/AnalyseRequest";
// import {DatePipe} from "@angular/common";
//
// @Component({
//   selector: 'app-add-analyse',
//   templateUrl: './add-analyse.component.html',
//   styleUrls: ['./add-analyse.component.css']
// })
// export class AddAnalyseComponent implements OnInit {
//   analyseForm: FormGroup;
//   echantillons: Echantillon[] = [];
//   urilisateurTechnicien: Utilisateur[] = [];
//   selectedUtilisateur: Utilisateur;
//   statusAnalyses: string[] = Object.values(StatusAnalyse);
//   typeAnalyses: TypeAnalyse[] = [];
//   selectedTypeAnalyse: TypeAnalyse;
//   id: number = this.activeRoute.snapshot.params["id"];
//
//   constructor(
//     private serviceUtlisateur: UtilisateurService,
//     private activeRoute: ActivatedRoute,
//     private router: Router,
//     private serviceTypeAnalyse: TypeanalyseService,
//     private formBuilder: FormBuilder,
//     private serviceAnalyse: AnalyseService
//   ) { }
//
//   ngOnInit(): void {
//     this.serviceTypeAnalyse.getTypeAnalyse().subscribe(data => {
//       console.log(this.selectedTypeAnalyse)
//       this.typeAnalyses = data;
//     });
//
//     this.serviceUtlisateur.getUtilisateurs().subscribe(data => {
//       console.log(this.selectedUtilisateur)
//       this.urilisateurTechnicien = data;
//     });
//
//     this.initForm();
//     this.getAnalyseById();
//   }
//
//   initForm(): void {
//     this.analyseForm = this.formBuilder.group({
//       echantillon: [null, Validators.required],
//       nom: [null, Validators.required],
//       utilisateurTechnicien: [null, Validators.required],
//       dateDebutAnalyse: [null, Validators.required],
//       dateFinAnalyse: [null, Validators.required],
//       statusAnalyse: [null, Validators.required],
//       commentaires: [null, Validators.required],
//       typeAnalyse: this.formBuilder.array([]),
//     });
//   }
//
//   getAnalyseById() {
//     this.serviceAnalyse.getAnalyseById(this.id).subscribe((res) => {
//       this.analyseForm.get('echantillon')?.setValue(res.echantillon.id)
//       this.analyseForm.patchValue(res);
//     });
//   }
//
//   onSubmit(): void {
//     const formData = this.analyseForm.value;
//     let analyseRequest: AnalyseRequest;
//     analyseRequest = {
//       echantillon: formData.echantillon.id,
//       nom: formData.nom,
//       utilisateurTechnicien: formData.utilisateurTechnicien,
//       dateDebutAnalyse: formData.dateDebutAnalyse,
//       dateFinAnalyse: formData.dateFinAnalyse,
//       statusAnalyse: formData.statusAnalyse,
//       commentaires: formData.commentaires,
//       typeAnalyse: formData.typeAnalyse
//     };
//
//     this.serviceAnalyse.updateAnalyse(this.id, analyseRequest).subscribe((res) => {
//       this.router.navigate(['/analyse']);
//     });
//   }
//
//   addTypeAnalyse(): void {
//     const typeAnalyseObject = this.analyseForm.get('typeAnalyse')?.value;
//     if (!typeAnalyseObject) {
//       return;
//     }
//
//     const newTypeAnalyse = this.formBuilder.group({
//       typeAnalyse: this.formBuilder.group({
//         id: typeAnalyseObject.id,
//         nom: typeAnalyseObject.nom,
//         analyse: typeAnalyseObject.analyse
//       })
//     });
//
//     const typeAnalyseArray = this.analyseForm.get('typeAnalyse') as FormArray;
//     typeAnalyseArray.push(newTypeAnalyse);
//
//     this.analyseForm.get('typeAnalyse')?.reset();
//   }
// }
