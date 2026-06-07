/**
 * Шаблоны настраиваются в EmailJS (https://www.emailjs.com/):
 *
 * 1) admin_template — письмо вам на info@w-space.ru
 *    Переменные: {{from_name}}, {{company}}, {{reply_to}}, {{phone}}
 *
 * 2) autoreply_template — автоответ пользователю
 *    Переменные: {{to_name}}, {{company}}
 *    To Email в шаблоне: {{reply_to}}
 */
export const demoEmailTemplates = {
  adminSubject: 'Новая заявка на демо W-Space',
  autoreplySubject: 'Спасибо за заявку — W-Space',
} as const
