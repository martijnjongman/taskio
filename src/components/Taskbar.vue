<template>
    <div class="taskbar">
        <form class="inputfield">
            <input type="text" name="task" class="input" placeholder="Add task">

            <button>
                <svg class="cross" xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 15.5 15.5">
                    <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M14.393,8.339H9.411V3.357A1.107,1.107,0,0,0,8.3,2.25H7.2A1.107,1.107,0,0,0,6.089,3.357V8.339H1.107A1.107,1.107,0,0,0,0,9.446v1.107a1.107,1.107,0,0,0,1.107,1.107H6.089v4.982A1.107,1.107,0,0,0,7.2,17.75H8.3a1.107,1.107,0,0,0,1.107-1.107V11.661h4.982A1.107,1.107,0,0,0,15.5,10.554V9.446A1.107,1.107,0,0,0,14.393,8.339Z" transform="translate(0 -2.25)" fill="#c4c4c4"/>
                </svg>
            </button>
        </form>
    </div>
</template>

<style scope lang="scss">
    .taskbar{
        padding-top: clamp(2rem, 4vw, 6rem);
        .inputfield{
            width: 100%;
            border-radius: 5px;
            border: none;
            background: #f4f4f4;
            display: flex;
            justify-content: space-between;      
            input{
                width: 95%;
                background: none;
                border: none;
                color: #707070;
                padding: clamp(0.75rem, 2vw, 2rem); 
                font-size: clamp(0.8rem, 1.25vw, 1.5rem);
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
</style>