import { Request, Response } from 'express';
import { ErrorTypes } from '../../core/error.model';
import { sendError } from '../../shared/utils/utils';
import { getDetail, getFoldersForAdherent } from './folders.service';

// GET /api/adherents/{adherentId}/folders
// Get folder list for an adherent
export async function folderListForAdherent(req: Request, res: Response) {
  try {
    req.check('start', 'le mot start doit etre un entier').isNumeric().exists();
    req.check('end', 'le mot end doit etre un entier').isNumeric().exists();

    let err = req.validationErrors();
    if (!err) {
      const adherentId = req.params.adherentId;
      const start = req.query.start;
      const end = req.query.end;
      const folders = await getFoldersForAdherent(adherentId, start, end);
      res.status(200).json(folders);
    } else {
      res.status(404).json({typeError: 'validation', error: err});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
}

// GET /api/folder/{folderId}
// Get folder detail by Id
export async function folderDetail(req: Request, res: Response) {
  try {
    req.check('folderId', 'L\'identifiant de votre dossier est inccorrecte').isAlphanumeric().exists().isLength({
      min: 6,
      max: 12,
    });
    let err = req.validationErrors();
    if (!err) {
      const folderId = req.params.folderId;
      const folder = await getDetail(folderId);
      if (folder) {
        res.status(200).json(folder);
      } else {
        sendError(res, 404, ErrorTypes.RESOURCE_NOT_FOUND, 'No folder found for the provided Id', 'ERR-FLD-001');
      }
    } else {
      res.status(404).json({typeError: 'validation', error: err});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
}



