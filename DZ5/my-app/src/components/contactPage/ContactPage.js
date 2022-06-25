import React,{useState} from 'react';

const ContactPage = () => {
    const [user, setuser] = useState({
        name:"",
        lastname:"",
        secondname:""
    })
    const changeInput = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        alert("Данные успешно сохранены")
        console.log(user)

    }
    return (

        <form onSubmit={submit}>
            <input type="text" placeholder="Имя" value={user.name} onChange={changeInput}/>
            <input type="text" placeholder="Фамилия" value={user.lastname} onChange={changeInput}/>
            <input type="text" placeholder="Отчество" value={user.secondname} onChange={changeInput}/>
            <button type="submit">Submit</button>
        </form>


    )
};

export default ContactPage;