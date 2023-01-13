import React, { useState } from 'react'


const coutry: string[] = ["Hyderabad", "Mumbai", "Chennai", "Delhi", "Bangalore",
    "Ahmedabad", "Kolkata", "Warangal"];

function SerachComponent() {
    const [stateName, setStateName] = useState<string[]>(coutry);
    const handleSerach = (event: any) => {
        let serachItem = event.target.value;
        if (serachItem) {
            let filteredData = coutry.filter((item => {
                return item.toLocaleLowerCase().indexOf(serachItem.toLocaleLowerCase()) > -1;
            }))
            setStateName(filteredData);
        }
    }
    return (
        <>
            <p>------------------------------------------------------</p>
            <div className='search-item'>
                <input type="search" placeholder="Type to search for something..." onKeyUp={(event) => handleSerach(event)} />
                <br />

                {stateName.map((item, index) =>
                    <ul key={index}>
                        {item}
                    </ul>
                )}
                {stateName.length === 0 &&
                    <p>not data found</p>}
            </div>
        </>
    )
}

export default SerachComponent