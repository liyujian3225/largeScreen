/**
 * 轮播定时器时间间隔定义
 */

// 主定时器：10分钟（页面标题左上角下拉框）
export const mainTimer = 1000 * 60 * 10; // 生产配置：10分钟
// export const mainTimer = 10000; // 模拟10秒

// 副定时器：1分钟（风险预警趋势区域下拉框）
export const subTimer = 1000 * 60 * 1;   // 生产配置：1分钟
// export const subTimer = 5000;   // 模拟5秒

export default {
    mainTimer,
    subTimer
}
