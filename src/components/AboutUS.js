import React from "react";
import CardInfo from "./Card/card";
import Title from "./element/title";

export default function index() {
    return (
      <div className='home'>
          <Title>
            Tugas Akhir MDP 2021
          </Title>
            <div id="column2">
              <CardInfo tit='Anggi' li1='Nama' li2='NIM' li3='Asal' pop="Anggilia Nur Safitri" reg="21120119120016" cap='Demak' but='https://github.com/Anggi009' butname='Github' backgnd1='#ff6666' backhov1='#ff1f1f' src="https://i.ibb.co/xFH0CDR/Pas-Photo-Anggi-Copy-2.jpg" alt="Pas-Photo-Anggi-Copy-2" border="0"/>
        </div> 
      </div>
    );
  }