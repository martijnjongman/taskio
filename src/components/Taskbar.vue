<template>
    <div class="taskbar">
        <form @submit.prevent="addNewTask" class="taskbar__inputfield" id="error__handler">
            <input v-model="newTask" type="text" name="newTask" class="taskbar__inputfield--input" placeholder="Add task">

            <button>
                <svg class="cross" xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 15.5 15.5">
                    <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M14.393,8.339H9.411V3.357A1.107,1.107,0,0,0,8.3,2.25H7.2A1.107,1.107,0,0,0,6.089,3.357V8.339H1.107A1.107,1.107,0,0,0,0,9.446v1.107a1.107,1.107,0,0,0,1.107,1.107H6.089v4.982A1.107,1.107,0,0,0,7.2,17.75H8.3a1.107,1.107,0,0,0,1.107-1.107V11.661h4.982A1.107,1.107,0,0,0,15.5,10.554V9.446A1.107,1.107,0,0,0,14.393,8.339Z" transform="translate(0 -2.25)" fill="#c4c4c4"/>
                </svg>
            </button>
        </form>
    </div>

    <transition-group tag="ul" name="list" class="list">
        <li class="list__task" v-for="(task, index) in tasks" :key="task.id">                    
            <div class="list__task--field">
                <input @click="toggleDone(task)" type="checkbox" />
                <label for="blue"></label>
                <p :class="{ done : task.done}">{{task.content}}</p>
            </div>    

            <button class="list__task--taskBtn" @click="removeTodo(index)">
                <svg xmlns="http://www.w3.org/2000/svg" width="34.833" height="38.482" viewBox="0 0 34.833 38.482">
                    <g id="Icon_feather-trash-2" data-name="Icon feather-trash-2" transform="translate(1 1)">
                        <path id="Path_2" data-name="Path 2" d="M4.5,9H37.333" transform="translate(-4.5 -1.704)" fill="none" stroke="#f59c9c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_3" data-name="Path 3" d="M33.037,10.3V35.833a3.648,3.648,0,0,1-3.648,3.648H11.148A3.648,3.648,0,0,1,7.5,35.833V10.3m5.472,0V6.648A3.648,3.648,0,0,1,16.62,3h7.3a3.648,3.648,0,0,1,3.648,3.648V10.3" transform="translate(-3.852 -3)" fill="none" stroke="#f59c9c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_4" data-name="Path 4" d="M15,16.5V27.444" transform="translate(-2.231 -0.083)" fill="none" stroke="#f59c9c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_5" data-name="Path 5" d="M21,16.5V27.444" transform="translate(-0.935 -0.083)" fill="none" stroke="#f59c9c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    </g>
                </svg>
            </button>
        </li>
    </transition-group>

    <transition name="fade">
        <div v-if="tasks.length === 0" class="tasksPlaceholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="69.73" height="58.839" viewBox="0 0 69.73 58.839">
                    <path id="Icon_awesome-tasks" data-name="Icon awesome-tasks" d="M19.014,2.729a1.634,1.634,0,0,0-2.315,0L8.026,11.351,4.934,8.338a1.634,1.634,0,0,0-2.315,0L.481,10.479a1.634,1.634,0,0,0,0,2.315L6.962,19.25a1.741,1.741,0,0,0,2.4,0l2.123-2.127,9.833-9.832a1.647,1.647,0,0,0,.012-2.315Zm0,21.68a1.634,1.634,0,0,0-2.315,0L8.026,33.087l-3.092-3.01a1.634,1.634,0,0,0-2.315,0L.481,32.214a1.634,1.634,0,0,0,0,2.315L6.946,41a1.739,1.739,0,0,0,2.4,0l2.138-2.137,9.833-9.836a1.634,1.634,0,0,0,.012-2.3Zm-10.3,23.6a6.538,6.538,0,1,0,0,13.074,6.537,6.537,0,0,0,0-13.074Zm58.835,2.179H28.328a2.179,2.179,0,0,0-2.179,2.179v4.358a2.179,2.179,0,0,0,2.179,2.179H67.551a2.179,2.179,0,0,0,2.179-2.179V52.371A2.179,2.179,0,0,0,67.551,50.191Zm0-43.581H28.328a2.179,2.179,0,0,0-2.179,2.179v4.358a2.179,2.179,0,0,0,2.179,2.179H67.551a2.179,2.179,0,0,0,2.179-2.179V8.789A2.179,2.179,0,0,0,67.551,6.61Zm0,21.791H28.328a2.179,2.179,0,0,0-2.179,2.179v4.358a2.179,2.179,0,0,0,2.179,2.179H67.551a2.179,2.179,0,0,0,2.179-2.179V30.58A2.179,2.179,0,0,0,67.551,28.4Z" transform="translate(0 -2.248)" fill="#b4b4b4"/>
                </svg>
                <p>Let's add some tasks!</p>
        </div>
    </transition>
