import React from 'react'
import D3Section from './D3/D3Section'
import Objct from './Obj/Objct'

const Web = () => {
    return (
      <>
        {/* <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                  <D3Section />
                </div>
                <div class="relative pl-16">
                  <Objct />
                </div>
              </dl>
            </div>
          </div>
        </div> */}

        <div className="flexMe01">
          <div className="absolute bottom-2 left-2 blue-gradient_text">
            <h6>You can move the visual around</h6>
          </div>
          {/* <div>
            <D3Section />
          </div> */}
          <div>
            <Objct />
          </div>
        </div>
      </>
    );
}

export default Web