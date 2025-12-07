import type { Item } from '../types/Item';
import { generateId } from './UtilityService';

export const createItem = (name: string, link: string): Item => {
  return {
    id: generateId(),
    name: name,
    link: link,
    created_at: new Date(),
  };
};
