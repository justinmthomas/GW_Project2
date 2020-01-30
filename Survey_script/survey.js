// function runSurvey(question) {
//     switch (question) {

// }

Survey
    .StylesManager
    .applyTheme("modern");
// Survey.Survey.cssType = "bootstrap";
var json = {
    title: "Data Visuals",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start the quiz. Please click on <b>'Start Quiz'</b> when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "barchart",
                    name: "categoryvsvalue",
                    title: "Which industry had the third highest annual average employement",
                    choices: [
                        "a", "b", "c", "d"
                    ],
                    correctAnswer: "c"
                }
            ]
        }, {
            questions: [
                {
                    type: "linegraph",
                    name: "valuevsvalue",
                    title: "What is the highest value?",
                    choicesOrder: "random",
                    choices: [
                        "a", "b", "c", "d"
                    ],
                    correctAnswer: "b"
                }
            ]
        }, {
            maxTimeToFinish: 25,
            questions: [
                {
                    type: "pie",
                    name: "timevsvalue",
                    title: "What is the longest time?",
                    choicesOrder: "random",
                    choices: [
                        "a", "b", "c", "d"
                    ],
                    correctAnswer: "a"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

var survey = new Survey.Model(json);

survey
  .onComplete
  .add(function(result) {
    document
      .querySelector('#surveyResult')
      .innerHTML = "result: " + JSON.stringify(result.data);
  });
// (function($){
//     function EnableApply() {
$("#surveyElement").Survey({
  model: survey 
//   (jQuery));

});

