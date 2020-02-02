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
    goNextPageAutomatic: true,
    showTimerPanel: "top",
    maxTimeToFinishPage: 20,
    maxTimeToFinish: 300,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You will have 20 seconds to answer each of the 15 questions on the quiz.  <br /> Please click on <b>'Start Quiz'</b> when you are ready. <br />"
                }
            ]
        }, {//1
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_Bar",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![Bar1](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Bar.PNG?raw=true =600x400)<br />",
                    choices: [
                        "a. State Government", "b. Education and Health Services", "c. Goods-producing", "d. Professional and Business Services"
                    ],
                    correctAnswer: "b. Education and Health Services",
                    valueName: "Bar"
                }
            ]
        }, {//2
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevslocation_Map",
                    title: "Which state has the lowest average annual pay? <br /> <br /> <br /> ![FilledMap](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Location_Map_filled.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. Maryland", "b. Pennsylvania", "c. Colorado", "d. Alaska"
                    ],
                    correctAnswer: "b. Pennsylvania",
                    valueName: "Map"
                }
            ]
        }, {//3
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevstime_Rings",
                    title: "In which year did Education and Health Services first pass 35K in Average Annual Pay? <br /> <br /> <br /> ![Rings](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Time_Rings.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. 2013", "b. 2010", "c. 2012", "d. 2015"
                    ],
                    correctAnswer: "c. 2012",
                    valueName: "Rings"
                }
            ]
        }, {//4
            questions: [
                {
                    type: "radiogroup",
                    name: "comparison_Bar",
                    title: "Are more industries paying annual wages above or below the average? <br /> <br /> <br /> ![bars2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Comparison_Bars.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. Above", "b. Below"
                    ],
                    correctAnswer: "a. Above",
                    valueName: "Bar"
                }
            ]
        }, {//5
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_Bubble",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![bubble](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Bubble.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a.	Professional and Business Services", "b. Goods-producing", "c. Education and Health Services", "d. Local"
                    ],
                    correctAnswer: "c. Education and Health Services",
                    valueName: "Bubble"
                }
            ]
        }, {//6
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevslocation_Bar",
                    title: "Which state has the lowest average annual pay? <br /> <br /> <br /> ![bars3](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Location_Bar.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. HI", "b. VT", "c. PA", "d. MD"
                    ],
                    correctAnswer: "c. PA",
                    valueName: "Bar"
                }
            ]
        }, {//7
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevsvalue_Bubble",
                    title: "Which state has the county with the highest paying jobs? <br /> <br /> <br /> ![bubbles2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Value_Bubble.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. California", "b. New York", "c. Arizona", "d. Massachusetts"
                    ],
                    correctAnswer: "b. New York",
                    valueName: "Bubble"
                }
            ]
        }, {//8
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevstime_Table",
                    title: "In which year did Education and Health Services first pass 35K in Average Annual Pay? <br /> <br /> <br /> ![Table](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Time_table.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. 2010", "b. 2012", "c. 2013", "d. 2015"
                    ],
                    correctAnswer: "b. 2012",
                    valueName: "Table"
                }
            ]
        }, {//9
            questions: [
                {
                    type: "radiogroup",
                    name: "comparison_Table",
                    title: "Are more industries paying annual wages above or below the average? <br /> <br /> <br /> ![chart](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Comparison_Chart.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. Below", "b. Above"
                    ],
                    correctAnswer: "b. Above",
                    valueName: "Table"
                }
            ]
        }, {//10
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_Tree",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![tree](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Tree.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a.	Professional and Business Services", "b. Goods-producing", "c. Local Government", "d. Education and Health Services"
                    ],
                    correctAnswer: "d. Education and Health Services",
                    valueName: "Tree"
                }
            ]
        }, {//11
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevsvalue_Scatter",
                    title: "Which State has the county with the highest paying jobs? <br /> <br /> <br /> ![scatter](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Value_Scatter.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. AZ", "b. CA", "c. CT", "d. NY"
                    ],
                    correctAnswer: "d. NY",
                    valueName: "Scatter"
                }
            ]
        }, {//12
            questions: [
                {
                    type: "radiogroup",
                    name: "comparison_Pie",
                    title: "Are more industries paying annual wages above or below the average? <br /> <br /> <br /> ![pie](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Comparison_Pie.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. Below", "b. Above"
                    ],
                    correctAnswer: "b. Above",
                    valueName: "Pie"
                }
            ]
        }, {//13
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevstime_Line",
                    title: "In which year did Education and Health Services first pass 35K in Average Annual Pay? <br /> <br /> <br /> ![line](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Time_Line.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. 2012", "b. 2013", "c. 2014", "d. 2015"
                    ],
                    correctAnswer: "a. 2012",
                    valueName: "Line"
                }
            ]
        }, {//14
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevslocation_Map",
                    title: "Which State has the lowest average annual pay? <br /> <br /> <br /> ![map2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Location_Map.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a. Pennsylvania", "b. Nevada", "c. New Hampshire", "d. Massachusetts"
                    ],
                    correctAnswer: "a. Pennsylvania",
                    valueName: "Map"
                }
            ]
        }, {//15
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_Pie",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![pie2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Pie.PNG?raw=true =600x400) <br />",
                    choices: [
                        "a.	Education and Health Services", "b. Professional and Business Services", "c. Goods-producing", "d. Trade, Transportation, and Utilities"
                    ],
                    correctAnswer: "a. Education and Health Services",
                    valueName: "Pie"
                }
            ]
        }
        
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>. <br />Check out how your results factor into our analysis of the most useful visualizations.<br /><br />Share with your friends, family... everyone and see how they view data!<br /></h4>"
};

var survey = new Survey.Model(json);

// survey.onComplete.add(function (sender, options) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "YourServiceForStoringSurveyResultsAsJSON_URL");
//     xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//     xhr.send(JSON.stringify(sender.data));
// });

function modifySurveyResults(survey) {
    var resultData = [];
    for(var key in survey.data) {
      var question = survey.getQuestionByValueName(key);
      if(!!question) {
        var item = {value: question.value};
        // If question name (question.valueName) doesn't equal to question.title
        if(key !== question.title) {
          item.Question = question.id;
          item.Data_Type = question.name;
          item.displayValue = question.displayValue;
          item.correctValue = question.correctAnswer;
          item.Chart_Type = question.valueName
          
        }
        // //If question value different from displayValue
        if(item.value == item.correctValue) {
          item.answer = 1;
        }
        else if(item.value != item.correctValue) {
            item.answer = 0;
        }
        // if(item.value != question.displayValue) {
        //     item.correctValue = question.correctAnswer
        //   }
        // //If the custom property tag is defined set
        // if(question.tag !== undefined) {
        //   item.tag = question.tag;
        // }
        resultData.push(item);
      }
    }
    return resultData;
  }

survey
    .onComplete
    .add(function (result) {
      var newData = modifySurveyResults(survey);
      console.log( survey.getAllQuestions());
      var questions = survey.getAllQuestions();
      for(var nullName in questions) {
        console.log(newData[questions[nullName].title]);
        if(!!newData[questions[nullName].name]) continue;
        newData[questions[nullName].name] = null;
      }
            //generate unique surveyID
            String.random = function (length) {
                let radom13chars = function () {
                    return Math.random().toString(16).substring(2, 15)
                }
                let loops = Math.ceil(length / 13)
                return new Array(loops).fill(radom13chars).reduce((string, func) => {
                    return string + func()
                }, '').substring(0, length)
            },
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(newData);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:5000/postjson");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(result.data));
    });

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

