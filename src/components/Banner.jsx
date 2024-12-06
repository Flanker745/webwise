import React from "react";
import img from "./../assets/img12.jpg";
function Banner() {
  return (
    <>
      <div>
        {/* <img src={img} className={`${img}`} alt="" /> */}
        <div className={` `}>
          {" "}
          <div className=" w-11/12 sm:w-9/12 xl:w-4/12 md:text-2xl -z-[9] text-base lg:text-4xl absolute top-[50%]  left-[50%] h-fit translate-x-[-50%] translate-y-[-50%] font-bold text-white m-auto flex items-center">
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              nobis consequuntur, libero fugiat, incidunt, officia culpa quasi
              dolores vitae voluptatibus fugit quidem. Asperiores voluptatibus,
              maxime ratione ducimus non consectetur minus?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
