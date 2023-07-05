import React, { useState, useEffect } from "react";
import axios from 'axios';

export const HomeLight = (props) => {
  const [classeCSS, setClasseCSS] = useState('dark-off');
  const [data, setData] = useState('');

  const alterarClasseCSS = () => {
    if (classeCSS === 'dark-on') {
      setClasseCSS('dark-off');
    } else {
      setClasseCSS('dark-on');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can also use 'auto' or 'instant'
    });
  };

  useEffect(() => {
    axios.get('https://dash.brezobomba.com/data/floripa')
      .then(response => {
        console.log('response api', response.data);
        setData(response.data)
        // Update component state with the received data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div id="home" className={classeCSS === 'dark-off' ? 'background-light' : 'background-dark'}>
      <header class="text-white">
        <div class="container">
          <h1 class="pt-4 d-md-none text-center">BREZOBOMBA</h1>
          <h1 class="d-none d-md-block pl-5 pt-4 text-left">BREZOBOMBA</h1>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12 row-sol-nuvens">
            <div className={'col-md-6 sol ' + (classeCSS === 'dark-off' ? 'show' : 'hide')} >
              <img src="img/sol.png" className="img-sol" alt="" />
              <div className={(classeCSS === 'dark-off' ? 'text-overlay-temperatura' : 'hide')}>
                <p className={'info-text'}>{data.temp}</p>
              </div>
            </div>
            <div className={'col-md-6 sol ' + (classeCSS === 'dark-off' ? 'hide' : 'show') }>
              <img src="img/nuvem-principal-dark.png" className={'img-nuvem-principal-dark'} alt="" />
            </div>
            <div className="col-md-6 nuvens">
              <div className="col-md-6 d-flex nuvem-01">
                <img src="img/nuvem-01.png" className={'img-nuvem ' + (classeCSS === 'dark-off' ? 'show' : 'hide')} alt="" />
                <div className={(classeCSS === 'dark-off' ? 'text-overlay-umidade' : 'hide')}>
                  <p className={'info-text'}>{data.umid}</p>
                </div>
                <img src="img/nuvem-02-trovao-dark.png" className={'d-none d-md-block img-nuvem ' + (classeCSS === 'dark-off' ? 'hide' : 'show')} alt="" />
              </div>
              <div className="d-none d-md-flex col-md-6 flex-column align-items-center">
                <img src="img/nuvem-03.png" className={'img-nuvem ' + (classeCSS === 'dark-off' ? 'show' : 'hide')} alt="" />
                <div className={(classeCSS === 'dark-off' ? 'text-overlay-umidade-2' : 'hide')}>
                  <p className={'info-text'}>{data.umid}</p>
                </div>
                <img src="img/nuvem-02.png" className={'img-nuvem-3 ' + (classeCSS === 'dark-off' ? 'show' : 'hide')} alt="" />
                <img src="img/nuvem-trovao-dark.png" style={{marginTop:'100px'}} className={'img-nuvem-3 ' + (classeCSS === 'dark-off' ? 'hide' : 'show')} alt="" />
              </div>
              <div className={'d-flex d-md-none col-md-6 justify-content-center align-items-start ' + (classeCSS === 'dark-off' ? 'show' : 'hide')}>              
                <img src="img/nuvem-03.png" className={'img-nuvem ' + (classeCSS === 'dark-off' ? 'show' : 'hide')} alt="" />
                <div style={{position:'relative'}}>
                  <img src="img/nuvem-02.png" className={'img-nuvem-3 ' + (classeCSS === 'dark-off' ? 'show' : 'hide')} alt="" />
                  <div className={(classeCSS === 'dark-off' ? 'text-overlay-umidade-mobile' : 'hide')}>
                    <p className={'info-text'}>{data.umid}</p>
                  </div>
                </div>
                {/* <img src="img/nuvem-trovao-dark.png" className={'img-nuvem-3-dark ' + (classeCSS === 'dark-off' ? 'hide' : 'show')} alt="" /> */}
              </div>
              <div className={'d-flex d-md-none justify-content-center align-items-start ' + (classeCSS === 'dark-off' ? 'hide' : 'show')}>
                <img src="img/nuvem-02-trovao-dark.png" className={'img-nuvem nuvens-dark-mobile ' + (classeCSS === 'dark-off' ? 'hide' : 'show')} alt="" />
                <img src="img/nuvem-trovao-dark.png" className={'img-nuvem-3-dark nuvens-dark-mobile ' + (classeCSS === 'dark-off' ? 'hide' : 'show')} alt="" />
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-6 nuvens">
              <div className="col-sm-12 col-md-4">
                <img src="img/nuvem-01.png" className="img-nuvem" alt="" />
              </div>  
              <div className="col-sm-12 col-md-4">
                <img src="img/nuvem-02.png" className="img-nuvem" alt="" />
              </div>  
              <div className="col-sm-12 col-md-4">
                <img src="img/nuvem-03.png" className="img-nuvem" alt="" />
              </div>  
              <img src="img/nuvem-02.png" className="img-nuvem" alt="" />
              <img src="img/nuvem-03.png" className="img-nuvem" alt="" />
            </div> */}
          </div>  
        </div>
        <div className="row" >
          <div className="col-md-12 foguete" style={{bottom: classeCSS === 'dark-off' ? '50px' : '1px'}}>
            <div style={{position:'relative'}}>
              <img src="img/balao.png" className={'img-balao ' + (classeCSS === 'dark-off' ? 'show' : 'hide')}  alt="" />
              <div className={(classeCSS === 'dark-off' ? 'text-overlay-co' : 'hide')}>
                <p className={'info-text'}>{data.co2}</p>
              </div>
              <div className={(classeCSS === 'dark-off' ? 'text-overlay-co-2' : 'hide')}>
                <p className={'info-text'}>{data.co2}</p>
              </div>
            </div>
            <img src="img/img-two-ballons-dark.png" className={'img-balao ' + (classeCSS === 'dark-off' ? 'hide' : 'show')} alt="" />
            <img src="img/foguete.png" onClick={alterarClasseCSS} className="img-foguete" alt="" />
            <img src="img/balao-03-dark.png" className={'img-balao ' + (classeCSS === 'dark-off' ? 'hide' : 'show dark')} alt="" />
          </div>  
        </div>
      </div>
      <div style={{backgroundColor: '#54D1A4', height:'200px', marginTop: classeCSS === 'dark-off' ? '-200px' : '-150px'}}>
      </div>
    </div>
  );
};
