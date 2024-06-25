import React from 'react'
import image01 from '../Images/software/1.png'
import image02 from '../Images/software/2.png'
import image03 from '../Images/software/3.png'
import image04 from '../Images/software/4.png'
import image05 from '../Images/software/5.png'
import image06 from '../Images/software/6.png'
import image07 from '../Images/software/7.png'
import { DeskTwoTone } from '@mui/icons-material'

import Footer from '../components/Footer'

// Icons
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
// import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';


const icons = [
    {
    id: 'Root',
    roots:'these root',
    design:'fantacy',
    tools:'react js, bootstrap, strips, html, sass',
    image001:''},
    {
    id: 'Design',
    roots:'these root',
    design:'these tunes',
    tools:'',
    image001:''},
    {
    id: 'Tools',
    roots:'these root',
    design:'these tunes',
    tools:'',
    image001:''}
]


const imahe = [
    {
      id: '001',
      Title: 'Helmet Online Store',
      img01: image01,
      dest: '',
      comment: 'Discover safety with style at our online helmet store! Whether you ride motorcycles, bikes, or skateboards, we`e got you covered. Browse our curated collection for sleek designs and vibrant colors. Ride confidently knowing you`re protected with the best gear. Let`s gear up and ride safe together!',
      roots:'localhost, port 3000, npm',
      design:'Right forward, simple to navigate',
      tools:'react js, bootstrap, strips, html, sass',
      thumbnail:'thumb01',
      icons: '',
      tooTown: 'Gear Up & Ride Safe: Welcome to Our Online Helmet Store!'
    },
    {
      id: '002',
      Title: 'Online Dentist Client Side',
      img01: image02,
      dest: '',
      comment: 'Introducing our latest project: Online Dentist Client Side! Revolutionizing dental care with convenience, this platform puts your oral health in your hands. Schedule appointments, access records, and explore dental resources—all from the comfort of home. Say goodbye to waiting rooms and hello to a brighter smile, on your terms. Let`s make dental care a breeze!',
      roots:'localhost, port 4346, npm',
      design:'Our Online Dentist Client Side: Effortless scheduling, easy record access',
      tools:'vue js, laravel, ',
      thumbnail:'thumb02',
      icons: '',
      tooTown: 'Simplify Your Dental Care: Introducing Online Dentist Client Side!'
    },
    {
      id: '003',
      Title: 'Online Dentist clinic Side',
      img01: image03,
      dest: '',
      comment: ' Online Dentist Clinic Side! Bringing dental care to your fingertips with convenience and ease. Schedule appointments, access records, and empower your oral health journey—all from the comfort of home. Say hello to a brighter smile, simplified through innovation.',
      roots:'localhost, port 4346, npm',
      design:'Our Online Dentist Clinic Side: Simple, intuitive design for effortless dental care',
      tools:'vue js, laravel',
      thumbnail:'thumb03',
      icons: '',
      tooTown: 'Simplifying Dental Care'
    },
    {
      id: '004',
      Title: 'Meta-Town Block-Chain Marketplace',
      img01: image04,
      dest: '',
      comment: 'Introducing Meta-Town Blockchain Marketplace: Where innovation meets community. Explore a decentralized marketplace where creators and buyers converge, powered by the latest blockchain technology. Experience seamless transactions, transparent listings, and a vibrant ecosystem of digital assets.',
      roots:'databasing and minting items',
      design:'Our design for Meta-Town Blockchain Marketplace is like a digital town square where creators and buyers come together. Using blockchain technology, we`ve built a transparent and secure platform for buying and selling digital assets. ',
      tools:'react js, web 3 moralis, mumbai - for meta mask',
      thumbnail:'thumb04',
      icons: '',
      tooTown: 'Welcome to Meta-Town Blockchain Marketplace: Where Digital Innovation Meets Community'
    },
    {
      id: '005',
      Title: 'Egg Data-L Maker',
      img01: image05,
      dest: '',
      comment: 'Excited to share our latest project: Egg Data-L Maker web application! Leveraging laravel and react power, we`re crafting a versatile tool for generating dynamic datasets effortlessly.',
      roots:'Our Egg Data-L Maker web application follows a straightforward root and routing process. Using Python`s Flask framework, we establish a robust foundation for handling HTTP requests. Each route is meticulously designed to correspond with specific functionalities, ensuring seamless navigation and interaction.',
      design:'Imagine a tool that makes data generation as easy as cracking an egg. That`s what we`ve created with Egg Python Data-L Maker. Our design is clean and intuitive, guiding you through the process effortlessly. With customizable options and responsive design, it`s your go-to for hassle-free data creation.',
      tools:'react js, infura, hard hat, mumbai',
      thumbnail:'thumb05',
      icons: '',
      tooTown: 'Egg Data-L Maker: Cracking Data Generation @ music volume'
    },
    {
      id: '006',
      Title: 'Automated Parking Reservation',
      img01: image06,
      dest: '',
      comment: 'Introducing Automated Parking Reservation: Effortless parking, just a click away. Say goodbye to parking woes and hello to convenience!',
      roots:'phpMyAdmin, bootstrap, codeigniter',
      design:'Our design? Effortless parking. With a simple interface, booking is a breeze. Stress-free parking awaits',
      tools:'We`ve crafted Automated Parking Reservation using php, xxamp, and MySQL. These tools work seamlessly together to create a reliable and efficient parking solution.',
      thumbnail:'thumb06',
      icons: '',
      tooTown: 'Effortless Parking: Building with php, xxamp, and MySQL'
    },
    {
      id: '007',
      Title: 'Automated School Attendance',
      img01: image07,
      dest: '',
      comment: 'Thrilled to unveil our latest development: Automated School Attendance! Revolutionizing the way schools track attendance, our system streamlines the process with efficiency and accuracy. Say goodbye to manual attendance taking—our solution automates the task, saving time for teachers and ensuring precise records. Whether in-person or remote, our platform simplifies attendance management, providing valuable insights for educators and administrators alike.',
      roots:'Our Automated School Attendance system`s root is its seamless integration with advanced technologies like RFID or biometric scanners. These roots ensure accurate and efficient attendance tracking across classrooms and devices, simplifying the process for educators and students alike',
      design:'Our design for Automated School Attendance is all about simplicity and efficiency. It`s intuitive, making attendance tracking quick and accurate for teachers. Whether in-person or remote, it`s flexible and hassle-free.',
      tools:'We`ve developed Automated School Attendance using php, jquery, and MySQL. These tools work together to create a reliable and efficient system for tracking attendance',
      thumbnail:'thumb07',
      icons: '',
      tooTown: 'Building Automated School Attendance: php, jquery, MySQL'
    },
  ]


