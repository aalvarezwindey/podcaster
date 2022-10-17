import { logger } from '../logger';

class Cache {
  constructor({ millisTTL }) {
    this.millisTTL = millisTTL;
  }

  get(key) {
    const record = JSON.parse(sessionStorage.getItem(key));
    if (record) {
      logger.debug(`[CACHE_HIT][${key}]`);

      const now = new Date();
      if (now.getTime() < record.expiresOn) {
        return Promise.resolve(record.data);
      }

      logger.debug(`[CACHE_STALE_RECORD][${key}]`);
      sessionStorage.removeItem(key);
    }
  }

  set(key, value) {
    logger.debug(`[CACHE_SAVE][${key}]`);
    const now = new Date();
    return Promise.resolve(
      sessionStorage.setItem(
        key,
        JSON.stringify({
          data: value,
          expiresOn: now.getTime() + this.millisTTL,
        })
      )
    );
  }
}

export default Cache;
