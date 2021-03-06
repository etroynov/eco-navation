import { Modal } from 'antd';

export const error = () => Modal.error({
  title: 'Упс, что то пошло не так!',
  content: `В ходе получения данных произошла ошибка, попробуйте перезагрузить страницу. Если ошибка возникает повторно напишите нам на support@ucavtor.ru или в онлайн консультант.`,
});

export const success = () => Modal.success({
  title: 'Успешно!',
  content: `Изменения успешно сохранены.`,
});
