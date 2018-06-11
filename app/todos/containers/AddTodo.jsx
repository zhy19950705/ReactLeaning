import react from 'react'
import { connect } from 'react-redux'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                if(!input.value.trim()){
                    
                }
            }}>
            </form>
        </div>
    )
}