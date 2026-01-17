import { Card } from '@/components/User/Card'
import React from 'react'
const welcome = () => {
  return (
    <>
      <Card name='John Doe, ' age={25} img='/img/user/user1.jpg' tags={[ "Sport", "Music", "Food", "Tv", "Cat", "Sushi", "Work", "Holidays", "Netflix", "Disney", "Computer", "Coffee"]} />
    </>
  )
}

export default welcome
