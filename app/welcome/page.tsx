"use client"
import Bottom from '@/components/Nav/Bottom'
import { Top } from '@/components/Nav/Top'
import Profile from '@/components/Profile/Profile'
import { Card } from '@/components/User/Card'
import { useState } from 'react'
import { GiTaurus } from 'react-icons/gi'
const welcome = () => {
  const [isProfile, setIsProfile] = useState(false);

  return (
    <>
      {isProfile && <Profile id={1} />}
      <div className='mx-5 my-23'>
        <Card key="1" onclick={() => setIsProfile(true)} name='John Doe, ' age={25} sign={<GiTaurus />} status="connected" verified={true} description='Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !Hey, wanna chat ? 😉 DM me, we can take a drink or only talk !' img='/img/user/user1.jpg' tags={["Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
      </div>
      <Bottom isProfile={isProfile} />
    </>
  )
}

export default welcome
