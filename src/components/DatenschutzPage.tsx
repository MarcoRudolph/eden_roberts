import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Download } from 'lucide-react'

const DatenschutzPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm border-b border-pink-100/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <a 
              href="/#top" 
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('privacy.backToHome')}
            </a>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('privacy.subtitle')}
            </p>
            
            {/* PDF Download Section */}
            <div className="mt-8">
              <a 
                href="/datenschutzerklaerung_date_talk_de_de.pdf" 
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                {t('privacy.downloadPDF')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center border-b border-gray-100">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {t('privacy.legalInfo')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('privacy.section1.title')}
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section1.general.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.general.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section1.dataCollection.title')}</h3>
                  
                  <h4 className="text-md font-semibold text-gray-700 mb-2">{t('privacy.section1.dataCollection.who.title')}</h4>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.who.content')}
                  </p>

                  <h4 className="text-md font-semibold text-gray-700 mb-2">{t('privacy.section1.dataCollection.how.title')}</h4>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.how.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.how.content2')}
                  </p>

                  <h4 className="text-md font-semibold text-gray-700 mb-2">{t('privacy.section1.dataCollection.purpose.title')}</h4>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.purpose.content')}
                  </p>

                  <h4 className="text-md font-semibold text-gray-700 mb-2">{t('privacy.section1.dataCollection.rights.title')}</h4>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.rights.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.rights.content2')}
                  </p>

                  <h4 className="text-md font-semibold text-gray-700 mb-2">{t('privacy.section1.dataCollection.analytics.title')}</h4>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.analytics.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section1.dataCollection.analytics.content2')}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('privacy.section2.title')}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section2.content')}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section2.provider.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section2.provider.content')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section2.provider.link')} <a href="https://www.strato.de/datenschutz/" className="text-purple-600 hover:text-purple-700 underline">https://www.strato.de/datenschutz/</a>.
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section2.provider.legal')}
                  </p>
                  <h4 className="text-md font-semibold text-gray-700 mb-2">{t('privacy.section2.provider.processing.title')}</h4>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section2.provider.processing.content')}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('privacy.section3.title')}
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.privacy.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.privacy.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.privacy.content2')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.privacy.content3')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.responsible.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.responsible.content')}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-600"><strong>{t('privacy.section3.responsible.name')}</strong></p>
                    <p className="text-gray-600">{t('privacy.section3.responsible.address')}</p>
                    <p className="text-gray-600">{t('privacy.section3.responsible.city')}</p>
                    <p className="text-gray-600">{t('privacy.section3.responsible.phone')}</p>
                    <p className="text-gray-600">{t('privacy.section3.responsible.email')}</p>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.responsible.definition')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.storage.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.storage.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.legalBasis.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.legalBasis.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.recipients.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.recipients.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.withdrawal.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.withdrawal.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.objection.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>{t('privacy.section3.objection.content1')}</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>{t('privacy.section3.objection.content2')}</strong>
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.complaint.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.complaint.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.portability.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.portability.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.access.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.access.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section3.restriction.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.restriction.content1')}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li>{t('privacy.section3.restriction.list1')}</li>
                    <li>{t('privacy.section3.restriction.list2')}</li>
                    <li>{t('privacy.section3.restriction.list3')}</li>
                    <li>{t('privacy.section3.restriction.list4')}</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section3.restriction.content2')}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('privacy.section4.title')}
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section4.cookies.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section4.cookies.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section4.cookies.content2')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section4.cookies.content3')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section4.cookies.content4')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section4.cookies.content5')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section4.cookies.content6')}
                  </p>
                  <div id="CookieDeclaration"></div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('privacy.section5.title')}
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section5.instagram.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content2')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content3')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content4')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content5')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content6')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content7')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content8')}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li><a href="https://www.facebook.com/legal/EU_data_transfer_addendum" className="text-purple-600 hover:text-purple-700 underline">https://www.facebook.com/legal/EU_data_transfer_addendum</a></li>
                    <li><a href="https://privacycenter.instagram.com/policy/" className="text-purple-600 hover:text-purple-700 underline">https://privacycenter.instagram.com/policy/</a></li>
                    <li><a href="https://de-de.facebook.com/help/566994660333381" className="text-purple-600 hover:text-purple-700 underline">https://de-de.facebook.com/help/566994660333381</a></li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content9')} <a href="https://privacycenter.instagram.com/policy/" className="text-purple-600 hover:text-purple-700 underline">https://privacycenter.instagram.com/policy/</a>.
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section5.instagram.content10')} <a href="https://www.dataprivacyframework.gov/participant/4452" className="text-purple-600 hover:text-purple-700 underline">https://www.dataprivacyframework.gov/participant/4452</a>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('privacy.section6.title')}
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.googleFonts.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.googleFonts.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.googleFonts.content2')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.googleFonts.content3')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.googleFonts.content4')} <a href="https://developers.google.com/fonts/faq" className="text-purple-600 hover:text-purple-700 underline">https://developers.google.com/fonts/faq</a> {t('privacy.section6.googleFonts.content5')} <a href="https://policies.google.com/privacy?hl=de" className="text-purple-600 hover:text-purple-700 underline">https://policies.google.com/privacy?hl=de</a>.
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.googleFonts.content6')} <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-purple-600 hover:text-purple-700 underline">https://www.dataprivacyframework.gov/participant/5780</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.cloudflare.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.cloudflare.content1')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.cloudflare.content2')} <a href="https://www.cloudflare.com/privacypolicy/" className="text-purple-600 hover:text-purple-700 underline">https://www.cloudflare.com/privacypolicy/</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.ai.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.ai.content')}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.analytics.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.analytics.content')} <a href="https://policies.google.com/privacy" className="text-purple-600 hover:text-purple-700 underline">https://policies.google.com/privacy</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.meta.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.meta.content')} <a href="https://www.facebook.com/about/privacy/" className="text-purple-600 hover:text-purple-700 underline">https://www.facebook.com/about/privacy/</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.tiktok.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.tiktok.content')} <a href="https://www.tiktok.com/legal/privacy-policy?lang=de" className="text-purple-600 hover:text-purple-700 underline">https://www.tiktok.com/legal/privacy-policy?lang=de</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.chatgpt.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.chatgpt.content')} <a href="https://openai.com/policies/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">https://openai.com/policies/privacy-policy</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{t('privacy.section6.payment.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('privacy.section6.payment.content')}
                  </p>
                </section>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DatenschutzPage
