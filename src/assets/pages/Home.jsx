import React from "react";
import profile_img from '../Images/lv-blck.png'
import Footer from "../components/Footer";

import imageID01 from '../Images/skills/1.png'
import imageID02 from '../Images/skills/2.png'
import imageID03 from '../Images/skills/3.png'
import imageID04 from '../Images/skills/4.png'
import imageID05 from '../Images/skills/5.png'
import imageID06 from '../Images/skills/6.png'
import imageID07 from '../Images/skills/7.png'
import imageID08 from '../Images/skills/8.png'
import imageID09 from '../Images/skills/9.png'
import imageID010 from '../Images/skills/10.png'
import imageID011 from '../Images/skills/11.png'
import imageID012 from '../Images/skills/12.png'
import imageID013 from '../Images/skills/13.png'

function Home() {

  const people = [
    {
      name: 'Next JS',
      // email: 'leslie.alexander@example.com',
      role: '2 years',
      imageUrl: imageID01,
      lastSeen: '3w ago',
      // lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'React JS',
      // email: 'michael.foster@example.com',
      role: '2years',
      imageUrl: imageID02,
      lastSeen: '5w ago',
      // lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Three js',
      // email: 'dries.vincent@example.com',
      role: 'A Month',
      imageUrl: imageID03,
      lastSeen: '5 months ago',
    },
    {
      name: 'JavaScript',
      // email: 'lindsay.walton@example.com',
      role: '4 years',
      imageUrl: imageID04,
      lastSeen: '3h ago',
      // lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Vue js',
      // email: 'courtney.henry@example.com',
      role: '4 years',
      imageUrl: imageID05,
      lastSeen: '1yr ago',
      // lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Laravel',
      // email: 'tom.cook@example.com',
      role: '2 years',
      imageUrl: imageID06,
      lastSeen: '4 months ago',
    },
    {
      name: 'Nuxt Js',
      // email: 'tom.cook@example.com',
      role: '5 years',
      imageUrl: imageID07,
      lastSeen: '3years ago',
    },
    {
      name: 'FireBase',
      // email: 'tom.cook@example.com',
      role: '6years',
      imageUrl: imageID08,
      lastSeen: '1yr ago',
    },
    {
      name: 'Python',
      // email: 'tom.cook@example.com',
      role: '1 years',
      imageUrl: imageID09,
      lastSeen: '1yr ago',
    },
    {
      name: 'PHP',
      // email: 'tom.cook@example.com',
      role: '6years',
      imageUrl: imageID010,
      lastSeen: '15w ago',
    },
    {
      name: 'SQL',
      // email: 'tom.cook@example.com',
      role: '4 years',
      imageUrl: imageID011,
      lastSeen: '6w ago',
    },
    {
      name: 'C++',
      // email: 'tom.cook@example.com',
      role: '8 years',
      imageUrl: imageID012,
      lastSeen: '7y ago',
    },
    {
      name: 'GitHub',
      // email: 'tom.cook@example.com',
      role: '1 year',
      imageUrl: imageID013,
      lastSeen: '2w ago',
    },
  ]



  return (
    <section className="w-full h-screen relative">
      <div className="bg-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div class="px-4 sm:px-0">
            <h1 className="text-base font-bold leading-7 text-gray-200">
              L-Vee Tibayan
            </h1>
            <div>
              <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-200">
                  About
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Personal details and education.
                </p>
              </div>

              <div class="mt-6">
                <dl class="divide-y divide-gray-100">
                  <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-lg font-medium leading-6 text-gray-200">
                    <img className="" src={profile_img} alt="" />
                    </dt>
                    <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                      {/* <h5>EDUCATION</h5> */}

                      <h2 className="text-xl font-semibold">Levee Bonifacio</h2>
                      <br></br>
                      <p>
                        Greetings, fellow pioneers of the digital frontier,
                        I am a relentless seeker of innovation and a master of code, driven by a passion to push the boundaries of what's possible in the realm of computer science. With each keystroke, I sculpt solutions that defy expectations and ignite progress.
                        Thank you for considering my journey as a programmer.
                      </p>

                      <span>Best B.S. Thesis Award</span>
                      <div>Batch 2016</div>
                    </dd>
                  </div>
                  <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-200">
                    EDUCATION
                    </dt>
                    <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                      {/* <h5>EDUCATION</h5> */}

                      <h2>SPAC</h2>
                      <p>
                        South Philippines Adventist College <span className="text-violet-500">B.S. Computer Science</span> June 2012 - March 2016
                      </p>

                      <span>Best B.S. Thesis Award</span>
                      <div>Batch 2016</div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* <img className="" src={profile_img} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="bg-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div>
            <div class="px-4 sm:px-0">
              <h3 class="text-xl text-base font-semibold leading-7 text-gray-200">
                Work Experience
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Career details and application.
              </p>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2024
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>Web App Deveveloper</h5>
                    <p>
                      online sports event web application, online clinic
                      Scheduling system, online store for helmets, Three js cube
                      game, Three js with react audio visualizer, graphic design
                      farm tractor brochure
                    </p>
                  </dd>
                </div>

                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2022 - 2023
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>JR PROGRAMMER</h5>
                    <span>TEK SYSTEM</span>
                    <p>
                      Developing web app like web3 for ethereum block chain,
                      collecting minting and creating NFT Products to
                      Marketplace, classifying applications from no-functions to
                      functionalities, gathering data from 3,000 students and
                      making the database and front end UI | UX. Using: JS,
                      React JS, Vue Js, Jquery, SQL, PHP Codeigniter, adobe: ps,
                      ill
                    </p>
                  </dd>
                </div>

                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2021
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>URL SEARCH</h5>
                    <span>NETZON TECH COMPANY</span>
                    <p>
                      Collections of data around the world wide web, linking
                      productions from 2,000 to 5,000 clients, then coding the
                      rest of the DETAIL. Using: word, excel, adobe ps, google
                    </p>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2020
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>GRAPHIC DESIGNER & FRONT-END ANALIST</h5>
                    <span>DETAIL ONLINE agile tech company</span>
                    <p>
                      Analize data from the systems result, Design from scratch,
                      rush hour design with initialization to nalizing front end
                      UI | UX Design. To design, I use to create my own template
                      and color coding, then analizing the content to produce
                      User Interface and Experience. Using Vue Js, pure JS,
                      adobe ps, ill, material design, JS charts.
                    </p>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2019
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>WEB DEV UI | UX DESIGNER | Wordpress</h5>
                    <span>MYBraveTrueHero Web-Solutions</span>
                    <p>
                      Building web sites and site optimization, coding from pure
                      js, html, css for banks web sites, site ads, google
                      analytics, content creators and e-commerce. Using; rebase,
                      js, php, html, css, wordpress, SQL, adobe: ps, ill &
                      animate
                    </p>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2018
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>FRONT END JUNIOR GRAPHIC DESIGNER</h5>
                    <span>SAMATOSA SOFTWARE COMPANY</span>
                    <p>
                      Front-end developer using html, css, pure js & Angular JS,
                      Design graphics like web app pages, icons & logo/s. coding
                      and designing from scratch. Using: pure js, jquery,
                      angular js, html, css & sass, adobe: ps & ill
                    </p>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-lg font-medium leading-6 text-gray-200">
                    2017
                  </dt>
                  <dd class="mt-1 text-lg leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                    <h5>IT SPECIALIST</h5>
                    <span>DMSF Davao Medical School Foundation</span>
                    <p>
                      Device monitoring, web site developer, school library
                      guidance for technologies.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>



      {/* Skill logo */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Experienced Skills
          </h2>
          <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
              <li
                key={person.email}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-lg leading-6 text-gray-900">
                    {person.role}
                  </p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last Used{" "}
                      <time dateTime={person.lastSeenDateTime}>
                        {person.lastSeen}
                      </time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      {/* <p className="text-lg leading-5 text-gray-500">Online</p> */}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tools */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Software Tools I've used:
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Web Tools I've used:
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div> */}



      <Footer/>
    </section>
  );
}

export default Home;
