import ShortUUID from './shortuuid';

const su = new ShortUUID();

export function generateId(len = 11) {
  const id = su.uuid();

  return id.substr(0, len);
}
