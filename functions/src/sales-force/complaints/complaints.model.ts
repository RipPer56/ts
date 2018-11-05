export interface Complaint {
  id: string,
  folderId: string,
  declarationDate: Date | number | string,
  reason: string,
  description: string,
  status: ComplaintStatus,
}

export enum ComplaintStatus {
  SENT = 'green',
  WAITING = 'orange',
  CANCELED = 'red',
  UNKNOWN = 'gray'
}
