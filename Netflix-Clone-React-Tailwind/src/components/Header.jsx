import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Title from "./Title";
import Desc from "./Desc";

const people = [{ name: "Türkçe" }, { name: "English" }];
function Header() {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="max-w-full h-[100vh] bg-netflix-background  relative mx-auto z-10 ">
      <div>
        <div className="flex container justify-between max-w-[83%] mx-auto px-12 py-6  items-center">
          <div className="w-[148px] cursor-pointer">
            <svg
              fill="#e50914"
              height={40}
              width={148}
              viewBox="0 0 111 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="default-ltr-cache-1d568uk ev1dnif2"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
          <div className="flex justify-center items-center">
            <div className="ml-6">
              <div className="base font-normal text-white  ">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative bg-[#161616b3] border border-[#808080b3] rounded">
                    <Listbox.Button className="relative flex justify-end items-center w-full  text-left width-[126.4px] h-8 gap-2 px-3 text-base font-normal">
                      <span className="pointer-events-none block  items-center ">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="default-ltr-cache-4z3qvp e1svuwfo1"
                          data-name="Languages"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="block truncate leading-6 mb-[2px]">
                        {selected.name}
                      </span>
                      <span className="flex justify-center items-center pointer-events-none pt-[2px] ml-2">
                        <svg
                          fill="#000"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          class="default-ltr-cache-4z3qvp e1svuwfo1"
                          data-name="CaretDown"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md 
                    bg-[#161616b3] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      >
                        {people.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-1 pl-10 pr-4 text-white ${
                                active
                                  ? "bg-netflix text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-netflix ">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <div>
              <div
                className="bg-netflix text-white text-[14px] ml-6 mr-3 cursor-pointer flex py-1 px-4 min-h-[32px] tracking-[-0.4px]
             rounded font-bold transition-colors hover:bg-[#c11119]"
              >
                Oturum Aç
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-1/2 left-1/2 text-center z-20  -translate-x-0.5 translate-y-3/4 items-center flex flex-col mx-[276.6px] my-[55.6px] ">
        <Title>Âlâsı var!</Title>
        <Desc>En iyi dizi, film, belgesel ve çok daha fazlası burada.</Desc>
        <p className="mt-6 leading-6 text-xl font-normal">
          İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için
          tek yapmanız gereken e-posta adresinizi girmek.
        </p>
      </div>
      <div className="flex absolute -z-20 bg-gradient-to-t from-black via-transparent to-black top-0 right-0 bottom-0 left-0 h-full w-full "></div>
      <div className="flex absolute -z-20 bg-black/40 to-black top-0 right-0 bottom-0 left-0 h-full w-full  "></div>
    </div>
  );
}

export default Header;
