import React from "react";
import Image from "next/image";
import "./globals.css";

const App = () => {

  return (
    <div className="h-100% bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="logo-white"
          src="/logo-white.png"
          alt="innovphil-logo"
          width={170}
          height={28}
          priority
        />
      </div>
    <div className="app-container">
      
        
        <div className="boxes-container">

          <a
            className="box" 
            href="https://forms.office.com/r/dav59wPH79"
            target="_blank"
            rel="noopener noreferrer"
          >
            IELTS
          </a>

          <a
            className="box" 
            href="https://forms.office.com/r/dav59wPH79"
            target="_blank"
            rel="noopener noreferrer"
          >
            AHA Training
          </a>

          <a
            className="box"
          >
            Inquiries
          </a>

          <a
            className="box"
          >
            Staff Daily Log
          </a>

        </div>



      </div>
      </div>

  );
};

export default App;
