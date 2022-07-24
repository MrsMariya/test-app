export type ListType = {
  contactId: string;
  contract: object;
  createdAt: string;
  name: string;
  photos: Array<PhotosElType>;
  shortName: string;
  status: string;
  type: Array<string>;
  updatedAt: string;
  businessEntity: string;
  id: string;
};

export type PhotosElType = {
  preventDefault();
  thumbpath: string;
  name: string;
};

export type ContactType = {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
};

export type PhotoType = {
  key: string;
  photos: Array<PhotosElType>;
  id: string;
};

export type MyNewProps = {
  photoList: Array<PhotosElType>;
};
