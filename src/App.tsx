import style from './App.module.css';
import { levels, calculo, Level } from './helpers/imc'
import { useState } from 'react';
import { GridItem } from './components/GridItem';
import leftArrow from './assets/leftarrow.png'

function App() {
  const [Altura, setAltura] = useState<number>(0);
  const [Peso, setPeso] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const calculatorInfo = () => {
    if (Altura && Peso) {
      setShowItem(calculo(Altura, Peso))
    } else{
      alert('Digite todos os campos!')
    }
  }

  const replaceOptions = () => {
    setShowItem(null);
    setAltura(0);
    setPeso(0);
  }
  

  return (
    <div className={style.main}>

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
              placeholder='Digite sua altura. Ex: 1.5' 
              value={Altura > 0 ? Altura : ''}
              onChange={e => setAltura(parseFloat(e.target.value))} 
              disabled={showItem? true : false}
              />
              <input 
              type="number" 
              placeholder='Digite seu peso. Ex: 75.3'  
              value={Peso > 0 ? Peso : ''}
              onChange={e => setPeso(parseFloat(e.target.value))}
              disabled={showItem? true : false}
              />
            </div>

            <button className={style.Btn} disabled={showItem? true : false} onClick={calculatorInfo}>Calcular</button>
          </div>

          <div className={style.sideRight}>
            {!showItem && 
              <div className={style.grid}>
                {levels.map((item, key) => (
                  <GridItem key={key} item={item}/>
                ))}
              </div>
            }
            {showItem && 
              <div className={style.rightBig}>
                <div className={style.rightArrow} onClick={replaceOptions}>
                  <img src={leftArrow} alt="" width={25}/>
                </div>
                <GridItem item={showItem}/>
              </div>
            }
          </div>

        </div>
    </div>
  );
}

export default App;
