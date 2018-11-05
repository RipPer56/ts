import { Folder, FolderStatus } from "./folders.model";


// TODO -- More accurate date for the copil
export const foldersDashboardMock: Folder[] = [{
  id: "122222",
  declarationDate: new Date('12/12/2017'),
  occurrenceDate: new Date('11/12/2017'),
  fees: 140.34,
  refundDate: new Date('10/25/2017'),
  refundedAmount: 120.20,
  status: FolderStatus.WAITING
}, {
  id: "233221",
  declarationDate: new Date('10/10/2017'),
  occurrenceDate: new Date('05/03/2017'),
  fees: 1400.23,
  refundDate: new Date('12/30/2016'),
  refundedAmount: 800.20,
  status: FolderStatus.CANCELED
},
  {
    id: "221222",
    declarationDate: new Date('1/20/2018'),
    occurrenceDate: new Date('01/10/2017'),
    fees: 1200.23,
    refundDate: new Date('06/28/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.SENT
  },
  {
    id: "221282",
    declarationDate: new Date('1/20/2018'),
    occurrenceDate: new Date('01/10/2017'),
    fees: 1200.23,
    refundDate: new Date('06/28/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.SENT
  },
  {
    id: "221272",
    declarationDate: new Date('1/20/2018'),
    occurrenceDate: new Date('01/10/2017'),
    fees: 1200.23,
    refundDate: new Date('06/28/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.SENT
  },
  {
    id: "221262",
    declarationDate: new Date('1/20/2018'),
    occurrenceDate: new Date('01/10/2017'),
    fees: 1200.23,
    refundDate: new Date('06/28/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.SENT
  },
  {
    id: "221252",
    declarationDate: new Date('1/20/2018'),
    occurrenceDate: new Date('01/10/2017'),
    fees: 1200.23,
    refundDate: new Date('06/28/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.SENT
  },
  {
    id: "221292",
    declarationDate: new Date('1/20/2018'),
    occurrenceDate: new Date('01/10/2017'),
    fees: 1200.23,
    refundDate: new Date('06/28/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.SENT
  },
  {
    id: "1222",
    declarationDate: new Date('12/12/2017'),
    occurrenceDate: new Date('11/12/2017'),
    fees: 140.34,
    refundDate: new Date('10/25/2017'),
    refundedAmount: 120.20,
    status: FolderStatus.WAITING
  }, {
    id: "2331",
    declarationDate: new Date('10/10/2017'),
    occurrenceDate: new Date('05/03/2017'),
    fees: 1400.23,
    refundDate: new Date('12/30/2016'),
    refundedAmount: 800.20,
    status: FolderStatus.CANCELED
  },
];

