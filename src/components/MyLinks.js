import React, {useEffect, useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";

const MyLinks = () => {
    const [savedLinks, setSavedLinks] = useState([]);

    useEffect( () => {
        let newSavedLinks = [];
        for (let key in localStorage) {
            // console.log(key);
            // console.log(localStorage.getItem(key));
            if (localStorage.getItem(key) !== null) {
                newSavedLinks.push([key, localStorage.getItem(key)])
            }
        }
        setSavedLinks(newSavedLinks);
        // console.log(newSavedLinks);
    }, []);

    const removePage = (e) => {
        let searchTitle = e.target.getAttribute('data-title');
        let searchPage = e.target.getAttribute('data-page');
        // console.log(searchTitle);
        // console.log(searchPage);
        localStorage.removeItem(searchTitle);
        window.location.reload(true);
    }

    return (
        <>
            <div className='results'>
                {
                    savedLinks.map( savedLink => (
                        <div className='result-card' key={savedLink[0]}>
                            <p>{savedLink[0]}</p>
                            <div className='result-card-buttons'>
                                <a href={savedLink[1]} target='_blank' rel="noopener noreferrer" className='view-search'>View Page</a>
                                <a target='_blank' className='view-search' onClick={removePage} data-title={savedLink[0]} data-page={savedLink[1]}>Remove Page</a>
                                <CopyToClipboard text={savedLink[1]}>
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

export default MyLinks;
