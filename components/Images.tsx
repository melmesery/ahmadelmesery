"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const Images = ({ project }: any) => {
  useEffect(() => {
    AOS.init()
  }, [])

  const { bigImage, mediumImages, smallImages, name } = project;

  return (
    <section
      className="py-10 "
    >
      <div className="grid xs:grid-cols-2 grid-cols-1 gap-1 mb-1 items-center justify-between">
        <Image
          src={mediumImages[0]}
          alt={name}
          width={650}
          height={340}
          // className="animate-fade-up animate-delay-500 animate-ease-in-out"
          data-aos="fade-up"
        />
        <Image
          src={mediumImages[1]}
          alt={name}
          width={650}
          height={340}
          // className="animate-fade-up animate-delay-1000 animate-ease-in-out"
          data-aos="fade-up"
        />
      </div>
      <div className="grid xs:grid-cols-3 grid-cols-1 gap-1 mb-1 items-center justify-between">
        <Image
          src={smallImages[0]}
          alt={name}
          width={500}
          height={230}
          // className="animate-fade-up animate-delay-[1500ms] animate-ease-in-out"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <Image
          src={smallImages[1]}
          alt={name}
          width={500}
          height={230}
          // className="animate-fade-up animate-delay-[2000ms] animate-ease-in-out"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <Image
          src={smallImages[2]}
          alt={name}
          width={500}
          height={230}
          // className="animate-fade-up animate-delay-[2500ms] animate-ease-in-out"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <div 
      // className="animate-fade-up animate-delay-[3000ms] animate-ease-in-out"
      data-aos="fade-up"
      data-aos-duration="2000"
      >
        <Image src={bigImage} alt={name} width={1260} height={690} />
      </div>
    </section>
  );
};

export default Images;
