
const Promotions = () => {
    return (
        <div>
            <div className="lg:flex lg:gap-16 items-center ">
                <div>
                    <img src="https://doctoraltheme.com/wp-content/themes/doctoral/assets/images/doctor.png" alt="" />
                </div>
                <div className="lg:w-[800px] ">
                    <div className="space-y-3">
                        <h3 className="text-4xl font-bold">Comprehensive Health Checkup Package</h3>
                        <p>Ensure your well-being with our comprehensive health checkup package, covering vital screenings and tests.</p>
                    </div>
                    <div className="mt-5 mb-3">
                        <h2 className="text-2xl font-bold">Promotion Details:</h2>

                        <ul>
                            <li><span className="font-bold text-3xl">-</span> Offer: Avail of our limited-time offer and receive a free consultation with every checkup package booked.</li>
                            <li><span className="font-bold text-3xl">-</span> Validity: Valid until July 31, 2024.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="mt-5 mb-4">
                        <h2 className="text-2xl font-bold">How It Works:</h2>
                        <p className="mt-3"><span className="font-bold">Booking:</span>  Customers can book the comprehensive health checkup package either by visiting our website or contacting our diagnostic center directly.</p>
                    </div>
                    <hr />
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold ">Free Consultation:</h3>
                        <p className="mt-3"> Along with the package, customers receive a complimentary consultation session with our experienced healthcare professionals. During this session, they can discuss their health concerns, review test results, and receive personalized advice on maintaining or improving their health.</p>
                    </div>
                    <hr />
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold ">How to Redeem:</h3>
                        <p className="mt-3"> Customers can redeem this promotion by mentioning the offer during the booking process. Upon completing the health checkup package, they will automatically qualify for the free consultation session.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;