const FooterWebsite = () => {
    return (
        <div>
            <div className='min-h-[405px] bg-[#E9E8E6] flex items-center'>
                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-20 items-start">
                    <div className="col-span-1">
                        <div className="uppercase font-bold py-3 text-xl">
                            <h1>daria ceramics</h1>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm por incididut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
                                ullamco Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm
                            </p>
                        </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-20 ">
                        <div className="">
                            <div className="uppercase font-semibold py-3">
                                <h1>say hi</h1>
                            </div>
                            <div className="">
                                <p>Studio Address: 145 Taupo Street Waitakere, NZ 0604
                                    Studio Hours: Mon- Fri 9am-4pm
                                    Sat-Sun 12pm-6pm
                                    Email: info@maiaceramic.com
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="uppercase font-semibold py-3">
                                <h1>Customer Service</h1>
                            </div>
                            <div className="">
                                <p>Payment
                                    Shipping
                                    Returns
                                    Quality & Safety
                                    Product Care
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="uppercase font-semibold py-3">
                                <h1>Legal & Privacy</h1>
                            </div>
                            <div className="">
                                <p>Terms & Conditions
                                    Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[50px] bg-[#23201B] text-white text-center leading-[50px] uppercase font-thin">
                <h1> © Copyright by DariaCeramics  </h1>
            </div>
        </div>
    )
}

export default FooterWebsite