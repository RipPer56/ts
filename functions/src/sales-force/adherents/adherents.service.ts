import { firestore as firestoreAdmin } from 'firebase-admin';
import { Adherent } from './adherents.model';
import { adherentsMock } from './adherents.service-data';


export async function getAdherentsByCin(cin: string): Promise<Adherent[]> {
  const _cin = cin.toLowerCase();
  const registeredUsersIds: string[] = [];
  if (cin === '000001')
    return Promise.reject('Sales Force API Unreachable');
  return Promise.resolve(adherentsMock);
}
