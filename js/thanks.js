(function() {

  const getParam = () => {
    const urlParams = new URLSearchParams(window.location.search),
        params = {};

    urlParams.forEach((value, param) => {
      params[param] = value;
    });

    return params;
  }

  const contentSwitcher = (state = 'default') => {
    const text = document.querySelector('.thanks-page__text');

    switch (state) {
      case 'votepup':
        text.textContent = 'Ваш запрос отправлен на обработку нашим партнерам. Подборка квартир будет отправлена в ваш мессенджер.';
        return;
      case 'prevpup':
        text.textContent = 'Мы свяжемся с вами для уточнения криетериев подбора "закрытых" лотов.'
        return;
      default:
        text.textContent = 'Мы уже готовим презентацию по актуальным лотам в этом ЖК.';
        return;
    }
  }

  const params = getParam();

  for (const param in params) {
    if (param === 'referrer') {
      switch (params[param]) {
        case 'votepup':
          contentSwitcher('votepup');
          break;
        case 'prevpup':
          contentSwitcher('prevpup');
          break;
        default:
          contentSwitcher('default');
          break;
      }
    }
  }
})();