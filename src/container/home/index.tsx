import React, { FC } from 'react';

interface homeProp {}
const Home: FC<homeProp> = (props: homeProp) => {

    const demoFn = () => {
        console.log(this)
    }

    return <>
        <div onClick={demoFn}></div>
    </>
}

export default Home;