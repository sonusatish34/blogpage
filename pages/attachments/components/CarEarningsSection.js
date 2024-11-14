

export default function CarEarningsSection() {
    return (
        <div
            className="bg-center bg-cover flex flex-col items-start justify-start space-y-3 px-4 py-5 lg:px-10 lg:pt-20 bg-black text-white"
            style={{ backgroundImage: "url('https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/Car-bg.webp')" }} // make sure car.svg is inside the 'public' folder
        >
            {/* Heading */}
            <p className="text-xs font-bold pt-2 lg:text-3xl lg:pt-5">
                How to make your car <span className="text-yellow-200">earn money</span> for you?
            </p>

            {/* Description */}
            <p className="text-[10px]   lg:text-2xl  lg:pr-[700px] lg:py-4 flex text-wrap">
                By sharing with Long Drive Cars, you can start earning money by sharing your car with others. Stop worrying about your cars EMI from your pocket and general servicing and damage protection, everything is taken care of by Long Drive Car.
            </p>

            {/* 4 Contents in a Row with Dividers */}
            <div className="flex items-start text-[10px] py-2 lg:py-10 lg:text-xl ">
                <div className="lg:px-8 font-medium items-center px-2 flex flex-col border-r-[1px] border-white border-l-[1px]">
                    <span>10,000+</span>
                    <span className="text-[7px] lg:text-lg">Booking</span>
                </div>
                <div className="border-r-[1px] lg:px-8 flex flex-col  px-2 items-center border-white font-medium flex-1">
                    <span>25,000+</span>
                    <span className="text-[7px] lg:text-lg">Cars</span>
                </div>
                <div className="border-r-[1px]  flex flex-col text-center lg:px-8  px-2 border-white font-medium">
                    <span>20+</span>
                    <span className="text-[7px] lg:text-lg">Granted Booking Monthly</span>
                </div>
                <div className="font-medium border-r-[1px]  text-center lg:px-8 px-2 border-white flex flex-col">
                    <span>1,000,000+</span>
                    <span className="text-[7px] lg:text-lg">Booking Completed</span>
                </div>
            </div>
        </div>
    );
}
