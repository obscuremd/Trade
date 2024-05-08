import { useState } from "react";

interface EthereumWindow extends Window {
    ethereum?: {
        request: (args: { method: string }) => Promise<string[]>;
    };
}


const SignIn = () => {

    const [active, setActive]= useState(false)
    const [account, setAccount] = useState('')


    const log = async () => {
        const windowWithEthereum = window as EthereumWindow;
        if (windowWithEthereum.ethereum) {
            try {
                const accounts = await windowWithEthereum.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setActive(true);
            } catch (error) {
                console.error("Error fetching accounts:", error);
            }
        } else {
            alert('Please install MetaMask');
        }
    };

    const NotConnected = () => {
        return(
            <div className="bg-[#F3F6FE] py-[4%] md:px-[14%] px-[5%] w-full">
                <div className="bg-[#FFFFFF] py-[2%] px-[5%] border-[1px] rounded-lg w-full flex flex-col gap-10">
                    <div className="flex w-full justify-between">
                        <p className="text-[20px] font-semibold">Sign Up Form</p>
                        <button onClick={()=>log()} className="self-end px-4 py-2 rounded-lg text-[#fff] bg-blue-500">Use MetaMask</button>
                    </div>

                    {/* forms */}
                    <div className="w-full flex flex-col gap-[30px]">
                        {/* pool name and logo */}
                        <div className="flex w-full gap-[2%]">
                            <Input name={'enter name'} header={'Pool Name'} type={'text'}/>
                            <Input name={'enter name'} header={'Pool Name'} type={'file'}/>
                        </div>
                        {/* pool description */}
                        <Input name={'enter Pool Description'} header={'Pool Description'} type={'text'}/>
                        {/* Website logo and Issuer Name */}
                        <div className="flex w-full gap-[2%]">
                            <Input name={'enter name'} header={'Website logo'} type={'file'}/>
                            <Input name={'enter name'} header={'Issuer Name'} type={'text'}/>
                        </div>
                        {/* Issuer Email and IPool Website */}
                        <div className="flex w-full gap-[2%]">
                            <Input name={'enter name'} header={'Issuer Email'} type={'text'}/>
                            <Input name={'enter name'} header={'Pool Website'} type={'text'}/>
                        </div>
                    </div>

                    <button className="self-end px-4 py-2 rounded-lg text-[#fff] bg-blue-500">Submit</button>
                </div>
            </div>
        )
    }

    const Connected =()=>{
        return(
            <div className="bg-[#F3F6FE] py-[4%] md:px-[14%] px-[5%] w-full">
                <div className="bg-[#FFFFFF] py-[2%] px-[5%] border-[1px] rounded-lg w-full flex flex-col gap-2">
                    <p className="font-bold">Account Address:</p>
                    <p className="truncate">{account}</p>
                </div>
            </div>
        )
    }


    const Input: React.FC<ButtonProps> =({name, header, type})=>{
        return(
            <div className="w-full text-[16px]">
                <p className="font-bold">{header}</p>
                <div className="w-full md:p-2 p-1 border-[1px] border-blue-300 bg-[#F2F5FB] rounded-lg">
                    <input type={type} className="w-full outline-none bg-inherit font-bold" placeholder={name} />
                </div>
            </div>
        )
    }

return (
    <div>
        {active?<Connected/>:<NotConnected/>}
    </div>
)
}

interface ButtonProps{
    name: string,
    header: string,
    type: string,
}

export default SignIn