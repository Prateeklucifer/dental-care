'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AboutCmp() {

  return (
    <div>
        <div className="heading text-3xl font-bold my-6 text-center mt-12">OUR AIM</div>
      <div className="mt-8 px-4 container m-auto lg:px-44">
         <div className="space-y-20 my-8">
          <div className="flex flex-col xl:flex-row xl:items-center ">
            <div className="left xl:w-[60%] lg:pr-8">
              <div className="heading font-bold text-xl text-primary">About Us</div>
              <div className="heading text-3xl font-bold my-6">Your Smile, Our Priority</div>
              <div className="mt-4">At Dental Cure, we provide high-quality, personalized dental care in a friendly environment. Our team is dedicated to keeping your smile healthy and bright.</div>
              <div className="mt-4">We offer a full range of services, from cleanings to advanced treatments, using the latest technology for the best results.</div>
            </div>
            <div className="text-center mt-6 lg:w-[40%] xl:rounded-lg overflow-hidden">
              <Image src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148076833.jpg?t=st=1729843931~exp=1729847531~hmac=8d5ce23101d2c327f420f6ea7d1843e2d0f6d19593f4788a228ea85ef53f506b&w=740" alt="error" width={800} height={800} />
            </div>
          </div>
          <div className="mission">
            <div className="heading text-3xl font-bold my-6 text-center">OUR MISSION</div>
            <div className="flex flex-col xl:flex-row-reverse xl:items-center">
              <div className="left xl:w-[60%] lg:pl-8">
                <div className="heading text-3xl font-bold my-6">Dedicated to Lifelong Dental Health</div>
                <div className="mt-4">Our mission at Dental Cure is to make quality dental care accessible, comfortable, and effective for every patient. We believe in a personalized approach, tailoring treatments to fit each individual’s unique needs and goals.</div>
                <div className="mt-4">Through continuous improvement, advanced technology, and a compassionate team, we strive to create a positive experience that builds trust and encourages lifelong oral health. Your smile is our commitment, and we’re here to support it every step of the way.</div>
              </div>
              <div className="text-center mt-6 lg:w-[40%] xl:rounded-lg overflow-hidden">
                <Image src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148076833.jpg?t=st=1729843931~exp=1729847531~hmac=8d5ce23101d2c327f420f6ea7d1843e2d0f6d19593f4788a228ea85ef53f506b&w=740" alt="error" width={800} height={800} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
