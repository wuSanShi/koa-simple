
export default {
    isID: {
        reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        tip: '请正确填写身份证'
    },
    isPassword: {
        reg: /^([a-z]|[A-Z]|[0-9]|[<>?:"{}|!@#$%^&*()_+,./;'-=]){6,16}$/,
        tip: 'user.password.inputTip9'
    },
    isMobile: {
        reg: /^[1][3,4,5,7,8,9][0-9]{9}$/,
        tip: '请正确填写手机号码'
    },
    isPhone: {
        reg: /^1[3456789]\d{9}$/,
        tip: 'user.phone.inputTip3'
    },
    isFax: {
        reg: /^(\d{3,4}-)?\d{7,8}$/,
        tip: '请正确填写传真号码'
    },
    isEmail: {
        reg: /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
        tip: 'user.email.inputTip3'
    },
    isChinaChart: {
        reg: /^[\u4e00-\u9fa5]+$/,
        tip: '只能填写中文'
    },
    isNotChinaChart: {
        reg: /^[^\u4e00-\u9fa5]+$/,
        tip: '不能填写中文'
    },
    isEnglishChart: {
        reg: /^[a-zA-Z]+$/,
        tip: '请正确填写英文'
    },
    isIntNumber: {
        reg: /^-?[1-9]\d*$/,
        tip: '请正确填写整数'
    },
    isDecimal: {
        reg: /^\d+(\.\d{1,2})?$/,
        tip: '填写项支持小数点后两位的正数'
    },
    isNotEmpty: {
        reg: /([^\s$])/,
        tip: '填写项不能为空'
    },
    isImage: {
        reg: /^image\//,
        tip: '填写项不能为空'
    },
    isVideo: {
        reg: /^video\//,
        tip: '填写项不能为空'
    },
    isGuid: {
        reg: /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/,
        tip: '填写项不是Guid'
    },
};