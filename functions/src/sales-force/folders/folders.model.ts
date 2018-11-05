export interface Folder {
  id: String,
  occurrenceDate: Date | number | string,
  declarationDate: Date | number | string,
  refundedAmount: number,
  refundDate: Date | number | string,
  fees: number,
  status: FolderStatus,
}

export enum FolderStatus {
  SENT = 'green',
  WAITING = 'orange',
  CANCELED = 'red',
  UNKNOWN = 'gray'
}
