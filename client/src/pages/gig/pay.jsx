
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";


function PayFiver() {



    const [to, setTo] = useState('0x70997970C51812dc3A010C7d01b50e0d17dc79C8')
    const [debouncedTo] = useDebounce(to, 500)


    const [debouncedAmount] = useDebounce(151, 500)

    const { config } = usePrepareSendTransaction({
        to: debouncedTo,
        value: debouncedAmount ? parseEther(String(debouncedAmount)) : undefined,
    })
    const { data, sendTransaction } = useSendTransaction(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
    const { address } = useAccount();


    const sentBYT = async (event) => {
        event.preventDefault();
        sendTransaction?.();
        

    }

    useEffect(()=>{

     
    },[isSuccess])
    


    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70">
            <div className="rounded-3xl p-20 pt-0 w-full flex items-center justify-center">

                <div className="bg-[#23202A] w-full rounded-3xl border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
                            Şipariş Ver
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={sentBYT}>
                            <div>
                                <label htmlFor="customerNote" className="block mb-2 text-sm font-medium text-gray-200">Müşteri Notu</label>
                                <textarea
                                    name="customerNote"
                                    id="customerNote"
                                    className="bg-[#1E1B24] text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5 h-32"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading || !sendTransaction || !to}
                                className="w-full text-opacity-0 text-lg bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border border-gray-50 focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full px-6 py-2 text-center transition duration-300 ease-in-out"
                            >
                                {isLoading ? 'Ödeme Yapılıyor...' : 'Şiparişi Tamamla'}
                            </button>
                        </form>


                    </div>
                </div>

            </div>

        </div>
    );
}

export default PayFiver;