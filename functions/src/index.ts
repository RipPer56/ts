import * as cors from 'cors';
import * as express from 'express';
import * as expressValidator from 'express-validator';
import { initializeApp } from 'firebase-admin';
import { config, https } from 'firebase-functions';
import { adherentsListForCin } from './sales-force/adherents/adherents.controller';
import {
  addComplaint,
  complaintDetail,
  complaintListForAdherent,
} from './sales-force/complaints/complaints.controller';
import { folderDetail, folderListForAdherent } from './sales-force/folders/folders.controller';
import { statsForAdherent } from './sales-force/stats/stats.controller';
import { isAuthenticated } from './shared/utils/validator-token.utils';

const app = express();
app.use(cors({origin: true}));
app.use(expressValidator());

initializeApp(config().firebase);

//Define Adherents routes
const adherentsRouter = express.Router();
app.use('/adherents', adherentsRouter);

const ComplaintsRouter = express.Router();
app.use('/complaint', ComplaintsRouter);

const FoldersRouter = express.Router();
app.use('/folder', FoldersRouter);

const StatsRouter = express.Router();
app.use('/stats', StatsRouter);

//Define Adherents routes
adherentsRouter.get('/', adherentsListForCin);
adherentsRouter.get('/:adherentId/folders', isAuthenticated, folderListForAdherent);
adherentsRouter.get('/:adherentId/complaints', isAuthenticated, complaintListForAdherent);

// Define Folders routes
FoldersRouter.get('/:folderId', isAuthenticated, folderDetail);

// Define stats routes
StatsRouter.get('/:adherentId', isAuthenticated, statsForAdherent);


// Define Complaints routes
ComplaintsRouter.get('/:complaintId', isAuthenticated, complaintDetail);
ComplaintsRouter.post('/', isAuthenticated, addComplaint);


// Expose the API as a function
export const api = https.onRequest(app);
