// console.log("test");
// ​
// d3.json("https://gwprojectflask.herokuapp.com/api/data/results").then(function(results) {
//   questionno = results.map(r => r.QuestionNo);
//   numcorrect = results.map(r => r.NumCorrect);
//   numattempted = results.map(r => r.NumAttempted);
// })
// ​
// d3.json("https://gwprojectflask.herokuapp.com/api/data/results").then(function(newresults) {
//   numberofattempts = newresults.map(nr => nr.numberOFattempts);
//   questionsAnswered = newresults.map(nr => nr.questionsAnswered);
//   pctcorrect = newresults.map(nr => nr.pctCorrect );
//   numcorrect = newresults.map(nr => nr.NumCorrect);
// })
// d3.json("https://gwprojectflask.herokuapp.com/api/data/resultsavg").then(function(resultsavg) {
//   question_num = resultsavg.map(ra => ra.Question_Num);
//   data_type = resultsavg.map(ra => ra.Data_Type);
//   chart_type = resultsavg.map(ra => ra.Chart_Type);
//   numcorrect = resultsavg.map(ra => ra.numCorrect);
//   pctcorrect = resultsavg.map(ra => ra.percent_correct);

// ​
// // Make a bar chart of the correct answers by DATA type.
// ​
// var bar3 = [{
//     x: data_type,
//     y: numcorrect,
//     type: "bar3",
//     name: "Correct Answers",
//     marker: {
//       color: "rgb(204,204,204)",
//       opacity: 0.5
//     }
//   }]
// ​
//   var data = [bar3];
// ​
//   var layout = {
//     title: "Correct Answers by Data Type",
//     xaxis: {
//       tickangle: -45
//     },
//     barmode: "group"
//   };
// ​
//   Plotly.newPlot("bar3", data, layout)
// });
// Make a bar chart of the correct answers by CHART type.
// var horbargraph2 = [{
//   type: "bar2",
//   x: chart_type,
//   y: numcorrect,
//   name: "Correct Answers By Chart Type",
//   orientation: 'h',
//   marker: {
//       color: "rgb(255,20,147)",
//       opacity: 0.5
//     }
// }];
// ​
// var data = [horbargraph2];
// ​
//   var layout = {
//     title: "Correct Answers By Chart Type",
//     xaxis: {
//       tickangle: -45
//     },
//     barmode: "group"
//   };
// ​
//   Plotly.newPlot("bar2", data, layout)
  
  // Make a bar chart of the answers by question.
// Make a bar chart of the percentage of correct answers.
//   var bargraph1 = {
//     x: chart_type,
//     y: pctcorrect,
//     type: "bar1",
//     name: "% Correct Answers",
//     marker: {
//       color: "rgb(0,206,209)",
//       opacity: 0.5
//     }
//   };
// ​
//   var data = [bargraph11];
// ​
//   var layout = {
//     title: "Correct Answers By Data Type",
//     xaxis: {
//       tickangle: -45
//     },
//     barmode: "group"
//   }
// ​
//   html_bar1 = Plotly.newPlot("bar1", data, layout)

// `d3.json("/api/data/results").then(function(results){
// ​
// questionno = results.map(r => r.QuestionNo);
// numcorrect = results.map(r => r.NumCorrect);
// numattempted = results.map(r => r.NumAttempted);
// ​
//     var trace1 = {
//     x: questionno,
//     y: numattempted,
//     type: "bar",
//     name: "Primary Product",
//     marker: {
//         color: "rgb(49,130,189)",
//         opacity: 0.7
//     }
//     };
// ​
//     var trace2 = {
//     x: questionno,
//     y: numcorrect,
//     type: "bar",
//     name: "Secondary Product",
//     marker: {
//         color: "rgb(204,204,204)",
//         opacity: 0.5
//     }
//     };
// ​
//     var data = [trace1, trace2];
// ​
//     var layout = {
//     title: "2013 Sales Report",
//     xaxis: {
//         tickangle: -45
//     },
//     barmode: "group"
//     };
// ​
//     Plotly.newPlot("bar1", data, layout);
// ​
// });`
// ​

// document
// .querySelector("#surveyResult");
// // .innerHTML = '{"Survey_ID":"' + surveyID + '","result":' + JSON.stringify(newData) + '}';
// var xhr = new XMLHttpRequest();
// xhr.open("POST", "https://gwprojectflask.herokuapp.com/postjson");
// xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
// xhr.send(
//   '{"Survey_ID":"' + surveyID + '","result":' + JSON.stringify(newData) + "}"
// );
// console.log(
//   '{"Survey_ID":"' + surveyID + '","result":' + JSON.stringify(newData) + "}"
// );

// function buildPlot(stock) {
//   console.log("test")
  d3.json("https://gwprojectflask.herokuapp.com/api/data/resultsavg").then(function(resultsavg) {
    question_num = resultsavg.map(ra => ra.Question_Num);
    data_type = resultsavg.map(ra => ra.Data_Type);
    chart_type = resultsavg.map(ra => ra.Chart_Type);
    numcorrect = resultsavg.map(ra => ra.numCorrect);
    pctcorrect = resultsavg.map(ra => ra.percent_correct);

    console.log(chart_type.map(x => x[1]));

    var bar3 = {
      x: data_type,
      y: numcorrect,
      type: 'bar',
      name: "Correct Answers"
    }

    var data = [bar3];

    var layout = {
      title: "Correct Answers by Data Type",
      xaxis: {
        tickangle: -45
      },
      // barmode: "group"
    };

    Plotly.newPlot("bar3", data, layout);

  });

  
// }