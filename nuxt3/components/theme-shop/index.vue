<template>
  <div class="bg-black text-white font-sans">
    <!-- Top nav -->
    <div class="bg-black">
      <div class="max-w-screen-xl mx-auto flex items-center gap-2 py-2">
        <a href="">
          <v-icon
            icon="streamline:bone"
            color="#fff"
          />
        </a>

        <div class="grow"></div>

        <a href="tel:+5531995271426">
          <v-icon
            size="20"
            icon="material-symbols:help"
          />
        </a>
      </div>
    </div>

    <!-- Header -->
    <header
      class="bg-slate-900 py-4 block sticky top-0 z-10 divide-y divide-1 divide-gray-800"
      @mouseleave="nav.setSubmenu(null)"
    >
      <div
        class="max-w-screen-xl mx-auto flex items-center gap-3 border-1 border-b border-white"
      >
        <div class="flex items-center">
          <template v-for="o in nav.items">
            <nuxt-link
              v-bind="o"
              @mouseenter="nav.setSubmenu(o)"
              class="block lg:inline-block text-md font-bold text-gray-300 text-uppercase sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"
            >
              HOME
            </nuxt-link>
          </template>
        </div>
        <div class="grow"></div>
        <v-icon icon="material-symbols:search" />
        <v-icon icon="material-symbols:help" />
        <v-icon icon="material-symbols:person-rounded" />
        <v-icon icon="material-symbols:shopping-bag" />
      </div>

      <!-- Megamenu -->
      <v-fade-transition>
        <div
          v-if="nav.submenu"
          class="absolute w-full bg-slate-900"
          style="top: 100%"
        >
          <div class="max-w-screen-xl mx-auto">
            <div class="grid grid-cols-5 gap-4 sm:p-4">
              <div class="col-span-5 text-uppercase font-black text-lg">
                {{ nav.submenu.text }}
              </div>
              <div class="col-span-4">
                <div class="grid grid-cols-4 gap-4">
                  <template v-for="o in nav.submenu.children">
                    <div>
                      <div class="font-bold text-md">{{ o.text }}</div>
                      <ul>
                        <template v-for="oo in o.children">
                          <li>
                            <nuxt-link
                              v-bind="oo"
                              class="font-sm block py-1 hover:underline text-slate-400"
                            >
                              {{ oo.text }}
                            </nuxt-link>
                          </li>
                        </template>
                      </ul>
                    </div>
                  </template>
                </div>
              </div>
              <div class="col-span-1">
                <img
                  :src="nav.submenu.image"
                  alt=""
                  class="w-full rounded"
                />
              </div>
            </div>
          </div>

          <!-- <div class="bg-black">
            <div class="max-w-screen-xl mx-auto flex items-center gap-3 py-3">
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
            </div>
          </div> -->
        </div>
      </v-fade-transition>
    </header>

    <!-- Products -->
    <section class="bg-gray-800 py-8 antialiased">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <template v-for="o in product.search.data">
            <theme-shop-product-card :product="o" />
          </template>
        </div>
      </div>
      <!-- Filter modal -->
      <form
        action="#"
        method="get"
        id="filterModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
      >
        <div class="relative h-full w-full max-w-xl md:h-auto">
          <!-- Modal content -->
          <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
            <!-- Modal header -->
            <!-- Modal body -->

            <!-- Modal footer -->
            <div
              class="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5"
            >
              <button
                type="submit"
                class="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
              >
                Show 50 results
              </button>
              <button
                type="reset"
                class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>

    <!-- Slider -->
    <div class="py-16 bg-slate-900">
      <div
        class="relative w-full flex gap-4 snap-x snap-mandatory overflow-x-auto max-w-screen-xl mx-auto scroll-smooth select-none"
        @wheel="
          (ev) => {
            // ev.preventDefault();
            // const elem = ev.currentTarget;
            // const left = elem.scrollLeft + ev.deltaY * 2;
            // elem.scroll({ left, behavior: 'smooth' });
          }
        "
        @mousemove="
          (ev) => {
            if (ev.buttons != 1) return;
            const elem = ev.currentTarget;
            const left = ev.movementX * 40;
            // elem.scrollBy({ left, behavior: 'smooth' });
            elem.scrollLeft -= left;
          }
        "
      >
        <template
          v-for="o in [
            {
              name: 'Otelo',
              image:
                'https://i.pinimg.com/736x/81/6a/b6/816ab6f1b936bce70679d2feb53039a1.jpg',
            },
            {
              name: 'Agnés',
              image:
                'https://i.pinimg.com/736x/d1/f6/b7/d1f6b7f28e913f531cb3be32a52fce0e.jpg',
            },
            {
              name: 'Hitcock',
              image:
                'https://i.pinimg.com/736x/c1/cf/e2/c1cfe2b333dac1b27f72031d4b14a952.jpg',
            },
            {
              name: 'Sganzerla',
              image:
                'https://i.pinimg.com/736x/13/f7/8f/13f78f117e74a2d7d4710f13ffb6bda5.jpg',
            },
            {
              name: 'Kubrick',
              image:
                'https://i.pinimg.com/736x/43/66/77/43667775014fe5fe95c37474d1811d0e.jpg',
            },
            {
              name: 'Glauber',
              image:
                'https://i.pinimg.com/736x/8a/6b/bc/8a6bbc32ce792f982818b1f16775cb78.jpg',
            },
            {
              name: 'Kurosawa',
              image:
                'https://i.pinimg.com/736x/7a/ba/07/7aba076eccdfb9a53a900db65aa45e02.jpg',
            },
            {
              name: 'Zé do Caixão',
              image:
                'https://i.pinimg.com/736x/9b/3e/0b/9b3e0b9af4bf233237dc9b65a399e29b.jpg',
            },
            {
              name: 'Jodorowsky',
              image:
                'https://i.pinimg.com/736x/8d/9d/f0/8d9df0daa12f7a845255ec173188a997.jpg',
            },
          ]"
        >
          <div class="snap-center shrink-0">
            <img
              style="height: 400px"
              class="shrink-0 objct-cover rounded"
              draggable="false"
              :src="o.image"
            />
          </div>
        </template>
      </div>
    </div>

    <!-- Features -->
    <div class="py-16 bg-slate-800 overflow-hidden">
      <div class="max-w-screen-xl mx-auto text-gray-500">
        <div
          class="grid overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div class="relative group transition hover:z-[1]">
            <div
              class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"
            >
              <img
                src="https://i.pinimg.com/736x/db/ac/41/dbac410835cac84cb893a48e599a6228.jpg"
                style="width: 100%; height: 250px"
                class="object-cover"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"
                >
                  Peter Steele
                </h5>
                <p class="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                class="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span class="text-sm">Read more</span>
                <span
                  class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >&RightArrow;</span
                >
              </a>
            </div>
          </div>
          <div class="relative group transition hover:z-[1]">
            <div
              class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"
            >
              <img
                src="https://i.pinimg.com/736x/bc/a9/80/bca98045881f9871674d6da2716ce582.jpg"
                style="width: 100%; height: 250px"
                class="object-cover"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"
                >
                  Alejandro Jodorowsky
                </h5>
                <p class="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                class="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span class="text-sm">Read more</span>
                <span
                  class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >&RightArrow;</span
                >
              </a>
            </div>
          </div>
          <div class="relative group transition hover:z-[1]">
            <div
              class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"
            >
              <img
                src="https://i.pinimg.com/736x/49/e6/de/49e6de0a5dfcc3592138f6b3f3f54905.jpg"
                style="width: 100%; height: 250px"
                class="object-cover"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"
                >
                  John Waters
                </h5>
                <p class="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                class="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span class="text-sm">Read more</span>
                <span
                  class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >&RightArrow;</span
                >
              </a>
            </div>
          </div>
          <div class="relative group transition hover:z-[1] lg:hidden xl:block">
            <div
              class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"
            >
              <img
                src="https://i.pinimg.com/736x/e3/2c/78/e32c78a8fdaea0d9d7446aca654e3ec9.jpg"
                style="width: 100%; height: 250px"
                class="object-cover"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"
                >
                  Where's Your Head At?
                </h5>
                <p class="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                class="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span class="text-sm">Read more</span>
                <span
                  class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >&RightArrow;</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-black text-white py-6">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Company
            </h2>
            <ul class="text-slate-400 font-medium">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >About</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Careers</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Brand Center</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Blog</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Help center
            </h2>
            <ul class="text-slate-400 font-medium">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Discord Server</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Twitter</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Facebook</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul class="text-slate-400 font-medium">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Privacy Policy</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Licensing</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Terms &amp; Conditions</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Download
            </h2>
            <ul class="text-slate-400 font-medium">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >iOS</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Android</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Windows</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >MacOS</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 py-6 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center"
            >© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>
          <div
            class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse"
          >
            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                />
              </svg>
              <span class="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import ShopProduct from "~/models/ShopProduct.js";
