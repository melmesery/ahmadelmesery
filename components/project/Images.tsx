"use client";

import AOSWrapper from "@/hooks/useAOS.tsx";
import Image from "next/image";

const Images = ({ project }: any) => {
  const { bigImage, mediumImages, smallImages, name } = project;

  return (
    <AOSWrapper>
      <section className="images-container">
        <div className="images-first-row">
          <Image
            src={mediumImages[0]}
            alt={name}
            width={650}
            height={340}
            data-aos="fade-up"
          />
          <Image
            src={mediumImages[1]}
            alt={name}
            width={650}
            height={340}
            data-aos="fade-up"
          />
        </div>
        <div className="images-second-row">
          <Image
            src={smallImages[0]}
            alt={name}
            width={500}
            height={230}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <Image
            src={smallImages[1]}
            alt={name}
            width={500}
            height={230}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <Image
            src={smallImages[2]}
            alt={name}
            width={500}
            height={230}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <Image src={bigImage} alt={name} width={1260} height={690} />
        </div>
      </section>
    </AOSWrapper>
  );
};

export default Images;
