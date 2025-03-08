const heading = React.createElement("hi",{
    id:"heading",
    xyz:"abc"
},"HI There from react of js")
// obj is the place where you would put id and attributes to the tag
console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

/*
<div id="parent">
<div id="child">
<h1>I am H1 Tag<h1/>
<h1>Hi i am h2</h2>
</div>
</div>
*/


const parent = React.createElement("div",
    { id:"parent"},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{},"I am An h1 Tag"),
            React.createElement('h2',{},"I am An h12 Tag")


        ]
    )
)


root.render(parent)