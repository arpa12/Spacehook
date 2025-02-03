import React from 'react'

const signIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
                <p className="text-gray-600 mb-6">Enter your details below to login to your account.</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email or Phone Number</label>
                        <input type="text" placeholder="Max" className="w-full px-3 py-2 border rounded" />
                    </div>

                    <div className="relative">
                        <label className="block text-gray-700 mb-2">Password <a
                            href="#"
                            className=" text-black absolute right-0  mb-2 mr-2 underline underline-offset-1">
                            Forgot your password?
                        </a> 
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded mb-2"
                            placeholder="Enter your password"
                        />

                    </div>


                    <button className="w-full bg-black text-white py-2 rounded">Login</button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <a href="/signUp" className="underline underline-offset-1">Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default signIn
