import React from 'react'


import imageWeb from '../Images/web/webdev.png'
import imageWeb1 from '../Images/2000/Visaul_1.png'
import imageWeb2 from '../Images/2000/cutomL_icons.png'
import imageWeb3 from '../Images/2000/Futuristic-Time-Keeper.png'
import imageWeb4 from '../Images/2000/Futuristic-Time-Keeper.png'
import imageWeb5 from '../Images/2000/simon.jpg'
import imageWeb6 from '../Images/2000/visualcoloured.png'
import imageWeb7 from '../Images/2000/webapps.f13701c.png'

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import Footer from '../components/Footer';


function Design() {
  return (
    <>
      <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-purple-900">
                  Deployed Websites
                </p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  My Creative Front-End Development
                </h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">
                  Each website represents an opportunity to
                  showcase your unique style, problem-solving abilities, and
                  dedication to delivering quality solutions.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={imageWeb}
              alt=""
            />
          </div>

          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Ability to translate
                  client visions into reality, while infusing your own creative
                  touch, sets you apart in the competitive field of web
                  development. Each website is a testament to your commitment to
                  excellence and your passion for crafting memorable online
                  experiences. Keep pushing boundaries and inspiring with your
                  innovative designs
                </p>
                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <AccountTreeOutlinedIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                    <span>
                      <strong class="font-semibold text-gray-900">Root</strong>{" "}
                      They serve as a solid anchor, providing stability and
                      strength as you continue to push the boundaries of your
                      craft. Your roots are what ground diversive, guiding your
                      journey as you leave your mark on the digital world.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <DesignServicesOutlinedIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Design
                      </strong>
                     Your designs captivate attention
                      and leave a lasting impression. You understand the
                      importance of striking a balance between aesthetics and
                      usability, ensuring that each website is both visually
                      stunning and easy to navigate. Your attention to detail
                      shines through in every aspect, from
                      typography and color schemes to imagery and whitespace.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <ConstructionOutlinedIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                    <span>
                      <strong class="font-semibold text-gray-900">tools</strong>{" "}
                      For back-end development and server-side
                      logic, you've turned to robust frameworks like Django,
                      Ruby on Rails, or Node.js, empowering you to build
                      scalable and efficient web applications. Additionally,
                      you've harnessed the power of content management systems
                      (CMS) like WordPress or Drupal to streamline the website
                      creation process and provide clients with easy content
                      management capabilities.
                    </span>
                  </li>
                </ul>
                <p class="mt-8">
                 Proud to have designed and developed unique
                  websites, each representing a journey of creativity,
                  innovation, and growth. From concept to execution, Passion and expertise into crafting digital experiences
                  that not only meet client needs but also exceed expectations.
                  These websites showcase my ability to blend aesthetics with
                  functionality, delivering user-centric designs that leave a
                  lasting impression. I'm excited to continue this journey,
                  creating even more impactful and memorable websites in the
                  future.
                </p>
              
              </div>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={imageWeb6}
              alt=""
            />
          </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={imageWeb1}
              alt=""
            />
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={imageWeb5}
              alt=""
            />
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={imageWeb2}
              alt=""
            />
          </div>
{/*           <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={imageWeb3}
              alt=""
            />
          </div> */}
          
      </div>
      <Footer/>
    </>
  );
}

export default Design
