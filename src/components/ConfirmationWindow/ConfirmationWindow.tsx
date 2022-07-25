const ConfirmationWindow = ({
  closeWindow,
  deleteCompany,
}: {
  closeWindow: () => void;
  deleteCompany: () => void;
}) => {
  return (
    <div className="overlay">
      <form className="confirm-wrapper">
        <span className="confirm-wrapper__title">Удалить карточку</span>
        <span className="card-block_info-description">Отправить карточку организации в архив?</span>
        <div className="confirm-wrapper__buttons">
          <button type="button" className="delete" onClick={deleteCompany}>
            Удалить
          </button>
          <button type="button" className="cancellation" onClick={closeWindow}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationWindow;
