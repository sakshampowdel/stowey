import type { Folder } from '../types/Folder';
import type { Item } from '../types/Item';
import { generateId } from './UtilityService';

export const createFolder = (name: string): Folder => {
  return {
    id: generateId(),
    name: name,
    items: [],
    sub_folders: [],
    created_at: new Date(),
  };
};

export const appendFolder = (
  cur_folder: Folder,
  new_folder: Folder
): Folder => {
  const new_sub_folders: Folder[] = [...cur_folder.sub_folders, new_folder];
  return {
    ...cur_folder,
    sub_folders: new_sub_folders,
  };
};

export const deleteFolder = (
  parent_folder: Folder,
  sub_folder_id: string
): Folder => {
  const new_sub_folders: Folder[] = parent_folder.sub_folders.filter(
    (folder: Folder) => {
      return folder.id != sub_folder_id;
    }
  );

  return {
    ...parent_folder,
    sub_folders: new_sub_folders,
  };
};

export const appendItem = (cur_folder: Folder, new_item: Item): Folder => {
  const new_items: Item[] = [...cur_folder.items, new_item];
  return {
    ...cur_folder,
    items: new_items,
  };
};

export const deleteItem = (parent_folder: Folder, item_id: string): Folder => {
  const new_items: Item[] = parent_folder.items.filter((item: Item) => {
    return item.id != item_id;
  });

  return {
    ...parent_folder,
    items: new_items,
  };
};
