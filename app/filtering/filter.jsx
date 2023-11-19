'use client'
import React, {useState} from 'react';
import "./Filter.css";

import Dropdown from '../components/dropdown';


export default function Filter(props) {
    //console.log(props.speciesList);
    const [selectedOptionNames, setSelectedOptionNames] = useState({});

    if (!props.speciesList) {
        return (
            <main className="main-filter">
                <h3 style={{paddingBottom: '15px'}}>Current plant = No name yet</h3>
            </main>
        );
    }


    const careGuides = [
        'Care Guide',
    ];

    const dataNames = [
        'id',
        'common_name',
        'scientific_name',
        'other_name',
        'family'
    ];

    const dataSizes = [
        'origin',
        'type',
        'dimension',
        'dimensions',
        'seeds'
    ];

    const dataMaintenance = [
        'propagation',
        'hardiness',
        'hardiness_location',
        'soil',
        'pruning_month',
        'pruning_count',
        'seeds',
        'maintenance',
        'growth_rate',
        'drought_tolerant',
        'salt_tolerant',
        'invasive',
        'tropical',
        'harvest_season'
    ]

    const dataEdible = [
        'fruits',
        'edible_fruit',
        'edible_fruit_taste_profile',
        'fruit_nutritional_value',
        'fruit_color',
    ]

    const dataFlowerandLeafInfo = [
        'flowers',
        'flowering_season',
        'flower_color',
        'cones',
        'thorny',
        'leaf',
        'leaf_color',
        'edible_leaf',
        'cuisine'
    ]

    const dataPoisonous = [
        'medicinal',
        'poisonous_to_humans',
        'poisonous_to_pets',
        'thorny',
        'pest_susceptibility'
    ]
    
    
    const handleOptionChange = (id, option, isChecked) => {
        setSelectedOptionNames(prevOptionNames => {
            if (isChecked) {

                return {
                    ...prevOptionNames, 
                    [id]: option,
                };

            } else {
                const updatedOptions = { ...prevOptionNames };
                delete updatedOptions[id];
                return updatedOptions;
            }
        })
    }

    console.log(selectedOptionNames);

    const optionValues = Object.values(selectedOptionNames);

    /*
    const optionsArray = optionValues.map(valueOption => (
        
        <div key={valueOption}>

          <p className="p-border"><strong>{valueOption}:</strong> {props.speciesList.valueOption}</p>
        </div>
      ));

    */


    
    // for (value in values) {
    //     if (key === selectedOptionNames[id]) {
    //         // then map the key to the value?
    //     }
    // }
    

    
    
    return (
        <main className="main-filter">
            <h3 style={{paddingBottom: '15px'}}>Current plant = {props.speciesList.common_name || "No name yet"}</h3>
            <div className="filterPart">
                <div className="images">
                    
                    <h2 className="right-align">Images here</h2>

                    <div className="slideshow-container">

                        <div className="mySlides fade">
                            <div className="numbertext">1 / 3</div>
                            <img src="app/filtering/rose.jpg" style={{ width: '100%' }} />
                            <div className="text">Caption Text</div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext">2 / 3</div>
                            <img src="filtering/rose.jpg" style={{ width: '100%' }} />
                            <div className="text">Caption Text</div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext">3 / 3</div>
                            <img src="filtering/rose.jpg" style={{ width: '100%' }} />
                            <div className="text">Caption Text</div>
                        </div>

                        <a class="prev" onclick="plusSlides(-1)">❮</a>
                        <a class="next" onclick="plusSlides(1)">❯</a>

                        {/* <div style="text-align:center">
                        <span class="dot" onclick="currentSlide(1)"></span> 
                        <span class="dot" onclick="currentSlide(2)"></span> 
                        <span class="dot" onclick="currentSlide(3)"></span> 
                        </div> */}

                    </div>
            
                </div>

                
                    <div className="filterFullArea">
                        <div className="filterBlock">
                            <h2 className="right-align">Filters:</h2>
                            <div className="dropdowns">

                            <div class = "navigationfilterbox"> 

                         
                            <details>
                                <summary>
                                <span class="icon">▶</span>
                                Names
                                </summary>
                                <p>option1</p>
                            </details>

                            <details>
                                <summary>
                                <span class="icon">▶</span>
                                Sizes
                                </summary>
                                <p>option2</p>
                            </details>

                            <details>
                                <summary>
                                <span class="icon">▶</span>
                                Edible
                                </summary>
                                <p>option3</p>
                            </details>

                            <details>
                                <summary>
                                <span class="icon">▶</span>
                                Maintenance
                                </summary>
                                <p>option4</p>
                            </details>

                            <details>
                                <summary>
                                <span class="icon">▶</span>
                                Care Reqs
                                </summary>
                                <p>option5</p>
                            </details>

                            <details>
                                <summary>
                                <span class="icon">▶</span>
                                Poisonous
                                </summary>

                                {/* check mark tests */}
                                <label className="container">One
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="container">Two
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                            </details>


                        </div>


                        </div>
                    </div>
                </div>
            </div>
            
                <div className="information">
                    <div class="scroll-object1">
                        {optionValues.length > 0 ? (
                        optionValues.map((valueOption, index) => (
                            <div key={index}>
                            {valueOption === "Care Guide" ? (
                                <p>
                                {props.speciesList["common_name"] && (
                                    <span>The {props.speciesList["common_name"]} requires </span>
                                )}
                                {props.speciesList["watering"] && (
                                    <span>{props.speciesList["watering"].charAt(0).toLowerCase() + props.speciesList["watering"].slice(1)} watering. </span>
                                )}
                                {props.speciesList["sunlight"] && (
                                    <span>The amount of sun the plant needs is {props.speciesList["sunlight"]}. </span>
                                )}
                                {props.speciesList["pruning_month"] && (
                                    <span>The best month to prune the plant is {props.speciesList["pruning_month"]} and </span>
                                )}
                                {props.speciesList["maintenance"] && (
                                    <span>the overall maintenance to care for this plant is {props.speciesList["maintenance"]}. </span>
                                )}
                                {props.speciesList["drought_tolerant"] !== null && (
                                    <span>the plant {props.speciesList["drought_tolerant"] ? "is drought tolerant" : "is not drought tolerant"}. </span>
                                )}
                                {props.speciesList["salt_tolerant"] !== null && (
                                    <span>Additionally, the plant {props.speciesList["drought_tolerant"] ? "is salt tolerant" : "is not salt tolerant"}. </span>
                                )}
                                {props.speciesList["fruits"] !== null && (
                                    <span>Furthermore, the plant {props.speciesList["fruits"] ? "grows fruits" : "does not grow fruits"}. </span>
                                )}
                                {props.speciesList["indoor"] !== null && (
                                    <span>The plant {props.speciesList["indoor"] ? "is an indoor plant" : "is not an indoor plant"}. </span>
                                )}
                                {props.speciesList["care_level"] !== null && (
                                    <span>The overall care level of the plant is said to be {props.speciesList["care_level"].charAt(0).toLowerCase() + props.speciesList["care_level"].slice(1)}. </span>
                                )}
                                </p>
                            ) : (
                                props.speciesList[valueOption] !== undefined && props.speciesList[valueOption] !== null ? (
                                typeof props.speciesList[valueOption] === "object"
                                    ? Object.values(props.speciesList[valueOption]).join(", ")
                                    : props.speciesList[valueOption]
                                ) : (
                                "No data yet"
                                )
                            )}
                            </div>
                        ))
                        ) : (
                        <strong>Please use the filters to select the data you want.</strong>
                        )}
                    </div>
                    </div>



        </main>
        
    );
   
}

       /*<<Dropdown data={dataNames} name="Names" onOptionChange={handleOptionChange} id="option1"/>
                                <Dropdown data={dataSizes} name="Sizes" onOptionChange={handleOptionChange} id="option2"/>
                                <Dropdown data={dataEdible} name="Edible" onOptionChange={handleOptionChange} id="option3"/>
                                <Dropdown data={dataMaintenance} name="Maintenance" onOptionChange={handleOptionChange} id="option4"/>
                                <Dropdown data={dataCareReqs} name="Care Reqs" onOptionChange={handleOptionChange} id="option5"/>
    // <Dropdown data={dataPoisonous} name="Poisonous" onOptionChange={handleOptionChange} id="option6"/> */
    

