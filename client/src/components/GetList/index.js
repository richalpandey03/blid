import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import GetCharacter from "../GetCharacter";
import "./index.css"

export default function GetList(){
    const [characterList, setCharacterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('currentPage') ? sessionStorage.getItem('currentPage') : 1);
 
    useEffect(() => {
        const savedPage = sessionStorage.getItem('currentPage');
        setCurrentPage(savedPage ? parseInt(savedPage) : 1);
    }, []);

    useEffect(()=>{
        setIsLoading(true);
        sessionStorage.setItem('currentPage', currentPage);
        fetch(`${process.env.REACT_APP_SERVER_URL}/characters/getCharacterList?page=${currentPage}`)
        .then((data)=>data.json())
        .then((data)=>{
            setCharacterList(data.results);
            setPageCount(data.info.pages)
            setIsLoading(false);
            window.scrollTo(0, 0);
        })
        .catch((error) => {
            console.error('Error fetching character list:', error);
            window.alert("Something went wrong in fetching Data.")
            setIsLoading(false);
        });
    },[currentPage]);

   
    const totalPages = pageCount;
    const pagesPerPage = 5;
    const currentPageGroup = Math.ceil(currentPage / pagesPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const startPage = (currentPageGroup - 1) * pagesPerPage + 1;
    const endPage = Math.min(startPage + pagesPerPage - 1, totalPages);

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    const handleCharacter = (e) =>{
        window.location.href=`/character?id=${e}`
    }

    return (
        <div>
            <div className="get-list-parent">
                <div className="page-title-parent">
                    <div>
                        <span className="page-title">Rick and Morty Characters</span>
                    </div>
                    <div className="title-line"></div>
                </div>
                {isLoading ? 
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                :
                <div>
                    <Row className="g-0 list-row">
                        {characterList.map((characterElement, index) => (
                            <>
                            <Col lg={6} key={index} className="g-0" onClick={() => handleCharacter(characterElement.id)}>
                                <div>
                                    <Row className="g-0 card-element-row"> 
                                        <Col className="g-0" lg={5} md={4} sm={5} xs={12}>
                                            <div className="char-image-div">
                                            <img src={characterElement.image} className="character-img"/>
                                            </div>
                                        </Col>
                                        <Col className="g-0" lg={7} md={8} sm={7} xs={12}>
                                            <div className="details-parent-div">
                                                <Row className="g-0">
                                                    <Row className="g-0">
                                                        <span className="character-name">{characterElement.name}</span>
                                                    </Row>
                                                    <div className="character-status">
                                                        <div className={`dot ${characterElement.status === "Dead" ? "red" : "green"}`}></div>
                                                    <div><span>{characterElement.status} - {characterElement.species}</span></div>
                                                    </div>
                                                </Row>
                                                <Row className="g-0 last-location-section">
                                                    <Row className="g-0">
                                                        <span className="last-know-location">Last Known Location :</span>
                                                    </Row>
                                                    <Row className="g-0">
                                                        <span className="last-know-location-value">{characterElement.location.name}</span>
                                                    </Row>
                                                </Row>
                                                <Row className="g-0">
                                                    <Row className="g-0">
                                                        <span className="first-seen">First seen in</span>
                                                    </Row>
                                                    <Row className="g-0">
                                                        <span className="first-seen-value">{characterElement.origin.name}</span>
                                                    </Row>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col> 
                            </>
                        ))}
                    </Row>
                    <div className="pagination-section">
                        <ul className="pagination">
                            <li className="page-item" onClick={handlePreviousClick}>
                                <button className="page-link" disabled={currentPage === 1}>{"<<"}</button>
                            </li>
                            {pageNumbers.map((pageNumber) => (
                                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} onClick={() => handlePageClick(pageNumber)}>
                                    <button className="page-link">{pageNumber}</button>
                                </li>
                            ))}
                            <li className="page-item" onClick={handleNextClick}>
                                <button className="page-link" disabled={currentPage === totalPages}>{">>"}</button>
                            </li>
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    );
}