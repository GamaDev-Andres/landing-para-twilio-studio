export default function SectionWhy() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="flex flex-col sm:flex-row items-center justify-between lg:gap-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Porque utilizar </span>
            <span className="block text-red-500">Twilio Studio?</span>
          </h2>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            algunas razones recaen en que brindan soluciones a :
            <div className="flex flex-col">
              <span className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Empresas.
              </span>
              <span className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Startups.
              </span>
              <span className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Organizaciones sin ánimo de lucro.
              </span>
              <span className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Márketing.
              </span>
              <span className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Servicios financieros.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.twilio.com/try-twilio"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
            >
              Empieza ya
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://www.twilio.com/docs/studio"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-500 bg-white hover:bg-red-50"
            >
              Aprende más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
