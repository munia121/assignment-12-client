import AllTestCard from "./AllTestCard";
// eslint-disable-next-line no-unused-vars
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllTest = () => {
    
    const [allData, setAllData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/all-test?search=${search}`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [search])




    // search
    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        console.log(searchValue)
        setSearch(searchValue)

    }




    // if (isLoading) return <p>Loading...</p>

    return (
        <div className=" lg:w-[1600px] mx-auto">
            <div className="">
                <form onSubmit={handleSearch} className="flex justify-center">
                    <input type="text" name="search" placeholder="search date" className="input input-bordered input-info w-full max-w-xs" />
                    <input type="submit" value="Search" className="btn" />
                    {/* <button type="submit" className="btn mb-10">
                        <FaSearch></FaSearch>
                        Search
                    </button> */}
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 mb-20">
                {

                    allData.map(data => <AllTestCard key={data._id} data={data} ></AllTestCard>)
                }
            </div>
        </div>
    );
};

export default AllTest;