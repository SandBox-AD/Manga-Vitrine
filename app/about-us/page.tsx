import ItemList from "@/components/list/ItemList";
import List from "@/components/list/list";
import Image from "next/image";
import Box from "@/components/utils/Box";
import Paragraph from "@/components/utils/Paragraph";
import { Title, TitleSecondary } from "@/components/utils/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About US | Manga-Vitrine",
  description: "Welcome to Manga-Vitrine",
  icons: {
    icon: "/icon.png",
  },
};
export default async function Page() {
  return (
    <main>
      <Box className='container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8'>
        <Title className='mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'>
          About Us
        </Title>
        <Box className='grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16'>
          <Box className='relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16'>
            <Image
              src={
                "https://dummyimage.com/640x640/5e5e5e/fff.png&text=Picture+Author"
              }
              alt={"Picture Author"}
              width={320}
              height={320}
            />
          </Box>
          <Box className='relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16'>
            <Image
              src={
                "https://dummyimage.com/640x640/5e5e5e/fff.png&text=Picture+Author"
              }
              alt={"Picture Author"}
              width={320}
              height={320}
            />
          </Box>
          <Box className='relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16'>
            <Image
              src={
                "https://dummyimage.com/640x640/5e5e5e/fff.png&text=Picture+Author"
              }
              alt={"Picture Author"}
              width={320}
              height={320}
            />
          </Box>
        </Box>
        <section>
          <TitleSecondary>
            Veniam reprehenderit eu pariatur enim esse dolore ad aute deserunt.
          </TitleSecondary>
          <Paragraph>
            Amet culpa adipisicing excepteur occaecat. Anim ullamco in proident
            occaecat. Enim aliqua labore id sit velit non. Velit esse Lorem
            labore consequat ex cillum. Pariatur qui cupidatat reprehenderit
            ipsum consectetur irure aute id mollit pariatur aliqua. Mollit
            nostrud elit officia proident in. Labore dolore mollit tempor
            laboris adipisicing duis minim. Consectetur adipisicing adipisicing
            nulla nulla fugiat minim minim proident. Quis exercitation sunt
            eiusmod non esse cupidatat aliquip. Voluptate veniam reprehenderit
            magna est ex aliquip eu non proident anim. Anim adipisicing ullamco
            eu irure Lorem culpa Lorem nostrud aute ea dolor aute deserunt.
            Ipsum qui occaecat aute voluptate nisi proident quis sint Lorem est
            commodo commodo. Incididunt nulla eiusmod proident officia aliquip
            mollit enim reprehenderit pariatur. Deserunt veniam cupidatat
            proident deserunt aliquip pariatur laboris cupidatat mollit in.
            Officia et sit et laborum adipisicing aute proident ea magna.
          </Paragraph>
        </section>
      </Box>
    </main>
  );
}
