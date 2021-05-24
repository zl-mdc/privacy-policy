/*
 * @Author: Code_Master
 * @Date: 2020-09-17 18:34:17
 * @LastEditTime: 2020-09-17 18:36:37
 * @LastEditors: Code_Master
 * @FilePath: /privacy-policy/vue.config.js
 * @Description: The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.
 */
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/privacy-policy/' : './',
    outputDir: 'build',
  };