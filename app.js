function Navbar(){
    return (
        <div>
           <ul>
               <li><button>Home</button></li>
               <li><button>About</button></li>
               <li><button>Login</button></li>
               <li><button>Sign Up</button></li>
               
           </ul>
        </div>
    )
}
function Container(){
    let arr=[
        {
            img: "https://th.bing.com/th/id/OIP.I4X_ilJ5O8dMg1yrVXovmQHaEo?rs=1&pid=ImgDetMain",
            name: "Alice Johnson",
            age: 25,
            email: "alice.johnson@example.com",
            education: "Bachelor's in Computer Science"
        },
        {
            img: "https://th.bing.com/th/id/OIP.I4X_ilJ5O8dMg1yrVXovmQHaEo?rs=1&pid=ImgDetMain",
            name: "Bob Smith",
            age: 30,
            email: "bob.smith@example.com",
            education: "Master's in Business Administration"
        },
        {
            img: "https://th.bing.com/th/id/OIP.I4X_ilJ5O8dMg1yrVXovmQHaEo?rs=1&pid=ImgDetMain",
            name: "Charlie Brown",
            age: 22,
            email: "charlie.brown@example.com",
            education: "Diploma in Graphic Design"
        }
    ];
    return (
        <div id="main">
            {
                arr.map((ele)=>{
                    return(
                        <div className="card" key={Math.random()}>
                            <img src={ele.img}/>
                            <p><b>Name :</b>{ele.name}</p>
                            <p><b>Age :</b>{ele.age}</p>
                            <p><b>Email :</b>{ele.email}</p>
                            <p><b>Education :</b>{ele.education}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
function App(){
    return (
        <>
            <Navbar/>
            <Container/>
        </>
        
    )
}

let root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)
