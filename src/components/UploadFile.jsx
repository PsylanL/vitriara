import { useState } from 'react'
import {uploadFile} from '../firebase/config'
function App(){
    const [fileUrl, setFileUrl] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const result = await uploadFile(fileUrl);
            //console.log(result) nos muestra el link de la imagen
        } catch (error) {
            alert("La carga de archivos ha fallado. Intente nuevamente");
        }
        
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="file" 
            name="" 
            id="" 
            onChange={e => setFileUrl(e.target.files[0])} />
            <button>Upload</button>
        </form>
        
    )
}

export default App