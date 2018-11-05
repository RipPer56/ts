import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { urlEndPoints } from '../../config/endPoints';
import { Stats } from '../../models/stats.model';

@Injectable()
export class StatsDal {

  constructor(private httpClient: HttpClient) {
  }

  getStats(adherentId: string): Observable<Stats> {
    return this.httpClient.get<Stats>(urlEndPoints.statsUrl + adherentId);
  }

}
