export interface Folder {
  id: string,
  occurrenceDate?: Date | number | string,
  declarationDate?: Date | number | string,
  refundedAmount?: number,
  refundDate?: Date | number | string,
  fees?: number,
  status?: FolderStatusColor,
}

export enum FolderStatusColor {
  SENT = 'green',
  WAITING = 'orange',
  CANCELED = 'red',
  UNKNOWN = 'gray'
}

export enum FolderStatus {
  green = 'Remboursé',
  orange = 'En cours de traitement',
  red = 'Rejeté',
  gray = 'Inconnue'
}
