import React, { useState, useMemo } from 'react';

function Table({ tablehead, data }) {

    const [row, setrow] = useState(8); //row per page
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    // Filter data based on search term
    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) return data;
        
        return data.filter((item) => {
            const searchLower = searchTerm.toLowerCase();
            // Search through all fields of the item
            return Object.values(item).some(value => {
                if (value === null || value === undefined) return false;
                return String(value).toLowerCase().includes(searchLower);
            });
        });
    }, [data, searchTerm]);

    const totalrow = filteredData.length;
    const totalPage = Math.ceil(totalrow / row);

    // Reset to first page when search changes
    useMemo(() => {
        setPage(1);
    }, [searchTerm]);

    // Get current page data
    const currentData = filteredData.slice(
        (page - 1) * row,
        page * row
    );

    return (
        <div className='overflow-auto w-full shadow-md'>
            <div className="min-w-[500px] md:min-w-[800px] flex flex-col border-t border-gray-200 bg-white rounded-lg overflow-auto mx-auto">
                <div className='flex w-full items-center justify-around flex-wrap gap-2'>
                    <div className='flex items-center my-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 rounded'>
                        <label htmlFor="states" className="mr-2">Rows per Page :</label>
                        <select 
                            id="states" 
                            value={row} 
                            onChange={(e) => {
                                setrow(Number(e.target.value));
                                setPage(1); // Reset to first page when changing rows
                            }} 
                            className="border-none outline-none"
                        >
                            <option value={8}>8</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={60}>60</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    <div className='m-1 relative'>
                        <input 
                            className='w-64 sm:w-96 border outline-none p-2 pl-8 rounded' 
                            placeholder='Search by any field...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        )}
                    </div>
                </div>
                
                {/* Show search results count */}
                {searchTerm && (
                    <div className="px-4 py-2 text-sm text-gray-600">
                        Found {filteredData.length} result(s) for "{searchTerm}"
                    </div>
                )}
                
                <div className="relative mx-auto overflow-x-auto">
                    <table className="min-w-[500px] md:min-w-[800px] text-sm text-left text-gray-800 scroll-auto border rounded-md">
                        <thead className="text-gray-700 uppercase bg-gray-100 shadow-md">
                            <tr>
                                <th scope="col" className="px-6 py-3 border">#</th>
                                {tablehead.map((item, i) => (
                                    <th key={i} scope="col" className="px-6 py-3 border">
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.length > 0 ? (
                                currentData.map((Item, i) => (
                                    <tr key={i} className="border-b hover:bg-gray-50">
                                        <td className="align-top px-6 py-4 text-gray-900 border-r">
                                            {(page - 1) * row + i + 1}
                                        </td>
                                        {tablehead.map((item, j) => (
                                            <td key={j} className="align-top px-6 py-4 text-gray-900 border-r">
                                                {item === "Link" ? (
                                                    Item[item] ? (
                                                        <a target="_blank" rel="noopener noreferrer" href={Item[item]}>
                                                            <i className="fa-solid fa-link"></i>
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400">-</span>
                                                    )
                                                ) : (
                                                    <span>{Item[item] || '-'}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={tablehead.length + 1} className="text-center py-8 text-gray-500">
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                {filteredData.length > 0 && (
                    <div className="w-full my-2 px-2 flex flex-1 items-center justify-around flex-wrap gap-2">
                        <div>
                            <p className="text-sm">
                                Showing
                                <span className="font-medium mx-1">{Math.min((page - 1) * row + 1, totalrow)}</span>
                                to
                                <span className="font-medium mx-1">{Math.min(page * row, totalrow)}</span>
                                of
                                <span className="font-medium mx-1">{totalrow}</span>
                                results
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <button 
                                    onClick={() => setPage(page > 1 ? page - 1 : 1)} 
                                    disabled={page === 1}
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>
                                <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                    {page}
                                </span>
                                {totalPage > 1 && (
                                    <>
                                        <span className="relative z-10 inline-flex items-center bg-indigo-300 px-4 py-2 text-sm font-semibold text-white">
                                            ...
                                        </span>
                                        <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                            {totalPage}
                                        </span>
                                    </>
                                )}
                                <button 
                                    onClick={() => setPage(page < totalPage ? page + 1 : totalPage)} 
                                    disabled={page === totalPage}
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Table;