const product = reactive(new ShopProduct());
product.search.submit();

// import { productItems, productTags } from "@/data/products.js";

// const product = reactive({
//   tags: productTags,
//   items: productItems,
// });

const nav = reactive({
  submenu: null,
  setSubmenu(submenu) {
    nav.submenu = submenu;
  },
  items: [
    {
      text: "Masculino",
      to: "/",
      children: [
        {
          text: "Camisas",
          to: "/",
          children: [
            { text: "Malha", to: "/", children: [] },
            { text: "Long Body", to: "/", children: [] },
          ],
        },
        {
          text: "Moletons",
          to: "/",
          children: [
            { text: "Zíper", to: "/", children: [] },
            { text: "Fechado", to: "/", children: [] },
          ],
        },
        {
          text: "Bonés",
          to: "/",
          children: [
            { text: "Raso", to: "/", children: [] },
            { text: "Trucker", to: "/", children: [] },
          ],
        },
      ],
    },
    {
      text: "Feminino",
      to: "/",
      children: [
        {
          text: "Camisas",
          to: "/",
          children: [
            { text: "Malha", to: "/", children: [] },
            { text: "Long Body", to: "/", children: [] },
          ],
        },
        {
          text: "Moletons",
          to: "/",
          children: [
            { text: "Zíper", to: "/", children: [] },
            { text: "Fechado", to: "/", children: [] },
          ],
        },
        {
          text: "Bonés",
          to: "/",
          children: [
            { text: "Raso", to: "/", children: [] },
            { text: "Trucker", to: "/", children: [] },
          ],
        },
      ],
    },
    {
      text: "Acessórios",
      to: "/",
      children: [
        {
          text: "Camisas",
          to: "/",
          children: [
            { text: "Cinema", to: "/", children: [] },
            { text: "Quadrinhos", to: "/", children: [] },
          ],
        },
        { text: "Moletons", to: "/", children: [] },
        { text: "Bonés", to: "/", children: [] },
      ],
    },
    {
      text: "Produtos",
      to: "/",
      image:
        "https://i.pinimg.com/736x/99/23/0b/99230bde035ef2d41042935e2e3ef9b0.jpg",
      children: [
        {
          text: "Categorias",
          to: "/",
          children: [
            { text: "Cinema", to: "/", children: [] },
            { text: "Quadrinhos", to: "/", children: [] },
            { text: "Música", to: "/", children: [] },
          ],
        },
        {
          text: "Feminino",
          to: "/",
          children: [
            { text: "Vestidos", to: "/", children: [] },
            { text: "Camisas", to: "/", children: [] },
            { text: "Moletons", to: "/", children: [] },
            { text: "Calças", to: "/", children: [] },
            { text: "Canecos", to: "/", children: [] },
            { text: "Almofadas", to: "/", children: [] },
            { text: "Acessórios", to: "/", children: [] },
          ],
        },
        {
          text: "Masculino",
          to: "/",
          children: [
            { text: "Camisas", to: "/", children: [] },
            { text: "Moletons", to: "/", children: [] },
            { text: "Calças", to: "/", children: [] },
            { text: "Canecos", to: "/", children: [] },
            { text: "Almofadas", to: "/", children: [] },
            { text: "Acessórios", to: "/", children: [] },
          ],
        },
        {
          text: "Infantil",
          to: "/",
          children: [
            { text: "Brinquedos", to: "/", children: [] },
            { text: "Colecionáveis", to: "/", children: [] },
            { text: "Camisas", to: "/", children: [] },
            { text: "Bodies", to: "/", children: [] },
            { text: "Babadores", to: "/", children: [] },
          ],
        },
      ],
    },

    {
      text: "Suporte",
      to: "/",
      image:
        "https://i.pinimg.com/736x/17/64/bc/1764bc67db0990ed646e2c43943af8ef.jpg",
      children: [
        {
          text: "Contato",
          to: "/",
          children: [
            { text: "Fale Conosco", to: "/", children: [] },
            { text: "Trabalhe Conosco", to: "/", children: [] },
          ],
        },
        {
          text: "Políticas",
          to: "/",
          children: [
            { text: "Troca", to: "/", children: [] },
            { text: "Privacidade", to: "/", children: [] },
          ],
        },
        {
          text: "Promoções",
          to: "/",
          children: [{ text: "Cupons", to: "/", children: [] }],
        },
      ],
    },
  ],
});
</script>

<style>
[test],
[test] * {
  outline: solid 1px #f00;
}
</style>
