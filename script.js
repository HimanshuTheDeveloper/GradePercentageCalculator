
    var box = new Vue({
        el: '#box',
        data: {
          math : '',
          english : '',
          hindi : '',
          science : '',
          socialscience : '',
          sum : 0 ,
          percent : 0,
          grade : '-',
          result : '-'
        //   display : 'true'
        },

        computed :{
            percentage : function(){
                if(this.sum != 0){
                    this.percent = (this.sum*100)/500;
                    return this.percent;
                }
            } 
        },
        methods : {
            
            total:function(){


                this.sum = parseInt(this.math)+ parseInt(this.english) +  parseInt(this.hindi) +  parseInt(this.science) + parseInt(this.socialscience);
                return this.sum;
            },
            grading : function(){

                if(this.percent >= 80){
                   return this.grade = 'A';
                }
                else if(this.percent>=60){
                   return this.grade = 'B';
                }
                else if(this.percent>=40){
                    return this.grade = 'C';
                }
                else {
                   return  this.grade = 'D';
                }
                
            },

            results : function(){
                if(this.percent >= 30)
                {
                    this.result = 'Pass';
                }
                else{
                    this.result = 'Fail';
                }
            }
        }


    });

