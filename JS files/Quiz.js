class Quiz {

    constructor()
    {

    }

    getState()
    {
        var quizRef = database.ref("gameState")

        quizRef.on("value",function(data){
            gameState = data.val()
        })
        
    }
     updateState(state)
     { var quizStateRef = database.ref("/");
     quizStateRef.update({ gameState : state }) 
    }

    start()
        {
         if(gameState === 0)
        { contestant = new Contestant(); 
        contestant.getCount(); question = new Question(); 
        question.displayQuestion(); 
        } 
        }

    displayResult()
{
    }

}