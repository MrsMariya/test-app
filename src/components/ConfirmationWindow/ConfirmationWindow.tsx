const ConfirmationWindow = ({ closeWindow }: { closeWindow: () => void }) => {
  return (
    <div className="overlay">
      <div className="confirm-wrapper">
        <span className="confirm-wrapper__title">Удалить карточку</span>
        <span className="card-block_info-description">Отправить карточку организации в архив?</span>
        <div className="confirm-wrapper__buttons">
          <button type="button" className="delete">
            Удалить
          </button>
          <button type="button" className="cancellation" onClick={closeWindow}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
