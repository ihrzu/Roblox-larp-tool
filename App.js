import React, { useState } from 'react';
import './App.css';

export default function RobloxLarp() {
  const [robux, setRobux] = useState(100);
  const [avatarImg, setAvatarImg] = useState("https://tr.rbxcdn.com/30DAY-Avatar-Png"); // Placeholder

  const injectRobux = () => setRobux(robux + 1000000);

  return (
    <div className="flex flex-col h-screen font-sans">
      {/* Top Navigation Bar */}
      <nav className="roblox-header flex justify-between text-white text-sm">
        <div className="flex gap-4">
          <span className="font-bold cursor-pointer">Games</span>
          <span className="font-bold cursor-pointer">Catalog</span>
          <span className="font-bold cursor-pointer">Create</span>
          <span className="font-bold cursor-pointer">Robux</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-green-700 px-2 rounded cursor-pointer" onClick={injectRobux}>
            Get Robux
          </span>
          <span>{robux.toLocaleString()} R$</span>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="roblox-sidebar p-4 flex flex-col gap-2 text-gray-700 text-sm">
          <div className="hover:bg-gray-300 p-1 cursor-pointer">Home</div>
          <div className="hover:bg-gray-300 p-1 cursor-pointer font-bold border-l-4 border-blue-500 pl-2">Profile</div>
          <div className="hover:bg-gray-300 p-1 cursor-pointer">Messages</div>
          <div className="hover:bg-gray-300 p-1 cursor-pointer">Friends</div>
          <div className="hover:bg-gray-300 p-1 cursor-pointer">Inventory</div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto bg-white p-6 shadow-sm border border-gray-300">
            <h1 className="text-2xl mb-4">My Profile</h1>
            <div className="flex gap-10">
              {/* Avatar Display */}
              <div className="w-64 h-64 bg-gray-200 border border-gray-400 flex flex-col items-center justify-center">
                <img src={avatarImg} alt="Avatar" className="w-full h-full object-contain" />
                <button 
                  className="mt-2 bg-blue-500 text-white p-1 text-xs w-full"
                  onClick={() => setAvatarImg("https://example.com/new-avatar.png")}
                >
                  Change Outfit
                </button>
              </div>

              {/* Transactions Tab */}
              <div className="flex-1">
                <h2 className="font-bold border-b mb-2">Recent Transactions</h2>
                <div className="text-sm">
                  <p className="flex justify-between"><span>+ {robux} R$</span> <span className="text-gray-400">Archivist Grant</span></p>
                  <p className="text-xs text-blue-500 mt-4 cursor-pointer">View all transactions...</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
