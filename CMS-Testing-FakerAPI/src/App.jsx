import { useEffect, useState } from 'react'
import './App.css'
import { PersonComponent } from './components/Person'

function App() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    async function fetchAPIData() {
      try {
        const res = await fetch(
          "https://fakerapi.it/api/v2/persons?_quantity=20",
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const payload = await res.json();
        setJsonData(Array.isArray(payload?.data) ? payload.data : payload);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    }

    fetchAPIData();
  }, []);


  return (
    <>
      <div className="flex flex-col items-center w-full">
        <span>Faker API</span>
        <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(15rem,max-content))] gap-4 w-full max-w-[80rem]">
          {jsonData.map((person) => (
            <PersonComponent
              key={person.id}
              username={person.firstname + " " + person.lastname}
              imageUrl={"https://picsum.photos/200/300?" + Math.random()}
              description={person.phone}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
