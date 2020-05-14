const getData = () => {
    return fetch('http://localhost:5000/')
    .then(response => response.json());
}

export default getData;