</template>

<script> 
import { ref } from 'vue';

export default{
    setup(){
        //New reactive string
        const newTask = ref('');
        
        //New reactive array, stores local data in the array
        const defaultArray = ref([]);
        const tasksData = JSON.parse(localStorage.getItem('tasks')) || defaultArray;
        const tasks = ref(tasksData);

        function addNewTask(){
            if (newTask.value !== ''){
                tasks.value.push({
                    id: Date.now(),
                    done: false,
                    content: newTask.value,
                });
                newTask.value = "";
                saveData();
            } else {
                const change = document.getElementById('error__handler')
                change.style.backgroundColor = "#f59c9c";
                setTimeout(() => {
                      change.style.backgroundColor = '#f4f4f4';
                }, 1000);
            }
        }

        function toggleDone(task){
            task.done = !task.done;
            saveData();
        }

        function removeTodo(index){
            tasks.value.splice(index, 1);
            saveData();
        }

        function saveData () {
            const storageData = JSON.stringify(tasks.value);
            localStorage.setItem('tasks', storageData);
        }
    
        return{
            tasks,
            newTask,
            addNewTask,
            toggleDone,
            removeTodo,
            saveData,
        };
    }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";
.taskbar{
    padding-top: clamp(2rem, 4vw, 6rem);
    flex: none;
    .taskbar__inputfield{
        transition: all 0.5s ease;
        width: 100%;
        border-radius: 5px;
        border: none;
        background: #f4f4f4;
        display: flex;
        justify-content: space-between;      
        .taskbar__inputfield--input{
            width: 95%;
            background: none;
            border: none;
            color: #707070;
            padding: clamp(0.75rem, 2vw, 2rem); 
            font-size: clamp(0.8rem, 1.25vw, 1.5rem);
            font-weight: 700;
        }
        input::placeholder{
            color: #c7c7c7;
            font-weight: 600;
            font-size: clamp(0.8rem, 1.25vw, 1.5rem);
        }
        button{
            background: none;
            border-radius: 5px;
            border: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 0 clamp(0.75rem, 2vw, 2rem);
            .cross{
                width: clamp(15px, 2vw, 25px);
                height: clamp(15px, 2vw, 25px);
                :hover{
                    fill: #737d8f;
                    transition: .3s ease-in-out;
                }                 
            }
        }
    }
}
.list{
    .list__task{
        display: flex;
        justify-content: space-between;
        padding: 1.5rem 0;
        border-bottom: solid lightgray 2px;
        max-width: 100%;
        .list__task--field{
        display: flex;
        align-items: center;
        width: 90%;
            p{
                font-weight: 700;
                padding: 0 1.5rem;
                word-wrap: break-word;
                max-width: 80%;
            }
            input{
                transform: scale(1.25);
            }
        }
        .list__task--taskBtn{
            width: 10%;
            background: none;
            border: none;
            cursor: pointer;
            transform: scale(0.65);
            display: flex;
            justify-content: right;
            align-items: center;
        }
    }
}
//Task Animation
.list-enter-active, 
.list-leave-active{
    transition: all 0.5s ease;
}
.list-enter-from{
    opacity: 0;
    transform: translateY(30px);
}

.list-leave-to{
    opacity: 0;
    transform: translateX(30px);
}

//Done class
.done{
    text-decoration: line-through;
    opacity: 0.8;
    color: #83cd9a;
    transition: all 500ms ease-out;
}

//Placeholder
.tasksPlaceholder{
    display: flex;
    flex: auto;
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    p{
        font-size: clamp(0.7rem, 3vw, 1.25rem);
        font-weight: 600;
        padding-top: 2em;
        color: #b4b4b4;
    }   
}
//Placeholder Animation
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>