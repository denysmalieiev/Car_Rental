import { useState } from 'react';
import { Link } from "react-router-dom"
import { TiUser } from "react-icons/ti";
import { MdAlternateEmail, MdPassword } from "react-icons/md";

const SignUp = () => {
    const [focusedSection, setFocusedSection] = useState(null);

    const handleFocus = (sectionId: number | any) => {
        setFocusedSection(sectionId);
    };

    const handleBlur = () => {
        setFocusedSection(null);
    };
    return (
        <div className="w-full h-auto overflow-auto float-left grid grid-cols-1 place-items-center">
            <div className="w-[99%] lg:w-8/12 h-auto my-12 rounded-md shadow-md shadow-gray-light border border-white-input-light grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="w-full h-60 lg:h-96 float-left overflow-auto bg-home-theme flex items-center justify-center">
                    <div className='h-auto grid grid-cols-1 place-items-center'>
                        <h1 className='text-4xl font-extrabold text-white'>Welcome Back!</h1>
                        <p className='px-12 text-center text-white my-4'>To continue with us please login with you credentials</p>
                        <Link to={`/sign-in`}>
                            <button className='px-4 py-2 border border-white text-white font-bold rounded-full hover:bg-white hover:text-home-theme'>Sign In</button>
                        </Link>
                    </div>

                </div>
                <div className="w-full h-96 overflow-auto float-left">
                    <form className="w-full h-full overflow-auto px-6">
                        <div className='w-full h-24 flex items-center justify-center'>
                            <h1 className=' text-3xl font-extrabold'>Create Account</h1>
                        </div>
                        <div className='w-full h-56 flex items-start justify-center'>
                            <div className='w-full h-auto'>
                                <section
                                    className={`border ${focusedSection === 1 ? 'border-home-theme bg-black-gray text-white' : 'border-white-input-light'} h-10 mt-6 rounded-lg overflow-hidden flex items-center justify-centers`}
                                    onFocus={() => handleFocus(1)}
                                    onBlur={handleBlur}
                                >
                                    <div className="w-8 text-sm font-light px-6"><TiUser /></div>
                                    <input
                                        className="w-full px-2 font-extralight outline-none focus:bg-black-gray"
                                        type="text"
                                        name="section1"
                                        placeholder="User Name"
                                    />
                                </section>
                                <section
                                    className={`border ${focusedSection === 2 ? 'border-home-theme bg-black-gray text-white' : 'border-white-input-light'} h-10 my-3 rounded-lg overflow-hidden flex items-center justify-centers`}
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
                        <div className="h-16 flex items-center justify-center">
                            <button className="px-4 py-2 bg-home-theme hover:bg-home-theme-hover text-white font-bold text-sm rounded-md" onClick={() => alert('Hekk')}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp