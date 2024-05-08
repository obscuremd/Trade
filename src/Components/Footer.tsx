import React from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface TextProps {
    txt: string;
}

const Text: React.FC<TextProps> = ({ txt }) => {
    return (
        <p className="text-[14px] text-[#BBC3CC]">{txt}</p>
    );
}


const Footer: React.FC = () => {

    const stack = [
        [
            'Create pool',
            'FXD Staking Aggregation',
            'Get FXD',
            'fees'
        ],
        [
            'Invoice Digitization',
            'Bond',
            'RWA'
        ],
        [
            'XDC Liquidity',
            'Case Study',
            'Contact Us',
            'Bulk Upload API',
        ],
        [
            'Join The Network',
            'Consortium Event',
            'FAQs',
            'Media Center',
            'XDC Subnet',
            'Hybrid Distributed Ledger Solution',
        ],
    ]

    return (
        <div style={{ background: 'linear-gradient(to bottom, #3A526C, #2B3541)' }}>
            {/* contents */}
            <div className=" flex flex-col md:flex-row py-[40px] px-[14%] gap-10 md:gap-0 justify-between text-[13px] text-[#C2C2C2]">
                
                {/* content 1 */}
                <div className="flex flex-col gap-[17px]">
                    <p className="text-[15px] text-white font-bold">MARKET PLACE</p>
                    <div className="flex flex-col gap-[7px]">
                        {stack[0].map((item, index) => (
                            <Text key={index} txt={item} />
                        ))}
                    </div>
                </div>
                
                {/* content 2 */}
                <div className="flex flex-col gap-[17px]">
                    <p className="text-[15px] text-white font-bold">Origination Tools</p>
                    <div className="flex flex-col gap-[7px]">
                        {stack[1].map((item, index) => (
                            <Text key={index} txt={item} />
                        ))}
                    </div>
                </div>
                
                {/* content 3 */}
                <div className="flex flex-col gap-[17px]">
                    <p className="text-[15px] text-white font-bold">About Us</p>
                    <div className="flex flex-col gap-[7px]">
                        {stack[2].map((item, index) => (
                            <Text key={index} txt={item} />
                        ))}
                    </div>
                </div>
                
                {/* content 4 */}
                <div className="flex flex-col gap-[17px]">
                    <p className="text-[15px] text-white font-bold">Other Links</p>
                    <div className="flex flex-col gap-[7px]">
                        {stack[3].map((item, index) => (
                            <Text key={index} txt={item} />
                        ))}
                    </div>
                </div>

                {/* buttons */}
                <div className="flex flex-col gap-[10px]">
                    <p className="text-[15px] text-white font-bold">Connect Us</p>
                    <div className="flex gap-[10px] text-white">
                        <button className="p-2 bg-[#c2c2c255] rounded-lg">
                            <LinkedInIcon/>
                        </button>
                        
                        <button className="p-2 bg-[#c2c2c255] rounded-lg">
                            <TwitterIcon/>
                        </button>
                        
                        <button className="p-2 bg-[#c2c2c255] rounded-lg">
                            <YouTubeIcon/>
                        </button>

                    </div>
                </div>
            
            
            </div>

            <hr className="w-full h-[1px] border-[0.5px] border-[#4A5867]" />

            {/* copyright */}
            <div className=" flex flex-col md:flex-row py-[40px] md:px-[14%] px-[4%] md:gap-0 gap-4 text-center justify-between text-[13px] text-[#C2C2C2]">
                <p>Copyright © 2024 TRADEFINEX TECH LTD (An ADGM Entity), All rights reserved.</p>
                <p>Privacy Policy | Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer
