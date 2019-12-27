import create from 'zustand'

const setReceivedServiceCharge = troncDeduction => ({
  receivedServiceCharge: troncDeduction,
  displayCalculator: false
})

const [useTroncCalculatorStore] = create(set => ({
  receivedServiceCharge: 0,
  displayCalculator: true,
  setReceivedServiceCharge: troncDeductions =>
    set(setReceivedServiceCharge(troncDeductions))
}))

export default useTroncCalculatorStore
