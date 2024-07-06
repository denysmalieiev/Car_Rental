import { useState } from 'react'

const FAQ = () => {
  const [openTab, setOpenTab] = useState(-1)
  const FAQ = [
    {
      questionId: "IUFUEFGBEE40",
      question: 'What is the difference between a "free" and a "paid" plan?',
      answer: 'Main difference lies in there allowed features and restrictions!'
    },
    {
      questionId: "IUFUEFGBEE41",
      question: 'What is the difference between a "free" and a "paid" plan?',
      answer: 'Main difference lies in there allowed features and restrictions!'
    },
    {
      questionId: "IUFUEFGBEE42",
      question: 'What is the difference between a "free" and a "paid" plan?',
      answer: 'Main difference lies in there allowed features and restrictions!'
    }
  ]

  const handleAnswerOpen = (e: any, index: number = -1) => {
    console.log(e)
    setOpenTab(index)
  }
  return (
    <div className='w-full h-auto overflow-auto flex flex-wrap items-center justify-center'>
      <div className='text-center my-2'>
        <h1 className='text-3xl font-bold break-words'>Frequently Asked Questions</h1>
      </div>
      <div className='w-full p-1 h-auto my-6 grid grid-cols-1 place-items-center'>
        {FAQ.map((data, index) => {
          return (
            <div className='w-full px-4 py-6 lg:px-12 h-auto shadow shadow-gray-light rounded-lg my-6'>
              <div className='my-2'>
                <p className='w-min px-1 py-0.5 bg-white-input-light rounded-md text-[0.55rem] text-home-theme'>Question</p>
                <h1 className='text-sm lg:text-2xl text-navy font-bold break-words'>{data.question}</h1>
              </div>
              <div className='my-2 text-lg text-gray-500 flex items-center justify-center'>
                {openTab === index
                  ? <>
                    <p className='w-6 h-6 flex items-center justify-center rounded-full bg-home-theme text-xs font-bold text-white' onClick={(e) => handleAnswerOpen(e, -1)}>-</p>
                  </>
                  : <>
                    <p className='w-6 h-6 flex items-center justify-center rounded-full bg-home-theme text-xs font-bold text-white' onClick={(e) => handleAnswerOpen(e, index)}>+</p>
                  </>
                }
                &nbsp;&nbsp;<hr className='border-none w-full h-[1px] bg-home-theme' />
              </div>
              {
                openTab === index && (
                  <div className='my-3'>
                    <p className='w-min px-1 py-0.5 my-0.5 bg-white-input-light rounded-md text-[0.55rem] text-home-theme'>Answer</p>
                    <div className='border-[0.005rem] p-4 rounded-md border-home-theme'>
                      <p className='text-xs lg:text-sm break-words'>{data.answer}</p>
                    </div>
                  </div>
                )
              }

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