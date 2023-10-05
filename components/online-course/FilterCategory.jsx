import React from 'react'

export default function FilterCategory(props) {
  return (
    <div class="filter-category form-check">
        <input type="checkbox" class="form-check-input" id={`${props.name}`} />
        <label class="form-check-label" for={`${props.name}`}> {props.name}</label>
    </div>
  )
}
