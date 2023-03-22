import style from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculo } from './helpers/imc'
import { useState } from 'react';
import { GridItem } from './components/GridItem';

function App() {
  const [Altura, setAltura] = useState<number>(0);
  const [Peso, setPeso] = useState<number>(0);

  const calculatorInfo = () => {
    if (Altura && Peso) {
      
    } else{
      alert('Digite todos os campos!')
    }
  }
  

  return (
    <div className={style.main}>

        <header>
          <div className={style.containerHeader}>
            <img src={poweredImage}alt='' width={200}/>
          </div>
        </header>

        <div className={style.container}>

          <div className={style.sideLeft}>
            <h1 className={style.title}>
              Calcule o seu IMC.
            </h1>
            <p className={style.desc}>
              IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>

            <div className={style.inputs}>
              <input 
              type="number" 
              placeholder='Digite sua altura. Ex: 1.5 ( em metros )' 
              className={style.inputAlt}
              value={Altura > 0 ? Altura : ''}
              onChange={e => setAltura(parseFloat(e.target.value))} 
              />
              <input 
              type="number" 
              placeholder='Digite seu peso. Ex: 75.3 ( em kg )' 
              className={style.inputPes} 
              value={Peso > 0 ? Peso : ''}
              onChange={e => setPeso(parseFloat(e.target.value))}
              />
            </div>

            <button className={style.Btn} onClick={calculatorInfo}>Calcular</button>
          </div>

          <div className={style.sideRight}>
            <div className={style.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          </div>

        </div>
    </div>
  );
}

export default App;
