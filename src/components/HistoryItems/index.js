import './index.css'

const HistoryItems = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="listof">
      <div className="block1">
        <p className="head">{timeAccessed}</p>
        <div className="inner-block">
          <img src={logoUrl} alt="domain logo" className="icon" />
          <p className="head">{title}</p>
        </div>
        <p className="para">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        onClick={onDelete}
        alt=" delete"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default HistoryItems
