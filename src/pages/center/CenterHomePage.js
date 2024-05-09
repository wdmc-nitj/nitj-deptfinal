import CenterImageScroll from "../../components/center/CenterImageScroll";
import React from "react";
import gif from "../../components/Vedio/New.gif";
import { useParams } from 'react-router-dom';
import Heading from '../../components/Heading';

function CenterHomepage() {
    const dept = useParams()?.dept;

    const hardcodedActivity = [
        { id: 1, title: "Activity", link: "https://example.com/activity1", new: false},
    ];
    const hardcodedNews = [
        { id: 1, title: "News", pdfLink: "https://example.com/news1.pdf", new: false },
    ];

    return (
        <div className="flex items-center flex-col w-full h-full px-auto mt-0">
            <CenterImageScroll />
            <div className="px-10 py-20 border-2 rounded font-serif mb-4">
                A MSME Sponsored Entrepreneurship and Skill Development Training Programme (E-
                SDP) on “Installation and Commissioning of Solar Plant for Net-Zero Energy Buildings”

                was organized in the Department of Electrical Engineering from 7

                th to 11th December,
                2023. The Inaugural ceremony was addressed by the Chief Guest, Prof. Binod Kumar
                Kanaujia, Director, NITJ, and the Guest of Honour, Mr. Y. C. S. Rao, General Manager,
                Power Grid Corporation of India Limited (PGCIL), Kartarpur. Prof. Ajay Bansal, Registrar,
                Prof. Dilbag Singh, ICE Department, Mr. Sneh Joshi, PGCIL, Prof. S. K. Pahuja, Head of
                the Department, Dr. K. C. Sharma, Dr. Hari Murugan, Dr. Mahesh Kumar, Course
                coordinators, and faculty members of the Electrical Department were presented in the
                inaugural ceremony.
                The ESDP was highly successful, in terms of quality of lectures delivered and hand on
                sessions followed by industrial visit at PGCIL Kartarpur Station. The program benefited
                26 participants from various institutes and organizations across the state. The ESDP
                sessions was addressed by the various eminent speakers from PGCIL, NIT Hamirpur and
                host institute, who discussed the critical aspects of installation and commissioning of solar
                plant for net-zero energy buildings. The lecture sessions provided a comprehensive
                understanding of harnessing solar power to achieve energy neutrality. The hands-on
                sessions emphasized practical knowledge for designing solar PV plants. Additionally, the
                industrial visit at PGCIL Kartarpur Station highlighted the importance of grid integration
                for solar PV plants. Finally, the ESDP was concluded with a valedictory function along
                with the distribution of course material and collecting valuable feedback from the
                participants.
            </div>

            <div className='flex flex-col md:flex-row w-[98%] justify-around items-center p-2 md:p-4 pb-0 place-items-center mx-auto'>
                {/* Activity  */}
                <div className='max-w-full w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-2 my-[20px] pt-[54px] place-items-center'>
                    <Heading name="Activities" />

                    <div className='scrollbar max-w-full block h-80 overflow-y-auto overflow-x-clip pl-6 pr-2'>
                        <ul className='w-full flex list-disc flex-col justify-between divide-y-2'>
                            {hardcodedActivity.map((n, i) => (
                                <li key={n.id} className="py-3 w-full">
                                    <div className='relative'>
                                        <span className="w-full text-sm sm:text-base hover:text-[rgba(0,105,140,1)] cursor-pointer">
                                            <span onClick={() => { if (n.link !== undefined && n.link !== "") window.open(n?.link, "_blank"); }}>{n?.title}</span>&nbsp;
                                            <span className={"absolute pt-[5px] text-lg " + (n?.new ? '' : 'hidden')}><img className='min-w-[32px]' src={gif} alt='...' /></span>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* News & Highlights */}
                <div className='max-w-full w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-2 my-[20px] pt-[54px] place-items-center'>
                    <Heading name="News & Highlights" />
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto overflow-x-clip pl-6 pr-2'>
                        <ul className='w-full flex list-disc flex-col justify-between divide-y-2'>
                            {hardcodedNews.map((n, i) => (
                                <li key={n.id} className="py-3 w-full">
                                    <div className='relative'>
                                        <span className="w-full text-sm sm:text-base hover:text-[rgba(0,105,140,1)] cursor-pointer">
                                            <span onClick={() => { if (n.pdfLink !== undefined && n.pdfLink !== "") window.open(n?.pdfLink, "_blank"); else if(n.link!==undefined && n.link!=="") window.open(n?.link, "_blank"); }}>{n?.title}</span>&nbsp;
                                            <span className={"absolute pt-[5px] text-lg " + (n?.new ? '' : 'hidden')}><img className='min-w-[32px]' src={gif} alt='...' /></span>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterHomepage;
