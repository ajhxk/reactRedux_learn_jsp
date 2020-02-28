import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getChangeInputAction, getAddItemAction, getDeleItemAction } from './store/actionCreator'


const TodoList = (props) => {
    const { inputValue, handleInputChange, handleBtnClick, list, handleDele } = props;
    return ( 
        <div>
            <div>
                <input 
                    value={inputValue}
                    onChange={handleInputChange} />
                <button
                    onClick={handleBtnClick}>
                    提交
                </button>
            </div>
            <ul>
    
                {
                    list.map((item, index) => (
                        <li key={index} onClick={() => handleDele(index)}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div> 
        );
    }

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    }
}

const dispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getChangeInputAction(e.target.value);
            dispatch(action);
        },
        handleBtnClick () {
            dispatch(getAddItemAction())
        },
        handleDele (index) {
            dispatch(getDeleItemAction(index))
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);