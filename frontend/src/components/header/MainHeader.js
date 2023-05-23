import React, { Fragment, useState } from "react";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import LanguageModal from "../modal/LanguageModal";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const products = [
  {
    name: "Bloglar",
    description: "Yazdığım bloglar",
    href: "/bloglar",
    icon: FingerPrintIcon,
  },
  {
    name: "Kitaplar",
    description: "Okumaktan zevk aldıgım ve okuduğum kitaplar",
    href: "/kitaplar",
    icon: ChartPieIcon,
  },
  {
    name: "Filmler",
    description: "İzlemekten zevk aldıgım ve izlediğim filmler",
    href: "/filmler",
    icon: CursorArrowRaysIcon,
  },

  {
    name: "Templates",
    description: "Hazır temalar satın alabilirsiniz",
    href: "/temalar",
    icon: SquaresPlusIcon,
  },
  // {
  //   name: "Automations",
  //   description: "Build strategic funnels that will convert",
  //   href: "#",
  //   icon: ArrowPathIcon,
  // },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleShowLanguageModal = () => {
    setShowLanguageModal(true);
  };
  const handleCloseLanguageModal = () => {
    setShowLanguageModal(false);
  };

  return (
    <Fragment>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              {/* <Avatar size={32} icon={<UserOutlined />} /> */}
              <span className="ms-3">My Website</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Favoriler
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
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="/features"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Özellikler
            </a>
            <a
              href="/profile"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              CV
            </a>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                İletişime Geç
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
                      key="ekibekatıl"
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
                          Ekibe Katıl
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">
                          Beraber yeni projelere imza atabiliriz
                        </p>
                      </div>
                    </div>

                    <div
                      key="işteklifi"
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
                          İş Teklifinde Bulun
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">
                          İş teklifinde bulunarak projelerinizi belirterek
                          iletişime geçin
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            onClick={handleShowLanguageModal}
          >
            <i class="fa-solid fa-globe"></i>
          </div>
          <LanguageModal
            showLanguageModal={showLanguageModal}
            handleCloseLanguageModal={handleCloseLanguageModal}
          />
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <Avatar size={32} icon={<UserOutlined />} />
                <span className="ms-3">My Website</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Favoriler
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="/features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Özellikler
                  </a>
                  <a
                    href="/profile"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    CV
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          İletişime Geç
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
                            key="ekibekatıl"
                            as="a"
                            href="/join-to-team"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Ekibe Katıl
                          </Disclosure.Button>
                          <Disclosure.Button
                            key="isteklifi"
                            as="a"
                            href="/give-job"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            İş Teklifinde Bulun
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6" onClick={handleShowLanguageModal}>
                  <i class="fa-solid fa-globe"></i>
                </div>
                <LanguageModal
                  showLanguageModal={showLanguageModal}
                  handleCloseLanguageModal={handleCloseLanguageModal}
                />
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </Fragment>
  );
};

export default MainHeader;
