const Contact = ({name, phoneNumber}) => {
    return(
        <div>
            <div>
                <img src="/man.svg" alt="" />
                <p>{name}</p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    )
}


export default Contact;