import React, {useEffect, useState} from 'react';
import '../styles/home.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Home = () => {

    const [search, setSearch] = useState('');
    const [titles, setTitles] = useState([]);
    const [pages, setPages] = useState([]);
    const [results, setResults] = useState([]);

    useEffect( () => {
        getHome();
    }, []);

    const getHome = async () => {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=epstein+didn%27t+kill+himself`);
        const data = await response.json();
        // console.log(data[1][1]);
        // console.log(data[3][0]);
        setTitles(data[1]);
        setPages(data[3]);

        let searchResults = [];
        for (let i=0; i< data[1].length; i++){
            searchResults.push({
                searchTitle: data[1][i],
                searchPage: data[3][i]
            })
        };
        setResults(searchResults)
        // console.log(searchResults)
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = async (e) => {
        e.preventDefault();
        if (search.length === 0) {
            return;
        } else {
            const response = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${search}`);
            const data = await response.json();
            // console.log(data);
            setTitles(data[1]);
            setPages(data[3]);
            setSearch('');

            let searchResults = [];
            for (let i=0; i< data[1].length; i++){
                searchResults.push({
                    searchTitle: data[1][i],
                    searchPage: data[3][i]
                })
            };
            setResults(searchResults)
        };
    };

    const savePage = (e) => {
        let searchTitle = e.target.getAttribute('data-title');
        let searchPage = e.target.getAttribute('data-page');
        // console.log(searchTitle);
        // console.log(searchPage);
        localStorage.setItem(searchTitle, searchPage );
    }

    return (
        <>
            <form className='search-bar-container' onSubmit={getSearch}>
                <input className='search-bar' type='text' placeholder="Epstein didnt kill himself..." name='search' value={search} onChange={handleSearch}></input>
                <button type='submit' className='search-button'><i className="fas fa-search"></i></button>
            </form>

            <div className='results'>
                {
                    results.map( result => (
                        <div className='result-card' key={result.searchTitle}>
                            <p>{result.searchTitle}</p>
                            <div className='result-card-buttons'>
                                <a href={result.searchPage} target='_blank' rel="noopener noreferrer" className='view-search'>View Page</a>
                                <a target='_blank' className='view-search' onClick={savePage} data-title={result.searchTitle} data-page={result.searchPage}>Save Page</a>
                                <CopyToClipboard text={result.searchPage}>
                                    <a className='view-search'>Copy Link</a>
                                </CopyToClipboard>
                            </div>


                        </div>
                    ))
                }

            </div>
        </>
    );

}

export default Home;
