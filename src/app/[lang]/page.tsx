import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Resources } from '@/components/Resources'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Locale } from '@/utils/i18n-config'
import { getDictionary } from '@/utils/get-dictionary'
import { MoreByBaye } from '@/components/MoreByBaye'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // TODO use `lang` to get the correct dictionary
  const dict = await getDictionary(lang)

  return (
    <>
      <Header params={{ links: dict.links, button: dict.button, doc: dict.doc }} />
      <main className="flex-auto">
        <Hero params={{
          hero: dict.hero,
        }}
        />
        <PrimaryFeatures params={{
          feature: dict.feature,
        }}
        />
        <SecondaryFeatures params={{
          secondaryFeature: dict['secondary-feature'],
        }}
        />
        <CallToAction params={{ cta: dict.cta }} />
        <Reviews params={{
          review: dict.review,
        }}
        />
        <Pricing params={{
          pricing: dict.pricing,
        }}
        />
        <Faqs params={{ faq: dict.faq }} />
        <Resources params={{
          resource: dict.resource,
        }}
        />
        <MoreByBaye params={{
          more: dict.more,
        }}
        />
      </main>
      <Footer params={{
        footer: dict.footer,
        links: dict.links,
      }}
      />
    </>
  )
}
