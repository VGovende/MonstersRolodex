import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';
import { getData } from './utils/data.utils';
import {useState, useEffect, ChangeEvent} from 'react';

export type Monsters = {
  id: string
  name: string
  email: string
}

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monsters[]>([]);
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
    const fetch = async()=> {
      const users = await getData<Monsters[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetch();
  },[]);
  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => 
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
