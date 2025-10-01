import React from 'react';
import State from "./State";
import Description from "./Description";

const Card = ({heroData}) => {
    return (
        <div className={`clash-card ${heroData.name}`}>
            <div className={`clash-card__image clash-card__image--${heroData.name}`}>
                <img src={heroData.img} alt={heroData.name}/>
            </div>
            <Description name={`clash-card__level clash-card__level--${heroData.name}`} value={heroData.level}/>
            <Description name="clash-card__unit-name" value={heroData.name}/>
            <Description name="clash-card__unit-description" value={heroData.description}/>
            <div className={`clash-card__unit-stats clash-card__unit-stats--${heroData.name} clearfix`}>
                {heroData.units.map(unit => <State key={unit.id} isBorder={unit.isBorder} stat={unit.state}
                                                   second={unit.second} value={unit.value}/>)}
            </div>
        </div>
    );
};

export default Card