let arr;
var id = 0;
var maxid = 10;
let params;
let list = function (options) {
    /* 模拟删除数据的方式 */
    let rtype = options.type.toLowerCase(); // 获取请求类型
    // debugger
    switch (rtype) {
        case 'get':
            arr=[{"id":28,"name":"xuesheng1","user_tel":15166666666,"user_name":"xuesheng1","checked_id":[6],"status":"在职","operation":"edit,delete",classname:'1班'},
{"id":29,"name":"xuesheng2","user_tel":15166666666,"user_name":"xuesheng2","checked_id":[1],"status":"在职","operation":"edit,delete",classname:'2班'},
{"id":30,"name":"xuesheng3","user_tel":15166666666,"user_name":"xuesheng3","checked_id":[4],"status":"在职","operation":"edit,delete",classname:'3班'},]
            break;
        case 'post':
            id = maxid;
            maxid = maxid + 1;
            params = JSON.parse(options.body).params;
            arr = {
                id: id,
                name: params.email,
                user_name: params.username,
                user_tel: params.tel,
                classname: params.class,
                status: '在职'
            };
            break;
        case 'patch':
            params = JSON.parse(options.body).params;
            arr = {
                id: params.id,
                name: params.email,
                user_name: params.username,
                classname: params.class,
                user_tel: params.tel,
            };
            break;
        case 'delete':
            params = JSON.parse(options.body).params;
            arr = {
                id: params.id,
                status:'离职'
            };
            break;
        default:
    }

    return arr;// 返回这个数组,也就是返回处理后的假数据
};

export default {
    path: '/studentList',
    data: list
};
