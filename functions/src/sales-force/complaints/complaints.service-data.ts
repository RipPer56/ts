import { Complaint, ComplaintStatus } from "./complaints.model";

export var complaintsMock: Complaint[] = [
  {
    id: "122222",
    folderId: "1233333",
    declarationDate: new Date("05/01/2017"),
    description: "Je tiens à vous informer que vous ne m'avez pas remboursé les frais de mon dossier.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.SENT
  },
  {
    id: "122223",
    declarationDate: new Date("02/05/2017"),
    folderId: "1233333",
    description: "Il y a un problème de remboursement.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.UNKNOWN
  },
  {
    id: "122224",
    folderId: "1233333",
    declarationDate: new Date("05/01/2017"),
    description: "Je tiens à vous informer que vous ne m'avez pas remboursé les frais de mon dossier.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.WAITING
  },
  {
    id: "122225",
    declarationDate: new Date("02/05/2017"),
    folderId: "1233333",
    description: "Il y a un problème de remboursement.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.UNKNOWN
  },
  {
    id: "122226",
    folderId: "1233333",
    declarationDate: new Date("05/01/2017"),
    description: "Je tiens à vous informer que vous ne m'avez pas remboursé les frais de mon dossier.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.SENT
  },
  {
    id: "122227",
    declarationDate: new Date("02/05/2017"),
    folderId: "1233333",
    description: "Il y a un problème de remboursement.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.CANCELED
  },
  {
    id: "122228",
    folderId: "1233333",
    declarationDate: new Date("05/01/2017"),
    description: "Je tiens à vous informer que vous ne m'avez pas remboursé les frais de mon dossier.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.SENT
  },
  {
    id: "122229",
    declarationDate: new Date("02/05/2017"),
    folderId: "1233333",
    description: "Il y a un problème de remboursement.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.SENT
  },
  {
    id: "122230",
    folderId: "1233333",
    declarationDate: new Date("05/01/2017"),
    description: "Je tiens à vous informer que vous ne m'avez pas remboursé les frais de mon dossier.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.SENT
  },
  {
    id: "122231",
    declarationDate: new Date("02/05/2017"),
    folderId: "1233333",
    description: "Il y a un problème de remboursement.",
    reason: "Erreur de remboursement",
    status: ComplaintStatus.WAITING
  }
];
