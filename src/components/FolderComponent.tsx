import { FaFolder } from 'react-icons/fa6';
import type { Folder } from '../types/Folder';
import { MdTextSnippet } from 'react-icons/md';

const FolderComponent = ({ root }: { root: Folder }) => {
  return (
    <div className="flex flex-col gap-2 ml-2 p-3 border-l-2 border-b-2">
      <div className="flex items-center">
        <FaFolder className="text-accent mr-2" />
        <h1 className="text-md">{root.name}</h1>
      </div>

      {root.sub_folders.map((folder: Folder) => (
        <FolderComponent key={folder.id} root={folder} />
      ))}

      {root.items.map((item) => (
        <p key={item.id} className="flex items-center text-sm ml-4">
          <MdTextSnippet className="text-primary mr-2" />
          <p>{item.name}</p>
        </p>
      ))}
    </div>
  );
};

export default FolderComponent;
