import AllTestCard from "./AllTestCard";
// eslint-disable-next-line no-unused-vars
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllTest = () => {

    const [allData, setAllData] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const axiosSecure = useAxiosSecure()
    // const today = new Date()
    const  [counts, setCount] = useState()
    // const count = allData.length
    

    console.log(counts)
    const numberOfPages = Math.ceil(counts / itemsPerPage)

    const pages = [];
    for(let i = 0; i < numberOfPages; i++ ){
        pages.push(i)
    }

    // const pages = [...Array(numberOfPages).keys()]
    // console.log(pages)

    // eslint-disable-next-line no-unused-vars
    const { data } = useQuery({
        queryKey: ['data-count'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/data-count`)
            // console.log(data)
            setCount(data.count)
            return data
        }
    })
    // console.log(dataCount.count)

    useEffect(() => {
        fetch(`http://localhost:5000/all-test?search=${search}&date=${allData?.date}&page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [search, allData.date, currentPage, itemsPerPage])


    // console.log(allData)

    // const filterData = allData.filter(test => new Date(test.date) >= today)
    // const filterData = allData.filter(test => new Date(test.date) >= today);




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
                    <input type="text" name="search" placeholder="search by date" className="input input-bordered input-info w-full max-w-xs" />
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
            <div className="text-center mb-4">
                <p>currentPage : {currentPage}</p>
                ----{
                    pages.map(page => <button className="btn"
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page} </button>)
                }-----
            </div>
        </div>
    );
};

export default AllTest;