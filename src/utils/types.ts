export type ListType = {
  contract: {
    issue_date: string;
    no: string;
  };
  name: string;
  photos: Array<PhotosElType>;
  shortName: string;
  status: string;
  type: Array<string>;
  businessEntity: string;
  id: string;
};

export type PhotosElType = {
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

export type ConfirmInfoType = {
  name: string;
  contract: { issue_date: string; no: string };
  businessEntity: string;
  type: Array<string>;
  shortName: string;
};
