"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      elements: {
        model: { value: string };
        manufacturer: { value: string };
      };
    };

    const modelValue = target.elements.model.value;
    const manufacturerValue = target.elements.manufacturer.value;

    if (modelValue === "" && manufacturerValue === "")
      alert("Please provide some search parameters...");

    updateSearchParams(modelValue, manufacturerValue);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const updatedParams = new URLSearchParams(searchParams.toString());

    if (model) updatedParams.set("model", model);
    if (manufacturer) updatedParams.set("manufacturer", manufacturer);

    const newPathname = `${
      window.location.pathname
    }?${updatedParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className="flex items-center justify-center max-sm:flex-col w-full relative mx-auto max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <img
          src="/car-logo.svg"
          className="absolute w-[25px] h-[25px] ml-4"
          alt="car logo"
        />
        <input
          type="text"
          name="manufacturer"
          placeholder="BMW..."
          className="w-full h-[52px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-[rgba(59,60,152,0.03)] outline-none text-white-800 cursor-pointer"
        />
        <button
          type="submit"
          className="sm:hidden -ml-3 w-[40px] h-[40px] z-10"
        >
          <img src="/magnifying-glass.svg" alt="magnifying glass" />
        </button>
      </div>

      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <img
          src="/model-icon.png"
          className="absolute w-[25px] h-[25px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          placeholder="M8 sport..."
          className="w-full h-[52px] pl-12 p-4 bg-[rgba(59,60,152,0.03)] rounded-r-full max-sm:rounded-full outline-none text-white-800 cursor-pointer"
        />
        <button
          type="submit"
          className="sm:hidden -ml-3 w-[40px] h-[40px] z-10"
        >
          <img src="/magnifying-glass.svg" alt="magnifying glass" />
        </button>
      </div>

      <button
        type="submit"
        className="max-sm:hidden -ml-3 w-[40px] h-[40px] z-10"
      >
        <img src="/magnifying-glass.svg" alt="magnifying glass" />
      </button>
    </form>
  );
};

export default SearchBar;
