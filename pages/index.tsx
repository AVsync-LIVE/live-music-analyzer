import styled from 'styled-components'

import Link from '../components/Next/Link'

export default function Home() {

  return (<>
    <h1>Welcome!</h1>
    <p>
      This project allows users to generate tablature for guitar in standard tuning in real time
      Users can also convert guitar chord diagrams to ukulele and banjo
      The generated and converted tablature can be saved as a .txt file
    </p>

    <p>
      This project was conceived by three computer science students and musicians
      at Cleveland State University as a class project in 2021
      The webpage and application are still a work in progress
    </p>

    <p>
      This project is released under the GNU Public License
      Its source code will be made publicly available once the project is demonstrated at University
    </p>

    <p>
      Designed by Ennio Gallucci, Nick Bolyard and Jeanette Sirna
      Thanks to Dr. Sanchita Mal-Sarkar and Tom Leamon
    </p>

    <Link href='/tabgen'>
      <button>Launch</button> 
    </Link>
  </>)
}
