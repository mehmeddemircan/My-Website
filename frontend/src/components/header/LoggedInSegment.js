import React , {Fragment } from 'react'

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
export const PhoneLoggedInSegment = () => {
  return (
    <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                       Hesabım
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          key="/yorumlarım"
                          as="a"
                          href="/join-to-team"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Yorumlarım
                        </Disclosure.Button>
                        <Disclosure.Button
                          key="isteklifi"
                          as="a"
                          href="/give-job"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Formlarım
                        </Disclosure.Button>
                        <Disclosure.Button
                          key="isteklifi"
                          as="a"
                          href="/give-job"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Çıkış Yap
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
  )
}


export const LoggedInSegment = () => {
    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Hesabım
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                <div
                  key="yorumlarım"
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fa-solid fa-people-group fs-6 text-gray-600 group-hover:text-indigo-600"></i>
                  </div>
                  <div className="flex-auto">
                    <a
                      href="/join-to-team"
                      className="block font-semibold text-gray-900"
                    >
                      Yorumlarım
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>

                <div
                  key="formlarım"
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fa-solid fa-terminal  fs-6 text-gray-600 group-hover:text-indigo-600"></i>
                  </div>
                  <div className="flex-auto">
                    <a
                      href="/give-job"
                      className="block font-semibold text-gray-900"
                    >
                      Formlarım
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
                <div
                  key="formlarım"
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fa-solid fa-terminal  fs-6 text-gray-600 group-hover:text-indigo-600"></i>
                  </div>
                  <div className="flex-auto">
                    <a
                      href="/give-job"
                      className="block font-semibold text-gray-900"
                    >
                      Çıkış Yap
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
    )
}