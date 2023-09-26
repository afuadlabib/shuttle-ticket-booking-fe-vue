<template lang="">
    <div>
        <div class="flex min-h-screen bg-white dark:bg-gray-900  flex-col justify-center lg:px-8">
            <div
              class="grid grid-cols-8 grid-rows-2 shadow-md rounded-md w-[80%] m-auto bg-gray-900 dark:bg-white"
            >
              <div class="col-span-4 row-span-2 p-5 grid place-content-center">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    class="mx-auto h-20 w-auto"
                    src="https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-svg-vector.svg"
                    alt="Your Company"
                  />
                  <h2
                    class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
                  >
                    Sign Up Now
                  </h2>
                </div>

                <div class="mt-10 md:mx-auto md:w-full md:max-w-md">
                  <form class="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Email address</label
                      >
                      <div class="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between">
                        <label
                          for="password"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Password</label
                        >
                        <div class="text-sm">
                          <a
                            
                            class="font-semibold text-indigo-600 hover:text-indigo-500"
                          ></a>
                        </div>
                      </div>
                      <div class="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  <GoogleLogin class="m-5" :callback="doGoogleLogin" prompt />

                  <p class="mt-10 text-center text-sm text-gray-500">
                    Have Acount ?
                    <a
                      
                      class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Login</a
                    >
                  </p>
                </div>
              </div>
              <div class="col-span-4 row-span-2">
                <img
                  class="object-contain w-full"
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/09/UT-EN-Bus-Scania-Trans-Jawa-Jadikan-Perjalanan-Nyaman-dan-sedekatitu_Sandra.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
    </div>
</template>
<script>
import { mapActions } from 'pinia';
import { useTravelState } from '../stores/travel';

export default {
    name: 'LoginPage',
    methods: {
      ...mapActions(useTravelState,{doGoogleLogin:'doGoogleLoginHandler'}),
    }
}
</script>
<style lang="">
    
</style>