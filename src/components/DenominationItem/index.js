import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="item">
      <button type="button" className="btn" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
