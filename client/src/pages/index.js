import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Upload from "."; // Watch It
import React, { useState , useEffect } from 'react';
import FileUpload from "./Component/FileUpload";
import Display from "./Component/Display";
import Modal from "./Component/Modal";
import Web3 from 'web3';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [web3Api,setWeb3Api] = useState({
    provider:null,
    web3:null
  })
  useEffect(()=>{
    let provider = null;
    const loadProvider = async ()=>{
      // console.log(window.web3);
      // console.log(window.ethereum);
      if(window.ethereum) {
        provider = window.ethereum;
        try {
          await provider.enable();
        } catch (error) {
           console.log(error);
        }
      }else if(window.web3){
        provider = window.web3.currentProvider;
      } else if(!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      }
      setWeb3Api({
        web3:new Web3(provider),
        provider,
      })
    };
    loadProvider();
  },[])
  console.log(web3Api.web3);
  return (
    <>
      <Head>
        <title>Aabhas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Aabhas&nbsp;
            {/* <code className={styles.code}>src/pages/index.js</code> */}
          </p>
        
        </div>

        <div className={styles.center}>
          
        </div>
        
        {!modalOpen && (
          <button className={styles.share} onClick={()=> setModalOpen(true)}>Share</button>
        )}
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
        )}
         
          
       
      </main>
    </>
  )
}
