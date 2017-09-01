#!/bin/bash

clear

read -p 'Enter date of request (YYMMDD): ' req_date

if [ "$req_date" == "" ]; then
  echo 'No date of request given, so exiting' $req_date
  echo
  exit
fi

read -p 'Enter sender name: ' sender

if [ "$sender" == "" ]; then
  echo 'No sender name given, so exiting' $sender
  echo
  exit
fi

read -p 'Enter request time-out limit (seconds): ' time_limit

if [ "$time_limit" == "" ]; then
  echo 'No time-out limit given, so exiting' $time_limit
  echo
  exit
fi

grep -h $sender location_of_log_file/log_file_name_ending_with_$req_date> | grep 'Processing time' | 
        awk -F " " -v tl="$time_limit" -v tcnt=0 '{sum+=$NF}
                  substr($2,1,2)=="00"{sum00+=$NF; cnt00++}
                  substr($2,1,2)=="01"{sum01+=$NF; cnt01++}
                  substr($2,1,2)=="02"{sum02+=$NF; cnt02++}
                  substr($2,1,2)=="03"{sum03+=$NF; cnt03++}
                  substr($2,1,2)=="04"{sum04+=$NF; cnt04++}
                  substr($2,1,2)=="05"{sum05+=$NF; cnt05++}
                  substr($2,1,2)=="06"{sum06+=$NF; cnt06++}
                  substr($2,1,2)=="07"{sum07+=$NF; cnt07++}
                  substr($2,1,2)=="08"{sum08+=$NF; cnt08++}
                  substr($2,1,2)=="09"{sum09+=$NF; cnt09++}
                  substr($2,1,2)=="10"{sum10+=$NF; cnt10++}
                  substr($2,1,2)=="11"{sum11+=$NF; cnt11++}
                  substr($2,1,2)=="12"{sum12+=$NF; cnt12++}
                  substr($2,1,2)=="13"{sum13+=$NF; cnt13++}
                  substr($2,1,2)=="14"{sum14+=$NF; cnt14++}
                  substr($2,1,2)=="15"{sum15+=$NF; cnt15++}
                  substr($2,1,2)=="16"{sum16+=$NF; cnt16++}
                  substr($2,1,2)=="17"{sum17+=$NF; cnt17++}
                  substr($2,1,2)=="18"{sum18+=$NF; cnt18++}
                  substr($2,1,2)=="19"{sum19+=$NF; cnt19++}
                  substr($2,1,2)=="20"{sum20+=$NF; cnt20++}
                  substr($2,1,2)=="21"{sum21+=$NF; cnt21++}
                  substr($2,1,2)=="22"{sum22+=$NF; cnt22++}
                  substr($2,1,2)=="23"{sum23+=$NF; cnt23++}
				  $NF>tl{tcnt+=1}
                  $NF>tl && substr($2,1,2)=="00"{tcnt00++}
                  $NF>tl && substr($2,1,2)=="01"{tcnt01++}
                  $NF>tl && substr($2,1,2)=="02"{tcnt02++}
                  $NF>tl && substr($2,1,2)=="03"{tcnt03++}
                  $NF>tl && substr($2,1,2)=="04"{tcnt04++}
                  $NF>tl && substr($2,1,2)=="05"{tcnt05++}
                  $NF>tl && substr($2,1,2)=="06"{tcnt06++}
                  $NF>tl && substr($2,1,2)=="07"{tcnt07++}
                  $NF>tl && substr($2,1,2)=="08"{tcnt08++}
                  $NF>tl && substr($2,1,2)=="09"{tcnt09++}
                  $NF>tl && substr($2,1,2)=="10"{tcnt10++}
                  $NF>tl && substr($2,1,2)=="11"{tcnt11++}
                  $NF>tl && substr($2,1,2)=="12"{tcnt12++}
                  $NF>tl && substr($2,1,2)=="13"{tcnt13++}
                  $NF>tl && substr($2,1,2)=="14"{tcnt14++}
                  $NF>tl && substr($2,1,2)=="15"{tcnt15++}
                  $NF>tl && substr($2,1,2)=="16"{tcnt16++}
                  $NF>tl && substr($2,1,2)=="17"{tcnt17++}
                  $NF>tl && substr($2,1,2)=="18"{tcnt18++}
                  $NF>tl && substr($2,1,2)=="19"{tcnt19++}
                  $NF>tl && substr($2,1,2)=="20"{tcnt20++}
                  $NF>tl && substr($2,1,2)=="21"{tcnt21++}
                  $NF>tl && substr($2,1,2)=="22"{tcnt22++}
                  $NF>tl && substr($2,1,2)=="23"{tcnt23++}
				  END{print "Total number of requests:", NR}
                  END{print "Number of requests having processing time greater than time-out limit:", tcnt }
                  END{print "Average response time:", sum/NR}
                  END{print "\nPer hour count:"}
                  END{printf "Hour\tCalls\timed-out\tAvg.ResponseTime\n"}
                  END{printf "00\t%01d\t%01d\t%f\n", cnt00, tcnt00, sum00/cnt00}
                  END{if (cnt01) {printf "01\t%01d\t%01d\t%f\n", cnt01, tcnt01, sum01/cnt01}}
                  END{if (cnt02) {printf "02\t%01d\t%01d\t%f\n", cnt02, tcnt02, sum02/cnt02}}
                  END{if (cnt03) {printf "03\t%01d\t%01d\t%f\n", cnt03, tcnt03, sum03/cnt03}}
                  END{if (cnt04) {printf "04\t%01d\t%01d\t%f\n", cnt04, tcnt04, sum04/cnt04}}
                  END{if (cnt05) {printf "05\t%01d\t%01d\t%f\n", cnt05, tcnt05, sum05/cnt05}}
                  END{if (cnt06) {printf "06\t%01d\t%01d\t%f\n", cnt06, tcnt06, sum06/cnt06}}
                  END{if (cnt07) {printf "07\t%01d\t%01d\t%f\n", cnt07, tcnt07, sum07/cnt07}}
                  END{if (cnt08) {printf "08\t%01d\t%01d\t%f\n", cnt08, tcnt08, sum08/cnt08}}
                  END{if (cnt09) {printf "09\t%01d\t%01d\t%f\n", cnt09, tcnt09, sum09/cnt09}}
                  END{if (cnt10) {printf "10\t%01d\t%01d\t%f\n", cnt10, tcnt10, sum10/cnt10}}
                  END{if (cnt11) {printf "11\t%01d\t%01d\t%f\n", cnt11, tcnt11, sum11/cnt11}}
                  END{if (cnt12) {printf "12\t%01d\t%01d\t%f\n", cnt12, tcnt12, sum12/cnt12}}
                  END{if (cnt13) {printf "13\t%01d\t%01d\t%f\n", cnt13, tcnt13, sum13/cnt13}}
                  END{if (cnt14) {printf "14\t%01d\t%01d\t%f\n", cnt14, tcnt14, sum14/cnt14}}
                  END{if (cnt15) {printf "15\t%01d\t%01d\t%f\n", cnt15, tcnt15, sum15/cnt15}}
                  END{if (cnt16) {printf "16\t%01d\t%01d\t%f\n", cnt16, tcnt16, sum16/cnt16}}
                  END{if (cnt17) {printf "17\t%01d\t%01d\t%f\n", cnt17, tcnt17, sum17/cnt17}}
                  END{if (cnt18) {printf "18\t%01d\t%01d\t%f\n", cnt18, tcnt18, sum18/cnt18}}
                  END{if (cnt19) {printf "19\t%01d\t%01d\t%f\n", cnt19, tcnt19, sum19/cnt19}}
                  END{if (cnt20) {printf "20\t%01d\t%01d\t%f\n", cnt20, tcnt20, sum20/cnt20}}
                  END{if (cnt21) {printf "21\t%01d\t%01d\t%f\n", cnt21, tcnt21, sum21/cnt21}}
                  END{if (cnt22) {printf "22\t%01d\t%01d\t%f\n", cnt22, tcnt22, sum22/cnt22}}
                  END{if (cnt23) {printf "23\t%01d\t%01d\t%f\n", cnt23, tcnt23, sum23/cnt23}}'
