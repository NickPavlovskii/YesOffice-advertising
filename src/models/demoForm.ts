export type DemoFormData = {
  name: string
  company: string
  email: string
  phone: string
}

export type DemoFormStatus = 'idle' | 'loading' | 'success' | 'error'
