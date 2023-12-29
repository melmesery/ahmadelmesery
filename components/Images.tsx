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
          {/* <div className="grid grid-col-1 sm:grid-cols-2 gap-1 mb-1 items-center justify-between"> */}
          <div className="grid xs:grid-cols-2 grid-cols-1 gap-1 mb-1 items-center justify-between">
            <Image
              src={mediumImages[0]}
              alt={name}
              width={650}
              height={340}
              className="animate-fade-up"
            />
            <Image
              src={mediumImages[1]}
              alt={name}
              width={650}
              height={340}
              className="animate-fade-up"
            />
          </div>
          {/* <div className="grid grid-col-1 sm:grid-cols-3 gap-1 mb-1 items-center justify-between"> */}
          <div className="grid xs:grid-cols-3 grid-cols-1 gap-1 mb-1 items-center justify-between">
            <Image
              src={smallImages[0]}
              alt={name}
              width={500}
              height={230}
              className="animate-fade-up"
            />
            <Image
              src={smallImages[1]}
              alt={name}
              width={500}
              height={230}
              className="animate-fade-up"
            />
            <Image
              src={smallImages[2]}
              alt={name}
              width={500}
              height={230}
              className="animate-fade-up"
            />
          </div>
          <div className="animate-fade-up">
            <Image src={bigImage} alt={name} width={1260} height={690} />
          </div>
        </>
      )}
    </section>
  );
};

export default Images;
