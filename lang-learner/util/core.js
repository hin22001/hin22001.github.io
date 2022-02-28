import React from "react"

export const useFormState = (initialState) => {

  const [state, setState] = React.useState(initialState)

  const handleStateChange = (key, value) => {
    const formState = { ...state }
    if (!!value && !_.isEmpty(value?.trim())) _.set(formState, key, value)
    setState(formState)
  }

  return [state, handleStateChange]
}

export const handleClick = async (clickCallback = () => {}, successCallback = () => {}, failureCallback = () => {}) => {
  console.log("test")
  let result = await clickCallback()
  if (result) return successCallback()
  return failureCallback()
}

export const toFirstLetterUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}