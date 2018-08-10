let timer
$('.countDate').change(()=>{
  if($('.countDate').val()==""){
    return false;
  }
  $('.show').text("")
  $('.countDate').css('display','none')
  $('.show').css('display','flex')
  let countDate = new Date($('.countDate').val()+" 00:00").getTime()
  timer=window.setInterval(()=>{
    let dateToday=new Date().getTime()
    let totalSeconds=Math.abs(((countDate-28800000)-dateToday)/1000)
    let countSeconds=Math.floor(totalSeconds%60)
    let countMinutes=Math.floor((totalSeconds/60)%60)
    let countHours=Math.floor((totalSeconds/60/60)%24)
    let countDays=Math.floor(totalSeconds/60/60/24)
    if(countHours<10){
      countHours="0"+countHours.toString()
    }
    if(countMinutes<10){
      countMinutes="0"+countMinutes.toString()
    }
    if(countSeconds<10){
      countSeconds="0"+countSeconds.toString()
    }
    if(dateToday<countDate){
      $('.show').text("倒數"+countDays+"天"+countHours+"時"+countMinutes+"分"+countSeconds+"秒")
    }else if(countDate==dateToday){
        clearInterval(timer)
    }else{
      $('.show').text("已過"+countDays+"天"+countHours+"時"+countMinutes+"分"+countSeconds+"秒")
    }
  $('button').css('display','block')
  },1000)
})

$('button').click(()=>{
  clearInterval(timer)
  $('.countDate').css('display','block')
  $('.show').css('display','none')
  $('button').css('display','none')
})
