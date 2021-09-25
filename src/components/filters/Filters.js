import React from "react"
import './filters.scss'

const Filters = ({name, setName, region, setRerion, regions, submitHandler}) => {
  return (
    <div className={"form-filters"}>
      <div className="form-row">
        <div className="filter-name">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Procure por uma praia" value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
        </div>

        <div className="filter-region">
          <label htmlFor="region">Região</label>
          <select id="region" value={region} onChange={(e) => {
            setRerion(e.target.value)
          }}>
            <option value="all" key="all">Todas</option>
            {regions.map((value, index) => {
              return <option value={ value.id } key={index}>{ value.name }</option>
            })}
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn" id="filter" onClick={() => {
          submitHandler()
        }}>Filtrar</button>
      </div>
    </div>
  )
}

export default Filters
