const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      return tg.mainButton.hide();
    }

    return tg.MainButton.show();
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
  };
};