function Software() {
  return (
    <>
      <div>
        {imahe.map((project, index) => (
          <div>
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
                        Software development {project.id}
                      </p>
                      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {project.Title}
                      </h1>
                      <p class="mt-6 text-xl leading-8 text-gray-700">
                        {project.tooTown}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                  <div className='imageDash'>
                    <img
                      class="imageDew w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                      src={project.img01}
                      alt=""
                      // style={width:'100%'}
                      width={100}
                    />
                  </div>
                </div>
                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                  <div class="lg:pr-4">
                    <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                      <ul role="list" class="mt-8 space-y-8 text-gray-600">
                        <li class="flex gap-x-3">
                          <AccountTreeOutlinedIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                          <span className='text-lg'>
                            <strong class="font-semibold text-gray-900">
                              Roots:
                            </strong>{" "}
                            {project.roots}
                          </span>
                        </li>
                        <li class="flex gap-x-3">
                          <DesignServicesOutlinedIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                          <span className='text-lg'>
                            <strong class="font-semibold text-gray-900">
                              Design:
                            </strong>{" "}
                            {project.design}
                          </span>
                        </li>
                        <li class="flex gap-x-3">
                          <ConstructionOutlinedIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                          <span className='text-lg'>
                            <strong class="font-semibold text-gray-900">
                              Other Tools
                            </strong>{" "}
                            {project.tools}
                          </span>
                        </li>
                      </ul>
                      <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                        Comment:
                      </h2>
                      <p class="mt-6 text-sm">{project.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </>
  );
}

export default Software