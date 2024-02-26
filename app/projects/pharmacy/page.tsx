import React from "react";
import { MacbookScroll } from "../../components/ui/macbook-scroll"
import Link from "next/link";

const pharmacy = () => {
  return (
    <div style={{ backgroundColor:"#171717"}} className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span style={{color: "white", opacity:"87%"}}>
            This is a pharmacy software i deeveloped <br />
            that can be used to manage patient's pharmacy needs in a hospital
            
            <p className="mt-[2rem]">[scroll down]</p>
          </span>
        }
        src={`/pharmacy/Pateints list.png`}
        showGradient={false}
      />
    </div>
  );
};


export default pharmacy
