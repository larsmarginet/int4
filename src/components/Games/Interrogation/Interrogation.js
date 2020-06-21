import React, { useState } from "react";
import style from "./Interrogation.module.css";
import Button from "../../Ui/Button/Button";

const Interrogation = ({person}) => {
    const [truth, setTruth] = useState(true);
    const [answer, setAnswer] = useState("");
    let questions = [];
    let character = "";
    if (person === "callier") {
        character = "Albert";
        questions = [{
            question: "Hoe kom jij aan het kunstwerk?",
            answer: "Ik vervoerde een vracht richting Brugge maar wist niets van het kunstwerk af.",
            truth: true,
        }, {
            question: "Waarom vluchtte je bij de smid?",
            answer: "Ik sloeg in paniek, ik wist niets van dat kunstwerk af.",
            truth: true,  
        }, {
            question: "Hoe komt het dat je geen verklaring wou afleggen?",
            answer: "Ik wilde niet spreken zonder mijn advocaat",
            truth: true,  
        }]
    } else if (person === "betrang") {
        character = "Betrang";
        questions = [{
            question: "Waarom bezocht jij de kerk die beruchte dag vijf keer?",
            answer: "Ik was op bedevaart naar Kortrijk.",
            truth: false,
        }, {
            question: "Waar was jij de nacht van de verwijning?",
            answer: "Ik was bij mijn moeder zaliger.",
            truth: false,  
        }, {
            question: "In wat ben jij gespecialiseerd?",
            answer: "Beeldhouwwerken zijn mijn specialiteit.",
            truth: false,  
        }]
    } else if (person === "smid") {
        character = "De Smid"
        questions = [{
            question: "Waarom belde jij niet meteen naar de politie?",
            answer: "Ik probeerde het wel maar had geen verbinding.",
            truth: true,
        }, {
            question: "Ken je meneer C arlier persoonlijk?",
            answer: "Nee totaal niet, ik had hem nog nooit eerder gezien.",
            truth: true,  
        }, {
            question: "Waarom deed je zo snel de kist open?",
            answer: "Ik voelde dat er iets niet pluis was.",
            truth: true,  
        }]
    }

    return (
        <div className={style.wrapper}>
            <div className={style.lieDetector}>
                {truth ? <object data="./assets/waarheid.svg" style={{height: "100%"}} aria-label='leugendetector'></object> : <object style={{height: "100%"}} data="./assets/leugen.svg" aria-label='leugendetector'></object>}
            </div>
            <div className={style.questionWrapper}>
                <div className={style.questions}>
                    <p className={style.questionsTitle}>Stel {character} een vraag</p>
                    {questions.map((question, index) => (
                        <Button
                            key={index}
                            action={() => {
                                setAnswer(question.answer);
                                if(question.truth === false && answer !== false) {setTruth(false)}
                            }} 
                            button={"button"} 
                            content={<span className={style.btnText}>{question.question}</span>} 
                            height={86}/>
                    ))} 
                </div>
                <div className={style.answer}>
                    <div className={style.answerContentWrapper}>
                        {answer !== "" ? <p className={style.answerContent}>{answer}</p> : ""}
                    </div>
                   <img className={style.answerImage} src={`./assets/${person}Mini.svg`} alt={character} />
                </div>
            </div>
        </div>
    )
}

export default Interrogation;