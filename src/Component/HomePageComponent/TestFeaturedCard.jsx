/* eslint-disable react/prop-types */

const TestFeaturedCard = ({data}) => {
    return (
        <div >
            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={data.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <p className="px-4 py-2">Mostly booked tests
                by the users : <span className="bg-sky-500 text-white px-2"> {data.count ?data.count : '0'}</span> User</p>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{data.name}</h2>
                        <p className="dark:text-gray-800">{data.details.slice(0,100)}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestFeaturedCard;