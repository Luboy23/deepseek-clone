"use client";
import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              src={assets.menu_icon}
              alt="logo"
              className="rotate-180"
            />
            <Image src={assets.chat_icon} alt="logo" className="opacity-70" />
          </div>

          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-16" />
                <p className="text-2xl font-medium">你好，我是 DeepSeek</p>
              </div>
              <p className="text-sm mt-2"> 今天我能帮你做什么呢？</p>
            </>
          ) : (
            <div>
              <Message role='user' content='什么是 Next.js'/>
            </div>
          )}

          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          <p className="text-xs absolute bottom-1 text-gray-500 gap-10">
            由 AI 驱动，只提供参考
          </p>
        </div>
      </div>
    </div>
  );
}
