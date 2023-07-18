import { Spinner } from "@material-tailwind/react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {/* <Spinner className="h-4 w-4" />
      <Spinner className="h-6 w-6" />
      <Spinner className="h-8 w-8" />
      <Spinner className="h-10 w-10" /> */}
      <Spinner className="h-12 w-12" />
    </div>
  );
}
