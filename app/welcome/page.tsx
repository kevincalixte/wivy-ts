"use client"
import Bottom from '@/components/Nav/Bottom'
import { Card } from '@/components/User/Card'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { GiTaurus } from 'react-icons/gi'
import { MdVerified } from 'react-icons/md'
import { RiRadioButtonFill } from 'react-icons/ri'

const welcome = () => {
  const [showprofile, setShowProfile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (showprofile) {
      router.push('/profile');
    }
  }, [showprofile, router]);

  return (
    <>
      <div className='mt-23 mx-5 '>
        <Card key="1" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="connected" verified={true} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
        <Card key="2" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="recent" verified={true} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
        <Card key="3" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="disconnected" verified={false} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
        <Card key="4" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="connected" verified={false} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
        <Card key="5" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="connected" verified={true} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
        <Card key="6" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="recent" verified={false} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
        <Card key="7" onclick={() => setShowProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="recent" verified={true} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
      </div>
      <Bottom />
    </>
  )
}

export default welcome
