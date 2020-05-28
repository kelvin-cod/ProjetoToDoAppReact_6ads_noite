import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { description: '', list: [] };
        this.refresh = this.refresh.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log(resp))
    }
    handleRemove(){
        axios.delete(`${URL}/${todo._id}`)
    }
    refresh() {
        axios.get(`${URL}?sort=-createAt`)
            .then(resp => this.setState({ ... this.state, description: '', list: resp.data }));
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    refresh={this.refresh}
                ></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}