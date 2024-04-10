import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import backicon from "./backicon.png"
import "./index.css"

export default function GetCharacter(){
    const [characterData, setCharacterData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id")
        fetch(`${process.env.REACT_APP_SERVER_URL}/characters/getCharacter?id=${id}`)
        .then((data)=>data.json())
        .then((data)=>{
            setCharacterData(data)
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching character list:', error);
            window.alert("Something went wrong in fetching Data.")
            setIsLoading(false);
        });
    },[]);

    return(
        <div className="details-of-character">
        {isLoading ?
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
            :
            <Row className="g-0 character-details-parent">
                <Row className="g-0 title-div">
                    <Col lg={1} md={1} sm={1} xs={2} className="g-0 backicon-div">
                        <img src={backicon} className="backicon-img" onClick={()=>{
                            window.location.href="/"
                        }}/>
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={10} className="g-0 character-page-title">
                        <div>
                            <span className="char-name">{characterData.name}</span>
                        </div>
                    </Col>
                </Row>
                <Row className="g-0 sub-details-div">
                    <Row className="g-0">
                        <Col lg={3} md={4} sm={4} xs={12} className="g-0">
                            <Row className="g-0">
                                <div className="character-image-parent">
                                    <img src={characterData.image}/>    
                                </div>                
                            </Row>
                            <Row className="g-0">
                            <div className="side-bar-name">
                                <span className="side-bar-name-span">{characterData.name}</span>
                            </div>
                            </Row>
                        </Col>
                        <Col lg={8} md={7} sm={7} xs={12} className="g-0 about-details">
                            <Row className="g-0 ">
                                <span className="about-title">About</span>
                            </Row>
                            <Row className="g-0 spacing-class">
                                <Col className="g-0" lg={3} md={4} sm={6} xs={6}>
                                    <span>Species : </span>
                                </Col>
                                <Col className="g-0">
                                    <span>{characterData.species}</span>
                                </Col>  
                            </Row>
                            <Row className="g-0 spacing-class">
                                <Col className="g-0" lg={3} md={4} sm={6} xs={6}>
                                    <span>Status :</span>
                                </Col>
                                <Col className="g-0">
                                    <span>{characterData.status}</span>
                                </Col> 
                            </Row>
                            <Row className="g-0 spacing-class">
                                <Col className="g-0" lg={3} md={4} sm={6} xs={6}>
                                    <span>Gender :</span>
                                </Col>
                                <Col className="g-0">
                                    <span>{characterData.gender}</span>
                                </Col> 
                            </Row>
                            <Row className="g-0 spacing-class">
                                <Col className="g-0" lg={3} md={4} sm={6} xs={6}>
                                    <span>First seen :</span>
                                </Col>
                                <Col className="g-0">
                                    <span>{characterData.origin.name}</span>
                                </Col>
                            </Row>
                            <Row className="g-0 spacing-class">
                            <Col className="g-0" lg={3} md={4} sm={6} xs={6}>
                                    <span>Last seen in :</span>
                                </Col>
                                <Col className="g-0">
                                    <span>{characterData.location.name}</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1} md={1} sm={1} className="g-0">
                        </Col>
                    </Row>
                </Row>
            </Row>
        }
        </div>
    )
}