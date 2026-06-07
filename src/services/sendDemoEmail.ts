import emailjs from '@emailjs/browser'
import type { DemoFormData } from '@/models/demoForm'

type EmailConfig = {
  serviceId: string
  adminTemplateId: string
  autoreplyTemplateId: string
  publicKey: string
}

function getEmailConfig(): EmailConfig | null {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID
  const autoreplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !adminTemplateId || !autoreplyTemplateId || !publicKey) {
    return null
  }

  return { serviceId, adminTemplateId, autoreplyTemplateId, publicKey }
}

export async function sendDemoEmail(data: DemoFormData) {
  const config = getEmailConfig()

  if (!config) {
    throw new Error(
      'EmailJS не настроен. Добавьте переменные VITE_EMAILJS_* в файл .env',
    )
  }

  const templateParams = {
    from_name: data.name,
    company: data.company,
    reply_to: data.email,
    phone: data.phone,
    to_name: data.name,
  }

  await emailjs.send(
    config.serviceId,
    config.adminTemplateId,
    templateParams,
    config.publicKey,
  )

  await emailjs.send(
    config.serviceId,
    config.autoreplyTemplateId,
    templateParams,
    config.publicKey,
  )
}
