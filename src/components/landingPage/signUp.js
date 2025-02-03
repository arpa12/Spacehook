import React, { useState } from "react";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [selectedWorkspace, setSelectedWorkspace] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        <p className="text-gray-600 mb-6">Enter your information to create an account.</p>

        <div className="bg-gray-100 rounded-lg ">
          <div className="flex border-b mb-4">
            <button
              className={`flex-1 py-2 text-center font-medium ${activeTab === "basic" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("basic")}
            >
              Basic Information
            </button>
            <button
              className={`flex-1 py-2 text-center font-medium ${activeTab === "personalization" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("personalization")}
            >
              Personalization
            </button>
          </div>
        </div>

        {activeTab === "basic" && (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" placeholder="Max" className="w-full px-3 py-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <div className="flex items-center border rounded">
                <select className="px-3 py-2 bg-gray-100 border-r">
                  <option value="+88">+88 (BD)</option>
                </select>
                <input type="text" placeholder="01683026990" className="w-full px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="m@example.com" className="w-full px-3 py-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded" />
            </div>

            <button type="button" className="w-full bg-black text-white py-2 rounded" onClick={()=> setActiveTab("personalization")}> Next</button>
          </form>
        )}

        {activeTab === "personalization" && (
          <form className="space-y-4">
            <div>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="workspaceType"
                    value="new"
                    className="form-radio"
                    checked={selectedWorkspace === "new"}
                    onChange={() => setSelectedWorkspace("new")}
                  />
                  <span>Create New Workspace</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="workspaceType"
                    value="existing"
                    className="form-radio"
                    checked={selectedWorkspace === "existing"}
                    onChange={() => setSelectedWorkspace("existing")}
                  />
                  <span>Join Existing Workspace</span>
                </label>
              </div>
            </div>

            {selectedWorkspace === "new" && (
              <>
                <div>
                  <label className="block text-gray-700">Name of your Workspace</label>
                  <input
                    type="text"
                    placeholder="Enter workspace name"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Area</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="w-full px-3 py-2 border rounded">
                      <option>Country</option>
                    </select>
                    <select className="w-full px-3 py-2 border rounded">
                      <option>District</option>
                    </select>
                    <select className="w-full px-3 py-2 border rounded">
                      <option>Zone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700">Address</label>
                  <textarea className="w-full px-3 py-2 border rounded" placeholder="Type Full Address"></textarea>
                </div>
              </>
            )}

            <button className="w-full bg-black text-white py-2 rounded">Create an account</button>
          </form>
        )}

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/signIn" className="underline underline-offset-1">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
