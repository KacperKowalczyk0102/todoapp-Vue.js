<script setup>
import { ref, onMounted, computed, watch } from 'vue' 

//tablica naszych zadań
const todos = ref([])
const name = ref('')


const selectedPerson = ref(null)

const numberOfDays = ref(0);

//dane wejściowe(Nasz kontent)
const input_content = ref('')

const getEndDate = (todo) => {
   
    const currentDate = new Date(todo.createdAt);
    const endDate = new Date(currentDate.setDate(currentDate.getDate() + todo.numberOfDays));
    const day = endDate.getDate();
    const month = endDate.toLocaleString('default', { month: 'long' });
    const year = endDate.getFullYear();
    return `${day} ${month} ${year}`;
};


//tworzymy funkcje dodawania zadań
const addTodo = () => {
    if(input_content.value.trim() === '' || input_category.value === null){
        return
    }
    
    const currentDate = new Date();
    const futureDate = new Date(currentDate.setDate(currentDate.getDate() + numberOfDays.value)); 
    
    todos.value.push({
        content: input_content.value,
        category: input_category.value,
        person: selectedPerson.value, // Dodanie wybranej osoby do zadania
        numberOfDays: numberOfDays.value,
        done: false,
        createdAt: new Date().getTime()
    })

    input_content.value = ''
    input_category.value = null
    selectedPerson.value = null // Zresetowanie wybranej osoby po dodaniu zadania
    numberOfDays.value = 0; 
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
                
                <div class="personToDo">
                    <label for="people">Wybierz osobę do wykonania zadania</label>
                    <select v-model="selectedPerson" name="people" id="people">
                      <option value="Kinga">Kinga</option>
                      <option value="Kacper">Kacper</option>
                      <option value="Mateusz">Mateusz</option>
                      <option value="Krzysiek">Krzysiek</option>
                    </select>
                </div>
                <div class="daysToDo">
                 <label for="daysToDo">Ilość dni na wykonanie:</label>
                 <input type="number" id="myNumber" min="0" max="7" step="1" v-model="numberOfDays">

                </div>      


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
                    <div>
                        <p class="personToDo" v-if="todo.person !== null">
                            Wykonać ma: {{ todo.person }}&nbsp;
                        </p>
                        <p class="daysToDo" v-if="todo.numberOfDays !== 0">
                            Data zakończenia: {{ getEndDate(todo) }}
                        </p>
                    </div>
                    

                    
                    <div class="actions">
						<button class="delete" @click="removeTodo(todo)"></button>
					</div>
                        
                </div>

            </div>

        </section>
    


    </main>
</template>
