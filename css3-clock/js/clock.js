/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2019-12-31 14:02:37
 * @LastEditors: lxw
 * @LastEditTime: 2019-12-31 14:03:25
 */

const autoClock = (function () {
    /**
     * @name: 
     * @description: 
     * @msg: 
     * @param {type} 注意参数是timeobj里面的每一个选项都是数值类型。
     * @return: 
     */
    function clock(timeObj, cabll) {
        let dateObj = new Date()
        let obj = {
            hours: dateObj.getHours(),
            minutes: dateObj.getMinutes(),
            seconds: dateObj.getSeconds()
        }
        //对象合并，传递timeObj参数，如果里面有的选项就接收，没有的是使用这里的默认值。比如你想倒计时从12小时开启，你就传递{hours:12}
        timeObj = Object.assign(obj, timeObj)
        // 计时模块
        let timer = setInterval(() => {
            if (timeObj.seconds === 59) {
                timeObj.seconds = 0
                if (timeObj.minutes === 59) {
                    timeObj.minutes = 0;
                    if (timeObj.hours === 24) {
                        timeObj.hours = 1;
                    } else {
                        timeObj.hours = timeObj.hours + 1
                    }
                } else {
                    timeObj.minutes = timeObj.minutes + 1
                }
            } else {
                timeObj.seconds = timeObj.seconds + 1
            }
            cabll(strftime(timeObj.hours), strftime(timeObj.minutes), strftime(timeObj.seconds))
        }, 1000);
        return timer;
    }
    function strftime(val) {
        return val < 10 ? '0' + val : val
    }
    return clock;
})()
