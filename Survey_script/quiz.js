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
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_Bar",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![Bar1](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Bar.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a.	State Government", "b. Education and Health Services", "c. Goods-producing", "d. Professional and Business Services"
                    ],
                    correctAnswer: "b.	Education and Health Services"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevslocation_filledmap",
                    title: "Which state has the lowest average annual pay? <br /> <br /> <br /> ![FilledMap](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Location_Map_filled.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. Maryland", "b. Pennsylvania", "c. Colorado", "d. Alaska"
                    ],
                    correctAnswer: "b. Pennsylvania"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevstime_rings",
                    title: "In which year did Education and Health Services first pass 35K in Average Annual Pay? <br /> <br /> <br /> ![Rings](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Time_Rings.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. 2013", "b. 2010", "c. 2012", "d. 2015"
                    ],
                    correctAnswer: "c. 2012"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "comparisonbars",
                    title: "Are more industries paying annual wages above or below the average? <br /> <br /> <br /> ![bars2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Comparison_Bars.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. Above", "b. Below"
                    ],
                    correctAnswer: "a. Above"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_bubble",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![bubble](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Bubble.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a.	Professional and Business Services", "b. Goods-producing", "c. Education and Health Services", "d. Local"
                    ],
                    correctAnswer: "c. Education and Health Services"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevslocation_bars",
                    title: "Which state has the lowest average annual pay? <br /> <br /> <br /> ![bars3](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Location_Bar.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. HI", "b. VT", "c. PA", "d. MD"
                    ],
                    correctAnswer: "c. PA"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevsvalue_bubble",
                    title: "Which state has the county with the highest paying jobs? <br /> <br /> <br /> ![bubbles2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Value_Bubble.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. California", "b. New York", "c. Arizona", "d. Massachusetts"
                    ],
                    correctAnswer: "b. New York"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevstime_Table",
                    title: "In which year did Education and Health Services first pass 35K in Average Annual Pay? <br /> <br /> <br /> ![Table](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Time_table.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. 2010", "b. 2012", "c. 2013", "d. 2015"
                    ],
                    correctAnswer: "b. 2012"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "comparison_chart",
                    title: "Are more industries paying annual wages above or below the average? <br /> <br /> <br /> ![chart](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Comparison_Chart.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. Below", "b. Above"
                    ],
                    correctAnswer: "b. Above"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_tree",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![tree](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Tree.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a.	Professional and Business Services", "b. Goods-producing", "c. Local Government", "d. Education and Health Services"
                    ],
                    correctAnswer: "d. Education and Health Services"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevsvalue_scatter",
                    title: "Which State has the county with the highest paying jobs? <br /> <br /> <br /> ![scatter](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Value_Scatter.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. AZ", "b. CA", "c. CT", "d. NY"
                    ],
                    correctAnswer: "d. NY"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "comparison_pie",
                    title: "Are more industries paying annual wages above or below the average? <br /> <br /> <br /> ![pie](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Comparison_Pie.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. Below", "b. Above"
                    ],
                    correctAnswer: "b. Above"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevstime_line",
                    title: "In which year did Education and Health Services first pass 35K in Average Annual Pay? <br /> <br /> <br /> ![line](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Time_Line.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. 2012", "b. 2013", "c. 2014", "d. 2015"
                    ],
                    correctAnswer: "a. 2012"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "valuevslocation_map",
                    title: "Which State has the lowest average annual pay? <br /> <br /> <br /> ![map2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Value_vs_Location_Map.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a. Pennsylvania", "b. Nevada", "c. New Hampshire", "d. Massachusetts"
                    ],
                    correctAnswer: "a. Pennsylvania"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "categoryvsvalue_pie",
                    title: "Which Industry has the third highest average employment? <br /> <br /> <br /> ![pie2](https://github.com/aisaacson1/GW_Project2/blob/master/Test_pics/Category_vs_Value_Pie.PNG?raw=true =800x600) <br />",
                    choices: [
                        "a.	Education and Health Services", "b. Professional and Business Services", "c. Goods-producing", "d. Trade, Transportation, and Utilities"
                    ],
                    correctAnswer: "a. Education and Health Services"
                }
            ]
        }
        
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

var survey = new Survey.Model(json);

// survey.onComplete.add(function (sender, options) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "YourServiceForStoringSurveyResultsAsJSON_URL");
//     xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//     xhr.send(JSON.stringify(sender.data));
// });



survey
    .onComplete
    .add(function (result) {
      var newData = result.data;
      console.log( survey.getAllQuestions());
      var questions = survey.getAllQuestions();
      for(var nullName in questions) {
        console.log(newData[questions[nullName].title]);
        if(!!newData[questions[nullName].name]) continue;
        newData[questions[nullName].name] = null;
      }
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

