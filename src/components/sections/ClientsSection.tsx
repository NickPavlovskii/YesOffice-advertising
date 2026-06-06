import { AnimateIn } from '@/components/ui/AnimateIn'
import { ClientCard, GeographyCard } from '@/components/ui'
import { clients, clientsSection, geography } from '@/constants/clients'

export function ClientsSection() {
  return (
    <section id="clients" className="relative bg-bg-section px-6 pb-20 pt-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 section-bg-fade"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="text-center text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
            {clientsSection.title}
          </h2>
        </AnimateIn>

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
          {clients.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 120} className="h-full">
              <ClientCard {...item} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={360} className="mt-6">
          <GeographyCard {...geography} />
        </AnimateIn>
      </div>
    </section>
  )
}
