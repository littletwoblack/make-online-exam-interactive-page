const main = require('./main/main');

main();

//将标准答案写入一个对象集合，以便之后选取试卷答案和标准答案核对
let Answer=
{
    completion : [{ QuestionNumber : "1.1",
                    Content :"统一建模语言",
                    AnswerID:"1.1",
                    Score :"5" 
                  },
                  { QuestionNumber : "1.2.1",
                    Content :"封装性",
                    AnswerID:"1.2.1",
                    Score :"5" 
                  },
                  { QuestionNumber : "1.2.2",
                    Content :"继承性",
                    AnswerID:"1.2.2",
                    Score :"5"
                  },
                  { QuestionNumber : "1.2.3",
                    Content :"多态性",
                    AnswerID:"1.2.3",
                    Score :"5"
                  }],
    Radio : [{ QuestionNumber : "2.1",
                Content :"B",
                AnswerID:"2.1.b",
                Score :"10" 
              },
              { QuestionNumber : "2.2",
                Content :"A",
                AnswerID:"2.2.a",
                Score :"10"
              }],
    CheckBox:[{ QuestionNumber : "3.1",
                Content :"A.B.D",
                AnswerID:["3.1.a","3.1.b","3.1.d"],
                Score :"10" 
                },
              { QuestionNumber : "3.2",
                Content :"A.B.C",
                AnswerID:["3.2.a","3.2.b","3.2.c"],
                Score :"10" 
                }],
    TorF:[ {QuestionNumber : "4.1",
            Content :"×",
            AnswerID:"4.1.F",
            Score :"10" 
           },
           {QuestionNumber : "4.2",
            Content :"√",
            AnswerID:"4.2.T",
            Score :"10"
             }],
    SAQs:[{ QuestionNumber : "5",
            Content :"模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。",
            AnswerID:"5",
            Score :"20" 
            }]
}

//该函数专门计算填空题分数。
function completionScore()
{ var AnsComp= Answer.completion;
  var sum;
    for(i=0;i<AnsComp.length;i++) 
    {
        var StuAnswer = document.getElementById(AnsComp[i].AnswerID).nodeValue;
        sum += StuAnswer==AnsComp[i].Content?AnsComp[i].Score : 0 ;
    }
return sum;
}

//该函数专门计算单选题分数
function RadioScore()
{ var AnsRadio= Answer.Radio;
  var sum;
  for(i=0;i<AnsRadio.length;i++)
  {
      if( document.getElementById(AnsRadio[i].AnswerID).checked )
      { sum+= AnsRadio[i].Score; }
  }
  return sum;
}

//该函数专门计算多选题分数
function CheckBoxScore()
{ var AnsCBox= Answer.CheckBox;
  var sum;
  for (i=0;i<AnsCBox.length;i++)
  { var bool=true;
       for(k=0;k<AnsCBox[i].AnswerID.length;k++)
    {
        bool=bool && document.getElementById(AnsCBox[i].AnswerID[k]).checked;
    }
    
    if( bool=true )
     { sum+=AnsCBox[i].Score;}

  }
  return sum;
}

//该函数专门计算判断题分数
function TorFScore()
{
    var AnsTorF= Answer.TorF;
    var sum;
    for(i=0;i<AnsTorF.length;i++)
    {
        if( document.getElementById(AnsTorF[i].AnswerID).checked )
        { sum+= AnsTorF[i].Score; }
    }
    return sum;
}

//该函数专门计算简答题的分数
function SAQsScore()
{ var AnsSAQ= Answer.SAQs;
    var sum;
      for(i=0;i<AnsSAQ.length;i++) 
      {
          var StuAnswer = document.getElementById(AnsSAQ[i].AnswerID).childNodes[0].nodeValuea;
          sum += StuAnswer==AnsSAQ[i].Content?AnsSAQ[i].Score : 0 ;
      }
  return sum;

}

//该函数专门计算总分
function SUMScore()
{ var sum= completionScore() + RadioScore() + CheckBoxScore() + TorFScore()+ SAQsScore();
  return sum;
}