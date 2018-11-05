import { Stats } from './stats.model';
import { statsMock } from './stats.service-data';


export function getStats(adherentId: string): Promise<Stats> {
  let foundStats: Stats;
  for (const stats of statsMock) {
    if (stats.adherentId === adherentId) {
      foundStats = stats;
    }
  }

  return Promise.resolve(foundStats);
}
