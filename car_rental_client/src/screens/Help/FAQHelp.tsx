import { useState } from 'react'

const FAQHelp = () => {
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
        setOpenTab(index)
    }
    return (
        <div className='w-full h-auto mb-24 overflow-auto grid grid-cols-1 gap-6 place-items-start'>
            <div className='w-full h-auto flex items-center justify-center'>
                <div className='w-[98%] lg:w-7/12 h-auto my-20 py-4 px-8 rounded-md border border-white-input-light shadow-md shadow-gray-light bg-white-input-light'>
                    <div className='h-12 flex items-center justify-center'>
                        <h1 className='text-xl font-bold'>Help</h1>
                    </div>
                    <div className='w-full h-auto overflow-auto'>
                        <div className='w-full h-auto'><span className='px-1 py-0.5 text-[0.6rem] text-home-theme bg-white-input-light rounded-full'>Category</span></div>
                        <div className='w-full h-auto px-4 bg-white border border-white-input-light rounded-lg overflow-hidden'>
                            <select className='w-full bg-white appearance-none outline-none px-2 py-1'>
                                <option value="0">General</option>
                                <option value="1">Booking</option>
                                <option value="2">Vehicles</option>
                                <option value="3">Payment</option>
                                <option value="4">Refund</option>
                            </select>
                        </div>
                        <div className='w-full h-auto mt-4'><span className='px-1 py-0.5 text-[0.6rem] text-home-theme bg-white-input-light rounded-full'>Query</span></div>
                        <div className='w-full h-auto px-4 bg-white border border-white-input-light mb-4 rounded-lg overflow-hidden'>
                            <textarea className='w-full h-28 px-2 py-4 outline-none'>
                            </textarea>
                        </div>
                        <div className='w-full h-auto p-4 flex items-center justify-center my-4 overflow-hidden'>
                            <button className='px-4 py-2 rounded-full border border-home-theme hover:bg-home-theme-hover text-home-theme hover:text-white font-bold'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                <div className='w-[99%] lg:w-7/12 h-auto overflow-auto flex flex-wrap items-center justify-center'>
                    <div className='text-center my-2'>
                        <h1 className='text-3xl font-bold break-words'>Frequently Asked Questions</h1>
                    </div>
                    <div className='w-[99%] p-4 my-8 h-auto rounded-xl border-[0.025rem] border-white-input-light shadow-md shadow-gray-light grid grid-cols-1 place-items-center'>
                        {FAQ.map((data, index) => {
                            return (
                                <div className='w-full px-4 py-4 h-auto rounded-lg'>
                                    <div className='w-full overflow-auto'>
                                        <h1 className='text-sm lg:text-base text-navy font-semibold break-words'>{index+1 +"). "+data.question}</h1>
                                    </div>
                                    <div className='text-lg text-gray-500 flex items-center justify-center'>
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
                                            <div className='overflow-auto'>
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
            </div>
        </div>
    )
}

export default FAQHelp