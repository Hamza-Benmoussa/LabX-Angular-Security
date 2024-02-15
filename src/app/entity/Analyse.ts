import {Utilisateur} from "./Utilisateur";
import {TypeAnalyse} from "./TypeAnalyse";
import {StatusAnalyse} from "./StatusAnalyse";
import {Echantillon} from "./Echantillon";

export interface Analyse {
  id: number;
  echantillon: Echantillon;
  nom: string;
  utilisateurTechnicien: Utilisateur;
  dateDebutAnalyse: Date;
  dateFinAnalyse: Date;
  statusAnalyse: StatusAnalyse;
  commentaires: string;
  typeAnalyse:TypeAnalyse[];
}
