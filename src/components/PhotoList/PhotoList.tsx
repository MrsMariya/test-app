import { PhotoType } from '../../utils/types';

type MyProps = PhotoType & { handleDeletePhoto: (name: string) => void };

export const PhotoList = ({ photos, handleDeletePhoto }: MyProps) => {
  return (
    <div className="photos-items">
      {photos.map((photo) => {
        const { thumbpath, name } = photo;
        return (
          <div key={name} className="photo-wrapper">
            <img src={thumbpath} alt={name} />
            <button
              type="button"
              aria-label="Delete"
              className="delete_btn"
              onClick={() => handleDeletePhoto(name)}
            />
          </div>
        );
      })}
    </div>
  );
};
