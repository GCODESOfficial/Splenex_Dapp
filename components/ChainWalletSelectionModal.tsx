"use client"

import Image from 'next/image';
import { X } from 'lucide-react';

interface ChainSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export default function ChainWalletSelectionModal({ isOpen, onClose }: ChainSelectionModalProps) {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <>
            <div
                className="fixed inset-0 bg-[#0B0B0C]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={handleBackdropClick}
            >
                <div className="bg-[#1F1F1F] border border-[#1F1F1F] w-full max-w-sm mx-auto relative">
                    {/* Header */}
                    <div className="relative p-6 border-b border-zinc-700">
                        <h2 className="text-white text-center text-base md:text-lg font-bold font-satoshi">Select Chain</h2>
                        <button
                            onClick={onClose}
                            className="cursor-pointer absolute top-7 right-5 text-zinc-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <Image src="/images/icons/metamask.svg" alt="MetaMask" width={40} height={40} className="mx-auto mt-10" />

                        {/* wallets to be connected */}
                        <div className='flex flex-col mt-5'>
                            <button className="cursor-pointer w-full bg-[#1F1F1F] text-white py-2 px-2 mb-4">
                                <div className="flex items-center justify-between">
                                    <span className='flex items-center gap-2'>
                                        <Image src="/images/icons/metamask.svg" alt="MetaMask" width={24} height={24} />
                                        <span className="font-bold font-satoshi text-sm">EVM</span>
                                    </span>
                                    <span className='flex items-center justify-center bg-[#2C2C2C] border border-[#2C2C2C] py-1 px-2 w-[90px] text-xs font-general-sans'>
                                        <span className="w-1 h-1 mr-3 bg-[#20E070] rounded-full inline-block"></span>
                                        Last used
                                    </span>

                                </div>
                            </button>

                            <button className="cursor-pointer w-full bg-[#1F1F1F] text-white py-2 px-2 mb-4">
                                <div className="flex items-center justify-between">
                                    <span className='flex items-center gap-2'>
                                        <Image src="/images/icons/metamask.svg" alt="MetaMask" width={24} height={24} />
                                        <span className="font-bold font-satoshi text-sm">Solana</span>
                                    </span>
                                    <span className='flex items-center justify-center bg-[#2C2C2C] border border-[#2C2C2C] py-1 px-2 w-[90px] text-xs font-general-sans'>
                                        <span className="w-1 h-1 mr-3 bg-[#20E070] rounded-full inline-block"></span>
                                        Installed
                                    </span>

                                </div>
                            </button>
                        </div>

                        <div className="flex items-center w-full">
                            <div className="flex-grow border-t border-[#2C2C2C]"></div>
                            <span className="mx-4 text-gray-300 text-sm">Other wallets</span>
                            <div className="flex-grow border-t border-[#2C2C2C]"></div>
                        </div>

                        {/* footer text */}
                        <div>
                            <p className="font-general-sans font-medium text-xs text-[#FFFFFF] text-center mt-4 px-2">
                                By connecting a wallet, you agree to Splenex's Terms of Service and consent to our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}