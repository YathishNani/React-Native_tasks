  export const location  = ()=>{
    
  }


const places = [
    {
      id: '1',
      name: 'Koh Samui',
      location: 'Thailand',
      image: require('../Assets/location1.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
    },
    {
      id: '2',
      name: 'Perth',
      location: 'Australia',
      image: require('../Assets/location2.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
    },
    {
      id: '3',
      name: 'Santorini',
      location: 'Greek',
      image: require('../Assets/location3.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
    },
    {
      id: '4',
      name: 'Perhentian Islands',
      location: 'Malaysia',
      image: require('../Assets/location4.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
    },
    {
      id: '5',
      name: 'Northern Islands',
      location: 'America',
      image: require('../Assets/location4.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
    }
  ];
  
  export default places;
// import React from "react";

// const places = () => {
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//         console.log(responseJson)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return masterDataSource
// }

// export default places;