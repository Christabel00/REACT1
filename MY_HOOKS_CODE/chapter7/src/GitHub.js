import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios 
import Card from 'react-bootstrap/Card';
import ReactLoading from 'react-loading'; 

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get("https://api.github.com/search/users?q=greg")
            .then(res => {
                // console.log(res.data.items);
                setData(res.data.items)
                setIsLoading(false);
            });
    }, [])
    const listUsers = data.map((user) =>              
        <Card key={user.id}> 
            <a href={user.html_url}>     
                <img 
                    width={64} 
                    height={64} 
                    className="mr-3" 
                    src={user.avatar_url} 
                    alt="Generic placeholder" 
                /> 
            </a> 
            <Card.Body> 
                <h5>Login: {user.login}</h5> 
                <p>Id: { user.id }</p> 
            </Card.Body> 
        </Card>   
    ); 
    return (
        <div>
             <h3>GitHub Users Results</h3> 
            {isLoading &&
              < ReactLoading type="spinningBubbles" color="#444" /> 
            }
             {listUsers} 
        </div>
    );
}
export default GitHub; 