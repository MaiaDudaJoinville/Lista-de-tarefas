new Vue({
    el: '#app',
    data() {
        return {
            titulo: "Minhas tarefas",
            tarefas: [
                
            ],
            novaTarefa: ''
        }
    },
    methods: {
        addTodo() {
            this.tarefas.push({
                titulo: this.novaTarefa, checked: false
            })
            this.novaTarefa = ''
        }
    },
    computed: {
        toDo() {
            return this.tarefas.length
        },
        totalTarefasConcluidas() {
            const concluidas = this.tarefas.filter(tarefa => tarefa.checked)
            return concluidas.length
        },
    }
})