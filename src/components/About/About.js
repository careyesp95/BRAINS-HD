import './About.css';


function About(){
    const about =[
        {
            title:'Somos BRAINS',
            descripction:`BRAINS HD es una de las compañías de telecomunicaciones con mayor crecimiento en la región, centrando sus esfuerzos en la conectividad y desarrollo de soluciónes digitales al alcance de todos.`,
        }
    ]
    return (
        <main className='container-about' id='brains'>
            <div className='section-about'>
                <img src='./aboutUs.png'/>
                <p>
                    {
                    about && about.map((e,i) => {
                        return (
                            <div key={i}>
                                <h6><strong>{e.title}</strong></h6>
                                <p>{e.descripction}</p>
                            </div>
                        )
                    }) 
                    }
                </p>
            </div>
        </main>
    )
}

export default About;