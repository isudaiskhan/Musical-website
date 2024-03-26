import React from 'react'
import BuyTickets from './BuyTickets';

const CountDown = () => {
    
    const targetDate = new Date('March 19, 2024 00:00:00');
  return (
    <>


    <div>
      <BuyTickets targetDate={targetDate} />
    </div>

      
    </>
  )
}

export default CountDown
