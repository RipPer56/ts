import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { urlEndPoints } from '../shared/config/endPoints';
import { CacheService } from '../shared/services/cache-service';
import { Complaint } from './complaint.model';

@Injectable()
export class ComplaintsDal {


  constructor(private httpClient: HttpClient, private cacheService: CacheService) {
  }

  getAllComplaints(adherentId: string, start: number = 1, end: number = 2): Observable<Complaint[]> {
    return this.httpClient.get<Complaint[]>(urlEndPoints.complaintsUrl + "?start=" + start + "&end=" + end);
  }

  getComplaintDetailById(complaintId: string): Observable<Complaint | null> {
    return this.httpClient.get<Complaint>(urlEndPoints.complaintDetailUrl + complaintId);
  }

  addComplaintByFolderId(complaint: Complaint): Observable<Complaint | null> {
    this.cacheService.refreshSpecifiqueCache(urlEndPoints.complaintsUrl);
    return this.httpClient.post<Complaint>(urlEndPoints.complaintDetailUrl, {
      folderId: complaint.folderId,
      reason: complaint.reason,
      description: complaint.description
    });
  }
}
