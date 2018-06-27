/*
* @Author: zl297
* @Date:   2018-06-26 14:43:30
* @Last Modified by:   zl297
* @Last Modified time: 2018-06-26 14:54:53
*/
import qs from 'qs'
var repeatTime = true // 重复提交次数

export default {
  /**
   * GET 方式发送请求
   * @param  {string}   url   api接口地址
   * @param  {object}   param api接口参数对象
   * @param  {object||function} callback    请求成功回掉函数res接收体
   * @return {null}         暂无返回值
   */
  fetchByGet (url, param, callback) {
    this.$axios.get(url, {
      params: param
    })
    .then(res => {
      console.log(res)
      // if (res.data.data) {
      //   if (typeof(callback) == 'function') {
      //     callback(res.data.data)
      //   }else{
      //     this[callback] = res.data.data
      //   }
      // }else{
      //   this.openMessage(this, 'warning', res.data.msg)
      // }
    })
    .catch(error => {
      // if (typeof(callback) == 'function') {
      //   callback(error)
      // }
      console.log(error)
      // this.openMessage(this, 'warning', '请求异常！')
    })
  },
  /**
   * POST 方式发送请求
   * @param  {string}   url   api接口地址
   * @param  {object}   param api接口参数对象
   * @param  {object||function} callback    请求成功回掉函数res接收体
   * @return {null}         暂无返回值
   */
  fetchByPost (url, param, callback) {
    if (repeatTime) {
      repeatTime = false
      this.$axios.post(url, qs.stringify(param))
      .then(res => {
        console.log(res)
        // if (res.data.status == 0) {
        //   this.openMessage(this, 'success', `${res.data.msg}`)
        //   callback ? callback(res.data) : this.$Modal.remove()
        // }else if (res.data.status == 1) {
        //   repeatTime = true
        //   this.openMessage(this, 'error', `${res.data.msg}`)
        // }
      })
      .catch(error => {
        console.log(error)
        // this.openMessage(this, 'warning', '请求异常！')
      })
      .finally(() => {
        repeatTime = true
        // this.removeModalLoading()
      })
    }else{
      // this.openMessage(this, 'info', '请不要重复提交！')
    }
  },
}