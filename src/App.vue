<script setup>
import { ref, onMounted, computed, watch } from 'vue' 

//tablica naszych zadań
const todos = ref([])
const name = ref('')

//dane wejściowe(Nasz kontent)
const input_content = ref('') 

//tworzymy funkcje dodawania zadań
const addTodo = () => {
    if(input_content.value.trim() === '' || input_category.value === null){
        return
    }
    
    todos.value.push({
        content: input_content.value,
        category: input_category.value,
        done: false,
        createdAt: new Date().getTime()
    })

    input_content.value = ''
    input_category.value = null
}
//kategorie do jakich zostaną przypisane nasze zadania, 
//domyślnie ustawione na null
const input_category = ref(null)

//funkcja pokazuje nam zadania od najnowszych z góry do najsatrsych na dole
const todos_asc = computed(() => todos.value.sort((a,b) => {
    return a.createdAt - b.createdAt}))


const removeTodo = (todo) =>{
    todos.value = todos.value.filter((t) => t !== todo)
}

//przygotowywujemu funkcje która zapisuje nam nazwę podaną w tytule
//ustawiamy zmienną name na nowąwartość
//funkcja obserwuje tą nazwę, jeżel się zmieni to otrzymamy nowąwartość
watch(name, (newValue) => {localStorage.setItem('name', newValue)})

watch(todos, newValue => {
    localStorage.setItem('todos', JSON.stringify(newValue))
},
{deep: true}
)

//tworzymy funkcję strzałkową, skrócona wersja funkcji
//funkcja zapisuje aktualną nazwę lub pusty ciąg znaków
onMounted(() =>{
    name.value = localStorage.getItem('name') || ''
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
    <!--szablon wyświetlania tego co jest na stronie -->
    <!--klasa aplikacji i inne-->
    <main class="app">
        
        <section class="greeting">
            <h2 class="title">
                Hej, <input type="text" placeholder="jak masz na imię?" v-model="name">
            </h2>

        </section>

        <section class="create-todo">
            <h3>STWÓRZ SWOJE ZADANIE</h3>

            <form @submit.prevent="addTodo">
                <h4>Co dziś znajdzie się na liście?</h4>
                <input type="text"
                placeholder="np. zrobić pranie" 
                v-model="input_content"/>
                <h4>Wybierz kategorię</h4>

                <div class="options">
                    
                    <label>
                        <input 
                        type="radio"
                        name="category"
                        value="job"
                        v-model="input_category"/>
                        <span class="bubble job"></span>
                        <div>Praca</div>


                    </label>
                    
                    <label>
                        <input 
                        type="radio"
                        name="category"
                        value="personal"
                        v-model="input_category"/>
                        <span class="bubble personal"></span>
                        <div>Osobiste</div>

                    </label>

                    <label>
                        <input 
                        type="radio"
                        name="category"
                        value="shopping"
                        v-model="input_category"/>
                        <span class="bubble shopping"></span>
                        <div>Zakupy</div>

                    </label>

                    <label>
                        <input 
                        type="radio"
                        name="category"
                        value="plans"
                        v-model="input_category"/>
                        <span class="bubble plans"></span>
                        <div>Plany</div>

                    </label>

                </div>

                <input type="submit" value="Dodaj zadanie"/>
            </form>

        </section>

        <section class="todo-list">
            <h3>LISTA RZECZY DO ZROBIENIA</h3>
            <div class="list">
                <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">

                    <label>
                        <input type="checkbox" v-model="todo.done">
                        <span :class="`bubble ${todo.category}`"></span>
                    </label>

                    <div class="todo-content">
                        <input type="text" v-model="todo.content">
                    </div>

                    <div class="actions">
						<button class="delete" @click="removeTodo(todo)"></button>
					</div>
                        
                </div>

            </div>

        </section>
    


    </main>
</template>
