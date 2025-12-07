import type { Folder } from '../types/Folder';
import FolderComponent from './FolderComponent';

export const dummyData: Folder = {
  id: 'root-1',
  name: 'Root Folder',
  created_at: new Date(),

  items: [
    {
      id: 'item-1',
      name: 'Welcome Document',
      link: 'https://example.com/welcome',
      created_at: new Date(),
    },
    {
      id: 'item-2',
      name: 'Getting Started',
      link: 'https://example.com/start',
      created_at: new Date(),
    },
  ],

  sub_folders: [
    {
      id: 'folder-2',
      name: 'Projects',
      created_at: new Date(),

      items: [
        {
          id: 'item-3',
          name: 'Project Plan',
          link: 'https://example.com/plan',
          created_at: new Date(),
        },
      ],

      sub_folders: [
        {
          id: 'folder-3',
          name: 'Frontend',
          created_at: new Date(),

          items: [
            {
              id: 'item-4',
              name: 'UI Designs',
              link: 'https://example.com/designs',
              created_at: new Date(),
            },
          ],

          sub_folders: [],
        },
      ],
    },

    {
      id: 'folder-4',
      name: 'Resources',
      created_at: new Date(),

      items: [
        {
          id: 'item-5',
          name: 'Cheat Sheet',
          link: 'https://example.com/cheatsheet',
          created_at: new Date(),
        },
      ],

      sub_folders: [
        {
          id: 'folder-5',
          name: 'Images',
          created_at: new Date(),
          items: [],
          sub_folders: [],
        },
      ],
    },
  ],
};

const Body = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4">Folder Tree</h1>
      <FolderComponent root={dummyData} />
    </div>
  );
};

export default Body;
