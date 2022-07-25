import Image from "next/image";
import interfaceGift from "../public/twilio-studio.gif";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function SectionInterface() {
  return (
    <div className="bg-white">
      <h2 className="text-base max-w-7xl w-full px-4 sm:px-6 lg:text-center lg:mx-auto text-red-500 font-semibold tracking-wide uppercase">
        Interfaz
      </h2>
      <div className="max-w-7xl mx-auto py-4 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Desarrolla e itera aplicaciones rápidamente
          </p>
          <p className="mt-4 text-gray-500 text-xl">
            Crea aplicaciones de comunicación flexibles sin la necesidad de
            poner en marcha servidores ni operaciones de DevOps. Utiliza las
            herramientas de arrastrar y soltar junto con el código personalizado
            para elaborar e iterar prototipos y salir al mercado con rapidez.
          </p>
        </div>
        <div className="grid">
          <Image src={interfaceGift} className="bg-gray-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
