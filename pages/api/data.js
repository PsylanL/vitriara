export default async function handler(req, res) {
    // Lógica para obtener datos, puede ser una llamada a una base de datos, etc.
    const data = await fetchData(); 
    res.status(200).json(data);
  }