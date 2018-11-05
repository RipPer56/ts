import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { urlEndPoints } from "../shared/config/endPoints";
import { Folder } from "./folder.model";

@Injectable()
export class FoldersDal {

  constructor(private httpClient: HttpClient) {
  }

  getAllFolders(adherentId: string, start: number = 1, end: number = 3): Observable<Folder[]> {
    return this.httpClient.get<Folder[]>(urlEndPoints.foldersUrl + "?start=" + start + "&end=" + end);
  }

  folderDetail(folderId: string): Observable<Folder> {
    return this.httpClient.get<Folder>(urlEndPoints.folderDetailUrl + folderId);
  }
}
