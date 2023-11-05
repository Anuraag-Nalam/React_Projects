//This syntax groups all the remaining props
export default function Section({title,children, ...props}){
return(
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
)
}