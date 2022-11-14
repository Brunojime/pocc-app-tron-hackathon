import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import createServices from '../../api/server'
import ApiViajaSeguro from '../../api/server/config'

const Context = React.createContext(undefined)

const ServicesProvider = ({ children }) => {
  const router = useRouter()
  const [stateService, setStateService] = useState('')
  const [readyServices, setReadyServices] = useState(false)
  const Services = createServices(ApiViajaSeguro)
  const [ISOContent, setISOContent] = useState('es')

  const loginUser = async (data) => {
    setStateService('loading')
    return Services.login(data)
      .then(results => {
        setStateService('success')
        return results
      })
      .catch(err => {
        setStateService('error')
        console.log(err)
        // err.response.data
        return false
      })
  }
  const getAddress = async (data) => {
    setStateService('loading')
    return Services.getAddress(data)
      .then(results => {
        setStateService('success')
        return results
      })
      .catch(err => {
        setStateService('error')
        console.log(err)
        // err.response.data
        return false
      })
  }
  const createAddressUser = async (data) => {
    setStateService('loading')
    return Services.createAddressUser(data)
      .then(results => {
        setStateService('success')
        return results
      })
      .catch(err => {
        setStateService('error')
        console.log(err)
        // err.response.data
        return false
      })
  }
  const value = {
    stateService,
    readyServices,
    services: {
      loginUser,
      getAddress,
      createAddressUser
    }
  }
  return (<Context.Provider value={value}>{children}</Context.Provider>)
}

const useServices = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useServices can only be used inside Context')
  }
  return context
}

export { ServicesProvider, useServices }
