import React, { useState } from 'react'
import './Formulaire.css'

const Formulaire = () => {

    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target["nom"].value)
    }

    const[nom, setNom] = useState("")
    const[prenom, setPrenom] = useState("")
    const[email, setEmail] = useState("")
    const[type, setType] = useState("")
    const[text, setText] = useState("")

  return (
    <div className='container'>
    <h1>Les Formulaires en react</h1>
    <div className='card'>
    <form onSubmit={handleSubmit}>
        <div className='form-control'>
            <div className='mb-3'>
                <label htmlFor='nom'>Nom: </label>
                <input type="text" name='nom' id='nom' className='form-control' onChange={(e) => setNom(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='prenom'>Prénom: </label>
                <input type="text" name='prenom' id='prenom' className='form-control' onChange={(e) => setPrenom(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name='email' id='email' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <select name='demande' id="demande" className='form-select' defaultValue="0" onChange={(e) => setType(e.target.value)}>
                <option value="0" selected disabled>Choisissez le type de demande</option>
                <option value='1'>Renseignement à propos d'une formation</option>
                <option value='2'>Demande de rendez-vous</option>
                <option value='3'>Autres demandes</option>
            </select>
            <div className='mb-3'>
                <label htmlFor='textarea'>Prénom: </label>
                <textarea rows='10' name='formtextarea' id='formtextarea' className='form-control' onChange={(e) => setText(e.target.value)}/>
            </div>
            <button className='btn btn-secondary' type='submit'>Envoyer</button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default Formulaire