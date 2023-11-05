export default function Tabs({ children, buttons, ButtonsContainer }) {
    //or if we use buttonsContainer as the prop value then we need to assign it to component variable like this 
    //oonst ButtonsContainer=buttonsContainer, in order to tell react to treat it as component. 
    return (
        <>
        {/* when the word starts with upperCase, then react will recognise it as a component */}
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}

//This is another wrapper component altogether 
