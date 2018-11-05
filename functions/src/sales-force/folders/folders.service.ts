import { Folder } from "./folders.model";
import { foldersDashboardMock } from "./folders.service-data";


export function getFoldersForAdherent(adherentId: string, start: number = 1, end: number = 3): Promise<Folder[]> {
  return Promise.resolve(foldersDashboardMock.slice(start - 1, end));
}

export function getDetail(folderId: string): Promise<Folder> {
  let foundFolder: Folder;
  for (const folder of foldersDashboardMock) {
    if (folder.id === folderId) {
      foundFolder = folder;
    }
  }

  return Promise.resolve(foundFolder);
}
