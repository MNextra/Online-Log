<?php
/*
 * Created by PhpStorm.
 * User: admin
 */
header("Content-Type:text/html;charset=utf-8");
date_default_timezone_set("PRC");
$a=@$_GET["a"];
$b=@$_GET["b"];
if($a){
  $a=$a;
}else{
  $a=date('y');
}
if($b){
  $b=$b;
}else{
  $b=date('m');
}
$noe=mktime(0,0,0,$b,1,$a); //获取当前的月的一号
$year=date("Y",$noe); //当前的年
$month=date("m",$noe); //当前的月
$week=date("w",$noe); // 每个月的一号是星期几
$days=date("t",$noe); //每个月的总天数
$day=date("d"); //获取今天是几号
$as=$year-1; //获取上一年的年
$bs=$month-1; //获取上个月
$bs=$month+1; // 获取下个月
$as=$year+1; //获取下一年
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>日历</title>
  <style>
    table{
      border: 1px solid #050;
    }
    table th{
      background:#000;
      color:#fff;
      border: 2px solid #050;
    }
  </style>
</head>
<body>
 <table cellpadding="0" cellspacing="0">
   <tr>
     <th><a href="index.php?a=<?php echo $as; ?>" rel="external nofollow" rel="external nofollow" ><<上一年</a></th>
     <th><a href="index.php?b=<?php echo $bs; ?>" rel="external nofollow" rel="external nofollow" ><<上个月</a></th>
     <th><?php echo $year."-".$month."-".$day ?></th>
     <th><a href="index.php?b=<?php echo $bs; ?>" rel="external nofollow" rel="external nofollow" >下个月>></a></th>
     <th><a href="index.php?a=<?php echo $as; ?>" rel="external nofollow" rel="external nofollow" >下一年>></a></th>
   </tr>
   <tr>
     <th>星期日</th>
     <th>星期一</th>
     <th>星期二</th>
     <th>星期三</th>
     <th>星期四</th>
     <th>星期五</th>
     <th>星期六</th>
   </tr>
  <tr>
    <?php
    for($i=0;$i<$week;$i++){
      echo "<td> </td>"; //获取当月一号前面的空格
    }
    for($k=1;$k<=$days;$k++){
      if($k==$day){
        echo "<th>".$k."</th>"; //输出今天是几号
      }else{
        echo "<td>".$k."</td>"; //输出当月天数
      }
      if(($k+$week)%7==0){
        echo "<tr></tr>"; // 一周七天换行
      }
    }
    ?>
  </tr>
 </table>
</body>
</html>