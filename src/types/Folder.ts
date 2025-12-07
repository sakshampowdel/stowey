import type { Item } from './Item';

export interface Folder {
  id: string;
  name: string;
  items: Item[];
  sub_folders: Folder[];
  created_at: Date;
}
