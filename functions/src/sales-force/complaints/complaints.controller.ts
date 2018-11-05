import { Request, Response } from 'express';
import { ErrorTypes } from '../../core/error.model';
import { sendError } from '../../shared/utils/utils';
import { getDetail } from '../folders/folders.service';
import { addComplaintToDB, getComplaintDetail, getComplaints } from './complaints.service';

// GET /api/adherents/{adherentId}/complaints
// Get complaint list for an adherent
export async function complaintListForAdherent(req: Request, res: Response) {
  try {
    req.check('start', 'le mot start doit etre un entier').isNumeric();
    req.check('end', 'le mot end doit etre un entier').isNumeric();
    let err = req.validationErrors();
    if (!err) {
      const adherentId = req.params.adherentId;
      const start = req.query.start;
      const end = req.query.end;
      const complaints = await getComplaints(adherentId, start, end);
      res.status(200).json(complaints);
    } else {
      res.status(404).send({typeError: 'validation', error: err});
    }
  } catch (error) {
    res.status(500).send({error: error});
  }
}

// GET/api/adherents/{adherentId}/complaints/{complaintId}
// Get complaint detail by Id
export async function complaintDetail(req: Request, res: Response) {
  try {
    req.check('complaintId', 'L\'identifiant de votre réclamation est inccorrecte').isAlphanumeric().exists().isLength({
      min: 6,
      max: 12,
    });
    let err = req.validationErrors();
    if (!err) {
      const complaintId = req.params.complaintId;
      const complaint = await getComplaintDetail(complaintId);
      if (complaint) {
        res.status(200).json(complaint);
      } else {
        sendError(res, 404, ErrorTypes.RESOURCE_NOT_FOUND, 'No Complaint found for the provided Id', 'ERR-CPL-001');
      }
    } else {
      res.status(404).json({typeError: 'validation', error: err});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }

}


export async function addComplaint(req: Request, res: Response) {
  req.check('folderId', 'L\'identifiant de votre dossier est incorrecte').isAlphanumeric().exists().isLength({
    min: 6,
    max: 12,
  });
  req.check('reason', 'la raison de votre réclamation est incorrecte').exists().isLength({min: 20, max: 35});
  req.check('description', 'La description de votre réclamation est incorrecte').exists().isLength({
    min: 30,
    max: 120,
  });

  let err = req.validationErrors();
  if (!err) {
    const folder = await getDetail(req.body.folderId);
    if (folder) {
      const complaint = await addComplaintToDB(req);
      res.json(complaint);
    } else {
      res.status(404).json({error: 'folder not found'});
    }
  } else {
    res.status(404).json({typeError: 'validation', error: err});
  }
}
