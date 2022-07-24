import edit from '../../assets/svg/Edit.svg';

const EditButton = () => {
  return (
    <button className="edit" type="button">
      <img src={edit} alt="edit" />
    </button>
  );
};

export default EditButton;
