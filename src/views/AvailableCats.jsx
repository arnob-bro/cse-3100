import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the availableCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages); // Initially show all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();

    const filtered = cats.filter((cat) => {
      const matchesName = name === '' || cat.name.toLowerCase().includes(name.toLowerCase());
      const matchesBreed = breed === '' || cat.breed === breed;
      return matchesName && matchesBreed;
    });

    setFilteredCats(filtered);
  };

  return (
    <section className="text-center mt-4">
      <div className="mb-4 navbar">
        <h2 className="available-cats-header">Available Cats</h2>
        <form onSubmit={handleFilter} className="mb-0 filter-form">
          <div>
            <select id="breedFilter" style={{ color: 'black' }} value={breed} onChange={(e) => setBreed(e.target.value)}>
              <option value="">Select Breed</option>
              <option value="Sphynx">Sphynx</option>
              <option value="Peterbald">Peterbald</option>
              <option value="Birman">Birman</option>
              <option value="Abyssinian">Abyssinian</option>
              <option value="Persian">Persian</option>
              <option value="Bengal">Bengal</option>
              <option value="Siamese">Siamese</option>
            </select>
          </div>
          <div>
            <input id="nameFilter" style={{ color: 'black' }} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Filter by name" />
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <div className="mb-4 custom-breakline" style={{ borderBottom: '2px solid black' }}></div>
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-1">Age: {cat.age}</p>
                  <p className="mb-0 breed-type">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats match your filters.</p>
        )}
      </div>
    </section>
  );
}
