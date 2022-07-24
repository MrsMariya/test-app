import { ChangeEvent } from 'react';
import axios from 'axios';
import { PhotoType } from '../../utils/types';
import edit from '../../assets/svg/Edit.svg';
import addFile from '../../assets/svg/Add.svg';
import { PhotoList } from '../PhotoList/PhotoList';
import { URLImage } from '../../utils/constants';

const Photos = ({ photos, id }: PhotoType) => {
  const token = sessionStorage.getItem('token');

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
      formData.append('name', file.name);
      axios.post(URLImage, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
      });
    }
  };

  return (
    <div className="card-block__photos">
      <div className="card-block__info-title">
        Приложенные фото
        <img src={edit} alt="edit" />
      </div>
      <PhotoList photos={photos} key={id} id={id} />
      <label htmlFor="file">
        <img src={addFile} alt="add file" />
        Добавить изображение
        <input type="file" id="file" onChange={handleFileSelect} />
      </label>
    </div>
  );
};

export default Photos;
