let demoList = {
  code: 200,
  success: true,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [{
      id: '@guid',
      name: '@cname',
      'age|20-30': 23,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
      title: '@title()'
    }]
  }
};
let infoList =
{
  "success": true,
  "code": 200,
  "msg": null,
  "data": [
    {
      "id": 3,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "姓名",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 4,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "英文名",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 5,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "中文姓名全拼",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 6,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "曾用名",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 7,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "民族",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 8,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "性别",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 9,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "籍贯",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 10,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "出生日期",
      "infoType": "日期型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 11,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "出生地点",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 12,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "员工户口类别",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 13,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "员工户口所在地",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 14,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "婚姻状况",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 15,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "婚姻状况日期",
      "infoType": "日期型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 16,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "参加工作日期",
      "infoType": "日期型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 17,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "最高学历",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 18,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "健康状况",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 19,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "健康状况-其他说明",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 20,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "紧急联系人姓名",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 21,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "紧急联系人电话",
      "infoType": "数字型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 22,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "档案所在地",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 23,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "是否驻外人员",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 24,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "熟悉专业有何专长",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 25,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "证件类型",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 26,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "证件号码",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 27,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "办公地址州/省",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 28,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "办公地址城市",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 29,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "办公地址邮政编码",
      "infoType": "数字型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 30,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "详细办公地址",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 31,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "个人移动电话号码",
      "infoType": "数字型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 32,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "政治面貌",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 33,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "加入日期",
      "infoType": "日期型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    },
    {
      "id": 34,
      "infoCode": "base",
      "infoColumn": null,
      "infoName": "党内职务",
      "infoType": "字符型",
      "infoDefault": "",
      "infoLength": 50,
      "infoRequired": 1,
      "infoPreview": null
    }
  ]
}

export default {
  'post|/mock/list': demoList,
  'post|/mock/workflow/enrollment/infoMetadata/list': infoList
}