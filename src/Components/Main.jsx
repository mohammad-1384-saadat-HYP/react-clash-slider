import React, {useEffect, useState} from 'react';
import Arrow from "./Arrow";
import Card from "./Card";

const Main = () => {

    const [hero, setHero] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const getHeroes = async () => {
        try {
            const response = await fetch("http://localhost:8000/heroes");
            !response.ok && console.log("network response was not ok");
            setHero(await response.json())
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getHeroes();
    }, []);

    const prevFun = () => {
        const index = selectedIndex - 1 < 0 ? (hero.length - 1) : selectedIndex - 1;
        setSelectedIndex(index);
    }

    const nextFun = () => {
        const index = selectedIndex + 1 < hero.length ? selectedIndex + 1 : 0;
        setSelectedIndex(index);
    }

    return (
        <div className="slide-container">
            <div className="wrapper">
                {
                    !hero.length ?
                        <div>Loading ...!</div> :
                        <>
                            <Arrow sideClass="prev" handleFun={prevFun}/>
                            <Card heroData={hero[selectedIndex]}/>
                            <Arrow sideClass="next" handleFun={nextFun}/>
                        </>
                }
            </div>
        </div>
    );
};

export default Main