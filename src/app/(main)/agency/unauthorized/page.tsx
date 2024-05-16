import Unauthorized from "@/components/unauthorized";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <p>From app/(main)/agency/unauthorized/page.tsx</p>
      <Unauthorized />
    </div>
  );
};

export default page;
