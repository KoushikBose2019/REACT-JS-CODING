import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
class App extends React.Component{
      render(){
        const data=[{
             name:"arnok",
             age:28,
             address:"dum dum"
        },{
           name:"john",
           age:24,
           address:"paikpara"
        },{
           name:"harry",
           age:85,
           address:"khanna"

        },{
            name:"potter",
            age:54,
            address:"barasat"
        }]
    const columns=[{
        Header:"Name",       
        accessor:"name"
    },{
        Header:"Age",
        accessor:"age"
    },{
        Header:"Address",
        accessor:"address"
    }]
    
    return(
       <div>
         <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={4}
            pageSizeOptions={[1,2,3,4]}
        />
       </div>

    )

    }

    }
    export default App;
