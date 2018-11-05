export interface Complaint {
  id?: string,
  folderId: string,
  declarationDate?: Date | number | string,
  reason?: string,
  description?: string,
  status?: ComplaintStatusColor,
}

export enum ComplaintStatusColor {
  SENT = 'green',
  WAITING = 'orange',
  CANCELED = 'red',
  UNKNOWN = 'gray'
}

export enum ComplaintStatus {
  green = 'Accepté',
  red = 'Rejeté',
  gray = 'Envoyée',
  orange= 'En cours de traitement',
}
