/* eslint-disable jsx-a11y/control-has-associated-label */
import { PhotoType } from '../../utils/types';
import edit from '../../assets/svg/Edit.svg';
import addFile from '../../assets/svg/Add.svg';

const Photos = ({ photos, id }: PhotoType) => {
  return (
    <div className="card-block__photos">
      <div className="card-block__info-title">
        Приложенные фото
        <img src={edit} alt="edit" />
      </div>
      <div className="card-block__photos-items">
        {photos.map((photo) => {
          const { thumbpath, name } = photo;
          return (
            <div className="card-block__photo-wrapper">
              <img key={id} src={thumbpath} alt={name} />
            </div>
          );
        })}
      </div>
      <label htmlFor="file">
        <img src={addFile} alt="add file" />
        Добавить изображение
        <input type="file" id="file" />
      </label>
    </div>
  );
};

export default Photos;
