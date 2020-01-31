// function runSurvey(question) {
//     switch (question) {

// }

Survey
    .StylesManager
    .applyTheme("modern");
// Survey.Survey.cssType = "bootstrap";
var json = {
    title: "Put your Visual Abilities to the Test!",
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
                    type: "radiogroup",
                    name: "categoryvsvalue",
                    title: "Which industry had the third highest annual average employement",
                    html: "<table><body><row><td><img src='/Content/Images/examples/26178-20160417.jpg' width='100px' /></td><td style='padding:20px'>You may put here any html code. For example images, <b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>",
                    choices: [
                        "a", "b", "c", "d"
                    ],
                    correctAnswer: "c"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevsvalue",
                    title: "What is the highest value? ![Bar1](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Bar.PNG?raw=true =800x600)",
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
                    
                        type: "html", 
                        // type: "radiogroup",
                        name: "info",
                        html: "<table><body><row><td><img src='https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Bar.PNG?raw=true' width='400px' /></td><td style='padding:20px'>You </td></row></body></table>",
                        title: "What is the highest value?",
                        choicesOrder: "random",
                        choices: [
                            "a", "b", "c", "d"
                        ],
                        correctAnswer: "b"
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

//   trying to get image to work..

//Create showdown mardown converter
var converter = new showdown.Converter();
survey
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the mardown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    });

// (function($){
//     function EnableApply() {
$("#surveyElement").Survey({
  model: survey 
//   (jQuery));

});

