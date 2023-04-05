import { LoaderIcon } from "@/styles/Loader";
import React from "react";

function Loader({ status }: { status: boolean }) {
  return <>{status ? <LoaderIcon src="/assets/icons/loader.svg" /> : ""}</>;
}

export default Loader;
