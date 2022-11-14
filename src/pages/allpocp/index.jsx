import React from 'react'
import { useRouter } from 'next/router'
import { useServices } from '../../data/providers/ServicesProvider'

const Home = props => {
  const [addressWallet, setAddressWallet] = React.useState('')
  const router = useRouter()
  const { stateService, services: { 
    getAddress,
    createAddressUser,
  } } = useServices();
  const createWalletAddress = async () => {
    createAddressUser({"address": addressWallet}).then(res => {
      if (res) {
        console.log(res)
      } else {
        console.log('error')
      }
    })
  }
  const onClickValidateAddress = async () => {
    getAddress(addressWallet).then(res => {
      if (res) {
        console.log(res)
      } else {
        createWalletAddress()
      }
    })
  }
  return (
    <div className='main-container responsive-container'>
      <div className='container-home-img'>
        <img className='img-logo' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421690/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_devpost_tc38i4.png'></img>
      </div>
      <div className='container-home'>
        <h1 className='title-app'>Welcome to</h1>
        <h1 className='paragraph-app'>the proof of course completion protocol.</h1>
      </div>
      <div className='container-home-img-certificate'>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421758/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_card_o1pdn7.png'></img>
      </div>
      <div className='container-home'>
        <h1 className='paragraph-description'>See your POCP collection and mint new ones. Start by adding you TRON wallet</h1>
      </div>
      <div className='get-address'>
        <input className='input-address' type={'text'} placeholder='Your address' value={addressWallet} onChange={(e) => setAddressWallet(e.target.value)}/>
        <button className='button-address' onClick={() => onClickValidateAddress()}>
          Set as main account
        </button>
      </div>
      <style jsx>
        {`
          .container-home {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 40px 30px
          }
          .container-home-img {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 40px 0px;
          }
          .container-home-img-certificate {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px 0px;

          }
          .main-container {
            min-height: 100% !important;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            background-color: #060516;
          }
          .img-logo {
            width: 280px;
            object-fit: contain;
          }
          .img-logo {
            width: 280px;
            object-fit: contain;
          }
          .img-pocp {
            width: 280px;
            height: 280px;
            object-fit: contain;
          }
          .title-app {
            color: #f8ae3d;
            font-size: 2.5em;
            margin: 0px;
            text-align: center;
          }
          .paragraph-app {
            color: #f8ae3d;
            font-size: 1.5em;
            margin: 0px;
            text-align: center;
          }
          .paragraph-description {
            color: #fff;
            font-size: 1.5em;
            text-align: center;
          }
          .input-address {
            min-width: 300px;
            min-height: 40px;
            border-radius: 15px;
            background-color: transparent;
            border: 1px solid white;
            color: white;
            padding-left: 30px;
            cursor: pointer;
            margin: 0px 0px 20px 0px;
          }
          input:hover {
            border: 1px solid #f8ae3d
          }
          input:focus {
            outline-width: 0;
          }
          .get-address {
            display: flex;
            flex-direction: column;
          }
          .button-address {
            background-color: #f8ae3d;
            color: white;
            min-width: 300px;
            min-height: 40px;
            border-radius: 15px;
            border: 1px solid #f8ae3d;
            cursor: pointer;
          }
          @media (max-width: 480px) {
            .responsive-container {
              padding: 0px 1vw;
            }
            .container-home {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 20px 15px;
            }
            .container-home-img {
              justify-content: center;
              align-items: center;
            }
          }
          @media (min-width: 481px) and (max-width: 768px) {
            .responsive-container {
              padding: 0px 2vw;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .responsive-container {
              padding: 0px 3vw;
            }
          }
          @media (min-width: 1025px) and (max-width: 1490px) {
            .responsive-container {
              padding: 0px 5vw;
            }
          }
          @media (min-width: 1491px) {
            .responsive-container {
              padding: 0px 15vw;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Home
