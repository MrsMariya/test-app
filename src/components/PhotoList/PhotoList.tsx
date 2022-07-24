import { PhotoType } from '../../utils/types';

export const PhotoList = ({ photos, id }: PhotoType) => {
  return (
    <div className="card-block__photos-items">
      {photos.map((photo) => {
        const { thumbpath, name } = photo;
        return (
          <div key={id} className="card-block__photo-wrapper">
            <img src={thumbpath} alt={name} />
          </div>
        );
      })}
    </div>
  );
};
