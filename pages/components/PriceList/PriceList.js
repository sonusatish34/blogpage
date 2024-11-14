import { useState, useEffect } from "react";

export default function PriceList({ city }) {
    const [listP, setListP] = useState('')
    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://longdrivecarz.in/site/${city}-prices`);
                const items = await response.json();
                const listprice = items?.results;
                setListP(listprice);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }
        fetchCarDetails();
    }, []);

    return (
        <div className="lg:px-20 px-4 lg:py-20 py-8  ">
            <p className="lg:text-xl text-xl text-[#660066] font-bold text-center pb-8 lg:pb-2 uppercase"><span className="font-bold text-lg text-[#dbbeed]">/</span><span className="font-bold text-lg text-[#c97ef7]">/</span><span className="font-bold text-lg text-[#660066]">/ </span>price list</p>
            <p className="lg:text-4xl text-xl font-bold text-center text-black pb-8 lg:pb-12 capitalize">Check out our comprehensive price list</p>
            <div className=" flex flex-wrap gap-14">
                <div className=" rounded- overflow-hidden">

                    <table className="lg:w-96 divide-y  text-xs text-black rounded-t-md  overflow-hidden" >
                        <thead className="bg-[#660066] text-white rounded-md">
                            <tr>
                                <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 5 Seater Basic Cars </th>
                                <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">
                                    {listP['seater_5_basic_cat_1']?.show_text}
                                </td>
                                <td className="px-2 py-2  border border-gray-300 font-semibold">
                                    {listP['seater_5_basic_cat_1']?.price} </td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">
                                    {listP['seater_5_basic_cat_2']?.show_text}
                                </td>
                                <td className="px-2 py-2  border border-gray-300 font-semibold">
                                    {listP['seater_5_basic_cat_2']?.price} </td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">
                                    {listP['seater_5_basic_cat_3']?.show_text}
                                </td>
                                <td className="px-2 py-2  border border-gray-300 font-semibold">
                                    {listP['seater_5_basic_cat_3']?.price} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-t-md   overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 5 seater luxury </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_5_luxury_cat_1']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_5_luxury_cat_1']?.price}  </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_5_luxury_cat_2']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_5_luxury_cat_2']?.price}  </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_5_luxury_cat_3']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_5_luxury_cat_3']?.price}  </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_5_luxury_cat_4']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_5_luxury_cat_4']?.price}  </td>
                        </tr>
                        {listP['seater_5_luxury_cat_5'] && <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_5_luxury_cat_5']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_5_luxury_cat_5']?.price}  </td>
                        </tr>}
                    </tbody>
                </table>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-t-md   overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 5 Seater Sunroof Cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">i20 Sunroof / Ecosport Sunroof
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_5_sunroof_cat_1']?.price}  </td>

                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">{listP['seater_5_sunroof_cat_2']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">{listP['seater_5_sunroof_cat_2']?.price} </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">{listP['seater_5_sunroof_cat_3']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">{listP['seater_5_sunroof_cat_3']?.price} </td>
                        </tr>

                    </tbody>
                </table>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-t-md   overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 7 seater cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_basic_cat_1']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_basic_cat_1']?.price} </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_basic_cat_2']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_basic_cat_2']?.price} </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_basic_cat_3']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_basic_cat_3']?.price} </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_basic_cat_4']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_basic_cat_4']?.price} </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_basic_cat_5']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_basic_cat_5']?.price} </td>
                        </tr>
                    </tbody>
                </table>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-t-md   overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 7 Seater Sunroof Cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_sunroof_cat_1']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_sunroof_cat_1']?.price} </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">{listP['seater_7_sunroof_cat_2']?.show_text}
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                {listP['seater_7_sunroof_cat_2']?.price} </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
}
