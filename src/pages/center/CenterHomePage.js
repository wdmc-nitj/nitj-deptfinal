import CenterImageScroll from "../../components/center/CenterImageScroll";
import React from "react";

function CenterHomepage() {

    return (
        <div className="flex items-center flex-col w-full h-full px-auto mt-0">
            <CenterImageScroll />
            {/* <Center /> */}
            <div className="px-10 py-20 border-2 rounded font-serif">
            In today&#39;s rapidly changing world, the demand of skilled and adaptable workforce is more
            significant than ever before. To address this need and bridge the gap between the skills possessed
            by job seekers and the requirements of the job market, the establishment of Skill Development
            Centre (SDC) has become a crucial endeavor. The lack of relevant skills among job seekers
            often leads to unemployment or underemployment, hindering economic growth and productivity.
            Recognizing these challenges, governments, private organizations, and educational institutions
            worldwide have realized the importance of investing in skill development initiatives.
            SDC will provide comprehensive and industry-relevant training programs that equip individuals
            with the skills necessary to thrive in the job market. It aims to empower India&#39;s youth, offering
            necessary skills and training to enhance their chances of getting jobs in various sectors or
            become self-employed.
            </div>

        </div>
    );
}

export default CenterHomepage;
