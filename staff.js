/**
 * 员工相关数据 v1.02
 */


// 员工档案
const staffTableId = 'staff';


/**
 * 获取员工列表
 * @param pageIndex 页码
 * @param pageSize 返回数据量
 * @param conditionList 过滤条件
 * @param includeFields 返回员工档案属性列表
 * @returns {Array<{
 *     id,
 *     staffNo,
 *     name,
 *     department,
 *     post
 * }>}
 */
export const getStaffs = ({
    pageIndex = 1,
    pageSize = 50000,
    conditionList = [],
    includeFields = [
        'staffNo', 'name', 'department', 'post'
    ]
}) => {
    const list = informat.table.queryList(staffTableId, {
        pageIndex: pageIndex,
        pageSize: pageSize,
        filter: {
            conditionList: conditionList
        },
        includeFields: includeFields
    });
    return list;
};
