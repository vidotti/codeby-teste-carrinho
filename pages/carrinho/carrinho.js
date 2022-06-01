import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/carrinho-sem-frete-gratis';
import "@fontsource/poppins";
import React, { useEffect, useState } from "react";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}




export default function FirstPost( { allPostsData } ) {
  
  let [carrinho, setCarrinho] = React.useState( allPostsData.items  );
  
  function deletarProduto(id) {

    console.log('>>>', carrinho);
    // alert('increment like count');
    // const index = carrinho.indexOf(id);
  
    // carrinho.splice(index, 1);
    // setCarrinho(carrinho);
  }

  // const valorTotal = carrinho.value;

  return (
    <Layout>
      <Head>
        <title>Carrinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="box-container">
        <h1 className="titulo-carrinho">Meu carrinho</h1>

        {/* thumb produto dinamico */}
        <ul className="box-produtos-carrinho">
          {allPostsData.items.map(({ id, name, price, sellingPrice, imageUrl }) => (
            <li key={id} className="produto-carrinho">
              <img src={imageUrl} className="imagem-carrinho justify-content-between" />
              <div className="texto-produto justify-content-between">
                  <p className="nome-produto">{name}</p>
                  <p className="valor-produto">R$ {price}</p>
                  <p className="valor-produto-promo">R$ {sellingPrice}</p>
              </div>
              <button onClick={deletarProduto(id)} className="btn btn-excluir">
              </button>

            </li>
          ))}
        </ul>

        

        <div className="valor-total">
           <div className="flex-grid">
              <div className="valor-total-texto justify-content-between">Total</div>
              <div className="valor-total-numero justify-content-between">R$ {allPostsData.value}</div>
           </div>
        </div>

        

        <button className="btn btn-finalizar">Finalizar compra</button>


      </div>

      <h2 className="btn-voltar">
        <Link href="/">
        <a>← Carrinho com frete grátis</a>
        </Link>
      </h2>


      <style jsx>{`
      
      .titulo-carrinho {
          font-size: 25px;
          border-bottom: 1px solid #e3e3e3;
          padding: 20px 2rem;
          text-align: center;
          margin: 0;
      }

      .texto-produto {
        margin: auto 0;
        flex-grow: 1;
      }

      .nome-produto {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 3px 0;
      }

      .valor-produto {
        font-size: 12px;
        font-weight: bold;
        color: #afafaf;
        margin: 0 0 3px 0;
      }

      .valor-produto-promo {
        font-size: 15px;
        font-weight: bold;
        margin: 0 0 3px 0;
      }


      .box-container {
          background-color: #fff;
          max-width: 36rem;
          margin: 3rem auto 6rem;
          border-radius: 10px;
          -webkit-box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.52); 
          box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.52);
          
        }
        .box-produtos-carrinho {
            margin: 15px 15px;
        
        }

        .produto-carrinho {
          margin: 15px 0;
            display: flex;
        }

        .imagem-carrinho {
            margin-right: 15px;
            width: 120px;
            height: 120px;
            border: 1px solid #e3e3e3;
        }

        .btn-excluir {
          margin: 40px 50px 0px 0;
        }

        .valor-total {
            width: 100%;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
            margin-bottom: 1.5rem;
        }

        .valor-total-texto {
          flex-grow: 1;
          font-size: 24px;
          font-weight: 900;
          margin: 1.5rem 1.5rem;
        }

        .valor-total-numero {
          font-size: 24px;
          font-weight: 900;
          margin: 1.5rem 1.5rem;
        }

       .btn-voltar {
           text-align: center;
           font-size: 20px;

       }

       .btn-finalizar {
         color: #fff;
         font-weight: bold;
         width: -webkit-fill-available;
         background-color: #0086c3;
         padding: 1.2rem 1.2rem;
         font-size: 24px;
         text-align: center;
         margin: 0 1.5rem 1.5rem 1.5rem;
         border: none;
         border-radius: 8px;
       }

       .btn-finalizar:hover {
         background-color: #0073a7;
       }

       .msg-valor-promo {
         font-weight: 900;
         color: #118916;
         text-align: center;
         width: -webkit-fill-available;
         display: block;
         margin: 0 1.5rem 1.5rem 1.5rem;
         padding: 10px 10px;
         background-color: #c6f194;
         border-radius: 60px;
       }
       
      `}</style>

   <style jsx global>{`
        html,
        body {
          background-color: rgb(215 215 215);
          padding: 0;
          margin: 0;
          font-family: "Poppins";
        }

        * {
          box-sizing: border-box;
        }

        .btn {
          cursor: pointer;
        }

        .flex-grid {
          display: flex;
        }

        .justify-content-between {
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .box-container {
          max-width: 36rem;
          padding: 0 0rem;
          margin: 3rem auto 6rem;
        }
      `}</style>
    </Layout>
  );
}