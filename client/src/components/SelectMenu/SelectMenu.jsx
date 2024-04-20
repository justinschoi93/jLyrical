import { useState } from 'react';

import './selectmenu.css';

const stacks = [
    { 
        category: "Genres", 
        topics: [
            "2000's R&B", 
            "90's Alternative Rock", 
            "2000's Hip-Hop", 
            "2010's Edm/Electronic"
        ] 
    }, {
        category: 'Artists',
        topics: [
            'Bassnectar',
            "Beyonce",
            "Blink-182",
            "Jay-Z",
            "Kendrick Lamar",
            "Marilyn Manson",
            "Tupac Shakur",
            "Zhu"
        ]
    }
]
const SelectMenu = () => {
    const [category, setCategory] = useState('');
    const [topic, setTopic] = useState('');
    const [stack, setStack] = useState('');

    const categoryHandler = (e) => {
        e.preventDefault();

        setCategory(e.target.textContent); 
    }
    
    const topicHandler = (e) => {
        e.preventDefault();
        setTopic(e.target.textContent); 
    }

    const stackHandler = (e) => {
        e.preventDefault();
        setStack(stack);
    }

    return (
        <section className="select-menu__container">
            <div className="catgeories__content">
                {stacks.map( (stack, index) => {
                    return (
                        <div className="category__card" key={index} onClick={categoryHandler}>{stack.category}</div>
                    )
                })}
            </div>
            <div className="topics__content">
                {stacks.find( stack => stack.category === category).topics.map( (topic, index) => 
                    {
                        return (
                            <div className="topic-card" key={index} onClick={topicHandler}>{topic}</div>
                        )
                    }
                )}
            </div>
        </section>
    )
}

export default SelectMenu;