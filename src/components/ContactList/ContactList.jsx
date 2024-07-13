import Contact from "../Contact/Contact";

const ContactList = ( {contactData} ) => {
    return(
        <ul>
            {contactData.map((element) =>{
                return  <li key={element.id}><Contact name={element.name} phoneNumber={element.number}/></li>
                
            })}
        </ul>
    )
}
export default ContactList;