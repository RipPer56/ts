interface ErrorMessages {
  [code: string]: string;
}


export const errorMessages: ErrorMessages = {
  "auth/invalid-email": "Email non valide.",
  "auth/user-not-found": "Nous n'avons pas trouvé d'utilisateur associé à cette adresse e-mail.",
  "auth/email-already-in-use": "Adresse email déjà utilisée.",
  "auth/wrong-password": "Mot de passe incorrect.",
  "auth/other": "Erreur lors de l'authentification.",
  "auth/network-request-failed": "Absence de connexion internet. Veuillez vérifier votre connexion et réessayez.",
  "ERR-ADH-001": "Aucun adhérent n'est lié à ce numéro de matricule.",
  "ERR-FLD-001": "Oups ! Ce dossier n'existe pas.",
  "ERR-CPL-001": "Oups ! Cette réclamation n'existe pas."
};
