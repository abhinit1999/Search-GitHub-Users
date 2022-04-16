import React from 'react'

function Showdata ({data}) {
  return (

    <div className="main">
        <div className="imgcls">
        <img src={data.avatar_url} alt='Img'/> 

        </div>
        <div className="name">
        <h3>{data.login}</h3>
        <span>{data.bio}</span>
        </div>
        <div className="fllowers">
        <span>Followers : </span><span className='fdata'> {data.followers}</span>
        </div>
        <div className="repo">
        <span >Public_repos : </span><span className='fdata'> {data.public_repos}</span> 
        </div>

    </div>

  )
}

export default Showdata;