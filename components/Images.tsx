"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Images = ({ project }: any) => {
  const [show, setShow] = useState(false);
  const { bigImage, mediumImages, smallImages, name } = project;
  const [refsection, inViewSection] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewSection) {
      setShow(true);
    }
  }, [inViewSection]);

  return (
    <section
      ref={refsection}
      className="py-10 "
    >
      {show && (
        <>
           <div className="grid xs:grid-cols-2 grid-cols-1 gap-1 mb-1 items-center justify-between">
            <Image
              src={mediumImages[0]}
              alt={name}
              width={650}
              height={340}
              className="animate-fade-up animate-delay-500 animate-ease-in-out"
            />
            <Image
              src={mediumImages[1]}
              alt={name}
              width={650}
              height={340}
              className="animate-fade-up animate-delay-500 animate-ease-in-out"
            />
          </div>
           <div className="grid xs:grid-cols-3 grid-cols-1 gap-1 mb-1 items-center justify-between">
            <Image
              src={smallImages[0]}
              alt={name}
              width={500}
              height={230}
              className="animate-fade-up animate-delay-[2000ms] animate-ease-in-out"
            />
            <Image
              src={smallImages[1]}
              alt={name}
              width={500}
              height={230}
              className="animate-fade-up animate-delay-[2000ms] animate-ease-in-out"
            />
            <Image
              src={smallImages[2]}
              alt={name}
              width={500}
              height={230}
              className="animate-fade-up animate-delay-[1500ms] animate-ease-in-out"
            />
          </div>
          <div className="animate-fade-up animate-delay-[3000ms] animate-ease-in-out">
            <Image src={bigImage} alt={name} width={1260} height={690} />
          </div>
        </>
      )}
    </section>
  );
};

export default Images;
