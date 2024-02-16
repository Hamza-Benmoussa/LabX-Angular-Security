import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeAnalyseComponent} from "./components/type-analyse/type-analyse.component";
import {TestAnalyseComponent} from "./components/test-analyse/test-analyse.component";
import {AnalyseComponent} from "./components/analyse/analyse.component";
import {EchantillonComponent} from "./components/echantillon/echantillon.component";
import {PlanificationComponent} from "./components/planification/planification.component";
import {HomeComponent} from "./components/home/home.component";
import {NavComponent} from "./components/nav/nav.component";
import {AddTypeComponent} from "./components/type-analyse/add-type/add-type.component";
import {UpdateTypeComponent} from "./components/type-analyse/update-type/update-type.component";
import {AddTestComponent} from "./components/test-analyse/add-test/add-test.component";
import {UpdateTestComponent} from "./components/test-analyse/update-test/update-test.component";
import {DetailsTestComponent} from "./components/test-analyse/details-test/details-test.component";
import {AddPlanificationComponent} from "./components/planification/add-planification/add-planification.component";
import {UpdatePlanificationComponent} from "./components/planification/update-planification/update-planification.component";
import {AddEchantillonComponent} from "./components/echantillon/add-echantillon/add-echantillon.component";
import {UpdateEchantillonComponent} from "./components/echantillon/update-echantillon/update-echantillon.component";
import {DetailsEchantillonComponent} from "./components/echantillon/details-echantillon/details-echantillon.component";
import {AddPatientComponent} from "./components/patient/add-patient/add-patient.component";
import {UpdatePatientComponent} from "./components/patient/update-patient/update-patient.component";
import {UpdateMaterialComponent} from "./components/material/update-material/update-material.component";
import {AddMaterialComponent} from "./components/material/add-material/add-material.component";
import {AfficherMaterialComponent} from "./components/material/afficher-material/afficher-material.component";
import {PatientComponent} from "./components/patient/patient.component";
import {AfficherReactifComponent} from "./components/reactif/afficher-reactif/afficher-reactif.component";
import {AddReactifComponent} from "./components/reactif/add-reactif/add-reactif.component";
import {UpdateReactifComponent} from "./components/reactif/update-reactif/update-reactif.component";
import {AfficherUtilisateurComponent} from "./components/utilisateur/afficher-utilisateur/afficher-utilisateur.component";
import {AddUtilisateurComponent} from "./components/utilisateur/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./components/utilisateur/update-utilisateur/update-utilisateur.component";
import {AddNormeComponent} from "./components/norme/add-norme/add-norme.component";
import {AfficherNormeComponent} from "./components/norme/afficher-norme/afficher-norme.component";
import {UpdateNormeComponent} from "./components/norme/update-norme/update-norme.component";
import {UpdateAnalyseComponent} from "./components/analyse/update-analyse/update-analyse.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {AuthGuardService} from "./service/auth.guard.service";

const routes: Routes = [

  {path : "patient" , component : PatientComponent ,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path : "add-patient" , component : AddPatientComponent ,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path : "update-patient/:id" , component : UpdatePatientComponent ,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},

  {path:"add-type" , component :AddTypeComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path : "type-analyse" , component : TypeAnalyseComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"update-type/:id" , component :UpdateTypeComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},

  {path : "test-analyse" , component : TestAnalyseComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','TECHNICIEN']}},
  {path:"add-test" , component :AddTestComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','TECHNICIEN']}},
  {path:"update-test" , component :UpdateTestComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','TECHNICIEN']}},
  {path:"details-test" , component :DetailsTestComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','TECHNICIEN']}},


  {path : "afficher-reactif" , component : AfficherReactifComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path : "add-reactif" , component : AddReactifComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path : "update-reactif/:id" , component : UpdateReactifComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},

  {path:"update-analyse/:id" , component :UpdateAnalyseComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','TECHNICIEN']}},
  {path : "analyse" , component : AnalyseComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','TECHNICIEN']}},

  {path : "echantillon" , component : EchantillonComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path:"add-echantillon" , component :AddEchantillonComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path:"update-echantillon/:id" , component :UpdateEchantillonComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path:"details-echantillon" , component :DetailsEchantillonComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},

  {path : "planification" , component : PlanificationComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path:"add-planification" , component :AddPlanificationComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},
  {path:"update-planification" , component :UpdatePlanificationComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR']}},

  {path:"add-material" , component :AddMaterialComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"afficher-material" , component :AfficherMaterialComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"update-material/:id" , component:UpdateMaterialComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},

  {path:"afficher-utilisateur" , component :AfficherUtilisateurComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"add-utilisateur" , component :AddUtilisateurComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"update-utilisateur/:id" , component :UpdateUtilisateurComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},

  {path:"add-norme" , component :AddNormeComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"afficher-norme" , component :AfficherNormeComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},
  {path:"update-norme/:id" , component :UpdateNormeComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE']}},

  {path:"auth" , component:AuthenticationComponent},


  {path : "" , component : AuthenticationComponent},
  {path : "nav" , component : NavComponent,canActivate : [AuthGuardService],data:{role:['RESPONSABLE_LABORATOIRE','PRELEVEUR','TECHNICIEN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
