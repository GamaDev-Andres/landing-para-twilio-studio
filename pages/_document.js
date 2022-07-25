import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head title="Twilio Studio">
        <meta
          name="description"
          content="Ahora cualquier desarrollador puede crear, editar y administrar visualmente flujos de trabajo de comunicación en Twilio Studio, su generador de aplicaciones de código bajo/sin código. Arrastre y suelte widgets para crear aplicaciones de voz, mensajería y comunicaciones, y guarde el trabajo de codificación para tareas de orden superior."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
