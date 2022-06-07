import React from "react";

const FullPageLoader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-white rounded-full ";

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-l from-c2 to-c4">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: {
      layout: "centered",
      // Will be passed to the page component as props
    },
  };
}

export default FullPageLoader;
