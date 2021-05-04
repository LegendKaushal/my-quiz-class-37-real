class Question
{ 
    constructor()
    { this.title = createElement("h1"); 
    this.input = createInput("Name"); 
    this.greeting = createElement("h3"); 
    this.question = createElement("h3"); 
    this.option1 = createElement("h4"); 
    this.option2 = createElement("h4"); 
    this.option3 = createElement("h4"); 
    this.option4 = createElement("h4"); 
    this.answer = createInput("Enter a/b/c/d"); 
    this.button =createButton("SUBMIT"); 
} 
hide()
{ this.input.hide(); 
    this.question.hide(); 
    this.option1.hide(); 
    this.option2.hide(); 
    this.option3.hide(); 
    this.option4.hide(); 
    this.answer.hide(); 
    this.button.hide(); 
    this.greeting.hide(); 
}
 displayQuestion()
 {
      this.title.html("MY QUIZ");
       this.title.position(550,25);
        this.input.position(420,150); 
        this.question.html("How many vowels are ther in Engish Language"); 
        this.option1.html("a) 3");
 }
}
