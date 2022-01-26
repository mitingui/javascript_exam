$(document).ready(function () {
    // 
    function score_indicate() {
      // 
      let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
      ];
      // 
      let sum = subject_points[0];
      sum = sum + subject_points[1];
      sum = sum + subject_points[2];
      sum = sum + subject_points[3];
      sum = sum + subject_points[4];

      let average = sum / 5;
      
      $("#sum_indicate").text(sum);
      $("#average_indicate").text(average);
  
      // 
      // 
      // 
    };
    // 
    function get_achievement() {
      // 
      let averageIndicate = $("#average_indicate").text();
      console.log(averageIndicate)
      
      if (averageIndicate >= 80) {
        return "A";
      }
      else if(averageIndicate >= 60){
        return "B";
      }
      else if(averageIndicate >= 40){
        return "C";
      }
      else{
        return "D";
      }     
      // 
    };
    // 
    function get_pass_or_failure() {
      let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
      ];
      
      let number = subject_points.length;
      
      let judge = "";
      let verification = false; //Pour vérifier dans la tableau si il y a un sujet avec moins de 60 points
      for(i = 0; i < number; i++){
          if(subject_points[i] < 60){
              //On vérifie si il y a au moins un sujet avec moin de 60 points
              verification = true;
          }
      }

      if(!verification){
          judge = "成功するために";

      }
      else{
          judge = "失敗する";
      }
      // 
      // 
      return judge;
    };
    
    function judgement() {
      
      let achievement = get_achievement();
      
      let pass_or_failure = get_pass_or_failure();
      // 「」(id="alert-indicate)「${achievement}です。${pass_or_failure}です。」
      $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">${achievement}です。${pass_or_failure}です。</label>`);
    };
    // 
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
      score_indicate();
    });
    // 
    $('#btn-evaluation').click(function () {
      $("#evaluation").text(get_achievement());
    });
    // 
    $('#btn-judge').click(function () {
      $("#judge").text(get_pass_or_failure());
    });
    // 
    // 
    // 
    $('#btn-declaration').click(function () {
        $('#alert-indicate').remove();
        judgement();
    });
  });
  
  //