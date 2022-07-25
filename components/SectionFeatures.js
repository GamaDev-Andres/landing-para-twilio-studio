/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  ChartBarIcon,
  ClipboardListIcon,
  PhoneIcon,
  PhoneOutgoingIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "IVR",
    description: "Crea respuestas de voz integradas para el autoservicio.",
    icon: PhoneIcon,
  },
  {
    name: "Recordatorios de citas",
    description:
      "Activa los recordatorios de citas a través de llamadas a la API REST desde los back-ends y las plataformas CRM.",
    icon: AnnotationIcon,
  },
  {
    name: "Encuestas por SMS",
    description:
      "Recopila comentarios de los clientes a través de conversaciones interactivas basadas en SMS.",
    icon: ClipboardListIcon,
  },
  {
    name: "Flujos de trabajo del call center",
    description:
      "Crea y modifica fácilmente las reglas del flujo de trabajo y de enrutamiento con herramientas de arrastrar y soltar.",
    icon: UserGroupIcon,
  },
  {
    name: "Respuestas automáticas",
    description:
      "Implementa una respuesta automática personalizable para responder con un mensaje personalizado a los mensajes entrantes.",
    icon: ChartBarIcon,
  },
  {
    name: "Reenviadores de llamadas",
    description:
      "Desvía las llamadas a tu número personal o comercial y nunca vuelvas a perder una llamada.",
    icon: PhoneOutgoingIcon,
  },
];

export default function SectionFeatures() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            Caracteristicas
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Crea lo que necesitas con Studio
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Con Studio, no es necesario tener servidores ni descargar
            dependencias. Puedes concentrarte en el código que importa.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
