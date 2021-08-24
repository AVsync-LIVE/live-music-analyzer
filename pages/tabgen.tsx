import styled from 'styled-components'

interface Props {

}

const TabGen = ({ }: Props) => {
  return (<>
    <h1>Tab Generator/Converter Demo</h1>

    <div>
      NOTE: Tab edits will be discarded upon page refresh
    </div>

    <button id="start">Start</button>
    <button id="stop">Stop</button>

    <div>
      <select id='audioSourceSelect'></select>
    </div>

    <div>
      <div id='monitor'> </div>
      <canvas id='canvas' width='300' height='100'></canvas>
    </div>

    <div>
      <div id="detector" >
        <div ><span id="pitch">--</span>Hz</div>
        <div ><span id="note">--</span></div>   
        <div id="detune"><span id="detune_amt">--</span><span id="flat">cents &#9837;</span><span id="sharp">cents &#9839;</span></div>
      </div>
    </div>

    <div>
      <h2>Generated Tabs:</h2>
    </div>

    <div id="generation">
      <section>
        <div id="string1">e||-</div>
        <div id="string2">B||-</div>
        <div id="string3">G||-</div>
        <div id="string4">D||-</div>
        <div id="string5">A||-</div>
        <div id="string6">E||-</div>
      </section>
    </div>

    <div>
      <button id="save2">Save</button>
      <button id='convert'>Convert</button>
      <select name="instrument" id="instrument">
        <option value="uke">Ukulele</option>
        <option value="banjo">Banjo</option>
      </select>
    </div>
    

    <h2 id='info'></h2>

    <div>
      <div id='converter'></div>

      <div id="converter">
        <section>
          <div id="ukeString1"></div>
          <div id="ukeString2"></div>
          <div id="ukeString3"></div>
          <div id="ukeString4"></div>
        </section>
      </div>
    </div>
  </>)
}

export default TabGen

const S_TabGen = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`