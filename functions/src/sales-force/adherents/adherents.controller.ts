import { Request, Response } from 'express';
import { check } from 'express-validator/check';
import { ErrorTypes } from '../../core/error.model';
import { sendError } from '../../shared/utils/utils';
import { Adherent } from './adherents.model';
import { getAdherentsByCin } from './adherents.service';


// GET /api/adherents/{cin}
// Get adherents for a cin
export async function adherentsListForCin(req: Request, res: Response) {
  try {
    check(req.query.cin, 'CIN n\'est pas valide').isLength({min: 5, max: 6}).isAlphanumeric('fr-FR');
    let err = req.validationErrors();
    if (!err) {
      const cin: string = req.query.cin;
      const adherentNum : string = req.query.cin;
      const adherents: Adherent[] = await getAdherentsByCin(cin);
      if (adherents.length > 0) {
        res.status(200).json(adherents);
      } else {
        sendError(res, 404, ErrorTypes.RESOURCE_NOT_FOUND, 'No adherents found for the provided CIN', 'ERR-ADH-001');
      }
    } else {
      res.status(404).json({typeError: 'validation', error: err});
    }
  } catch (error) {
    sendError(res, 500, ErrorTypes.INTERNAL_EXCEPTION, error);
  }
}



