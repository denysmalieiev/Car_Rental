import { useState } from 'react';
import { Link } from "react-router-dom"
import { MdAlternateEmail, MdPassword } from "react-icons/md";

const SignIn = () => {
    const [focusedSection, setFocusedSection] = useState(null);

    const handleFocus = (sectionId: number | any) => {
        setFocusedSection(sectionId);
    };

    const handleBlur = () => {
        setFocusedSection(null);
    };
    return (
        <div className="w-full h-auto overflow-auto float-left grid grid-cols-1 place-items-center">
            <div className="w-[99%] lg:w-8/12 min-h-96 my-12 rounded-md shadow-md shadow-gray-light border border-white-input-light grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="w-full h-96 order-2 lg:order-1">
                    <form className="w-full h-full overflow-auto px-6">
                        <div className='w-full h-24 flex items-center justify-center'>
                            <h1 className=' text-3xl font-extrabold'>Sign In</h1>
                        </div>
                        <div className='w-full h-44 flex items-start justify-center'>
                            <div className='w-full h-auto'>
                                <section
                                    className={`border ${focusedSection === 2 ? 'border-home-theme bg-black-gray text-white' : 'border-white-input-light'} h-10 mt-6 mb-3 rounded-lg overflow-hidden flex items-center justify-centers`}
                                    onFocus={() => handleFocus(2)}
                                    onBlur={handleBlur}
                                >
                                    <div className="w-8 text-sm font-light px-6"><MdAlternateEmail /></div>
                                    <input
                                        className="w-full px-2 font-extralight outline-none focus:bg-black-gray"
                                        type="text"
                                        name="section1"
                                        placeholder="Email"
                                    />
                                </section>
                                <section
                                    className={`border ${focusedSection === 3 ? 'border-home-theme bg-black-gray text-white' : 'border-white-input-light'} h-10 mb-6 rounded-lg overflow-hidden flex items-center justify-center`}
                                    onFocus={() => handleFocus(3)}
                                    onBlur={handleBlur}
                                >
                                    <div className="w-8 text-sm font-light px-6"><MdPassword /></div>
                                    <input
                                        className="w-full px-2 font-extralight outline-none focus:bg-black-gray"
                                        type="password"
                                        name="section1"
                                        placeholder="Password"
                                    />
                                </section>
                            </div>
                        </div>
                        <div className='w-full h-12 flex items-center justify-center'>
                            <p className='text-center underline text-sm text-blue_border'><i>Forgot You Password</i></p>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                            <button className="px-4 py-2 bg-home-theme hover:bg-home-theme-hover text-white font-bold text-sm rounded-md" onClick={() => alert('Hekk')}>Sign In</button>
                        </div>
                    </form>
                </div>
                <div className="w-full h-60 lg:h-96 bg-home-theme flex items-center justify-center order-1 lg:order-2">
                    <div className='h-auto grid grid-cols-1 place-items-center'>
                        <h1 className='text-4xl font-extrabold text-white'>Hello!</h1>
                        <p className='px-12 text-center text-white my-4'>To start you journey with us create you account here!</p>
                        <Link to={`/sign-up`}>
                            <button className='px-4 py-2 border border-white text-white font-bold rounded-full hover:bg-white hover:text-home-theme'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn