import React,{ Component, useState , useEffect }  from 'react'
// import './App.css'
import '../Page/Recipe/Recipe.css'
import Recipe from './Recipe/Recipe'



export default class FoodFetch extends Component {
  constructor() {
    super() 
      // const [recipes, setRecipes] = useState([])
      // const [search, setSearch] = useState ("")           //updateSearch
      // const [query, setQuery] = useState("chicken")       // it will get his data from search
      this.state = {
        recipes: [],
        search: "",
        query: "chicken"
      }
      
    }
  

       updateSearch = (e) => {
        this.setState  ({search:e.target.value})
       
      }
    
      //onSubmit
       getSearch = (e) => {
        e.preventDefault();
        this.setState({search: ""});
      }


        loadData =  async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=4dde2438&app_key=d3e78673e07087e565711dad3eb62473`);
            const data = await response.json();
          this.setState({recipes: data.hits})  
      }
 
      
    

  render() {
    this.loadData()
    return (
      <div className="App">

        <form onSubmit={this.getSearch} className="search-form">
          <input type="text" value={this.state.search} onChange={this.updateSearch} className="search-bar" />
          <button  className="search-but" type="submit">Search </button>
        </form>

        <div>
          {this.state.recipes.map((recipe)=>( 
              < Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                img={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
              ))}
        </div>

    </div>
    )
  } //render
}; 








  











  // export default class FoodFetch extends Component {
  //   render() {
  //     return (
  //       <div>
          
  //       </div>
  //     )
  //   }
  // }
  
  
  
  
  
  // const FoodFetch = () => {
  
  //   const APP_ID = "4dde2438";
  //   const APP_KEY = "d3e78673e07087e565711dad3eb62473";
  
  
  //   const [recipes, setRecipes] = useState([])
  //   const [search, setSearch] = useState ("")           //updateSearch
  //   const [query, setQuery] = useState("chicken")       // it will get his data from search
  
  //   useEffect( () => {
       
  //     (async () => {
  //       const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //       const data = await response.json();
  //       setRecipes(data.hits);
  //     })()
  
  //   }, [query]);
  
  
  //   const updateSearch = e => {
  //    setSearch(e.target.value)
  //   }
  
  //                             //onSubmit
  //   const getSearch = e => {
  //     e.preventDefault();
  //     setQuery(search);
  //     setSearch("");
  //   }
  
  
  //   return (
  //     <div className="App">
  
  //       <form onSubmit={getSearch} className="search-form">
  //         <input type="text" value={search} onChange={updateSearch} className="search-bar" />
  //         <button  className="search-but" type="submit">Search </button>
  //       </form>
  
  //         <div className="recipes">
  //         {recipes.map((recipe)=>( 
  //             < Recipe
  //               key={recipe.recipe.label}
  //               title={recipe.recipe.label}
  //               calories={recipe.recipe.calories}
  //               img={recipe.recipe.image}
  //               ingredients={recipe.recipe.ingredients}
  //             />
  //             ))}
  //         </div>
  
  //     </div>
  //   );

















    
//     const [data, setData]= useState (null)
//     //API fetch data
//     useEffect( () => {
//         async function dowork() {
//             const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//             const data = await response.json();
//            setData(data);
//          }
//          dowork()
//     },[]);
    
    
//   if(data === null) {
//      return <div className="loadingC">data loading ... </div>
//   } else {
//     return (
//         <>
//            <ul>
//                {data.map(item => {
//                    return <li key={data.id}> <img src={item.url} alt= "" /> </li>
//                })}
//            </ul>
//         </>
//     )
//   } 
// }

// export default FoodFetch;

