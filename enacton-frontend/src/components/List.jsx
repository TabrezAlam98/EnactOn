import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiSliderAlt } from "react-icons/bi";
import { AiOutlineInbox } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { SiAdidas, SiDell } from "react-icons/si";

const product = [
  { name: "Orders", tag: <AiOutlineInbox className="font-bold text-2xl" /> },
  { name: "Adidas", tag: <SiAdidas className="font-bold text-2xl" /> },
  { name: "Dell", tag: <SiDell className="font-bold text-2xl" /> },
  { name: "Iphone", tag: <BsApple className="font-bold text-2xl" /> },
];

export default function List() {
  const [selected, setSelected] = useState(product[0]);

  return (
    <div className="w-[90%] m-auto">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex h-[50px]">
              <p className="ml-6 mt-4 text-center">{selected.tag}</p>
              <p className="ml-4 mt-4 font-bold">{selected.name}</p>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiSliderAlt
                className="h-5 w-5 mr-6 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-90 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {product.map((product, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={product}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <div className="flex">
                          <p className="mt-5">{product.tag}</p>
                          <p className="ml-6 mt-6 mb-2 font-bold"> {product.name}</p>
                        </div>
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
