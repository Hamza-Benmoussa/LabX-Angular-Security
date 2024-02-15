import {Utilisateur} from "./Utilisateur";
import {TypeAnalyse} from "./TypeAnalyse";
import {StatusAnalyse} from "./StatusAnalyse";
import {Echantillon} from "./Echantillon";

export interface AnalyseRequest {
  echantillon: Echantillon;
  nom: string;
  utilisateurTechnicien: Utilisateur;
  dateDebutAnalyse: String;
  dateFinAnalyse: String;
  statusAnalyse: StatusAnalyse;
  commentaires: string;
  typeAnalyse:TypeAnalyse[];
}
