import { SyntheticEvent, useRef, useState } from 'react';
import axios from 'axios';
import edit from '../../assets/svg/Edit.svg';
import addFile from '../../assets/svg/Add.svg';
import { PhotoList } from '../PhotoList/PhotoList';
import { URLImage } from '../../utils/constants';
import { PhotosElType, PhotoType } from '../../utils/types';

const Photos = ({ photos, id }: PhotoType) => {
  const token = sessionStorage.getItem('token');
  const fileInput = useRef<HTMLInputElement | null>(null);
  const formDate = new FormData();
  const [error, setError] = useState('');
  const [photo, setPhoto] = useState<Array<PhotosElType>>(photos);
  const [isLoading, setIsLoading] = useState(true);

  const handleFileSelect = (event: SyntheticEvent) => {
    event.preventDefault();
    const file = fileInput?.current?.files?.[0];
    if (file) {
      formDate.append('file', file);
      formDate.append('name', file?.name);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
      };
      axios
        .post(URLImage, formDate, config)
        .then((res) => {
          photos.push(res.data);
          setPhoto(photos);
          setIsLoading(true);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
      setIsLoading(false);
    }
  };

  return (
    <div className="card-block__photos">
      <div className="card-block__info-title">
        Приложенные фото
        <img src={edit} alt="edit" />
      </div>
      {!isLoading && <div className="loading" />}
      <PhotoList photos={photo} key={id} id={id} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="file">
        <img src={addFile} alt="add file" />
        Добавить изображение
        <input type="file" ref={fileInput} id="file" onInput={handleFileSelect} />
      </label>
    </div>
  );
};

export default Photos;
