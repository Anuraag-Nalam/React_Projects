
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts(props) {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {props.array.map((conceptItem) => (
                    <CoreConcept key={conceptItem.title} {...conceptItem} />
                ))}
            </ul>
        </section>
    )
}

