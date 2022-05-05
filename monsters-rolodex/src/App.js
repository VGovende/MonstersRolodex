import { Component } from 'react';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';

import {useState, useEffect} from 'react';

const App = () => {
  console.log('render');

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [searchMonsters, setSearchMonsters] = useState(monsters);

  useEffect(() =>{
    const NewSearchMonsters = monsters.filter((monster) => 
    {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setSearchMonsters(NewSearchMonsters);

    // console.log('is firing');
  },[monsters,searchField])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
    .catch((err) => { console.log(err)});
  },[])
  
  const onSearchChange = (event) => 
    {
      console.log(event.target.value);
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      
      <SearchBox 
      SearchChange= {onSearchChange} 
      placeholder="Search Monsters" 
      className="search-box"/>

      <CardList monsters = {searchMonsters}/>
    </div>
    )
  }


// class App extends Component{

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(
//       () => {
//         return {monsters: users}
//       },
//       () => {
//         console.log(this.state);
//       }
//     ))
//     .catch((err) => { console.log(err)});
//   }

//   onSearchChange = (event) => 
//   {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => 
//     {
//       return {searchField}
//     })
//   }

//   render() {

//     const{ monsters, searchField} = this.state;
//     const { onSearchChange } = this;



//     return (
//       <div className="App">
//         <SearchBox SearchChange= {onSearchChange} placeholder="Search Monsters" className="search-box"/>
        
//         <CardList monsters = {searchMonsters}/>
//       </div>
//     );
//   };
// }

export default App;
