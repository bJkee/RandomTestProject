var data = {
  "jsonrpc": "2.0",
  "method": "generateIntegers",
  "params": {
    "apiKey": "f8a740ad-2c20-41dc-a12c-e9b6cd1cf2d9",
    "n": 10000,
    "min": 0,
    "max": 1,
    "replacement": true
  },
  "id": 151
};
//04d71733-93db-4982-8900-1120b25fe23e 
//6219cca2-599d-4478-9a78-f6cddc974e55
//ff3e34cb-e591-4d77-85dc-1c018052aa02
$.ajax({
  url: "https://api.random.org/json-rpc/2/invoke",
  type: 'POST',
  data: JSON.stringify(data),
  dataType: 'json',
  contentType : "application/json",
  success: function(res) {
    console.log(res);
        console.log(res.result.random.data);
    /*console.log("=====ОПРЕДЕЛИТЬ КОЛ-ВО 1 и 0=====");*/
           /*задача 1*/
      var a = 0; 
      var b = 0; 
      var procA = 0; 
      var procB = 0;

    for (var i=0; i<10000; i++) {
      if (res.result.random.data[i] == 1) {
        a++;
      }
      else {
        b++;
      }
    }    
/*  console.log("Кол-во едениц:",a);
    console.log("Кол-во нулей :",b);*/
    var procA=a/10000*100;
    var procB=b/10000*100;     
/*  console.log("Соотношение  :",(procA).toFixed(2),"% к",(procB).toFixed(2),"%");
    console.log("=====Задание 2=====");
    console.log("=====Кол-во последовательностей из двух цифр [00, 01, 10, 11]=====");*/
          //zz(00)
          //zo(01)
          //oz(10)
          //oo(11)
           /*задача 2*/
    var zz = ''+0+0;
    var zo = ''+0+1;
    var oz = ''+1+0;
    var oo = ''+1+1;
    var variant = 0;
    var zzk = 0;
    var zok = 0;
    var ozk = 0;
    var ook = 0;
    var q = '';
    var w = '';
    var e = '';
    var j = 1;
             
    for (var i=0; i<10000; i++) {
      w = res.result.random.data[i];
      j = i+1;
      e = res.result.random.data[j];
      q =''+w+e;
/*    console.log("шаг ",i);
      console.log(q);
      console.log("шаггг",j);*/

      switch (q) {
        case (zz):
          variant++;
          zzk++;
          break;
        case (zo):
          variant++
          zok++;
          break;
        case (oz):
          variant++;
          ozk++;
          break;
        case (oo):
          variant++;
          ook++;
          break;
        default:
        console.log("  default    ");
          break;
      }
    }
      var procZZ=zzk/variant*100;
      var procZO=zok/variant*100;
      var procOZ=ozk/variant*100;
      var procOO=ook/variant*100;


                           /*задача 3*/
    var zzz = ''+0+0+0;
    var zzo = ''+0+0+1;
    var zoz = ''+0+1+0;
    var zoo = ''+0+1+1;
    var ozz = ''+1+0+0;
    var ozo = ''+1+0+1;
    var ooz = ''+1+1+0;
    var ooo = ''+1+1+1;

    var intzzz = 0;
    var intzzo = 0;
    var intzoz = 0;
    var intzoo = 0;
    var intozz = 0;
    var intozo = 0;
    var intooz = 0;
    var intooo = 0;

    var variant = 0;

    var zzzk = 0;
    var zzok = 0;
    var zozk = 0;
    var zook = 0;
    var ozzk = 0;
    var ozok = 0;
    var oozk = 0;
    var oook = 0;

    var z = ''; //1xx
    var x = ''; //x1x
    var c = ''; //xxc
    var v = ''; //111
    var j; //индекс [i,j,f]
    var f; //индекс [i,j,f]

    for (var i=0; i<10000; i++) {
      z = res.result.random.data[i];
      j=i+1;
      x = res.result.random.data[j];
      f=j+1;
      c = res.result.random.data[f];
      v =''+z+x+c;
/*    console.log("шаг ",i);
      console.log(q);
      console.log("шаггг",j);*/
      switch (v) {
        case (zzz):
          variant++;
          zzzk++;
          break;
        case (zzo):
          variant++
          zzok++;
          break;
        case (zoz):
          variant++;
          zozk++;
          break;
        case (zoo):
          variant++;
          zook++;
          break;
        case (ozz):
          variant++;
          ozzk++;
          break;
        case (ozo):
          variant++
          ozok++;
          break;
        case (ooz):
          variant++;
          oozk++;
          break;
        case (ooo):
          variant++;
          oook++;
          break;
        default:
        console.log("  default    ");
          break;
      }
    }

      var procZZZ=zzzk/variant*100;
      var procZZO=zzok/variant*100;
      var procZOZ=zozk/variant*100;
      var procZOO=zook/variant*100;
      var procOZZ=ozzk/variant*100;
      var procOZO=ozok/variant*100;
      var procOOZ=oozk/variant*100;
      var procOOO=oook/variant*100;
      document.getElementById("ajs").innerHTML ="Количество [1] =" + a; //вывод кол-ва 1
      document.getElementById("bjs").innerHTML = "Количество [0] =" + b;//вывод кол-ва 0
      document.getElementById("zzkjs").innerHTML ="Количество [00] =" +  zzk;//кол-во 00
      document.getElementById("zokjs").innerHTML ="Количество [01] =" +  zok;//кол-во 01
      document.getElementById("ozkjs").innerHTML ="Количество [10] =" +  ozk;//кол-во 10
      document.getElementById("ookjs").innerHTML ="Количество [11] =" +  ook;//кол-во 11   
      document.getElementById("zzzkjs").innerHTML ="Количество [000] =" +  zzzk;//процент  000
      document.getElementById("zzokjs").innerHTML ="Количество [001] =" +  zzok;//процент  001
      document.getElementById("zozkjs").innerHTML ="Количество [010] =" +  zozk;//процент  010
      document.getElementById("zookjs").innerHTML ="Количество [011] =" +  zook;//процент  011
      document.getElementById("ozzkjs").innerHTML ="Количество [100] =" +  ozzk;//процент  100
      document.getElementById("ozokjs").innerHTML ="Количество [101] =" +  ozok;//процент  101
      document.getElementById("oozkjs").innerHTML ="Количество [110] =" +  oozk;//процент  110
      document.getElementById("oookjs").innerHTML ="Количество [111] =" +  oook;//процент  111



      var chart = new CanvasJS.Chart("procentiV1", {
        animationEnabled: true,
        title: {
          text: "Процентное соотношение [1] к [0]",
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: procA, label: "1"},
            {y: procB, label: "0"},
          ]
          }]
        });
      chart.render();

      var chart = new CanvasJS.Chart("procentiV2", {
        animationEnabled: true,
        title: {
          text: "Процентное соотношение [00] / [01] / [10] / [11]"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: procZZ, label: "[00]"},
            {y: procZO, label: "[01]"},
            {y: procOZ, label: "[10]"},
            {y: procOO, label: "[11]"},
          ]
          }]
        });
      chart.render();

      var chart = new CanvasJS.Chart("procentiV3", {
        animationEnabled: true,
        title: {
          text: "Процентное соотношение [000] / [001] / [010] / [011] / [100] / [101] / [110] / [111]"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: procZZZ, label: "[000]"},
            {y: procZZO, label: "[001]"},
            {y: procZOZ, label: "[010]"},
            {y: procZOO, label: "[011]"},
            {y: procOZZ, label: "[100]"},
            {y: procOZO, label: "[101]"},
            {y: procOOZ, label: "[110]"},
            {y: procOOO, label: "[111]"}
          ]
          }]
        });
        chart.render();



  }
})



