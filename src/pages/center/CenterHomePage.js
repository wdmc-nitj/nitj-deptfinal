import CenterImageScroll from "../../components/center/CenterImageScroll";
import React from "react";

function CenterHomepage() {

    return (
        <div className="flex items-center flex-col w-full h-full px-auto mt-0">
            <CenterImageScroll />
            {/* <Center /> */}
            <div className="px-10 py-20 border-2 rounded font-serif">
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

        </div>
    );
}

export default CenterHomepage;
