import React from "react"
import {Taviraj} from 'next/font/google'
import Image from 'next/image';

const taviraj = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-taviraj',
  weight: ['100','200','300','400','500','600','700','800','900']
})

export default function Home() {
  return (
    <div className={`${taviraj.variable} font-taviraj`}>
      <main className="bg-gray-100 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start bg-neutral-900 rounded-2xl shadow-lg p-4 gap-6">
            <Image
              src={"/photo/เพ้นท์1.jpg"}
              alt={"PHOTO"}
              width={200}
              height={200}
              className="rounded-full border-4 border-neutral-50 object-cover"
            />
            <div className="text-center sm:text-left sm:flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-14 text-white border-b-2 border-neutral-100 mb-2">
                MANASSANAN RATANACHAIWONG
              </h1>
              <p className="text-lg sm:text-xl text-white">TRAINEE</p>
              <p className="text-sm text-white mt-1">AGE 20 YEARS</p>
            </div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-sm text-gray-800">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* PERSONAL */}
              <div>
                <h3 className="font-semibold border-2 rounded-2xl border-neutral-900 p-2 text-center w-full">PERSONAL</h3>
                <p className="mt-2 break-words">
                  NAME : Manassanan Ratanachaiwong<br />
                  NICKNAME : Paint<br />
                  BIRTHDAY : 12 July 2005<br />
                  BLOOD GROUP : O<br />
                  NATIONALITY : THAI<br />
                  RELIGION : Buddhism
                </p>
              </div>

              {/* UNIVERSITY */}
              <div>
                <h3 className="font-semibold border-2 rounded-2xl border-neutral-900 p-2 text-center w-full">UNIVERSITY</h3>
                <p className="mt-2">
                  Department of Computer Engineering<br />
                  Faculty of Industrial Education
                </p>
              </div>

              {/* INTERESTS */}
              <div>
                <h3 className="font-semibold border-2 rounded-2xl border-neutral-900 p-2 text-center w-full">THINGS OF INTEREST</h3>
                <div className="flex items-center gap-4 mt-2">
                  <Image src="/photo/book.png" alt="book" width={50} height={50} className="rounded-full border-2 border-neutral-900 object-cover" />
                  <p>Developing new skills</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Image src="/photo/code.png" alt="code" width={50} height={50} className="rounded-full border-2 border-neutral-900 object-cover" />
                  <p>Coding</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-2 border-l-0 md:border-l-2 border-b-neutral-900 space-y-6 px-2 sm:px-4 pt-6 md:pt-0">
              {/* ABOUT ME */}
              <div>
                <h3 className="font-semibold border-2 rounded-2xl border-neutral-900 p-2 text-center w-full">ABOUT ME</h3>
                <p className="mt-2">
                  Born and raised in Phayao Province, studied junior high school and high school at FakKwan Wittayakhom School. 
                  At the bachelor's degree level, studied at Rajamangala University of Technology Thanyaburi.
                </p>
              </div>

              {/* SKILLS */}
              <div>
                <h3 className="font-semibold border-2 rounded-2xl border-neutral-900 p-2 text-center w-full">SKILLS</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Write programs in C, Python and PHP</li>
                  <li>Easy to work with as a team</li>
                  <li>Good at solving immediate problems</li>
                  <li>Able to design UX/UI pages</li>
                </ul>
              </div>

              {/* ACTIVITIES */}
              <div>
                <h3 className="font-semibold border-2 rounded-2xl border-neutral-900 p-2 text-center w-full">ACTIVITIES</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Assistant instructor at Robot Academy Camp 2024</li>
                  <li>Assistant instructor for Hands-on activities</li>
                  <li>Assistant instructor for KidBright training</li>
                  <li>Assistant instructor for OOP course</li>
                  <li>Head of Academic Promotion - Student Club</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t-2 border-neutral-900 mt-8 pt-4 text-sm text-gray-600 text-center sm:text-right">
            <p>PHONE : 063-141-7878</p>
            <p>EMAIL : manassanan062@gmail.com</p>
            <p>ADDRESS : 111, Moo 5, Mae Sai Subdistrict, Mueang District, Phayao Province</p>
          </div>
        </div>
      </main>

    </div>
  )
}