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

const routes: Routes = [

  {path : "patient" , component : PatientComponent},
  {path : "add-patient" , component : AddPatientComponent},
  {path : "update-patient/:id" , component : UpdatePatientComponent},

  {path:"add-type" , component :AddTypeComponent},
  {path : "type-analyse" , component : TypeAnalyseComponent},
  {path:"update-type/:id" , component :UpdateTypeComponent},

  {path : "test-analyse" , component : TestAnalyseComponent},
  {path:"add-test" , component :AddTestComponent},
  {path:"update-test" , component :UpdateTestComponent},
  {path:"details-test" , component :DetailsTestComponent},


  {path : "afficher-reactif" , component : AfficherReactifComponent},
  {path : "add-reactif" , component : AddReactifComponent},
  {path : "update-reactif/:id" , component : UpdateReactifComponent},

  {path:"update-analyse/:id" , component :UpdateAnalyseComponent},
  {path : "analyse" , component : AnalyseComponent},

  {path : "echantillon" , component : EchantillonComponent},
  {path:"add-echantillon" , component :AddEchantillonComponent},
  {path:"update-echantillon/:id" , component :UpdateEchantillonComponent},
  {path:"details-echantillon" , component :DetailsEchantillonComponent},

  {path : "planification" , component : PlanificationComponent},
  {path:"add-planification" , component :AddPlanificationComponent},
  {path:"update-planification" , component :UpdatePlanificationComponent},

  {path:"add-material" , component :AddMaterialComponent},
  {path:"afficher-material" , component :AfficherMaterialComponent},
  {path:"update-material/:id" , component:UpdateMaterialComponent},

  {path:"afficher-utilisateur" , component :AfficherUtilisateurComponent},
  {path:"add-utilisateur" , component :AddUtilisateurComponent},
  {path:"update-utilisateur/:id" , component :UpdateUtilisateurComponent},

  {path:"add-norme" , component :AddNormeComponent},
  {path:"afficher-norme" , component :AfficherNormeComponent},
  {path:"update-norme/:id" , component :UpdateNormeComponent},

  {path : "" , component : HomeComponent},
  {path : "nav" , component : NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
