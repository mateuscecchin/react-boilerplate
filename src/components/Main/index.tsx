import Image from "next/image";

export interface MainProps {
  title: string,
  description: string
}

export function Main({title = "React Avançado", description = "TypeScript, ReactJS, NextJS, TailwindCSS"}: MainProps) {
  return (
    <div className="bg-[#06092b] min-w-screen min-h-screen text-white text-center flex flex-col items-center justify-center p-12 ">
      <Image
        src={"/img/logo.svg"}
        alt="Imagem de átomo e React Avaçado escrito ao lado"
        width={1}
        height={1}
        className="w-[25rem] mb-8 h-max"
      />
      <h1 className="text-2xl font-roboto-bold">{title}</h1>
      <h1>{description}</h1>
      <Image
        src={"/img/hero-illustration.svg"}
        alt="Imagem de átomo e React Avaçado escrito ao lado"
        width={1}
        height={1}
        className="mt-12 w-96 h-max"
      />
    </div>
  );
}
