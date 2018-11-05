import { Request, Response } from 'express';
import { ErrorTypes } from '../../core/error.model';
import { sendError } from '../../shared/utils/utils';
import { getStats } from './stats.service';


// GET /api/adherents/{adherentId}/stats
// Get stats by adherentId
export async function statsForAdherent(req: Request, res: Response) {
  try {
    const adherentId = req.params.adherentId;
    const stats = await getStats(adherentId);
    if (stats) {
      res.status(200).json(stats);
    } else {
      sendError(res, 404, ErrorTypes.RESOURCE_NOT_FOUND, 'No stats found for the provided adherent Id', 'ERR-FLD-001');
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
}

