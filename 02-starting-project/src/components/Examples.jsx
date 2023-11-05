import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples() {
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    const [selectedTopic, setSelectedTopic] = useState();


    console.log('APP COMPONENT EXECUTING');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        //The remaining props present over here (id) will not be passed automatically to the component until we use object destructuring. hence we use the concept of forwarded props.

        //Here jsx can also be forwarded as a prop. Moreover, we are also passing a wrapper element as a prop

        <Section title="Examples" id="examples">
            {/* Here we are passing menu as the string and if we want to pass it as cutsom component, we can do something like this. 
            ButtonsContainer={Section} */}
            <Tabs ButtonsContainer='menu' buttons={<><TabButton
                isSelected={selectedTopic === 'components'}
                onClick={() => handleSelect('components')}
            >
                Components
            </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleSelect('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}
                // onClick will be forwarded as a prop to the TabButton Component
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleSelect('state')}
                >
                    State
                </TabButton></>}>{tabContent}</Tabs>

        </Section>
    )
}