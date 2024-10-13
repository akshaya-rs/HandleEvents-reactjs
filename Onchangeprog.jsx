import React, {useState} from 'react';

function Onchangeprog(){
    
    const [name, setName]=useState("");
    const [age, SetAge]=useState(0);
    const [address, setAddress]=useState("");
    const [gender, setGender]=useState("");
    const [resume, setResume]= useState(null);
    const [fileName, setFileName]=useState('');
    const [email,setEmail]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleAgeChange(event){
        SetAge(event.target.value);
    }

    function handleGenderChange(event){
        setGender(event.target.value);
    }

    function handleAddressChange(event){
        setAddress(event.target.value);
    };

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleFileChange(event){
        const file= event.target.files[0];
        if(file){
            setResume(file);
            setFileName(file.name);
        }
    }
    
    function handleSubmit(event){
        event.preventDefault();
            console.log('resume uploaded:', resume);
            setResume(null);
            setFileName('');
        
    }
    
    return(
        <div className="form-container">
            <h2>Application Form</h2><br/>
            <input value={name} onChange={handleNameChange}></input>
            <p>name:{name}</p>

            <input value={age} onChange={handleAgeChange} type="number"></input>
            <p>Age:{age}</p>

            <textarea value={address} onChange={handleAddressChange} placeholder="Enter your address"></textarea>
            <p>Address:{address}</p>

            <input type="mail" onChange={handleEmailChange}></input>
            <p>Email:{email}</p>

            <select value={gender} onChange={handleGenderChange}>
                <option value="" name="Gender">select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select> <p>Gender:{gender}</p> <br/>

            <form onSubmit={handleSubmit}>
                <div >
                    <label>Upload Resume:   
                        <input type="file" accept=".pdf,.docx,.doc" onChange={handleFileChange} required/>
                    </label>
                </div>
                {fileName && <p>Selected file: {fileName}</p>}<br/>
                <button type="submit">Submit</button>
            </form>
            

        </div>
    );
};

export default Onchangeprog;