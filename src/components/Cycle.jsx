import React from 'react';
import styles from "../style";
import { square, arrow, longarrow } from '../assets';
import './SoftwareDevelopmentCycle.css';

const steps = [
    { title: "Plan", number: "1", text: "Discover & define" },
    { title: "Design", number: "2", text: "Create visuals" },
    { title: "Build", number: "3", text: "Develop & construct" },
    { title: "Beta", number: "4", text: "Test & train" },
    { title: "Launch", number: "5", text: "Optimize & go live" },
    { title: "Support", number: "6", text: "Monitor, evaluate & refine" }
];

const Cycle = () => {
    return (
        <div className="font-poppins font-semibold ss:text-[45px] text-[42px] text-white ss:leading-[55px] leading-[50px] mb-10 text-center">
            <h1>Our Software Development Cycle</h1>
            <p className="font-poppins font-normal text-dimWhite text-[17px] leading-[22px]">
                We have a methodical approach for both simple and complex projects.
                By embracing Agile principles and utilizing Scrum and Kanban frameworks, our dedicated team ensures we consistently deliver exceptional apps on time.
            </p>
            <div className="steps">
                <div className="step-row">
                    {steps.slice(0, 5).map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="step">
                                <h2>{step.title}</h2>
                                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}>
                                    <img src={square} alt={step.title} className="step-image" />
                                    <div className="step-number">{step.number}</div>
                                </div>
                                <div className="step-text">
                                    <p>{step.text}</p>
                                </div>
                            </div>
                            {index < 4 && (
                                <div className="arrow">
                                    <img src={arrow} alt="arrow" className="arrow-image" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="step-row support">
                    <div className="arrow-long">
                        <img src={longarrow} alt="long arrow" className="long-arrow-image" />
                    </div>
                    <div className="step">
                        <h2>{steps[5].title}</h2>
                        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
                            <img src={square} alt={steps[5].title} className="step-image" />
                            <div className="step-number">{steps[5].number}</div>
                        </div>
                        <div className="step-text">
                            <p>{steps[5].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cycle;